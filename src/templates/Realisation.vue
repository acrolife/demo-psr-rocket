
<template>
  <Layout>
    <Realisation
      :realisation="$page.realisation"
      :realisations="$page.realisations"
      :reproduciblebannerqual="$page.reproduciblebannerqual"
    />
  </Layout>
</template>

<page-query>
query ($realisationId: ID!) {
	 realisation: wordPressRealisations (id: $realisationId) {
          slug
    			id
				  acf {  
            topImage2
            landscapeImage
            name
            cpkSelector            
            place
      			service
      			dateStart
            dateEnd           
        		repeaterCard { 
              title
              repeaterParagraph { 
                htmlParagraph            		
              }
            	picture
            	ctaText
            }
            rGallery {
              repeaterImages
            }
            repeaterCollaborateur {
              collaborateur
            } 
            lcTitle
            lcContent 
  					repeaterLink {               
              textBeforeLink
              link { 
                title
                url
                target            
            }
          }
        }
  }
  realisations: allWordPressRealisations {
      edges {
        node {    
          id      
          slug
          title
          acf {
            topImage2
            repeaterCard { 
            	repeaterParagraph { 
              htmlParagraph
              }
            }
          }
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
// import { Pager } from "gridsome";
import Realisation from "~/components/Realisation.vue";

export default {
  components: {
    // Pager,
    Realisation,
  },
  // metaInfo () {
  //   return {
  //     title: this.$page.allWordPressRealisations.title
  //   }
  // }
};
</script>
