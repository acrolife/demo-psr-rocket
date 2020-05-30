<template>
  <div class="my-10">
    <ul>
      <div class="md:grid md:grid-cols-3 xl:grid-cols-4 md:mx-4">
        <li v-for="(item, index) in cardGridData" :key="index">
          <div class="container mx-auto">
            <!-- 2 Rows Columns of Cards -->

            <g-link :to="`/${cardGridSlug}/${item.node.slug}`">
              <div class="p-4 md:p-6">
                <div
                  class="flex h-64 bg-cover bg-center border-r border-t border-l border-gray-400 rounded-t text-center overflow-hidden shadow-lg"
                  :style="{                   
                     backgroundImage: 'url(' + item.node.acf.topImage + ')'
                  }"
                ></div>

                <div
                  class="flex h-28 border-r border-b border-l border-gray-400 bg-white rounded-b p-4 leading-normal shadow-lg border-gray-400"
                >
                  <div class="flex flex-col mb-0 h-32">
                    <div class="text-gray-900 font-bold text-xl text-center">
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
    cardGridSlug: {
      type: String,
      required: true
    },
    cardGridData: {
      type: Array,
      required: true
    }
  }
};
</script>