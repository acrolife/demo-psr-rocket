<template>
  <Layout>
      <Service :service="$page.wordPressServices" />
  </Layout>
</template>

<page-query>
query Service ($serviceId: ID!) {
	 wordPressServices (id: $serviceId) {
    slug
    id
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
          mcTitle
          mcRepeaterParagraph { 
            paragraph
          	title            
          }
          mcTitle2          
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
          trpContent
          trpPageLink
          trpTitle
          bottomCtaTextCopy
        }
  }
}
</page-query>

<!--
<page-query>
query {
  data : ($serviceId: ID!) {
	 wordPressServices (id: $serviceId) {
    slug
    id
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
          mcTitle
          mcRepeaterParagraph { 
            paragraph
          	title            
          }
          mcTitle2          
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
          trpContent
          trpPageLink
          trpTitle
          bottomCtaTextCopy
        }
    } 
  }
  data2: allWordPressRealisations {
      edges {
        node {
          id
          slug
          title
          acf {
            topImage
            repeaterCard { 
            	repeaterParagraph { 
              htmlParagraph
              }
            }
          }
        }
      }
    }
}
</page-query>
-->

<script>
import { Pager } from "gridsome";
import Service from "~/components/Service.vue";

export default {
  components: {
    Pager,
    Service
  }
  // metaInfo () {
  //   return {
  //     title: this.$page.allWordPressServices.title
  //   }
  // }
};
</script>
