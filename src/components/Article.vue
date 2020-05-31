<template>
  <div>
    <!--Hero slots section -->
    <SlotTopSection>
      <template slot="repeatable-title-1">
        Le blog de PSR
      </template>
      <template slot="repeatable-title-2">
        Notre experience partagée
      </template>
      <template slot="cta-text">
        Suggérer un article
      </template>
      <template slot="form">
        <component
          :is="'Svg' + svgArray[Math.ceil(Math.random(nbOfSvg))]"
          class="flex w-full align-center h-48 md:h-64 p-5"
        ></component>
      </template>
    </SlotTopSection>

    <section>
      <div class="flex mt-12 md:mt-10">
        <div class="flex-1 md:flex-none md:pl-10"></div>
        <div
          class="flex flex-col mx-auto text-gray-700 border rounded bg-teal-200 shadow-lg px-2 px-4 py-2 md:py-4"
        >
          <div class="flex mx-auto md:mx-0"> <p class="pr-1">Posté par</p><p class="italic"> {{ post.author.name }},</p> </div>
          <p class="">
            le {{ post.date.slice(8, 10) }}
            {{ months[parseInt(post.date.slice(5, 8))] }}
            {{ post.date.slice(0, 4) }}, à {{ post.date.slice(11, 16) }}
          </p>
        </div>
        <div class="flex-1"></div>
      </div>
    </section>

    <!-- Section tiles post instance -->
    <section class="bg-white border-b pt-8 pb-4">
      <div class="container max-w-5xl mx-auto xl:max-w-6xl">
        <h2
          class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800 xl:text-5xl"
          v-html="post.title"
        ></h2>

        <!-- Underline for h1 -->
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
        </div>

        <!-- Here start the tiles section -->
        <ul>
          <li v-for="(card, index) in post.acf.repeaterCard" :key="index">
            <div v-if="index % 2">
              <div class="grid-cols-1">
                <div class="flex flex-wrap py-4 mt-6">
                  <div class="w-full sm:w-1/2 px-4 md:pl-6 md:pr-3">
                    <h3
                      class="text-3xl text-gray-800 font-bold leading-none mb-3 xl:text-4xl"
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
                      v-else
                      :is="'Svg' + svgArray[index]"
                      class="flex w-full align-center h-48 md:h-64 p-5"
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
                      v-else
                      :is="'Svg' + svgArray[index]"
                      class="flex w-full align-center h-48 md:h-64 p-5"
                    ></component>
                  </div>

                  <div class="w-full sm:w-1/2 px-4 md:pr-6 md:pl-3">
                    <div class="align-middle">
                      <h3
                        class="text-3xl text-gray-800 font-bold leading-none mb-3 xl:text-4xl"
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
    </section>


    <!-- Still have to create a structure for Link card -->

    <!-- <div class="text-3xl font-bold text-purple-600">Link Card</div>
    <div class="text-xl font-bold text-purple-600">lcTitle</div>
    <div v-html="post.acf.lcTitle"></div>
    <div class="text-xl font-bold text-purple-600">lcContent</div>
    <div v-html="post.acf.lsContent"></div>
    <div class="text-xl font-bold text-purple-600">repeaterLink</div>

    <ul>
      <li v-for="(rlink, index) in post.acf.repeaterLink" :key="index">
        <p class="text-xl font-bold text-purple-600">
          Link Instance {{ index }}
        </p>
        <div class="text-xl font-bold text-purple-600">
          repeaterLink[{{ index }}].textBeforeLink
        </div>
        <div v-html="rlink.textBeforeLink"></div>
        <ul>
          <li v-for="(link, index2) in rlink.link" :key="index2">
            <div class="text-xl font-bold text-purple-600">
              repeaterLink[{{ index }}].link[
              {{ index2 }}
              ].htmlParagraph
            </div>
            <p>{{ JSON.stringify(link) }}</p>
            <div v-html="link.title"></div>
            <div v-html="link.target"></div>
          </li>
        </ul>
      </li>
    </ul> -->

    <!--Pre-footer slots section -->
    <SlotBottomSection>
      <template slot="main-text">
        Notre expertise
      </template>
      <template slot="secondary-text">
        Au service de votre projet !
      </template>
      <template slot="cta-text">
        Suggérer un article
      </template>
    </SlotBottomSection>
  </div>
</template>

<script>
import SlotTopSection from "~/components/TopSection.vue";
import SlotBottomSection from "~/components/BottomSection.vue";
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
  data() {
    return {
      svgArray: [],
      svgArrayLength: 40,
      nbOfSvg: 12,
      months: [
        "janvier",
        "février",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "août",
        "septembre",
        "octobre",
        "novembre",
        "décembre"
      ]
    };
  },
  components: {
    SlotTopSection,
    SlotBottomSection,
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
    post: {
      type: Object,
      required: true
    }
  },
  created() {
    const svgArray = [...Array(this.svgArrayLength)].map(_ =>
      Math.ceil(Math.random() * this.nbOfSvg)
    );
    this.svgArray = [...new Set(svgArray)]; //remove duplicates, make unique
    // console.log(this.svgArray);
  }
};
</script>


