<template>
  <Layout>
    <div>
      <!--Hero slots section -->
      <SlotTopSection>
        <template slot="repeatable-title-1">
          Notre entreprise
        </template>
        <template slot="repeatable-title-2">
          Toujours à la recherche de l'excellence, aujourd'hui dans 6 domaines
          d'expertise
        </template>
        <template slot="cta-text">
          Confier un projet à PSR
        </template>
        <template slot="form">
          <div class="flex justify-center">
            <g-image class="h-40 my-20" :src="$page.pageentreprise.acf.topImage" />
          </div>
        </template>
      </SlotTopSection>

      <!-- Section People Word Card -->
      <section v-if="$page.pageentreprise.acf.pwcTitle">
        <div class="bg-white flex justify-center pt-10 md:pt-16">
          <!-- component -->
          <div class="w-11/12 md:w-3/4 max-w-4xl lg:flex rounded shadow my-4">
            <div
              class="h-48 lg:h-auto lg:w-2/5 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              :style="{
                backgroundImage: 'url(' + $page.pageentreprise.acf.pwcImage + ')'
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
                  {{ $page.pageentreprise.acf.pwcTitle }}
                </div>
                <div class="text-gray-700 text-base">
                  <ul>
                    <li
                      v-for="index in $page.pageentreprise.acf.pwcRepeaterContent.length"
                      :key="index"
                    >
                      <div
                        v-html="
                          $page.pageentreprise.acf.pwcRepeaterContent[index - 1].paragraph
                        "
                      ></div>
                      <br
                        v-if="index < $page.pageentreprise.acf.pwcRepeaterContent.length"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex items-center">
                <div
                  class="w-16 h-16 rounded-full mr-4 bg-cover bg-bottom"
                  :style="{
                    backgroundImage: 'url(' + $page.pageentreprise.acf.pwcIcon + ')'
                  }"
                ></div>
                <div class="text-sm">
                  <p class="text-gray-800 italic leading-none">
                    {{ $page.pageentreprise.acf.pwcSignature }}
                  </p>
                  <!-- <p class="text-gray-600">Aug 18</p> -->
                </div>
              </div>
              <button
                class="mx-auto green-psr gradient text-white font-bold rounded-full mt-3 mb-3 py-4 px-8 shadow-lg"
              >
                {{ $page.pageentreprise.acf.pwcCtaText }}
              </button>
            </div>
          </div>
        </div>
      </section>

      <BaseBlocks
        title="Le coeur à l'ouvrage"
        :repeaterCard="$page.pageentreprise.acf.repeaterCard"
      />

      <!--Qualifications section -->
      <section>
        <!-- h2 -->
        <h2
          class="w-full px-2 mt-10 mb-2 text-4xl font-bold leading-tight text-center text-gray-800"
        >
          PSR, entreprise triplement certifiée
        </h2>

        <!-- Underline title -->
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
        </div>

        <div
          class="flex flex-col m-auto px-4 max-w-screen-xl md:flex-row"
        >
          <!-- Text before icons -->
          <div class="flex pl-4 pr-4 md:hidden md:flex-col md:w-1/3">
            <div class="flex-1"></div>
            <div class="flex md:rounded md:border md:p-4 lg:-mt-6">
              <div class="text-gray-700 text-lg xl:text-xl">
                <p
                  class="text-justify"
                  v-html="
                    $page.reproduciblebannergest.acf.repeaterCard[0].repeaterParagraph[0]
                      .htmlParagraph
                  "
                ></p>
              </div>
            </div>
            <div class="flex-1"></div>
          </div>

          <!-- Icons -->
          <div class="pt-10 px-2 md:px-0 md:w-full">
            <div class="flex justify-center mb-8">
              <ul class="flex">
                <li
                  v-for="(image, index) in $page.reproduciblebannerqual.acf.rGallery"
                  :key="index"
                  class="flex-1"
                >
                  <div class="flex px-2">
                    <div class="flex-1"></div>
                    <g-image
                      class="h-20 sm:h-24 md:32 lg:h-40 border rounded flex-1"
                      :src="image.repeaterImages"
                    />
                    <div class="flex-1"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- End horizontal section -->
        </div>

        <!-- Text after icons -->
        <div
          class="flex flex-col md:mx-12 p-4 mb-10 max-w-screen-xl md:flex-row"
        >

        <div class="flex pl-4 pr-4 md:flex-col md:w-1/3">
        
            <div class="hidden md:flex md:flex-1 md:rounded md:border md:p-4">
              <div class="text-gray-700 text-lg xl:text-xl">
                <p
                  class="text-justify"
                  v-html="
                    $page.reproduciblebannergest.acf.repeaterCard[0].repeaterParagraph[0]
                      .htmlParagraph
                  "
                ></p>
              </div>
            </div>           
          </div>

        <div class="pl-4 pr-4 md:flex-col md:w-2/3">         
          <div class="flex flex-1 md:rounded md:border md:p-4">
            <div class="text-gray-700 text-lg xl:text-xl">
              <p
                class="text-justify"
                v-html="$page.reproduciblebannerqual.acf.riRepeaterContent[0].content"
              ></p>
            </div>
          </div>
          </div>
        
        </div>

        <!-- <div class="mx-8 mb-8 ssm:mx-12 mid:mx-20 md:mb-12 lg:px-40">
          <div class="text-gray-700 text-base xl:text-xl">
            <p
              class="text-justify"
              v-html="$page.reproduciblebannerqual.acf.riRepeaterContent[0].content"
            ></p>
          </div>
        </div> -->
      </section>

      <!--Pre-footer slots section -->
      <SlotBottomSection>
        <template slot="main-text">
          Notre entreprise
        </template>
        <template slot="secondary-text">
          Au service de votre projet !
        </template>
        <template slot="cta-text">
          Contacter PS-Rénovation
        </template>
      </SlotBottomSection>
    </div>
  </Layout>
</template>

<page-query>
  query {
    pageentreprise: wordPressPage(id: 454) {
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
    reproduciblebannerqual: wordPressReproducible(id: 438) {
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
    reproduciblebannergest: wordPressReproducible(id: 566) {
        acf {
          repeaterCard { 
            title
            repeaterParagraph { 
              htmlParagraph                
            }   
          }           
    	  }
      }      
    }
  </page-query>

<script>
import SlotTopSection from "~/components/TopSection.vue";
import SlotBottomSection from "~/components/BottomSection.vue";
import BaseBlocks from "~/components/BaseBlocks.vue";

export default {
  components: {
    SlotTopSection,
    SlotBottomSection,
    BaseBlocks
  }
};
</script>