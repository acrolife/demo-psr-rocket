<template>
  <Layout>
    <div>
      <!--Hero slots section -->
      <SlotTopSection>
        <template slot="repeatable-title-1">
          Le blog de PSR
        </template>
        <template slot="repeatable-title-2">
          Une base de connaissance issue des questions de nos clients
        </template>
        <template slot="cta-text">
          Suggérer un article
        </template>
        <template slot="form">
          <SvgBlog class="block mt-8" />
        </template>
      </SlotTopSection>

      <!-- <SvgBlog class="mt-10 -mb-6 md:mb-0 w-auto md:h-0 flex justify-center md:hidden" /> -->

      <!-- Artiles cards - Horizontal tiles -->
      <CardGrid cardGridSlug="le-blog" :cardGridData="$page.posts.edges">
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
    posts: allWordPressPost {
      edges {
        node {
          id
          slug
          title
          acf { 
            topImage2
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
