<template>
  <Layout>
    <div>
      <!--Hero slots section -->
      <SlotTopSection>
        <template slot="repeatable-title-1">
          Nos réalisations
        </template>
        <template slot="repeatable-title-2">
          Des illustrations de quelques-unes des missions qui nous ont été
          confiées
        </template>
        <template slot="cta-text">
          Demander un devis
        </template>
        <template slot="form">
          <Form />
        </template>
      </SlotTopSection>


      <!-- Realisations cards - Horizontal tiles -->
      <CardGrid cardGridSlug="nos-realisations" :cardGridData="$page.realisations.edges">
        <template slot="cta-text">
          Découvrir le projet
        </template>
        </CardGrid >

      <!--Pre-footer slots section -->
      <SlotBottomSection>
        <template slot="main-text">
          Notre expertise
        </template>
        <template slot="secondary-text">
          Au service de votre projet !
        </template>
        <template slot="cta-text">
          Suggérer un article
        </template>
      </SlotBottomSection>
    </div>
  </Layout>
</template>



<page-query>
  query {
    realisations: allWordPressRealisations {
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
import SlotTopSection from "~/components/TopSection.vue";
import SlotBottomSection from "~/components/BottomSection.vue";
import SvgBlog from "~/components/svg/SvgBlog.vue";
import Form from "~/components/Form.vue";
import CardGrid from "~/components/CardGrid.vue";

export default {
  components: {
    SlotTopSection,
    SlotBottomSection,
    SvgBlog,
    Form,
    CardGrid
  },
  metaInfo: {
    title: "here add metainfo"
  }
};
</script>
