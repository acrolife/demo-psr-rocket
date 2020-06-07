
<template>
  <Layout>
    <section>
      <div
        :style="{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 69%, #00b084 100%), url(' +
            $page.data.acf.topImage +
            ')'
        }"
        class="bg-cover h-64 sm:h-80 mt-0 pb-16 md:h-128 xl:h-160"
      >
        <div class="h-10 md:h-32"></div>

        <div
          class="flex bg-opacity-50 border-teal-400 border-2 rounded bg-teal-500 h-24 pt-3 mx-auto w-3/4 px-4 md:h-32 md:pt-0 md:ml-10 md:w-2/3 md:px-6 md:py-6 md:pb-0 lg:w-1/2 xl:w-9/12 xl:h-48 xl:ml-24"
        >
          <h1
            class="text-2xl md:text-4xl font-thin text-white md:m-auto xl:text-6xl"
          >
            <!-- Une nouvelle vie pour votre bien... -->
            {{ $page.data.acf.repeaterTitle[0].title }}
          </h1>
          <!-- <h2 class="text-2xl text-gray-200">
            Titre secondaire
          </h2> -->
        </div>
        <div class="flex mx-auto w-3/4 md:w-2/3 md:ml-10 lg:w-1/2 xl:ml-24">
          <button
            class="mt-10 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg hover:opacity-100 ssm:opacity-75 ssm:flex-none ssm:ml-0 xl:text-2xl xl:py-6"
          >
            {{ $page.data.acf.topCtaText }}
          </button>
        </div>
      </div>
    </section>

    <!-- Post-header section - custom adapter for home page -->
    <section>
      <div class="gradient mt-12 lg:mt-24">
        <SvgWavePostHeader />
      </div>
    </section>

    <!-- H2 & Card section -->
    <section>
      <!-- h2 -->
      <h2
        class="w-full px-2 mt-10 mb-2 text-4xl font-bold leading-tight text-center text-gray-800"
      >
        Nos domaines d'expertise
      </h2>

      <!-- Underline title -->
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
      </div>

      <!--  cards  -->
      <ul
        class="sm:w-2/3 md:w-full m-auto p-4 max-w-screen-xl md:p-12 md:grid md:grid-cols-2 lg:grid-cols-3"
      >
        <li v-for="index in $page.data5.acf.repeaterCard.length" :key="index">
          <div>
            <div class="flex">
              <!-- <div class="flex flex-col md:flex-row"> -->

              <g-link
                :to="
                  `/nos-domaines-dexpertise/${
                    $page.data4.edges[index - 1].node.slug
                  }`
                "
              >
                <div class="flex flex-col shadow-2xl border rounded-lg m-2">
                  <div class="flex justify-center px-10 mt-6 h-12">
                    <h2
                      class="text-lg uppercase text-gray-700 font-bold md:text-xl"
                    >
                      {{ $page.data5.acf.repeaterCard[index - 1].title }}
                    </h2>
                  </div>
                  <div class="flex justify-center md:justify-start">
                    <g-image
                      class="flex rounded-full h-32 w-32 bg-cover bg-center md:ml-10 my-6 ssm:h-44 ssm:w-44"
                      :src="$page.data5.acf.repeaterCard[index - 1].picture"
                    />
                  </div>

                  <div
                    class="text-lg text-gray-700 md:text-xl px-10 bg-white h-48 mb-2 rounded-lg"
                  >
                    <img
                      alt="quote"
                      class="float-left mr-1"
                      src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg"
                    />
                    {{
                      $page.data.acf.repeaterCard[
                        index - 1
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
    </section>

    <!-- Youtube embbeder section -->
    <section>
      <!-- h2 -->
      <h2
        class="w-full px-2 mt-10 mb-2 text-4xl font-bold leading-tight text-center text-gray-800"
      >
        Visites sur chantier...
      </h2>

      <!-- Underline title -->
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
      </div>

      <!-- <div class="flex m-auto px-6 max-w-screen-xl md:px-12">
        <div class="text-gray-700 text-base xl:text-xl">
          <p class="text-justify" v-html="$page.data.acf.icTitle"></p>
        </div>
      </div> -->
      <div
        class="flex flex-col m-auto p-4 py-10 max-w-screen-xl  md:p-12 md:flex-row"
      >
        <div
          class="flex mx-auto pt-12 w-2/3 rounded-lg bg-white shadow-lg p-4 md:pt-4 md:w-full lg:rounded-none lg:shadow-none"
        >

          <div class="flex flex-col">
            <div class="flex">

              <div class="mx-2 mb-2 md:w-7/12 lg:w-2/3">
                <div
                  class="relative mx-auto h-48 ssm:w-96 lg:mx-2 z-30 md:py-48"
                >
                  <div class="absolute w-full h-auto pin-c z-20">
                    <div class="mt-16 md:mt-12 lg:mt-36" @click="playVideo()">
                      <SvgPlayButton
                        class="mx-auto w-16 h-16 lg:w-32 lg:h-32 z-30"
                      />
                    </div>
                  </div>

                  <g-image
                    class="absolute w-full pin-c border rounded-lg shadow-lg z-10"
                    :src="$page.data.acf.icImage"
                  />
                  <iframe
                    v-if="videoOnTopClass"
                    class="absolute w-full h-full pin-c border rounded-lg shadow"
                    :class="videoOnTopClass"
                    src="https://www.youtube.com/embed/VZzyFo2V6NI?autoplay=1"
                  ></iframe>
                </div>
              </div>

              <div class="flex flex-1 mx-4 pl-2 pr-2 md:w-5/12 lg:w-1/3">
                <div class="h-auto py-6 md:h-96 lg:px-8">
                  <div class="text-gray-700 text-lg xl:text-xl">
                    <p
                      class="text-justify"
                      v-html="$page.data.acf.icContent"
                    ></p>
                  </div>
                </div>
              </div>

            </div>
            <!-- <div class="flex pb-10"></div> -->

          </div>
        </div>
      </div>

      <!-- <div class="m-auto my-4 w-11/12 ssm:w-10/12">
        <div class="relative z-30 px-0 py-24 mx-4 ssm:py-32 mid:py-36 mid:mx-6">
          <div
            class="absolute w-full h-full pin-c border rounded bg-teal-500 bg-opacity-25 shadow z-20 md:w-4/5 lg:w-2/3 xl:w-1/2"
          >
            <div
              class="mt-16 ssm:mt-24 mid:mt-32 md:mt-40"
              @click="playVideo()"
            >
              <SvgPlayButton
                class="mx-auto w-12 h-12 ssm:w-16 ssm:h-16 md:w-32 md:h-32 z-30"
              />
            </div>
          </div>
          <g-image
            class="absolute w-full h-full pin-c border rounded shadow z-10 md:w-4/5 lg:w-2/3 xl:w-1/2"
            :src="$page.data.acf.icImage"
          />
          <iframe
            v-if="videoOnTopClass"
            class="absolute w-full h-full pin-c border rounded shadow md:w-4/5 lg:w-2/3 xl:w-1/2"
            :class="videoOnTopClass"
            src="https://www.youtube.com/embed/VZzyFo2V6NI?autoplay=1"
          ></iframe>
        </div>
      </div> -->
      <!-- mute the vid : https://stackoverflow.com/questions/41185416/how-can-i-mute-an-iframe-with-an-embedded-youtube-video-in-html -->
    </section>

    <!-- <BannerQualifLong /> -->

    <!--Qualifications section -->
    <section>
      <!-- h2 -->
      <h2
        class="w-full px-2 mt-10 mb-2 text-4xl font-bold leading-tight text-center text-gray-800"
      >
        PSR, triplement certifiée
      </h2>

      <!-- Underline title -->
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
      </div>

      <div class="flex flex-col m-auto p-4 max-w-screen-xl md:p-12 md:flex-row">
        <div class="flex pl-4 pr-2 md:flex-col md:w-1/3">
          <div class="flex-1"></div>
          <div class="flex">
            <div class="text-gray-700 text-lg xl:text-xl">
              <p
                class="text-justify"
                v-html="
                  $page.data3.acf.repeaterCard[0].repeaterParagraph[0]
                    .htmlParagraph
                "
              ></p>
            </div>
          </div>
          <div class="flex-1"></div>
        </div>
        <div class="py-6 md:px-0 md:w-2/3">
          <div class="flex justify-center mb-8">
            <ul class="flex">
              <li
                v-for="(image, index) in $page.data2.acf.rGallery"
                :key="index"
                class="flex-1"
              >
                <div class="flex px-2">
                  <div class="flex-1"></div>
                  <g-image
                    class="h-20 sm:h-24 lg:h-32 border rounded flex-1"
                    :src="image.repeaterImages"
                  />
                  <div class="flex-1"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- <div class="mx-8 mb-8 ssm:mx-12 mid:mx-20 md:mb-12 lg:px-40">
        <div class="text-gray-700 text-base xl:text-xl">
          <p
            class="text-justify"
            v-html="$page.data2.acf.riRepeaterContent[0].content"
          ></p>
        </div>
      </div> -->
      </div>
    </section>

    <!--Pre-footer slots section -->
    <SlotBottomSection>
      <template slot="main-text">
        Notre expertise
      </template>
      <template slot="secondary-text">
        Au service de votre projet !
      </template>
      <template slot="cta-text">
        J'ai un projet
      </template>
    </SlotBottomSection>
  </Layout>
</template>

<page-query>
  query {
    data: wordPressPage(id: 464) {
          slug
          title
 					acf {     
          repeaterTitle { title } 
          topImage
          topCtaText             
          pwcTitle
          pwcImage
          pwcIcon
          pwcRepeaterContent { paragraph }          
          pwcSignature
          pwcCtaText
          icTitle
          icContent
          icImage
          mcTitle
          mcRepeaterParagraph { 
            paragraph
          	title            
          }
          repeaterCard {
            ctaText
            picture
          	repeaterParagraph { 
              htmlParagraph
            }
            title            
          } 
          ic2Title
          ic2Content
          mcTitle2   
          pwc2Title
          pwc2Image
          pwc2Icon
          pwc2RepeaterContent { paragraph }          
          pwc2Signature
          pwc2CtaText
          mcRepeaterParagraph2 {
            paragraph
            title            
          }
          repeaterCard2 {
            ctaText
            picture
            repeaterParagraph { 
              htmlParagraph
            }
            title            
          }         
          bottomCtaTextCopy
          lcTitle
          lcContent 
        }
      }
    data2: wordPressReproducible(id: 438) {
          id
          slug
          acf {
            repeaterCard { 
              title
              repeaterParagraph { 
                htmlParagraph                
              }
              picture
              ctaText
            }
         		riTitle
            riEmail
            riAdress
            riPhoneNumber
            riCtaText
            riRepeaterContent { 
              content
            }
            rfTitle
            rfRepeaterField { 
              text
            }
            rGallery { 
              repeaterImages
            }                  	  
         }
       }
    data3: wordPressReproducible(id: 566) {
          acf {
            repeaterCard { 
              title
              repeaterParagraph { 
                htmlParagraph                
              }   
            }           
      	  }
        }      
   data4: allWordPressServices {
      edges {
        node {
          id
          slug
        }
      }
    }
   data5: wordPressPage(id: 490) {
      id
      slug
      acf {
        topImage
        repeaterTitle {
          title
        }
        icTitle
        icContent
        ic2Title
        ic2Content
        repeaterCard {
          title
          picture
        }
        mcRepeaterParagraph2 {
          paragraph
          title
        }
        mcRepeaterParagraph2 {
          paragraph
          title
        }
      }
    }
  }
</page-query>

<script>
import SlotBottomSection from "~/components/BottomSection.vue";
import SvgWavePostHeader from "~/components/svg/SvgWavePostHeader.vue";
// import SvgWaveIntermediate from "~/components/svg/SvgWaveIntermediate.vue";
// import SvgWavesAnimation from "~/components/svg/SvgWavesAnimation.vue";
import SvgPlayButton from "~/components/svg/play-button.vue";
// import BannerQualifLong from "~/components/BannerQualifLong.vue";

export default {
  data() {
    return {
      videoOnTopClass: ""
    };
  },
  components: {
    SlotBottomSection,
    SvgWavePostHeader,
    // SvgWaveIntermediate,
    // SvgWavesAnimation,
    SvgPlayButton
    // BannerQualifLong
  },
  methods: {
    playVideo() {
      this.videoOnTopClass = "z-40";
      setTimeout(() => {
        this.videoOnTopClass = "";
      }, 95000);
    }
  },
  metaInfo: {
    title: "metainfo to fill"
  }
};
</script>

<style>
.bg-dots{
  background-image: url(https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5dea7a12bb83ab1f13040de5_cx-dots.svg);
  /* background-image: url(SvgSquareDots); */
  background-repeat: no-repeat
}
</style>
