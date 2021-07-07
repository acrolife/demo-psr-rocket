<template>
  <Layout>
    <div>
      <div>Banner 1</div>

      <div class="text-3xl font-bold text-purple-600">repeaterCard</div>
      <!-- <div> {{reproducible.acf.repeaterCard.length}} </div> -->
      <ul>
        <li v-for="index in $page.banner1.acf.repeaterCard.length" :key="index">
          <p class="text-xl font-bold text-purple-600">Card {{ index }}</p>
          <div class="text-xl font-bold text-purple-600">
            repeaterCard[{{ index - 1 }}].title
          </div>
          <div v-html="$page.banner1.acf.repeaterCard[index - 1].title"></div>
          <div class="text-xl font-bold text-purple-600">
            repeaterCard[{{ index - 1 }}].picture
          </div>
          <g-image
            class="h-32 w-1/4 object-cover"
            :src="$page.banner1.acf.repeaterCard[index - 1].picture"
            v-if="$page.banner1.acf.repeaterCard[index - 1].picture"
          />
          <div v-else>No image to display</div>
          <ul>
            <li
              v-for="index2 in $page.banner1.acf.repeaterCard[index - 1]
                .repeaterParagraph.length"
              :key="index2"
            >
              <div class="text-xl font-bold text-purple-600">
                repeaterCard[{{ index - 1 }}].repeaterParagraph[
                {{ index2 - 1 }}
                ].htmlParagraph
              </div>
              <div
                v-html="
                  $page.banner1.acf.repeaterCard[index - 1].repeaterParagraph[
                    index2 - 1
                  ].htmlParagraph
                "
              ></div>
              <br />
            </li>
          </ul>
        </li>
      </ul>
      <br />
      <br />
      <br />
      <div>Banner 2</div>

      <div class="text-3xl font-bold text-purple-600">repeaterCard</div>
      <!-- <div> {{$page.banner2.acf.repeaterCard.length}} </div> -->
      <ul>
        <li v-for="index in $page.banner2.acf.repeaterCard.length" :key="index">
          <p class="text-xl font-bold text-purple-600">Card {{ index }}</p>
          <div class="text-xl font-bold text-purple-600">
            repeaterCard[{{ index - 1 }}].title
          </div>
          <div v-html="$page.banner2.acf.repeaterCard[index - 1].title"></div>
          <div class="text-xl font-bold text-purple-600">
            repeaterCard[{{ index - 1 }}].picture
          </div>
          <g-image
            class="h-32 w-1/4 object-cover"
            :src="$page.banner2.acf.repeaterCard[index - 1].picture"
            v-if="$page.banner2.acf.repeaterCard[index - 1].picture"
          />
          <div v-else>No image to display</div>
          <ul>
            <li
              v-for="index2 in $page.banner2.acf.repeaterCard[index - 1]
                .repeaterParagraph.length"
              :key="index2"
            >
              <div class="text-xl font-bold text-purple-600">
                repeaterCard[{{ index - 1 }}].repeaterParagraph[
                {{ index2 - 1 }}
                ].htmlParagraph
              </div>
              <div
                v-html="
                  $page.banner2.acf.repeaterCard[index - 1].repeaterParagraph[
                    index2 - 1
                  ].htmlParagraph
                "
              ></div>
              <br />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
  query { 
    banner1: wordPressReproducible (id: 567) { 
          acf {
            repeaterCard { 
              title
              repeaterParagraph { 
                htmlParagraph                
              }
              picture
              ctaText
            }
         }
      }   
    banner2: wordPressReproducible (id: 566) { 
          acf {
            repeaterCard { 
              title
              repeaterParagraph { 
                htmlParagraph                
              }
              picture
              ctaText
            }
         }
      } 
    }
  </page-query>

