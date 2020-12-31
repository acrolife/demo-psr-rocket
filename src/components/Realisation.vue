<template>
  <!-- <div v-if="realisation.acf.cpkSelector === 'short'">Pas de suite</div> -->
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
        <div class="flex justify-center">
          <g-image
            class="h-64 object-cover rounded-lg border border-white border-1"
            :src="realisation.acf.landscapeImage"
            v-if="realisation.acf.landscapeImage"
          />
        </div>
      </template>
    </SlotTopSection>

    <!-- Section tiles realisation instance -->
    <BaseBlocks
      :title="
        'Une réalisation ' +
          realisation.acf.dateStart.slice(-4, realisation.acf.dateStart.length)
      "
      :repeaterCard="realisation.acf.repeaterCard"
    />

    <!-- Section tiles carousel !! -->
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

    <GalleryGrid
      :gallery="realisation.acf.rGallery"
      v-if="realisation.acf.rGallery.length !== 0"
    />

    <!-- Tiles section -->
    <section class="bg-white py-8">
      <h2
        class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800 xl:text-5xl"
      >
        Quelques détails...
      </h2>

      <!-- Underline for h1 -->
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
      </div>
      <div
        class="p-6 grid grid-cols-1 md:grid-cols-2 md:gap-6 md:w-4/5 md:mx-auto lg:w-3/4 xl:w-2/3"
      >
        <!-- Tile 1 : infos chantier -->
        <div class="py-4 sm:w-2/3 sm:mx-auto md:w-full md:mx-0 md:py-0">
          <div
            class="flex h-full border border-gray-400 bg-white rounded p-4 leading-normal shadow-lg border-gray-400 justify-left px-4 md:px-10 pb-10"
          >
            <div class="flex flex-col mt-4 mb-10 text-gray-800">
              <div class="flex flex-col pb-2 lg:text-lg lg:h-48">
                <div class="flex mb-2">
                  <p class="pr-1 rounded bg-teal-200 py-1 px-2">
                    Informations au sujet du chantier
                  </p>
                </div>
                <div class="flex flex-wrap">
                  <p class="pl-1 pr-1">Nom du chantier:</p>
                  <p class="font-bold">{{ realisation.acf.name }}</p>
                </div>
                <div class="flex flex-wrap">
                  <p class="pl-1 pr-1">Ayant eu lieu à</p>
                  <p class="font-bold">{{ realisation.acf.place }}</p>
                </div>
                <div class="flex flex-wrap">
                  <p class="pl-1 pr-1">Débutée le</p>
                  <p class="font-bold">{{ realisation.acf.dateStart }}</p>
                </div>
                <div class="flex flex-wrap">
                  <p class="pl-1 pr-1">Cloturée le</p>
                  <p class="font-bold">{{ realisation.acf.dateEnd }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tile 2 : collaborateurs -->
        <div
          class="py-4 sm:w-2/3 sm:mx-auto md:w-full md:mx-0 md:py-0"
          v-if="realisation.acf.repeaterCollaborateur.length !== 0"
        >
          <div
            class="flex h-full border border-gray-400 bg-white rounded p-4 leading-normal shadow-lg border-gray-400 justify-left px-4 md:px-10 pb-6"
          >
            <div class="flex flex-col mt-4 mb-10 text-gray-800">
              <div class="flex flex-col pb-2 lg:text-lg lg:h-48">
                <div class="flex mb-2">
                  <p class="pr-1 rounded bg-teal-200 py-1 px-2">
                    Références et liens
                  </p>
                </div>
                <ul>
                  <li
                    v-for="(collaborateurArray, index) in realisation.acf
                      .repeaterCollaborateur"
                    :key="index"
                  >
                    <div class="flex">
                      <p class="pl-1 pr-1">Collaborateur(s):</p>
                      <a
                        class="font-thin text-teal-500 hover:font-bold"
                        :href="collaborateurArray.collaborateur"
                      >
                        ce lien</a
                      >
                    </div>
                  </li>
                </ul>
                <p class="pl-1">{{ realisation.acf.lcTitle }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Tile 3 : links -->
        <div
          class="py-4 sm:w-2/3 sm:mx-auto md:w-full md:mx-0 md:py-0"
          v-if="realisation.acf.lcTitle"
        >
          <div
            class="flex h-full border border-gray-400 bg-white rounded p-4 leading-normal shadow-lg border-gray-400 justify-left px-4 md:px-10 pb-6"
          >
            <div class="flex flex-col mt-4 mb-10 text-gray-800">
              <div class="flex flex-col pb-2 lg:text-lg lg:h-48">
                <div class="flex mb-2">
                  <p class="pr-1 rounded bg-teal-200 py-1 px-2">
                    {{ realisation.acf.lcTitle }}
                  </p>
                  <p class="pr-1" v-if="realisation.acf.lcContent">
                    {{ realisation.acf.lcContent }}
                  </p>
                </div>
                <ul>
                  <li
                    v-for="(item, index) in realisation.acf.repeaterLink"
                    :key="index"
                  >
                    <div class="flex flex-cols">
                      <p class="pl-1 pr-1">{{ item.textBeforeLink }}</p>
                      <a
                        class="font-thin text-teal-500 hover:font-bold"
                        :href="item.link.url"
                        >{{ item.link.title }}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- H2 & Card Menu section -->
    <CardGridMenuOthers
      cardGridMenuOthersSlug="nos-realisations"
      :cardGridMenuOthersData="realisationsSelection"
      @gen-rdn-rea-array="genRdnReaArray"
    >
      <template slot="title">
        Autres réalisations
      </template>
      <template slot="cta-text">
        Découvrir
      </template>
    </CardGridMenuOthers>

    <!--Pre-footer slots section -->
    <SlotBottomSection>
      <template slot="main-text">
        Notre expertise
      </template>
      <template slot="secondary-text">
        Au service de votre projet !
      </template>
      <template slot="cta-text">
        Demander un devis
      </template>
    </SlotBottomSection>
  </div>
</template>

<script>
import SlotTopSection from "~/components/TopSection.vue";
import SlotBottomSection from "~/components/BottomSection.vue";
import BaseBlocks from "~/components/BaseBlocks.vue";
import GalleryGrid from "~/components/GalleryGrid.vue";
import CardGridMenuOthers from "~/components/CardGridMenuOthers.vue";
// import CustomCarousel from "~/components/CustomCarousel.vue";

export default {
  data() {
    return {
      reaArrayIndex: [],
      nbOfIndexes: 4,
      rdnArrayIndexLength: 10,
      realisationsSelection: []
    };
  },
  components: {
    SlotTopSection,
    SlotBottomSection,
    BaseBlocks,
    GalleryGrid,
    CardGridMenuOthers
    // CustomCarousel
  },
  props: {
    realisation: {
      type: Object,
      required: true
    },
    realisations: {
      type: Object,
      required: true
    }
  },
  methods: {
    // Réalisations array : random selection of 3 elements (4, minus a possible duplicate from the current article)
    genRdnReaArray(cardId = this.realisation.id) {
      // console.log("From parent, generate random array");
      const reaArrayIndexLocal = [...Array(this.rdnArrayIndexLength)].map(_ =>
        Math.floor(Math.random() * this.realisations.edges.length)
      );
      const indexSelector = [...Array(this.nbOfIndexes).keys()];
      this.reaArrayIndex = [
        ...new Set(reaArrayIndexLocal)
      ].filter((item, index) => indexSelector.includes(index));
      this.realisationsSelection = this.realisations.edges.filter(
        (realisationItem, index) =>
          this.reaArrayIndex.includes(index) &&
          realisationItem.node.id !== cardId
      );
      // console.log("From parent, cardId =" + cardId);
      // console.log(this.realisationsSelection.map(item => item.node.id))
      this.realisationsSelection =
        this.realisationsSelection.length > 3
          ? this.realisationsSelection.slice(0, 3)
          : this.realisationsSelection;
      // console.log(this.realisationsSelection.map(item => item.node.id));
    }
  },
  created() {
    this.genRdnReaArray();
  }
};
</script>
