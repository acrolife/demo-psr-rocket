<template>
  <Layout>
    <div>

      <!--Hero slots section -->
      <SlotTopSection>
        <template v-if="$page.data.acf.repeaterTitle" slot="repeatable-title-1">
          <h1>Nos domaines d'expertise</h1>
        </template>
        <template
        v-if="$page.data.acf.repeaterTitle.length >= 1"
        slot="repeatable-title-2"
        >
        {{ $page.data.acf.repeaterTitle[1].title }}
      </template>
      <template slot="cta-text">
        Demander un devis
      </template>
      <template slot="form">
        <Form />
      </template>
    </SlotTopSection>

    <!-- H2 & Card section -->
    <section>

      <!-- h2 -->
      <h2
      class="w-full mt-6 mb-2 text-4xl font-bold leading-tight text-center text-gray-800"
      >PSR | Services</h2>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
      </div>

      <!--  cards  -->
      <ul>
        <li v-for="index in $page.data.acf.repeaterCard.length" :key="index">
          <div class="m-auto max-w-6xl p-6 md:p-12">
            <div class="flex flex-col md:flex-row">
              <div class="md:w-1/2 max-w-md flex flex-col justify-center">
                <div class="md:text-5xl text-2xl uppercase font-black">
                  <h2>{{ $page.data.acf.repeaterCard[index - 1].title }}</h2>
                </div>
                <div class="text-xl mt-4">Contenu spécifique au service. Ce service est articulé autour de..</div>
                <g-link
                :to="
                `/nos-domaines-dexpertise/${
                  $page.data2.edges[index - 1].node.slug
                }`
                "
                >

                <div class="my-10 md:my-5 h-16">
                  <div class="text-center mx-auto green-psr text-white font-bold rounded-full mt-3 mb-3 py-4 px-8 shadow-lg">En savoir plus</div>
                </div>
              </g-link>
            </div>
            <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
              <div 
              class="bg-dots"
            
              >              
                <div class="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
                  <g-image
                  class="rounded-t"
                  :src="$page.data.acf.repeaterCard[index - 1].picture"
                  />
                  <div class="text-lg md:text-2xl p-10 bg-white"><img alt="quote" class="float-left mr-1" src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg"> {{ $page.data3.acf.repeaterCard[index - 1].repeaterParagraph[0].htmlParagraph.slice(3, -5)}} </div>
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
</div>
</Layout>
</template>

<page-query>
  query {
    data: wordPressPage(id: 490) {
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
    data2: allWordPressServices {
      edges {
        node {
          id
          slug
        }
      }
    }
    data3: wordPressPage(id: 464) {
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
  }
</page-query>



<script>
import SlotTopSection from "~/components/TopSection.vue";
import SlotBottomSection from "~/components/BottomSection.vue";
import Form from "~/components/Form.vue";
// import SvgSquareDots from "~/assets/svg/square-dots.svg"

export default {
  // data() {
  //   return {
  //     bgImage: "~/assets/svg/square-dots.svg"
  //   };
  // },
  components: {
    SlotTopSection,
    SlotBottomSection,
    Form,
    // SvgSquareDots
  },
  metaInfo: {
    title: "here add metainfo"
  },
  // computed: {
  //   filename() {
  //     const path = require('path');
  //     const scriptName = path.basename(__filename);
  //     console.log(scriptName)
  //     return scriptName
  //   }
  // },
  // methods: {
  //   getImgUrl(svgFileName) {
  //   const images = require.context('../assets/svg/', false, /\.svg$/)
  //   console.log(hello + path.basename(file));
  //   return images('./' + svgFileName + ".svg")
  // }
  // }
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