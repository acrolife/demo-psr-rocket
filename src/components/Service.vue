<template>
  <div class="gradient">
    <!--Hero slots -->
    <SlotTopSection>
      <template v-if="service.acf.repeaterTitle" slot="repeatable-title-1">
        {{ service.acf.repeaterTitle[0].title }}
      </template>
      <template
        v-if="service.acf.repeaterTitle.length >= 1"
        slot="repeatable-title-2"
      >
        {{ service.acf.repeaterTitle[1].title }}
      </template>
      <template
        v-if="service.acf.repeaterTitle.length >= 2"
        slot="repeatable-title-3"
      >
        {{ service.acf.repeaterTitle[2].title }}
      </template>
      <template slot="cta-text">
        Demander un devis
      </template>
      <template slot="form">
        <Form />
      </template>
    </SlotTopSection>

    <!-- Section Introduction Card -->
    <section v-if="service.acf.icTitle">
      <div class="bg-white flex justify-center pt-10 md:pt-16">
        <!-- component -->
        <div class="w-11/12 md:w-3/4 max-w-4xl lg:flex rounded shadow my-4">
          <div
            class="h-48 lg:h-auto lg:w-1/2 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            :style="{
              backgroundImage: 'url(' + service.acf.icImage + ')'
            }"
          ></div>

          <div
            class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
          >
            <div class="mb-4">
              <div class="text-gray-800 font-bold text-xl mb-2">
                {{ service.acf.icTitle }}
              </div>
              <div class="text-gray-700 text-base">
                <div v-html="service.acf.icContent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section People Word Card -->
    <section v-if="service.acf.pwcTitle">
      <div class="bg-white flex justify-center pt-10 md:pt-16">
        <!-- component -->
        <div class="w-11/12 md:w-3/4 max-w-4xl lg:flex rounded shadow my-4">
          <div
            class="h-48 lg:h-auto lg:w-1/2 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            :style="{
              backgroundImage: 'url(' + service.acf.topImage + ')'
            }"
          ></div>

          <div
            class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
          >
            <div class="mb-4">
              <!-- <p class="text-sm text-gray-600 flex items-center">
              <svg
                class="text-grey w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                />
              </svg>
              Members only
            </p> -->
              <div class="text-gray-800 font-bold text-xl mb-2">
                {{ service.acf.pwcTitle }}
              </div>
              <div class="text-gray-700 text-base">
                <ul>
                  <li
                    v-for="index in service.acf.pwcRepeaterContent.length"
                    :key="index"
                  >
                    <div
                      v-html="
                        service.acf.pwcRepeaterContent[index - 1].paragraph
                      "
                    ></div>
                    <br v-if="index < service.acf.pwcRepeaterContent.length" />
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex items-center">
              <div
                class="w-16 h-16 rounded-full mr-4 bg-cover bg-bottom"
                :style="{
                  backgroundImage: 'url(' + service.acf.pwcIcon + ')'
                }"
              ></div>
              <div class="text-sm">
                <p class="text-gray-800 italic leading-none">
                  {{ service.acf.pwcSignature }}
                </p>
                <!-- <p class="text-gray-600">Aug 18</p> -->
              </div>
            </div>
            <button
              class="mx-auto green-psr gradient text-white font-bold rounded-full mt-3 mb-3 py-4 px-8 shadow-lg"
            >
              {{ service.acf.pwcCtaText }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Section tiles service instance -->
    <BaseBlocks
      title="Construisons ensemble votre projet"
      :repeaterCard="service.acf.repeaterCard"
    />

    <section class="bg-white pt-10 md:pt-16">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2
          class="w-full my-2 text-3xl md:text-4xl font-bold leading-tight text-center text-gray-800 xl:text-5xl"
        >
          Réalisations
        </h2>
        <div class="w-full mb-4">
          <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>

        <div class="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
          <g-link
            class="flex flex-col h-full"
            :to="
              'nos-realisations/' +
                realisations.edges[reaArrayIndex[0]].node.slug
            "
          >
            <div
              class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
            >
              <div class="flex flex-wrap no-underline hover:no-underline">
                <div class="w-full text-gray-600 text-xs md:text-sm px-6">
                  Terminé le
                  {{
                    realisations.edges[reaArrayIndex[0]].node.acf.dateEnd ||
                      "non-renseigné"
                  }}
                </div>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  {{ realisations.edges[reaArrayIndex[0]].node.title }}
                </div>
                <div
                  v-html="
                    realisations.edges[reaArrayIndex[0]].node.acf
                      .repeaterCard[0].repeaterParagraph[0].htmlParagraph
                  "
                  class="text-gray-800 text-base px-6 mb-5"
                ></div>
              </div>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              <div class="flex items-center justify-start">
                <button
                  class="mx-auto lg:mx-0 green-psr text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
                >
                  En savoir plus
                </button>
              </div>
            </div>
          </g-link>
        </div>

        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <g-link
            class="flex flex-col h-full"
            :to="
              'nos-realisations/' +
                realisations.edges[reaArrayIndex[1]].node.slug
            "
          >
            <div
              class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
            >
              <div class="flex flex-wrap no-underline hover:no-underline">
                <div class="w-full text-gray-600 text-xs md:text-sm px-6">
                  Terminé le
                  {{
                    realisations.edges[reaArrayIndex[1]].node.acf.dateEnd ||
                      "non-renseigné"
                  }}
                </div>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  {{ realisations.edges[reaArrayIndex[1]].node.title }}
                </div>
                <div
                  v-html="
                    realisations.edges[reaArrayIndex[1]].node.acf
                      .repeaterCard[0].repeaterParagraph[0].htmlParagraph
                  "
                  class="text-gray-800 text-base px-6 mb-5"
                ></div>
              </div>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              <div class="flex items-center justify-center">
                <button
                  class="mx-auto lg:mx-0 green-psr text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
                >
                  En savoir plus
                </button>
              </div>
            </div>
          </g-link>
        </div>

        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <g-link
            class="flex flex-col h-full"
            :to="
              'nos-realisations/' +
                realisations.edges[reaArrayIndex[2]].node.slug
            "
          >
            <div
              class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
            >
              <div class="flex flex-wrap no-underline hover:no-underline">
                <div class="w-full text-gray-600 text-xs md:text-sm px-6">
                  Terminé le
                  {{
                    realisations.edges[reaArrayIndex[2]].node.acf.dateEnd ||
                      "non-renseigné"
                  }}
                </div>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  {{ realisations.edges[reaArrayIndex[2]].node.title }}
                </div>
                <div
                  v-html="
                    realisations.edges[reaArrayIndex[2]].node.acf
                      .repeaterCard[0].repeaterParagraph[0].htmlParagraph
                  "
                  class="text-gray-800 text-base px-6 mb-5"
                ></div>
              </div>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              <div class="flex items-center justify-end">
                <button
                  class="mx-auto lg:mx-0 green-psr text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
                >
                  En savoir plus
                </button>
              </div>
            </div>
          </g-link>
        </div>
      </div>
    </section>

    <!-- Section pricing ?? -->

    <!-- H2 & Card section -->
    <CardGridMenu
      :cardGridMenuData1="pageservices"
      :cardGridMenuData2="pageaccueil"
      :cardGridMenuSlug="services"
    >
      <template slot="title">
        Autres domaines d'expertise
      </template>
    </CardGridMenu>

    <!-- Remaining content to introduce -->
    <!-- 
    <div class="text-3xl font-bold text-purple-600">topCtaText</div>
    <div v-html="service.acf.topCtaText"></div>
    <br />
    <br />
    <div class="text-3xl font-bold text-purple-600">Main Card</div>
    <div class="text-xl font-bold text-purple-600">mcTitle</div>
    <div v-html="service.acf.mcTitle"></div>
    <div class="text-xl font-bold text-purple-600">mcRepeaterParagraph</div>
    <ul>
      <li v-for="index in service.acf.mcRepeaterParagraph.length" :key="index">
        <div v-html="service.acf.mcRepeaterParagraph[index - 1].title"></div>
        <div
          v-html="service.acf.mcRepeaterParagraph[index - 1].paragraph"
        ></div>
        <br />
      </li>
    </ul>

    <div class="text-3xl font-bold text-purple-600">Introduction Card 2</div>
    <div class="text-xl font-bold text-purple-600">ic2Title</div>
    <div v-html="service.acf.ic2Title"></div>
    <div class="text-xl font-bold text-purple-600">ic2Content</div>
    <div v-html="service.acf.ic2Content"></div>

    <div class="text-3xl font-bold text-purple-600">Main Card 2</div>
    <div class="text-xl font-bold text-purple-600">mcTitle2</div>
    <div v-html="service.acf.mcTitle2"></div>
    <div class="text-xl font-bold text-purple-600">mcRepeaterParagraph2</div>
    <ul>
      <li v-for="index in service.acf.mcRepeaterParagraph2.length" :key="index">
        <div v-html="service.acf.mcRepeaterParagraph2[index - 1].title"></div>
        <div
          v-html="service.acf.mcRepeaterParagraph2[index - 1].paragraph"
        ></div>
        <br />
      </li>
    </ul>

    <div class="text-3xl font-bold text-purple-600">repeaterCard2</div>
    <ul>
      <li v-for="index in service.acf.repeaterCard2.length" :key="index">
        <p class="text-xl font-bold text-purple-600">Card {{ index }}</p>
        <div class="text-xl font-bold text-purple-600">
          repeaterCard2[{{ index - 1 }}].title
        </div>
        <div v-html="service.acf.repeaterCard2[index - 1].title"></div>
        <div class="text-xl font-bold text-purple-600">
          repeaterCard2[{{ index - 1 }}].picture
        </div>
        <g-image
          class="h-32 w-1/4 object-cover"
          :src="service.acf.repeaterCard2[index - 1].picture"
          v-if="service.acf.repeaterCard2[index - 1].picture"
        />
        <div v-else>No image to display</div>
        <ul>
          <li
            v-for="index2 in service.acf.repeaterCard2[index - 1]
              .repeaterParagraph.length"
            :key="index2"
          >
            <div class="text-xl font-bold text-purple-600">
              repeaterCard2[{{ index - 1 }}].repeaterParagraph[
              {{ index2 - 1 }}
              ].htmlParagraph
            </div>
            <div
              v-html="
                service.acf.repeaterCard2[index - 1].repeaterParagraph[
                  index2 - 1
                ].htmlParagraph
              "
            ></div>
            <br />
          </li>
        </ul>
      </li>
    </ul>

    <div class="text-3xl font-bold text-purple-600">To Realisation Page</div>
    <div class="text-xl font-bold text-purple-600">trpTitle</div>
    <div v-html="service.acf.trpTitle"></div>
    <div class="text-xl font-bold text-purple-600">trpContent</div>
    <div v-html="service.acf.trpContent"></div>
    <div class="text-xl font-bold text-purple-600">trpPageLink</div>
    <div v-html="service.acf.trpPageLink"></div>

    <div class="text-3xl font-bold text-purple-600">bottomCtaTextCopy</div>
    <div>Sorry for the "copy" => refactor later :/</div>
    <div v-html="service.acf.bottomCtaTextCopy"></div>
    <br />
    <div class="py-10 bg-white"></div> -->

    <!--Pre-footer slots section -->
    <SlotBottomSection>
      <template slot="main-text">
        Notre expertise
      </template>
      <template slot="secondary-text">
        Au service de votre projet !
      </template>
      <template slot="cta-text">
        Demander un devis
      </template>
    </SlotBottomSection>
  </div>
</template>

<script>
import SlotTopSection from "~/components/TopSection.vue";
import SlotBottomSection from "~/components/BottomSection.vue";
import Form from "~/components/Form.vue";
import BaseBlocks from "~/components/BaseBlocks.vue";
import CardGridMenu from "~/components/CardGridMenu.vue";

export default {
  data() {
    return {
      reaArrayIndex: [],
      nbOfIndexes: 3,
      rdnArrayIndexLength: 10
    };
  },
  components: {
    SlotTopSection,
    SlotBottomSection,
    Form,
    BaseBlocks,
    CardGridMenu
  },
  props: {
    service: {
      type: Object,
      required: true
    },
    realisations: {
      type: Object,
      required: true
    },
    services: {
      type: Object,
      required: true
    },
    pageservices: {
      type: Object,
      required: true
    },
    pageaccueil: {
      type: Object,
      required: true
    }
  },
  created() {
    const reaArrayIndexLocal = [...Array(this.rdnArrayIndexLength)].map(_ =>
      Math.floor(Math.random() * this.realisations.edges.length)
    );
    this.reaArrayIndex = [...new Set(reaArrayIndexLocal)];
  }
};
</script>


