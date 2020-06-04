<template>
  <div class="my-10">
    <!-- <div class="flex"> -->
    <!-- <div class="xl:w-12 xxl:w-48 3xl:w-64"></div>   -->
    <!-- <div class="flex-1 mx-2 sm:mx-24 mid:mx-36 md:mx-6 lg:mx-4"> -->
      <ul>
        <div class="ssm:mx-12 sm:mx-32 mid:mx-40 md:grid md:grid-cols-2 md:gap-6 md:mx-8 mmd:gap-12 mmd:mx-16 lg:grid-cols-3 lg:gap-1 lg:mx-4 xl:mx-16 xxl:gap-3 xxl:mx-40">        
        <!-- <div
          class="md:grid md:grid-cols-2 md:gap-2 mmd:gap-1 lg:grid-cols-3 xxl:gap-10"
        > -->
          <li v-for="(item, index) in cardGridData" :key="index">
            <div class="container mx-auto">
              <!-- 2 Rows Columns of Cards -->
              <!-- <div class="lg:px-4"></div> -->
              <g-link :to="`/${cardGridSlug}/${item.node.slug}`">
                <div class="p-4">
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
    <!-- </div> -->
    <!-- <div class="xl:w-12 xxl:w-48 3xl:w-64"></div>  -->
  </div>
  <!-- </div> -->
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