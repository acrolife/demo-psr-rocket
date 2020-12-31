<template>
  <!-- H2 & Card section -->
  <div class="bg-white">
    <!-- h2 -->
    <h2
      class="w-full px-2 pt-10 mb-2 text-4xl font-bold leading-tight text-center text-gray-800 xl:text-5xl"
    >
      <slot name="title"></slot>
    </h2>

    <!-- Underline title -->
    <div class="w-full mb-4">
      <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
    </div>

    <!--  cards  -->
    <ul
      class="sm:w-2/3 md:w-full m-auto p-4 max-w-screen-xl md:p-12 md:grid md:grid-cols-2 lg:grid-cols-3"
    >
      <li
        v-for="(item, index) in sortedPageServices"
        :key="index"
      >
        <div>
          <div class="flex">
            <!-- <div class="flex flex-col md:flex-row"> -->

            <g-link
              :to="
                `/nos-domaines-dexpertise/${
                  cardGridMenuSlug.edges[orderMap[index][0]].node.slug
                }`
              "
            >
            <div
              class="flex flex-col h-128 md:h-144 shadow-lg hover:shadow-2xl border rounded-lg m-2"
            >
              <div class="flex justify-center px-10 mt-10 h-16">
                <h2
                  class="text-lg uppercase text-gray-700 font-bold md:text-xl"
                >
                  {{ item.title }}
                </h2>
              </div>
              <div class="flex justify-center md:justify-start">
                <g-image
                  class="flex rounded-full h-32 w-32 bg-cover bg-center md:ml-10 my-6 ssm:h-44 ssm:w-44"
                  :src="item.picture"
                />
              </div>

              <div
                class="text-lg text-gray-700 md:text-xl px-10"
                style=""
              >
                <!-- <img
                  alt="quote"
                  class="float-left mr-1"
                  src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg"
                /> -->
                {{
                  cardGridMenuData2.acf.repeaterCard[
                    index
                  ].repeaterParagraph[0].htmlParagraph.slice(3, -5)
                }}
              </div>
            </div>
            </g-link>
          </div>
          <!-- <div class="flex md:justify-end w-full md:w-1/3 -mt-5"></div> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
    return {
      orderMap: []
    };
  },
  props: {
    cardGridMenuSlug: {
      type: Object,
      required: true
    },
    cardGridMenuData1: {
      type: Object,
      required: true
    },
    cardGridMenuData2: {
      type: Object,
      required: true
    }
  },
      mounted() {
      // creating an array mapping the index with the order (set by the site manager, from node.acf.order)
      const orderArray = this.$page.services.edges.map(item => Number(item.node.acf.order))
      const indexArray = Array.from(Array(orderArray.length).keys())
      const indexAndOrderArray = indexArray.map((item => [item, orderArray[item]]))
      const orderedIndexAndOrderArray = indexAndOrderArray.sort((s1, s2) => s1[1] - s2[1])
      this.orderMap = orderedIndexAndOrderArray
  },
  computed: {
    // Have to create a new matrix, otherwise the original get sorted (with .sort() method)
    sortedPageServices(){
    return this.orderMap.map( item => this.cardGridMenuData1.acf.repeaterCard[item[0]])
    },
  }, 
};
</script>