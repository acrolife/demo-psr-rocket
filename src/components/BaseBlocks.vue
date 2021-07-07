  <template>
  <!-- Section tiles post instance -->
  <div class="bg-white pt-10 pb-4">
    <div class="m-auto p-2 max-w-screen-xl md:p-10">
      <h2
        class="w-full my-2 text-3xl md:text-4xl font-bold leading-tight text-center text-gray-800 xl:text-5xl"
        v-html="title"
      ></h2>

      <!-- Underline for h1 -->
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
      </div>

      <!-- Here start the tiles section -->
      <ul>
        <li v-for="(card, index) in repeaterCard" :key="index">
          <div v-if="index % 2">
            <div class="grid-cols-1">
              <div class="flex flex-wrap py-4 mt-6">
                <div class="w-full sm:w-1/2 px-4 md:pl-6 md:pr-3">
                  <h3
                    class="text-2xl md:text-3xl text-gray-800 font-bold leading-none mb-3 xl:text-4xl"
                  >
                    {{ card.title }}
                  </h3>

                  <div class="text-gray-600 mb-8">
                    <ul>
                      <li
                        v-for="(rparag, index2) in card.repeaterParagraph"
                        :key="index2"
                      >
                        <div
                          v-html="rparag.htmlParagraph"
                          class="text-gray-700 text-base text-justify xl:text-xl"
                        ></div>
                        <div
                          v-if="card.repeaterParagraph[index2 + 1]"
                          class="py-2"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="w-full m-auto mt-0 sm:w-1/2 px-4 md:pl-3 md:pr-6">
                  <g-image
                    class="w-full object-contains"
                    :src="card.picture"
                    v-if="card.picture"
                  />

                  <component
                    v-if="!card.picture && svgArray"
                    :is="'Svg' + svgArray[index]"
                    class="flex w-full align-center h-48 md:h-64 p-5"
                    :class="noSvgArray"
                  ></component>
                </div>
              </div>
            </div>
          </div>

          <div v-else>
            <div class="grid-cols-1">
              <div
                class="flex flex-wrap flex-col-reverse sm:flex-row py-4 my-6"
              >
                <div class="w-full m-auto mt-0 sm:w-1/2 px-4 md:pl-6 md:pr-3">
                  <g-image
                    class="w-full object-contains object-top"
                    :src="card.picture"
                    v-if="card.picture"
                  />

                  <component
                    v-if="!card.picture && svgArray"
                    :is="'Svg' + svgArray[index]"
                    class="flex w-full align-center h-48 md:h-64 p-5"
                    :class="noSvgArray"
                  ></component>
                </div>

                <div class="w-full sm:w-1/2 px-4 md:pr-6 md:pl-3">
                  <div class="align-middle">
                    <h3
                      class="text-2xl md:text-3xl text-gray-800 font-bold leading-none mb-3 xl:text-4xl"
                    >
                      {{ card.title }}
                    </h3>
                    <div class="text-gray-600 mb-8">
                      <ul>
                        <li
                          v-for="(rparag, index2) in card.repeaterParagraph"
                          :key="index2"
                        >
                          <div
                            v-html="rparag.htmlParagraph"
                            class="text-gray-700 text-base text-justify xl:text-xl"
                          ></div>
                          <div
                            v-if="card.repeaterParagraph[index2 + 1]"
                            class="py-2"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import Svg1 from "~/components/svg/undraw_book_lover_mkck.vue";
import Svg2 from "~/components/svg/undraw_build_your__home_csh6.vue";
import Svg3 from "~/components/svg/undraw_building_blocks_n0nc.vue";
import Svg4 from "~/components/svg/undraw_taking_notes_tjaf.vue";
import Svg5 from "~/components/svg/undraw_finance_0bdk.vue";
import Svg6 from "~/components/svg/undraw_house_searching_n8mp.vue";
import Svg7 from "~/components/svg/undraw_online_articles_79ff.vue";
import Svg8 from "~/components/svg/undraw_reading_list_4boi.vue";
import Svg9 from "~/components/svg/undraw_reading_time_gvg0.vue";
import Svg10 from "~/components/svg/undraw_setup_wizard_r6mr.vue";
import Svg11 from "~/components/svg/undraw_at_home_octe.vue";
import Svg12 from "~/components/svg/undraw_book_reading_kx9s.vue";

export default {
  components: {
    Svg1,
    Svg2,
    Svg3,
    Svg4,
    Svg5,
    Svg6,
    Svg7,
    Svg8,
    Svg9,
    Svg10,
    Svg11,
    Svg12
  },
  props: {
    title: {
      type: String,
      required: true
    },
    repeaterCard: {
      type: Array,
      required: true
    },
    svgArray: {
      type: Array,
      required: false
    }
  },
  computed: {
    noSvgArray() {
      return this.svgArray.length ? "display: block" : "display: none";
    }
  }
};
</script>