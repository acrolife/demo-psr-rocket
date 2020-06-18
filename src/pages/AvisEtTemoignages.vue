<template>
  <Layout>
    <div>
      <!--Hero slots section -->
      <SlotTopSection :noCtaButton="true">
        <template slot="repeatable-title-1">
          Avis et témoignages
        </template>
        <template slot="repeatable-title-2">
          Nos clients et collaborateurs s'expriment au sujet d'une prestation de
          PSR
        </template>
        <template slot="form">
          <div class="flex justify-center hidden md:block">
            <g-image
              class="my-10 rounded-lg"
              src="https://psr2222.creativityquarks.com/wp-content/uploads/2020/06/undraw_status_update_jjgk.png"
            />
          </div>
        </template>
      </SlotTopSection>

      <!-- <SvgBlog class="p-10 md:hidden md:p-0" /> -->
      <div class="p-10 md:hidden md:p-0">
        <g-image
          class="my-10 rounded-lg"
          src="https://psr2222.creativityquarks.com/wp-content/uploads/2020/06/undraw_status_update_jjgk.png"
        />
      </div>

      <!-- Reviews & Témoignages -->
      <section>
        <!-- Reviews -->
        <h2
          class="w-full px-2 pt-10 mb-2 text-4xl font-bold leading-tight text-center text-gray-800 xl:text-5xl"
        >
          Les mots de nos clients et partenaires
        </h2>

        <!-- Underline title -->
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
        </div>
        <ul>
          <div class="mt-10 mb-20">
            <div
              class="sm:mx-36 md:grid md:grid-cols-2 md:gap-3 md:mx-8 lg:grid-cols-3 lg:gap-1 lg:mx-4 xl:mx-16 xl:gap-2 xl:max-w-screen-xl xl:mx-auto"
            >
              <li v-for="review in reviewsArray" :key="review.id">
                <Review :review="review.node" />
                <!-- <Temoignage
                :temoignage="temoignage.node"
                :shortOrCardClass="
                  shortOrCardClass(temoignage.node.acf.cpkSelector)
                "
              /> -->
              </li>
            </div>
          </div>
        </ul>

        <!-- Témoignages -->
        <h2
          class="w-full px-2 pt-10 mb-2 text-4xl font-bold leading-tight text-center text-gray-800 xl:text-5xl"
        >
          Autres témoignages
        </h2>

        <!-- Underline title -->
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
        </div>
        <ul>
          <div class="mt-10 mb-20">
            <div
              class="sm:mx-36 md:grid md:grid-cols-2 md:gap-3 md:mx-8 lg:grid-cols-3 lg:gap-1 lg:mx-4 xl:mx-16 xl:gap-2 xl:max-w-screen-xl xl:mx-auto"
            >
              <li v-for="temoignage in temoignagesArray" :key="temoignage.id">
                <Temoignage :temoignage="temoignage.node" />
                <!-- <Temoignage
                :temoignage="temoignage.node"
                :shortOrCardClass="
                  shortOrCardClass(temoignage.node.acf.cpkSelector)
                "
              /> -->
              </li>
            </div>
          </div>
        </ul>
      </section>

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
   temoignages: allWordPressTemoignages (sortBy: "pSelecto", order: DESC) {
      edges {
        node {
          id
          slug
         acf {  
            pSelecto
            cpkSelector
  					pwcTitle
          	pwcImage
            pwcIcon
          	pwcRepeaterContent { paragraph }          
          	pwcSignature
          	pwcCtaText
            lcTitle
            lcContent 
  					repeaterLink {               
              textBeforeLink
              link { 
                title
                target            
              }
            }
            order
          }
        }
      }
    }  
    reviews: allWordPressReview (sortBy: "relation", order: ASC) {
      edges {
        node {
          id
          slug
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
          } 
        } 
      }
    }
  }
</page-query>



<script>
import SlotTopSection from "~/components/TopSection.vue";
import SlotBottomSection from "~/components/BottomSection.vue";
// import SvgBlog from "~/components/svg/SvgBlog.vue";
import Temoignage from "~/components/Temoignage.vue";
import Review from "~/components/Review.vue";

export default {
  data() {
    return {
      temoignagesArray: [],
      reviewsArray: []
    };
  },
  components: {
    SlotTopSection,
    SlotBottomSection,
    // SvgBlog,
    Temoignage,
    Review
  },
  metaInfo: {
    title: "here add metainfo"
  },
  created() {
    this.temoignagesArray = this.$page.temoignages.edges.sort(
      (a, b) => a.node.acf.order - b.node.acf.order
    );
    this.reviewsArray = this.$page.reviews.edges
    .filter( (item) => item.node.acf.validated )
    .sort(
      (a, b) => a.node.acf.order - b.node.acf.order
    );
    // console.log(this.temoignagesArray);
    // this.temoignagesArray.map(item => console.log(JSON.stringify(item.node.acf.order)));
  }
};
</script>
