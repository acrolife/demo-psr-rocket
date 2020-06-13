<template>
  <div>
    <NavBar />
    <!-- <slot /> -->
    <div
      class="leading-normal tracking-normal pt-12"
      style="font-family: 'Source Sans Pro', sans-serif;"
    >
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer
  }
};
</script>