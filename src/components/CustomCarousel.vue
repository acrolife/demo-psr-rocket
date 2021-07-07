<!-- https://www.npmjs.com/package/vue-agile -->
<template>
  <Carousel :options="myOptions">
    <slot></slot>
    <template slot="caption">
      <slot name="caption"></slot>
    </template>
    <template slot="prevButton">
      <div class="p-3 ml-2 rounded bg-white opacity-50">
        <
      </div>
    </template>
    <template slot="nextButton">
      <div class="p-3 mr-2 rounded bg-white opacity-50">
        >
      </div>
    </template>
  </Carousel>
</template>

<script>
import { VueAgile } from "~/custom-modules/vue-agile";

export default {
  data() {
    return {
      myOptions: {
        autoplay: true,
        pauseOnHover: true,
        speed: 1000
      }
    };
  },
  components: {
    Carousel: VueAgile
  }
};
</script>
