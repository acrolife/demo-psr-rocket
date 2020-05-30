<template>
  <!-- Pre-footer section -->
  <section class="gradient">
    <!-- Change the colour #f8fafc to match the previous section colour -->

    <SvgWavePreFooter />

    <div class="container mx-auto text-center text-white py-6 mb-4 md:mb-12">
      <h1
        class="w-full my-2 text-3xl md:text-5xl font-bold leading-tight text-center text-white"
      >
        <slot name="main-text"></slot>
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>

      <h3 class="my-4 text-2xl md:text-3xl leading-tight">
        <slot name="secondary-text"></slot>
      </h3>

      <button
        class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
      >
        <slot name="cta-text"></slot>
      </button>
    </div>
  </section>
</template>

<script>
import SvgWavePreFooter from "~/components/svg/SvgWavePreFooter.vue";
export default {
  components: {
    SvgWavePreFooter
  }
};
</script>
