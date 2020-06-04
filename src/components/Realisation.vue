<template>
  <div class="gradient pt-12">
    <!--Hero slots -->
    <SlotTopSection>
      <template slot="repeatable-title-1">
        Nos réalisations
      </template>
      <template slot="cta-text">
        J'ai un projet similaire
      </template>
      <template slot="form">
        <g-image
          class="h-64 object-cover rounded-lg opacity-75"
          :src="realisation.acf.topImage"
          v-if="realisation.acf.topImage"
        />
      </template>
    </SlotTopSection>

    <section class="bg-white flex justify-center py-8">
      <div class="p-4 w-full sm:w-3/4 md:max-w-xl">
        <!-- <div
          class="flex h-64 bg-cover bg-center border-r border-t border-l border-gray-400 rounded-t text-center overflow-hidden shadow-lg"
          :style="{
            backgroundImage: 'url(' + realisation.acf.topImage + ')'
          }"
        ></div> -->

        <div
          class="flex border border-gray-400 bg-white rounded p-4 leading-normal shadow-lg border-gray-400 justify-center"
        >
          <!-- <div
          class="flex h-28 border-r border-b border-l border-gray-400 bg-white rounded-b p-4 leading-normal shadow-lg border-gray-400 justify-center"
        > -->
          <div class="flex flex-col my-4 text-gray-800">
            <div class="flex flex-col pb-2 lg:text-lg lg:h-48">
              <div class="flex mb-2">
                <p class="pr-1 rounded bg-teal-200 py-1 px-2">
                  Informations au sujet du chantier
                </p>
              </div>
              <div class="flex-cols">
                <p class="pl-1 pr-1">Nom du chantier:</p>
                <p class="font-bold">{{ realisation.acf.name }}</p>
              </div>
              <div class="flex">
                <p class="pl-1 pr-1">Ayant eu lieu à</p>
                <p class="font-bold">{{ realisation.acf.place }}</p>
              </div>
              <div class="flex">
                <p class="pl-1 pr-1">Débutée le</p>
                <p class="font-bold">{{ realisation.acf.dateStart }}</p>
              </div>
              <div class="flex">
                <p class="pl-1 pr-1">Cloturée le</p>
                <p class="font-bold">{{ realisation.acf.dateEnd }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section tiles service instance -->
    <BaseBlocks
      :title="
        'Réalisation ' +
          realisation.acf.dateStart.slice(-4, realisation.acf.dateStart.length)
      "
      :repeaterCard="realisation.acf.repeaterCard"
    />

    <!-- <div class="bg-white border-b pt-8 pb-4">
      <div class=" max-w-5xl mx-auto xl:max-w-6xl">
        <CustomCarousel>
          <slot name="slidesServ">
            <div
              v-for="(item, index) in realisation.acf.repeaterCard.rGallery"
              :key="index"
            >
            hello
              <img :src="item.repeaterImages" />
            </div>
          </slot>
          <slot name="caption"></slot>
          <template slot="caption">
          <slot name="captionServ"></slot>
        </template>
        </CustomCarousel>
      </div>
    </div> -->

    <GalleryGrid :gallery="realisation.acf.rGallery" />

    <!-- <div v-if="realisation.acf.cpkSelector === 'short'">Pas de suite</div> -->

    <div class="text-3xl font-bold text-purple-600">repeaterCollaborateur</div>
    <ul>
      <li
        v-for="index in realisation.acf.repeaterCollaborateur.length"
        :key="index"
      >
        <div
          v-html="
            realisation.acf.repeaterCollaborateur[index - 1].collaborateur
          "
        ></div>
      </li>
    </ul>

    <div class="text-3xl font-bold text-purple-600">Link Card</div>
    <div class="text-xl font-bold text-purple-600">lcTitle</div>
    <div v-html="realisation.acf.lcTitle"></div>
    <div class="text-xl font-bold text-purple-600">lcContent</div>
    <div v-html="realisation.acf.lcContent"></div>
    <div class="text-xl font-bold text-purple-600">repeaterLink</div>
    <ul>
      <li v-for="index in realisation.acf.repeaterLink.length" :key="index">
        <p class="text-xl font-bold text-purple-600">
          Link Instance {{ index }}
        </p>
        <div class="text-xl font-bold text-purple-600">
          repeaterLink[{{ index - 1 }}].textBeforeLink
        </div>
        <div
          v-html="realisation.acf.repeaterLink[index - 1].textBeforeLink"
        ></div>
        <ul>
          <li
            v-for="index2 in realisation.acf.repeaterLink[index - 1].link
              .length"
            :key="index2"
          >
            <div class="text-xl font-bold text-purple-600">
              repeaterLink[{{ index - 1 }}].link[
              {{ index2 - 1 }}
              ].htmlParagraph
            </div>
            <div
              v-html="
                realisation.acf.repeaterLink[index - 1].link[index2 - 1].title
              "
            ></div>
            <div
              v-html="
                realisation.acf.repeaterLink[index - 1].link[index2 - 1].target
              "
            ></div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import SlotTopSection from "~/components/TopSection.vue";
import BaseBlocks from "~/components/BaseBlocks.vue";
import GalleryGrid from "~/components/GalleryGrid.vue";
import CustomCarousel from "~/components/CustomCarousel.vue";

export default {
  components: {
    SlotTopSection,
    BaseBlocks,
    GalleryGrid,
    CustomCarousel
  },
  props: {
    realisation: {
      type: Object,
      required: true
    }
  }
};
</script>


<!--
<div>Dav put condition on top image to make it robust... => made the field required</div> 
    -->
<!--
Bumped on a stupid limitation of graphQL+WP. When the first image of a query comes with the value "false" because the field is empty, on purpose.. well then GraphQL decides the field is a Boolean :man-facepalming::skin-tone-4: then you're f***** for the rest of your images in this build : QQL trhows the error (visible in GraphiQL, and GS shows an error stating that he can't display an image whith a boolean variable. Only solution I found, is to put a dummy image on the first instance (of realisation, here) OR a strict condition like "required field" but you don't have images all the times in realisations.. altouhght maybe this one would be better, and more robust/relibale, and after all, if the client/Eric just explains the realisation without any picture what the point (I have such examples in the end oof the page "realisations" on ps-renovation.com. The weirdness of it is that it occurs only when the first image GQL "sees", is "false"...  mmm thinking deeeper, there should be a way to make it more robust changing the source-wp code to output something else than false if no image or change graphql ccode to deal better with the value false..  or simply not assuming the type of the field based on its value, if value if false..
-->