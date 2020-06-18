
<template>
  <Layout>
      <VotreAvisCompte :review="$page.review" />
  </Layout>
</template>

<page-query>
query ($reviewId: ID!) {
	 review: wordPressReview (id: $reviewId) {
    			id
          acf {
            order
            title
            review
            name
            structure
            relation
            picture   
            avatar
            stars
            validated
            token
          } 
   }  
  }
</page-query>

<script>
// import { Pager } from "gridsome";
import VotreAvisCompte from "~/components/VotreAvisCompte.vue";

export default {
  components: {
    VotreAvisCompte
  }
};
</script>
