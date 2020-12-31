
<template>
  <Layout>
      <Article :post="$page.article" :posts="$page.articles" :reproduciblebannerqual="$page.reproduciblebannerqual" />
  </Layout>
</template>

<page-query>
query ($postId: ID!) {
	 article: wordPressPost (id: $postId) {
          slug
    			id
          title
          date
          author {
            name
          }
          acf {  
         		repeaterCard {
            ctaText
            picture
          	repeaterParagraph { 
              htmlParagraph
            }
            title            
          } 
          lcTitle
          lcContent
          repeaterLink {              
              textBeforeLink      
              link {  
                title          
                target                    
              }
            }
          tbpTitle
          tbpContent
          tbpPageLink
      		} 
   }
  articles: allWordPressPost {
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
import Article from "~/components/Article.vue";

export default {
  components: {
    // Pager,
    Article
  }
  // metaInfo () {
  //   return {
  //     title: this.$page.allWordPressPost.title
  //   }
  // }
};
</script>
