<template>
  <!-- Pre-footer section -->
  <section class="gradient">
    <!-- Change the colour #f8fafc to match the previous section colour -->

    <SvgWavePreFooter />

    <div
      class="container mx-auto text-center text-white pt-6 pb-16 mb-4 md:mb-12"
    >
      <div>
        <h1
          class="w-full my-2 text-3xl md:text-5xl font-bold leading-tight text-center text-white"
        >
          <slot name="main-text"></slot>
        </h1>

        <h3 class="my-4 text-2xl md:text-3xl leading-tight">
          <slot name="secondary-text"></slot>
        </h3>

        <button
          class="mx-auto lg:mx-0 white-psr bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        >
          <slot name="cta-text"></slot>
        </button>
        <div class="pb-10" v-if="$slots.titleLeft"></div>
      </div>

      <!-- Second subsection -->
      <div
        v-if="$slots.titleLeft"
        class="container px-3 md:px-6 lg:px-10 mx-auto flex flex-col md:flex-row"
      >
        <!--Left Col-->
        <div class="flex-col w-full md:w-1/2">
          <h3
            class="mb-4 mx-auto text-2xl font-bold leading-tight md:lg-6 md:ml-0 md:text-3xl"
          >
            <slot name="titleLeft"></slot>
            <div class="w-full mb-4">
              <div
                v-if="$slots.titleLeft"
                class="h-1 mx-auto bg-white w-1/3 opacity-50 my-0 py-0 mt-1 rounded"
              ></div>
            </div>
          </h3>
          <div
            class="flex rounded bg-white bg-opacity-25 my-4 mx-4 sm:mx-32 md:mx-12 pt-4 md:pl-6"
          >
            <div class="flex-1 md:flex-none"></div>

            <div
              class="flex flex-col h-40 lg:h-48 md:text-left text-white lg:text-lg"
            >
              <div class="flex-1 md:flex-none"></div>
              <slot name="divLeft"></slot>
              <div class="flex-1 md:flex-none"></div>
            </div>
            <div class="flex-1 md:flex-none"></div>
          </div>
        </div>
        <!--Right Col-->
        <div class="flex-col w-full md:w-1/2">
          <h3
            class="mb-4 mx-auto text-2xl font-bold leading-tight md:lg-6 md:ml-0 md:text-3xl"
          >
            <slot name="titleRight"></slot>
            <div class="w-full mb-4">
              <div
                v-if="$slots.titleRight"
                class="h-1 mx-auto bg-white w-1/3 opacity-50 my-0 py-0 mt-1 rounded"
              ></div>
            </div>
          </h3>
          <div
            class="flex rounded bg-white bg-opacity-25 my-4 mx-4 sm:mx-32 md:mx-12 pt-4 md:pl-6"
          >
            <div class="flex-1 md:flex-none"></div>
            <div
              class="flex flex-col h-40 lg:h-48 md:text-left text-white lg:text-lg"
            >
              <div class="flex-1 md:flex-none"></div>
              <slot name="divRight"></slot>
              <div class="flex-1 md:flex-none"></div>
            </div>
            <div class="flex-1 md:flex-none"></div>
          </div>
        </div>
        <!-- </div> -->
      </div>
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
