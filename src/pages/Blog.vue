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
      <section>
        <div class="my-10">
          <ul>
            <div class="grid grid-cols-2 mx-4">
              <li v-for="(item, index) in $page.data.edges" :key="index">
                <!-- <div class="container mx-auto"> -->
                <!-- 2 Rows Columns of Cards -->

                <g-link :to="`/blog/${item.node.slug}`">
                  <div class="p-4">
                    <div
                      class="flex h-64 bg-cover bg-center border-r border-t border-l border-gray-400 rounded-t text-center overflow-hidden shadow-lg"
                      :style="{
                        backgroundImage:
                          'url(' + item.node.acf.repeaterCard[0].picture + ')'
                      }"
                    ></div>

                    <div
                      class="flex h-80 border-r border-b border-l border-gray-400 bg-white rounded-b p-4 leading-normal shadow-lg border-gray-400"
                    >
                      <div class="mb-8">
                        <div class="text-gray-900 font-bold text-xl mb-2">
                          {{ item.node.title }}
                        </div>
                        <div
                          v-html="
                            item.node.acf.repeaterCard[0].repeaterParagraph[0]
                              .htmlParagraph
                          "
                          class="overflow-auto py-2 lg:text-lg lg:h-48"
                        ></div>
                        <p class="mt-6 lg:text-lg">Lire l'article</p>
                      </div>
                    </div>
                  </div>
                </g-link>

                <!-- END 2 Rows Columns of Cards -->
                <!-- </div> -->
              </li>
            </div>
          </ul>
        </div>
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
    data: allWordPressPost {
      edges {
        node {
          id
          slug
          title
          acf { 
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

export default {
  components: {
    SlotTopSection,
    SlotBottomSection,
    SvgBlog
  },
  metaInfo: {
    title: "here add metainfo"
  }
};
</script>
