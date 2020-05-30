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
    </SlotTopSection>

    <!-- Section People Word Card -->
    <section v-if="service.acf.pwcTitle">
      <div class="bg-white flex justify-center pt-10 md:pt-16">
        <!-- component -->
        <div class="w-11/12 md:w-3/4 max-w-4xl lg:flex rounded shadow my-4">
          <div
            class="h-48 lg:h-auto lg:w-2/5 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
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
                class="w-10 h-10 rounded-full mr-4 bg-cover bg-bottom"
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
              class="mx-auto hover:underline gradient text-white font-bold rounded-full mt-3 mb-3 py-4 px-8 shadow-lg"
            >
              {{ service.acf.pwcCtaText }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Section tiles service instance -->
    <section class="bg-white border-b pt-10 md:pt-16">
      <div class="container max-w-5xl mx-auto">
        <h2
          class="mx-4 my-2 text-4xl font-bold leading-tight text-center text-gray-800"
        >
          Construisons ensemble votre projet
        </h2>

        <!-- Underline for h1 -->
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
        </div>

        <!-- Here start the tiles section -->
        <ul>
          <li v-for="index in service.acf.repeaterCard.length" :key="index">
            <div v-if="(index - 1) % 2">
              <div class="grid-cols-1">
                <div class="flex flex-wrap py-4 my-6">
                  <div class="w-full sm:w-1/2 px-4 md:pl-6 md:pr-3">
                    <h3
                      class="text-3xl text-gray-800 font-bold leading-none mb-3"
                    >
                      {{ service.acf.repeaterCard[index - 1].title }}
                    </h3>

                    <div class="text-gray-600 mb-8 text-lg">
                      <ul>
                        <li
                          v-for="index2 in service.acf.repeaterCard[index - 1]
                            .repeaterParagraph.length"
                          :key="index2"
                        >
                          <div
                            v-html="
                              service.acf.repeaterCard[index - 1]
                                .repeaterParagraph[index2 - 1].htmlParagraph
                            "
                            class="text-gray-700 text-base text-justify"
                          ></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="w-full m-auto mt-0 sm:w-1/2 px-4 md:pl-3 md:pr-6">
                    <g-image
                      class="w-full object-contains object-top"
                      :src="service.acf.repeaterCard[index - 1].picture"
                    />
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
                      :src="service.acf.repeaterCard[index - 1].picture"
                    />
                  </div>
                  <div class="w-full sm:w-1/2 px-4 md:pr-6 md:pl-3">
                    <div class="align-middle">
                      <h3
                        class="text-3xl text-gray-800 font-bold leading-none mb-3"
                      >
                        {{ service.acf.repeaterCard[index - 1].title }}
                      </h3>
                      <div class="text-gray-600 mb-8 text-lg">
                        <ul>
                          <li
                            v-for="index2 in service.acf.repeaterCard[index - 1]
                              .repeaterParagraph.length"
                            :key="index2"
                          >
                            <div
                              v-html="
                                service.acf.repeaterCard[index - 1]
                                  .repeaterParagraph[index2 - 1].htmlParagraph
                              "
                              class="text-gray-700 text-base text-justify"
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

    <section class="bg-white border-b pt-10 md:pt-16">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
        >
          Réalisations
        </h1>
        <div class="w-full mb-4">
          <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>

        <div class="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
          <div
            class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
          >
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                Terminé le 20 mars 2018
              </p>
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                Rénovation d'un cabinet dentaire à Paris, 19ème
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
                Texte relatif à la réalisation, soit une témoignage, soit une
                explication détaillée d'un chantier, à voir. Texte relatif à la réalisation, soit une témoignage, soit une
                explication détaillée d'un chantier, à voir. Texte relatif à la réalisation, soit une témoignage, soit une
                explication détaillée d'un chantier, à voir. Texte relatif à la réalisation, soit une témoignage, soit une
                explication détaillée d'un chantier, à voir.
              </p>
            </a>
          </div>
          <div
            class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
          >
            <div class="flex items-center justify-start">
              <button
                class="mx-auto lg:mx-0 green-psr text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
              >
                J'ai un projet similaire
              </button>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div
            class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
          >
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                Terminé le 10 juillet 2019
              </p>
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                Construction d'une annexe à Neuilly-sur-Seine
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
                Texte relatif à la réalisation, soit une témoignage, soit une
                explication détaillée d'un chantier, à voir. Texte relatif à la réalisation, soit une témoignage, soit une
                explication détaillée d'un chantier, à voir. 
              </p>
            </a>
          </div>
          <div
            class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
          >
            <div class="flex items-center justify-center">
              <button
                class="mx-auto lg:mx-0 green-psr text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
              >
                J'ai un projet similaire
              </button>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div
            class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
          >
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                Terminé le 5 octobre 2017
              </p>
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                Ravalement de façade ancienne à Montgeron
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
                Texte relatif à la réalisation, soit une témoignage, soit une
                explication détaillée d'un chantier, à voir. Texte relatif à la réalisation, soit une témoignage, soit une
                explication détaillée d'un chantier, à voir. Texte relatif à la réalisation, soit une témoignage, soit une
                explication détaillée d'un chantier, à voir. Texte relatif à la réalisation, soit une témoignage, soit une
                explication détaillée d'un chantier, à voir.
              </p>
            </a>
          </div>
          <div
            class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
          >
            <div class="flex items-center justify-end">
              <button
                class="mx-auto lg:mx-0 green-psr text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
              >
                J'ai un projet similaire
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- Section pricing, use somewhere ! -->
    <!-- <section class="bg-gray-100 pt-10 md:pt-16">
      <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h1
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
        >
          Pricing
        </h1>
        <div class="w-full mb-4">
          <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>

        <div
          class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4"
        >
          <div
            class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4"
          >
            <div
              class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"
            >
              <div class="p-8 text-3xl font-bold text-center border-b-4">
                Free
              </div>
              <ul class="w-full text-center text-sm">
                <li class="border-b py-4">Thing</li>
                <li class="border-b py-4">Thing</li>
                <li class="border-b py-4">Thing</li>
              </ul>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              <div
                class="w-full pt-6 text-3xl text-gray-600 font-bold text-center"
              >
                £0 <span class="text-base">for one user</span>
              </div>
              <div class="flex items-center justify-center">
                <button
                  class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          <div
            class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10"
          >
            <div
              class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
            >
              <div class="w-full p-8 text-3xl font-bold text-center">Basic</div>
              <div class="h-1 w-full gradient my-0 py-0 rounded-t"></div>
              <ul class="w-full text-center text-base font-bold">
                <li class="border-b py-4">Thing</li>
                <li class="border-b py-4">Thing</li>
                <li class="border-b py-4">Thing</li>
                <li class="border-b py-4">Thing</li>
              </ul>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              <div class="w-full pt-6 text-4xl font-bold text-center">
                £x.99 <span class="text-base">/ per user</span>
              </div>
              <div class="flex items-center justify-center">
                <button
                  class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          <div
            class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4"
          >
            <div
              class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"
            >
              <div class="p-8 text-3xl font-bold text-center border-b-4">
                Pro
              </div>
              <ul class="w-full text-center text-sm">
                <li class="border-b py-4">Thing</li>
                <li class="border-b py-4">Thing</li>
                <li class="border-b py-4">Thing</li>
              </ul>
            </div>
            <div
              class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
            >
              <div
                class="w-full pt-6 text-3xl text-gray-600 font-bold text-center"
              >
                £x.99 <span class="text-base">/ per user</span>
              </div>
              <div class="flex items-center justify-center">
                <button
                  class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    
    
    <!-- Remaining content to introduce -->
    <!-- <br />
    <br />
    <div class="text-3xl font-bold text-purple-600">topCtaText</div>
    <div v-html="service.acf.topCtaText"></div>

    <br />
    <br />
    <div class="text-3xl font-bold text-purple-600">Introduction Card</div>
    <div class="text-xl font-bold text-purple-600">icTitle</div>
    <div v-html="service.acf.icTitle"></div>
    <div class="text-xl font-bold text-purple-600">icContent</div>
    <div v-html="service.acf.icContent"></div>

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
      <template slot="form">
        <Form />
      </template>
    </SlotBottomSection>
  </div>
</template>

<script>
import SlotTopSection from "~/components/TopSection.vue";
import SlotBottomSection from "~/components/BottomSection.vue";
import Form from "~/components/Form.vue";

export default {
  components: {
    SlotTopSection,
    SlotBottomSection,
    Form
  },
  props: {
    service: {
      type: Object,
      required: true
    }
  }
};
</script>


