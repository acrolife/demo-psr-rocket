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
        <ul>
          <li v-for="(item, index) in $page.data.edges" :key="index">
            <div class="container mx-auto">
              <!-- horizontal-card -->

              <div v-if="index % 2">
                <!-- v-if Flip image and content in the card -->
                <g-link :to="`/blog/${item.node.slug}`">
                  <div
                    class="mx-3 md:mx-0 md:w-full md:flex md:justify-center my-8"
                  >
                    <div
                      class="flex h-80 bg-contain bg-no-repeat bg-center bg-center border-r border-t border-l border-gray-400 rounded-t md:rounded-t-none text-center overflow-hidden shadow-lg md:border-l-0 md:border-b md:rounded-l md:w-1/3 md:bg-cover lg:h-96"
                      :style="{
                        backgroundImage:
                          'url(' + item.node.acf.repeaterCard[0].picture + ')'
                      }"
                      v-if="true"
                      title="dynamic title to put here CHECK"
                    ></div>
                    <div v-else>Oups, désolé, l'image n'apparaît pas !</div>

                    <div
                      class="flex h-80 border-r border-b border-l border-gray-400 bg-white rounded-b p-4 leading-normal shadow-lg md:border-l-0 md:border-t md:border-gray-400 md:rounded-b-none md:rounded-r md:w-1/3 lg:h-96"
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
                          class="overflow-auto h-32 py-2 lg:text-lg lg:h-48"
                        ></div>
                        <p class="mt-6 lg:text-lg">Lire l'article</p>
                      </div>
                    </div>
                  </div>
                </g-link>
              </div>

              <div v-else>
                <!-- v-else : Flip image and content in the card for md screen -->
                <g-link :to="`/blog/${item.node.slug}`">
                  <div
                    class="mx-3 md:mx-0 md:w-full md:flex md:justify-center my-8 md:flex-row-reverse flex-wrap"
                  >
                    <div
                      class="flex h-80 bg-contain bg-no-repeat bg-center bg-center border-r border-t border-l border-gray-400 rounded-t text-center overflow-hidden shadow-lg md:border-l-0 md:border-b md:rounded-t-none md:rounded-r md:w-1/3 lg:h-96"
                      :style="{
                        backgroundImage:
                          'url(' + item.node.acf.repeaterCard[0].picture + ')'
                      }"
                      v-if="true"
                      title="dynamic title to put here CHECK"
                    ></div>
                    <div v-else>Oups, désolé, l'image n'apparaît pas !</div>

                    <div
                      class="h80 flex md:w-1/3 border-r border-b border-l border-gray-400  bg-white rounded-b p-4 leading-normal shadow-lg md:rounded-b-none md:rounded-l md:border-r-0 md:border-t md:bg-cover lg:h-96"
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
                          class="overflow-auto h-32 py-2 lg:text-lg lg:h-48"
                        ></div>
                        <div class="mt-6 lg:text-lg">Lire l'article</div>
                      </div>
                    </div>
                  </div>
                </g-link>
              </div>
              <!-- END horizontal-card -->
            </div>
          </li>
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
