<template>
  <div>
    <nav
      class="w-full z-30 top-0 text-black shadow fixed z-50"
      :class="navbarColorClass"
    >
      <div
        class="container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 lg:my-2"
      >
        <div class="w-full flex flex-cols justify-between lg:w-auto">
          <div class="pl-4 md:flex items-center">
            <div class="flex">
              <g-link to="/" :class="navbarTitleColorClass">
                <g-image
                  src="https://psr2222.creativityquarks.com/wp-content/uploads/2020/05/logo-prestations-services-renovations-10.png"
                  class="h-6 w-auto mx-3 mr-5 mb-1 lg:h-8"
                >
                </g-image>
              </g-link>
              <g-link to="/" :class="navbarTitleColorClass">
                <div
                  class="text-white no-underline text-gray-700 green-psr-menu
              hover:text-gray-100 font-bold hover:px-5 text-xl lg:text-2xl"
                  :class="'polygon-navbar'"
                >
                  PS-Rénovation
                </div>
              </g-link>

     
              
            </div>
          </div>

          <div class="block lg:hidden pr-4">
            <button
              class="flex items-center p-1 hover:text-gray-900 mr-6"
              :class="menuSvgColor"
              @click="toggleNav"
            >
              <svg
                class="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>

        <div
          class="mt-2 mr-2 md:mr-4 bg-white p-4 z-20 lg:flex lg:items-center lg:w-auto lg:block lg:mt-0 lg:bg-transparent lg:p-0"
          :class="isExpandedClass"
        >
          <ul
            class="list-reset justify-end flex-1 items-center mb-2 lg:flex lg:mb-0 xxl:text-xl"
          >
            <li
              class="mr-0"
              @click="setActive('Home')"
              :class="navItemClass('Home')"
            >
              <g-link
                to="/"
                class="inline-block no-underline green-psr-menu hover:text-gray-100 hover:font-bold py-2 px-6"
                :class="'polygon-navbar'"
                >Home</g-link
              >
            </li>
            <li
              class="mr-0"
              @click="setActive('Services')"
              :class="navItemClass('Services')"
            >
              <g-link
                to="/services"
                class="inline-block no-underline green-psr-menu hover:text-gray-100 hover:font-bold py-2 px-6"
                :class="'polygon-navbar'"
                >Services</g-link
              >
            </li>
            <li
              class="mr-0"
              @click="setActive('Réalisations')"
              :class="navItemClass('Réalisations')"
            >
              <g-link
                to="/realisations/"
                class="inline-block no-underline green-psr-menu hover:text-gray-100 hover:font-bold py-2 px-6"
                :class="'polygon-navbar'"
                >Réalisations</g-link
              >
            </li>
            <li
              class="mr-0"
              @click="setActive('Blog')"
              :class="navItemClass('Blog')"
            >
              <g-link
                to="/blog/"
                class="inline-block no-underline green-psr-menu hover:text-gray-100 hover:font-bold py-2 px-6"
                :class="'polygon-navbar'"
                >Blog</g-link
              >
            </li>
            <li
              class="mr-0"
              @click="setActive('Lentreprise')"
              :class="navItemClass('Lentreprise')"
            >
              <g-link
                to="/notre-entreprise/"
                class="inline-block no-underline green-psr-menu hover:text-gray-100 hover:font-bold py-2 px-6"
                :class="'polygon-navbar'"
                >L'entreprise</g-link
              >
            </li>
          </ul>
          <div class="flex md:hidden">
            <g-link
              class="mx-auto white-psr text-gray-800 font-bold rounded-full py-4  px-8 shadow opacity-75 lg:mx-0 lg:mt-0 xxl:text-xl"
              to="tel:06 37 77 75 32"
            >
              Appeler
            </g-link>
          </div>
        </div>
      </div>

      <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
    <!-- <div :class="paddingDependsOnEnv">
      {{
        "paddingDependsOnEnv: " + paddingDependsOnEnv + ", after comes the body"
      }}
    </div> -->
  </div>
</template>

<script>
import { mapState, mapAction } from "vuex";
export default {
  name: "NavBar",
  // data() {
  //   return {
      //     // mode : "DEV", //simulate .env, as I can't make it work
      //     mode: "PROD" //simulate .env, as I can't make it work
      //     // process.env.GS_ENV === "DEV
  //     test: test
  //   };
  // },
  beforeMount() {
    // // Uncomment this to make the navbar color reactive + handleScroll()
    this.$store.commit("setColor0ther");
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    ...mapState({
      isExpanded: state => state.expandNavBar,
      colorNavBarBin: state => state.colorNavBarBin,
      navItemStored: state => state.navItem
    }),
    isExpandedClass() {
      return this.isExpanded ? "block" : "hidden";
    },
    navbarColorClass() {
      setTimeout(() => {}, 100);
      return this.colorNavBarBin ? "bg-gray-100 text-gray-700" : "bg-white";
    },
    navbarTitleColorClass() {
      return this.colorNavBarBin ? "text-gray-700" : "bg-white text-gray-700";
    },
    menuSvgColor() {
      return this.colorNavBarBin ? "" : "text-teal-500";
    }
    // paddingDependsOnEnv() {
    //   // console.log('mode = ' + process.env.GS_ENV)
    //   console.log("mode (data, not .env): " + this.mode);
    //   return this.mode === "DEV" ? "pt-30" : "pt-20";
    // }
  },
  methods: {
    toggleNav() {
      this.$store.commit("setColorWhite");
      this.$store.commit("toggleMMenu");
    },
    setActive(navItem) {
      this.$store.commit("changeNavItem", navItem);
      this.$store.commit("toggleMMenu");
    },
    navItemClass(navItem) {
      return navItem === this.navItemStored ? "font-bold" : "";
    },
    // // Uncomment this to make the navbar color reactive + comment out the next handleScroll()
    handleScroll(event) {
      return window.scrollY >= 10
        ? this.$store.commit("setColorWhite")
        : this.isExpanded
        ? this.$store.commit("toggleMMenu")
        : this.$store.commit("setColor0ther");
    }
    // handleScroll(event) {
    //   return window.scrollY >= 10
    //   ? this.isExpanded ? this.$store.commit("toggleMMenu") : null : null
    // }
  }
};
</script>

<style>
.polygon-navbar:hover {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  -webkit-clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
  clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
}
</style>

<!--
           <g-link to="/" :class="navbarTitleColorClass">
                <div
                  class="text-white no-underline hover:text-teal-600 font-bold text-xl lg:text-2xl"
                  :class="navbarTitleColorClass"
                >
                  PS-Rénovation
                </div>
              </g-link>
              -->

<!--
          <g-link
                to="/services"
                class="inline-block no-underline green-psr-menu hover:text-gray-300 hover:font-bold py-2 px-6"
                :class="'polygon-navbar'"
                >Services</g-link
              >
-->

<!--
                        <ul
            class="list-reset justify-end flex-1 items-center mb-2 lg:flex lg:mb-0 xxl:text-xl"
          >
            <li
              class="mr-3"
              @click="setActive('Home')"
              :class="navItemClass('Home')"
            >
              <g-link
                to="/"
                class="inline-block no-underline hover:text-teal-500 py-2 px-4"
                >Home</g-link
              >
            </li>
            <li
              class="mr-3"
              @click="setActive('Services')"
              :class="navItemClass('Services')"
            >
              <g-link
                to="/services"
                class="inline-block no-underline hover:text-teal-500 py-2 px-4"
                >Services</g-link
              >
            </li>
            <li
              class="mr-3"
              @click="setActive('Réalisations')"
              :class="navItemClass('Réalisations')"
            >
              <g-link
                to="/realisations/"
                class="inline-block no-underline hover:text-teal-500 py-2 px-4"
                >Réalisations</g-link
              >
            </li>
            <li
              class="mr-3"
              @click="setActive('Blog')"
              :class="navItemClass('Blog')"
            >
              <g-link
                to="/blog/"
                class="inline-block no-underline hover:text-teal-600 py-2 px-4"
                >Blog</g-link
              >
            </li>
            <li
              class="mr-3"
              @click="setActive('Lentreprise')"
              :class="navItemClass('Lentreprise')"
            >
              <g-link
                to="/notre-entreprise/"
                class="inline-block no-underline hover:text-teal-600 py-2 px-4"
                >L'entreprise</g-link
              >
            </li>
          </ul>
          -->