<template>
  <Layout>
    <Service
      :service="$page.service"
      :realisations="$page.realisations"
      :services="$page.services"
      :pageservices="$page.pageservices"
      :pageaccueil="$page.pageaccueil"
      :reproduciblebannerqual="$page.reproduciblebannerqual"
    />
  </Layout>
</template>

<page-query>
query ($serviceId: ID!) {
	 service: wordPressServices (id: $serviceId) {
    slug
    id
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
  realisations: allWordPressRealisations {
      edges {
        node {
          id
          slug
          title
          acf {
            dateEnd
            repeaterCard { 
            	repeaterParagraph { 
              htmlParagraph
              }
            }
          }
        }
      }
    } 
  services: allWordPressServices {
      edges {
        node {
          id
          slug
        }
      }
    }
  pageaccueil: wordPressPage(id: 464) {
 					acf {     
          repeaterCard {
            ctaText
            picture
          	repeaterParagraph { 
              htmlParagraph
            }
            title            
          } 
        }
      }
  pageservices: wordPressPage(id: 490) {
      acf {
        repeaterCard {
          title
          picture
        }
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
import Service from "~/components/Service.vue";

export default {
  components: {
    Service
  }
  // metaInfo () {
  //   return {
  //     title: this.$page.allWordPressServices.title
  //   }
  // }
};
</script>
