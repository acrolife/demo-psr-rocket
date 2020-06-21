<template>
  <div>
    <!-- <div v-html="review.acf.pSelecto"></div> -->

    <div class="container mx-auto">
      <!-- 2 Rows Columns of Cards -->
      <div class="p-5">
        <div
          class="flex h-80 bg-cover bg-center border-r border-t border-l border-gray-400 rounded-t text-center overflow-hidden shadow-lg"
          :style="{
            backgroundImage: 'url(' + review.acf.picture + ')'
          }"
        ></div>

        <div
          class="flex border-r border-b border-l border-gray-400 bg-white rounded-b p-4 leading-normal shadow-lg border-gray-400 justify-center"
        >
          <div class="flex flex-col mb-2">
            <div class="text-gray-900 font-bold text-xl text-center h-16">
              {{ review.acf.title }}
            </div>

            <!-- <div :class="shortOrCardClass"> -->
            <div :class="'h-64'">
              <!-- <ul>
                <li
                  v-for="(pwcRepeaterContent, index) in review.acf
                    .pwcRepeaterContent"
                  :key="index"
                > -->
                  <img
                    alt="quote"
                    class="float-left mr-1"
                    src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg"
                  />
                  <div
                    class="italic"
                    v-html="review.acf.review"
                  ></div>
                  <!-- <br />
                </li>
              </ul> -->
            </div>

            <div class="flex items-center">
              <div>
                <div
                  class="w-16 h-16 p-1 rounded-full mr-2 bg-cover bg-center shadow-lg border"
                  :style="{
                    backgroundImage: 'url(' + review.acf.avatar + ')'
                  }"
                ></div>
              </div>
              <div class="text-sm">
                <p class="text-gray-800 italic leading-none">
                  {{ `${review.acf.name}, ${review.acf.relation} ${review.acf.structure}` }}
                </p>                
                <p v-if="review.acf.date" class="text-gray-600"> {{ review.acf.date.split(",")[0] }} </p>
              </div>
            </div>

            <!-- 
                  <button
                    class="text-center mx-auto green-psr text-white font-bold rounded-full mt-3 mb-3 py-3 px-6 shadow-xl"
                  >
                    <slot name="cta-text"></slot>
                  </button> -->
          </div>
        </div>
      </div>
      <!-- END 2 Rows Columns of Cards -->
    </div>


  </div>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
      required: true
    }
  }
};
</script>


