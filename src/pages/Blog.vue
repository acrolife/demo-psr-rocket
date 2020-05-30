<template>
  <Layout>
    <div>
      <!--Hero slots section -->
      <SlotTopSection>
        <template slot="repeatable-title-1">
          Le blog de PSR
        </template>
        <template slot="repeatable-title-2">
          Some text pulled
        </template>
        <template slot="cta-text">
          Suggérer un article
        </template>
        <template slot="form">
          <SvgBlog class="hidden md:block" />
        </template>
      </SlotTopSection>

      <SvgBlog class="p-10 md:hidden md:p-0" />

      <!-- Artiles cards - Horizontal tiles -->
      <CardGrid cardGridSlug="blog" :cardGridData="$page.data.edges">
        <template slot="cta-text">
          Lire l'article
        </template>
      </CardGrid>

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
    data: allWordPressPost {
      edges {
        node {
          id
          slug
          title
          acf { 
            topImage
            repeaterCard { 
              picture
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
import CardGrid from "~/components/CardGrid.vue";

export default {
  components: {
    SlotTopSection,
    SlotBottomSection,
    SvgBlog,
    CardGrid
  },
  metaInfo: {
    title: "here add metainfo"
  }
};
</script>
