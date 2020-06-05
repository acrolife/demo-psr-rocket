
<template>
  <Layout>
      <Realisation :realisation="$page.wordPressRealisations" />
  </Layout>
</template>

<page-query>
query Realisation ($realisationId: ID!) {
	 wordPressRealisations (id: $realisationId) {
          slug
    			id
				  acf {  
            topImage
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
}
</page-query>

<script>
// import { Pager } from "gridsome";
import Realisation from "~/components/Realisation.vue";

export default {
  components: {
    // Pager,
    Realisation
  }
  // metaInfo () {
  //   return {
  //     title: this.$page.allWordPressRealisations.title
  //   }
  // }
};
</script>
