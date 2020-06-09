<template>
  <!-- H2 & Card section -->
  <div class="bg-white pb-10">
    <!-- h2 -->
    <h2
      class="w-full px-2 pt-10 mb-2 text-4xl font-bold leading-tight text-center text-gray-800"
    >
      <slot name="title"></slot>
    </h2>

    <!-- Underline title -->
    <div class="w-full mb-4">
      <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
    </div>

    <!--  cards  -->
    <ul>
      <div
        class="sm:mx-36 md:grid md:grid-cols-2 md:gap-3 md:mx-8 lg:grid-cols-3 lg:gap-1 lg:mx-4 xl:mx-16 xl:gap-2 xl:max-w-screen-xl xl:mx-auto"
      >
        <li v-for="(item, index) in cardGridMenuOthersData" :key="index">
          <div class="container mx-auto">
            <!-- 2 Rows Columns of Cards -->
            <g-link :to="`/${cardGridMenuOthersSlug}/${item.node.slug}`">
              <div class="p-5">
                <div
                  class="flex h-64 bg-cover bg-center border-r border-t border-l border-gray-400 rounded-t text-center overflow-hidden shadow-lg"
                  :style="{
                    backgroundImage: 'url(' + item.node.acf.topImage + ')'
                  }"
                ></div>

                <div
                  class="flex h-28 border-r border-b border-l border-gray-400 bg-white rounded-b p-4 leading-normal shadow-lg border-gray-400 justify-center"
                >
                  <div class="flex flex-col mb-">
                    <div
                      class="text-gray-900 font-bold text-xl text-center h-16"
                    >
                      {{ item.node.title }}
                    </div>
                    <!-- <div
                            v-html="
                              item.node.acf.repeaterCard[0].repeaterParagraph[0]
                                .htmlParagraph
                            "
                            class="overflow-auto py-2 h-32 lg:text-lg lg:h-48"
                          ></div> -->
                    <!-- <p class="mt-6 lg:text-lg">En savoir plus</p> -->
                    <button
                      class="text-center mx-auto green-psr text-white font-bold rounded-full mt-3 mb-3 py-3 px-6 shadow-xl"
                    >
                      <slot name="cta-text"></slot>
                    </button>
                  </div>
                </div>
              </div>
            </g-link>
            <!-- END 2 Rows Columns of Cards -->
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    cardGridMenuOthersSlug: {
      type: String,
      required: true
    },
    cardGridMenuOthersData: {
      type: Object,
      required: true
    }
  }
};
</script>
</template>

<script>
export default {
  props: {
    cardGridMenuOthersSlug: {
      type: String,
      required: true
    },
    cardGridMenuOthersData: {
      type: Array,
      required: true
    },
  }
};
</script>