
<template>
  <Layout>
      <Article :post="$page.article" :posts="$page.articles" />
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
