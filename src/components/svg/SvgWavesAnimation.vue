<template>
  <div id="div_waves_wrapper" class="bg-white">
    <svg
      id="svg_waves"
      width="100%"
      :height="svgHeight"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          v-for="(wave, i) in waves"
          :key="i"
          :id="wave.id"
          stroke="rgb(74,184,177)"
          stroke-width="1.5"
          :stroke-opacity="wave.opacity"
          fill="none"
          :d="wave.pathData"
        ></path>
      </defs>
      <use
        v-for="(wave, i) in waves"
        :key="i"
        :xlink:href="wave.href"
        x="0"
        y="0"
      >
        <animate
          attributeName="x"
          from="0"
          :to="wave.animateToX"
          :dur="wave.animationDuration"
          repeatCount="indefinite"
        ></animate>
      </use>
    </svg>
  </div>
</template>

<script>
export default {
  // props: {
  //   svgHeight: Number
  //   // svgh: {
  //   //   type: Number,
  //     // default: 100
  //     // } //  SVG height
  // },
  data() {
    return {
      svgWidth: 0, //  SVG width
      svgHeight: 150, //  SVG height
      centreY: 0, //  Y coord of vertical centre of SVG
      waves: [], //  Array of waves
      wavesCount: 10 //  Number of waves in animation
    };
  },
  // computed: {
  //   svgHeight () {
  //     return this.svgHeight = this.svgh
  //   } 
  // },
  methods: {
    rnd: function(min, max) {
      return min + Math.random() * (max - min);
    },
    randomFrequency: function() {
      return 3 / (Math.random(1, 8) + Math.random(3, 8) + Math.random(2, 5));
    },
    partlyRandomFrequency: function(index) {
      /*
        The frequency of a wave is how many cycles fit into the SVG's width.
        So a wave with frequency == 4 will go up and down 4 times across the whole SVG.
        
        I want to guarantee some high-frequency waves and some low-frequency, so I'm going to
        generate a random number for the frequency of each wave - but the range will be different
        depending on the value of index passed to the function.
        
        If index == 0, range is between 1.1 and 2.6
        If index == 9, range is between 4.5 and 6
        
        So... the numbers are somewhat random, but there's always some highish-frequency waves,
        and some lowish-frequency waves
      */
      const n = index + 1;
      const min = 0.6 + n * 0.4;
      const max = 2 + n * 0.4;
      return this.rnd(min, max); //  For 10 waves: min 0.5, max 5
    },
    amplitude: function(frequency) {
      return (
        (this.rnd(this.svgHeight / 12, this.svgHeight / 6) / frequency) * 4
      );
    },
    opacity: function(frequency) {
      const wavelength = 1 / frequency;

      /*
        Overall opacity is a 50-50 blend of...
          A function of the wavelength: long waves are stronger, short waves are fainter
          A random number between 0.3 and 1
      */
      const wavelengthOpacity = Math.pow(wavelength / 2, 1.5); //  I messed around with formulas and liked this
      const randomOpacity = this.rnd(0.3, 1);

      const blendedOpacity = (wavelengthOpacity + randomOpacity) / 2; // Calculate average (mean) of both
      return blendedOpacity.toFixed(2); // Rounded to 2 decimal places
    },
    animateToX: function(frequency) {
      /*
        Each wave's SVG path will be CSS-animated so that its root X position starts at 0, and ends
        off to the left of the screen by a number of pixels equal to exactly one cycle's width.
        
        Then the animation loops, and because it moved exactly 1 cycle, we don't spot the join.
      */
      return 0 - this.svgWidth / frequency;
    },
    randomDuration: function() {
      //  Just a random number of seconds between limits that... look nice
      return Math.floor(this.rnd(8, 16)) + "s";
    },
    cycleSVGPath: function(frequency, amplitude, cycleIndex) {
      /*
        Here I'm compiling part of a SVG path, defined as two cubic Bezier curves - one that approximates the upward 
        portion of a wave cycle, and a second that approximates the downward portion of the cycle.
        
        So - we're not actually using sine maths here - the Bezier curves look quite a lot like sine waves.
        
        I've forgotten exactly where I learnt how to do this, but I think it's something like a simplified version 
        of this code: https://codepen.io/Sphinxxxx/pen/LpzNzb
      */

      const centreY = this.centreY;
      const minY = centreY - amplitude;
      const maxY = centreY + amplitude;

      const wavelength = 1 / frequency; // A wave with f == 4 has wavelength of 0.25 * SVG width
      const wavelengthPixels = wavelength * this.svgWidth; // Wavelength... in pixels
      const cycleStartXPixels = wavelengthPixels * cycleIndex; // start position of this cycle in pixels

      //  X coordinate of a Bezier control handle, in pixels
      const cycleX = fraction =>
        fraction * wavelengthPixels + cycleStartXPixels;

      return `C ${cycleX(0.2)} ${minY} ${cycleX(0.3)} ${minY} ${cycleX(
        0.5
      )} ${centreY} C ${cycleX(0.7)} ${maxY} ${cycleX(0.8)} ${maxY} ${cycleX(
        1
      )} ${centreY}`;
    },
    waveSVGPath: function(frequency) {
      /*
        To animate the wave, we need the wave's SVG path to contain at least one more cycle than can be 
        displayed in the SVG - so that when we animate it moving to the left, the extra portion of the 
        path is revealed sliding in from the right.
        
        cycleCount is that number
      */
      const cycleCount = Math.ceil(frequency) + 1;
      const amplitude = this.amplitude(frequency);

      /*
        Here's where we compile an array containing parts of the SVG path; each part is a single cycle
        of the wave.
      */
      let cyclesSVGPaths = [];
      for (let cycleIndex = 0; cycleIndex < cycleCount; cycleIndex++) {
        cyclesSVGPaths.push(
          this.cycleSVGPath(frequency, amplitude, cycleIndex)
        );
      }

      /*
        And here's where we compile the whole path:
          We start with a "M 0 [this.centreY] " which means "move to a point on the left-hand side of the 
          SVG, half-way between the top and bottom".
          
          Then, we just join together the path data for the cycles, separating the cycles with spaces.
          
          So the full path will go something like:
          
          1: Move to 0, centreY
          2: Draw a Bezier curve up
          3: Draw a Bezier curve down
          Repeat (2) and (3) for as many cycles as required
      */
      return `M 0 ${this.centreY} ${cyclesSVGPaths.join(" ")}`;
    },
    compileWaves() {
      /*
        Initialise a couple of parameters:
          this.svgHeight is the height of the SVG tag
          this.centreY is the vertical midpoint of the SVG tag, in pixels
      */
      this.svgWidth = document.documentElement.clientWidth;
      this.centreY = Math.ceil(this.svgHeight / 2);

      /*
        Compile this.waves: push onto the array a number of objects, each of which has properties
        that define the parameters of one wave.
      */
      this.waves = [];
      let frequency;

      for (let index = 0; index < this.wavesCount; index++) {
        frequency = this.partlyRandomFrequency(index);
        this.waves.push({
          id: `wave_${index}`,
          href: `#wave_${index}`,
          pathData: this.waveSVGPath(frequency),
          opacity: this.opacity(frequency),
          animateToX: this.animateToX(frequency),
          animationDuration: this.randomDuration()
        });
      }
    }
  },
  created: function() {
    //  Compile waves
    this.compileWaves();
    //  Recompile waves parameters if window is resized
    window.addEventListener("resize", this.compileWaves);
  }
};
</script>