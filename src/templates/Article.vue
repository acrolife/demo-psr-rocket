
<template>
  <Layout>
      <Article :post="$page.wordPressPost" />
  </Layout>
</template>

<page-query>
query Post ($postId: ID!) {
	 wordPressPost (id: $postId) {
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
