<template>
  <Layout>
    <div>
      <!--Hero slots section -->
      <SlotTopSection>
        <template
          v-if="$page.pageservices.acf.repeaterTitle"
          slot="repeatable-title-1"
        >
          Nos domaines d'expertise
        </template>
        <template
          v-if="$page.pageservices.acf.repeaterTitle.length >= 1"
          slot="repeatable-title-2"
        >
          {{ $page.pageservices.acf.repeaterTitle[1].title }}
        </template>
        <template slot="cta-text"> Demander un devis </template>
        <template slot="form">
          <Form />
        </template>
      </SlotTopSection>

      <!-- H2 & Card section -->
      <section>
        <!-- h2 -->
        <h2
          class="w-full mt-6 mb-2 text-3xl md:text-4xl font-bold leading-tight text-center text-gray-800"
        >
          PSR | Services
        </h2>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
        </div>

        <!--  cards  -->
        <ul v-if="sortedServices.length && orderMap.length">     
          <li v-for="(serviceItem, localIndex) in sortedServices" :key="localIndex">
            <div class="m-auto max-w-6xl p-6 md:p-12">
              <div class="flex flex-col md:flex-row">
                <div class="md:w-1/2 max-w-md flex flex-col justify-center">
                  <div class="md:text-5xl text-2xl uppercase font-black">
                    <h2>
                      {{ $page.pageservices.acf.repeaterCard[orderMap[localIndex][0]].title }}
                    </h2>
                  </div>
                  <div class="text-xl mt-4">
                    {{
                      $page.pageaccueil.acf.repeaterCard[
                        orderMap[localIndex][0]
                      ].repeaterParagraph[0].htmlParagraph.slice(3, -5)
                    }}
                  </div>
                  <g-link
                    :to="`/nos-domaines-dexpertise/${serviceItem.node.slug}`"
                  >
                    <div class="my-10 md:my-5 h-16">
                      <div
                        class="text-center mx-auto green-psr text-white font-bold rounded-full mt-3 mb-3 py-4 px-8 shadow-lg"
                      >
                        En savoir plus
                      </div>
                    </div>
                  </g-link>
                </div>
                <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
                  <div class="bg-dots">
                    <div
                      class="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4"
                    >
                      <g-image
                        class="rounded-t"
                        :src="
                          $page.pageservices.acf.repeaterCard[orderMap[localIndex][0]].picture
                        "
                      />
                      <div class="text-lg md:text-2xl p-10 bg-white">
                        <img
                          alt="quote"
                          class="float-left mr-1"
                          src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg"
                        />
                        {{ serviceItem.node.acf.repeaterTitle[1].title }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <!--Pre-footer slots section -->
      <SlotBottomSection>
        <template slot="main-text"> Notre expertise </template>
        <template slot="secondary-text">
          Au service de votre projet !
        </template>
        <template slot="cta-text"> J'ai un projet </template>
      </SlotBottomSection>
    </div>
  </Layout>
</template>

<page-query>
  query {
    pageservices: wordPressPage(id: 490) {
      id
      slug
      acf {
        
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
    services: allWordPressServices {
      edges {
        node {
          id
          slug
          acf {
            repeaterTitle { title } 
            order
          }
        }
      }
    }
    pageaccueil: wordPressPage(id: 464) {
          slug
          title
 					acf {     
          repeaterTitle { title } 
          topImage2
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
  }
</page-query>



<script>
import SlotTopSection from "~/components/TopSection.vue";
import SlotBottomSection from "~/components/BottomSection.vue";
import Form from "~/components/Form.vue";
// import SvgSquareDots from "~/assets/svg/square-dots.svg"

export default {
  data() {
    return {
          orderMap: [],
  //     bgImage: "~/assets/svg/square-dots.svg"
    };
  },
  components: {
    SlotTopSection,
    SlotBottomSection,
    Form,
    // SvgSquareDots
  },
  metaInfo: {
    title: "Domaines d'expertise de PS-Rénovation"
  },
  mounted() {
      // creating an array mapping the index with the order (set by the site manager, from node.acf.order)
      const orderArray = this.$page.services.edges.map(item => Number(item.node.acf.order))
      const indexArray = Array.from(Array(orderArray.length).keys())
      const indexAndOrderArray = indexArray.map((item => [item, orderArray[item]]))
      const orderedIndexAndOrderArray = indexAndOrderArray.sort((s1, s2) => s1[1] - s2[1])
      this.orderMap = orderedIndexAndOrderArray
  },
  computed: {
    // Have to create a new matrix, otherwise the original get sorted (with .sort() method)
    sortedServices(){
      const temp = [...this.$page.services.edges] // create a new array from $page.services.edges
    return temp.sort((s1, s2) => s1.node.acf.order - s2.node.acf.order)
    },
  //   filename() {
  //     const path = require('path');
  //     const scriptName = path.basename(__filename);
  //     console.log(scriptName)
  //     return scriptName
  //   }
  },
  methods: {
    //   orderMap(){
    //   const orderArray = this.$page.services.edges.map(item => Number(item.node.acf.order))
    //   const indexArray = Array.from(Array(orderArray.length).keys())
    //   const indexAndOrderArray = indexArray.map((item => [item, orderArray[item]]))
    //   const orderedIndexAndOrderArray = indexAndOrderArray.sort((s1, s2) => s1[1] - s2[1])
    //   // $page.services.edges.sort((s1, s2) => s1.node.acf.order - s2.node.acf.order)
    //   return orderedIndexAndOrderArray
    // }
  //   getImgUrl(svgFileName) {
  //   const images = require.context('../assets/svg/', false, /\.svg$/)
  //   console.log(hello + path.basename(file));
  //   return images('./' + svgFileName + ".svg")
  // }
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


<!--
  :style="{
              backgroundImage: 'url(' + getImgUrl('square-dots') + ')' }" 
              --> 