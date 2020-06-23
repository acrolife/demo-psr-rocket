<template>
  <section class="gradient">
    <div class="pt-12 pb-16 text-white">
      <!-- <div
        class="bg-cover opacity-25"
        :style="{
          backgroundImage: 'url(' + service.acf.topImage + ')'
        }"
      > -->
      <div
        class="container px-3 md:px-6 lg:px-10 mx-auto flex flex-wrap flex-col md:flex-row items-center"
      >
        <!--Left Col-->
        <div
          class="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left"
        >
          <!-- <div
          class="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left"
        > -->
          <!-- <p class="uppercase tracking-loose w-full">
            
          </p> -->
          <h1
            class="mb-4 mx-auto mx-auto text-4xl font-bold leading-tight md:lg-6 md:ml-0 md:text-5xl"
          >
            <slot name="repeatable-title-1"></slot>
            <!-- {{ service.acf.repeaterTitle[0].title }} -->
          </h1>
          <p class="leading-normal text-xl mb-8 w-full md:w-2/3">
            <slot name="repeatable-title-2"></slot>
            <!-- {{ service.acf.repeaterTitle[1].title }} -->
          </p>

          <a
            href="/lentreprise#contact"
            class="mx-auto white-psr text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg md:mx-0"
            v-if="!noCtaButton"
          >
            <slot name="cta-text"></slot>
            <!-- Demander un devis -->
          </a>
        </div>
        <!--Right Col-->
        <div class="w-full h-auto md:w-2/5 py-6 text-center">
          <slot name="form"></slot>
        </div>
        <!-- </div> -->
      </div>
    </div>

    <!-- Wave section header -->
    <SvgWavePostHeader />
  </section>
</template>

<script>
import SvgWavePostHeader from "~/components/svg/SvgWavePostHeader.vue";
export default {
  props: {
    noCtaButton: {
      type: Boolean,
      require: false
    }
  },
  components: {
    SvgWavePostHeader
  }
};
</script>
