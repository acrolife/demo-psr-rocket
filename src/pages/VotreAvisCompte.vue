    
<template>
  <Layout>
    <div>
      <!--Hero slots section -->
      <SlotTopSection class="pt-12" :noCtaButton="true">
        <template slot="repeatable-title-1">
          Bienvenue!
        </template>
        <template slot="repeatable-title-2">
          Ce page est conçue pour permettre à un client ou partenaires de
          rédiger un avis au sujet d'une prestation de PSR.
        </template>
        <!-- <template slot="cta-text">
          Confier un projet à PSR
        </template> -->
        <template slot="form">
          <div class="flex justify-center">
            <g-image
              class="my-10 rounded-lg"
              src="https://psr2222.creativityquarks.com/wp-content/uploads/2020/06/undraw_status_update_jjgk.png"
            />
          </div>
        </template>
      </SlotTopSection>

      <div class="flex justify-center mt-12">
        <div class="my-10 w-full mx-4 md:mx-0 md:w-3/5">
          <div
            class="w-full bg-gray-200 border rounded-lg py-3 px-4 mb-3 leading-tight"
          >
            <form
              name="review"
              method="post"
              v-on:submit.prevent="onSendReview"
              action="https://vuejs.org/"
              class="w-full"
            >
              <!-- Welcome bots, there you go -->
              <!-- <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label> Don’t fill this out: <input name="bot-field" /> </label>
      </p> -->
              <!-- End of the bots stuff -->

              <div
                class="block uppercase tracking-wide text-gray-600 text-lg font-bold mb-6"
              >
                Mon avis
              </div>

              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full px-3 mb-0 md:mb-0">
                  <!-- Nom -->
                  <div class="my-4">
                    <label
                      for="name"
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                      Nom / Raison sociale
                    </label>
                    <input
                      type="text"
                      name="name"
                      v-model="formData.fields.name"
                      placeholder="Jean Dumont"
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    />
                  </div>

                  <!-- Avis -->
                  <div class="flex flex-wrap my-6 -mx-3">
                    <div class="w-full px-3 mb-2 md:mb-0">
                      <label
                        for="review"
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >Mon avis en quelques mots
                      </label>
                      <textarea
                        name="review"
                        v-model="formData.fields.review"
                        placeholder="Ce que j'ai pensé de la prestation de PSR..."
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-32"
                      ></textarea>
                      <p class="text-gray-600 text-xs italic">
                        Il s'agit d'un texte d'une longueur entre en une phrase
                        et 500 caractères.
                      </p>
                    </div>
                  </div>

                  <!--  Structure-->
                  <div class="flex flex-wrap my-6 -mx-3">
                    <div class="w-full px-3 mb-2 md:mb-0">
                      <label
                        for="review"
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >Je suis ou représente :
                      </label>
                      <div class="flex justify-center">
                        <div class="mx-3">
                          <input
                            class="mx-2"
                            type="radio"
                            id="particulier"
                            value="particulier"
                            v-model="formData.fields.structure"
                          />
                          <label for="particulier">un particulier</label>
                        </div>
                        <div class="mx-3">
                          <input
                            class="mx-2"
                            type="radio"
                            id="entreprise"
                            value="entreprise"
                            v-model="formData.fields.structure"
                          />
                          <label for="entreprise">une société</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Relation -->
                  <div class="flex flex-wrap my-6 -mx-3">
                    <div class="w-full px-3 mb-2 md:mb-0">
                      <label
                        for="review"
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >Mon rapport à PSR :
                      </label>
                      <div class="flex justify-center">
                        <div class="mx-3">
                          <input
                            class="mx-2"
                            type="radio"
                            id="client"
                            value="client"
                            v-model="formData.fields.relation"
                          />
                          <label for="client">je suis un client</label>
                        </div>
                        <div class="mx-3">
                          <input
                            class="mx-2"
                            type="radio"
                            id="partenaire"
                            value="partenaire"
                            v-model="formData.fields.relation"
                          />
                          <label for="partenaire">
                            je suis un partenaire</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Relation -->
                  <div class="my-6">
                    <label
                      for="titre"
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold -mb-2"
                      >Note</label
                    >
                    <div class="flex justify-center mb-2">
                      <StarRating
                        :increment="0.5"
                        :rating="4.5"
                        :show-rating="false"
                        @rating-selected="setRating"
                      ></StarRating>
                    </div>
                    <div class="text-gray-600 mt-4 mb-2" v-html="ratingComment"></div>
                    <p class="text-gray-600 text-xs italic">
                      N'hésitez pas à être généreux, cette note aidera de futur
                      clients à faire confiance à PSR ! 😊
                    </p>
                  </div>

                  <!-- Avatar -->
                  <!-- <div class="my-6">
                    <label
                      for="titre"
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >Valeur</label
                    >
                    <input
                      type="titre"
                      name="titre"
                      v-model="formData.fields.titre"
                      placeholder="Titre pour mon avis"
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    />
                  </div> -->
                </div>
              </div>

              <button
                type="submit"
                class="mx-auto bg-pink-500 text-white font-bold rounded-full mt-0 mb-3 py-4 px-8 shadow-lg flex justify-center"
              >
                Envoyer mon avis
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- <div class="flex justify-center mt-12">
        <div class="my-10 w-full mx-4 md:mx-0 md:w-3/5">
          <div
            class="w-full bg-gray-200 border rounded-lg py-3 px-4"
            v-html="errorMsg"
          ></div>
        </div>
      </div> -->

      <FormModal v-if="showModal" @close="onCloseFormModal">
        <div slot="header">
          <div class="text-xl text-gray-800 font-bold">
            Avant de pouvoir soumettre votre avis...
          </div>
        </div>
        <div slot="body">
          <div class="text-lg text-gray-800" v-html="errorMsg"></div>
        </div>
      </FormModal>

      <!-- <div class="flex h-20 my-12 justify-center">
          <div
            class="align-center py-5 px-8 bg-pink-500 text-white text-2xl font-bold rounded-lg shadow-lg"
            @click="onSendReview()"
          >
            Send my review
          </div>
        </div>
      </div> -->

      <!--Pre-footer slots section -->
      <SlotBottomSection :noCtaButton="true">
        <template slot="main-text">
          Notre expertise
        </template>
        <template slot="secondary-text">
          Au service de votre projet !
        </template>
        <!-- <template slot="cta-text">
            J'ai un projet
          </template> -->
      </SlotBottomSection>
    </div>
  </Layout>
</template>



<script>
import StarRating from "vue-star-rating";
// source :  https://github.com/craigh411/vue-star-rating
import { sendReview } from "~/services/api.js";

import SlotTopSection from "~/components/TopSection.vue";
import SlotBottomSection from "~/components/BottomSection.vue";
import SvgWavePostHeader from "~/components/svg/SvgWavePostHeader.vue";
import FormModal from "~/components/FormModal.vue";

export default {
  data() {
    return {
      showModal: false,
      boundRating: 5,
      formValidated: false,
      errorList: [],
      formData: {
        fields: {
          // name: "Speedy Gonzales",
          // review: "Avis from Postman",
          // title: "Une collaboration parfaite",
          structure: "particulier",
          relation: "client",
          avatar:
            "https://psr2222.creativityquarks.com/wp-content/uploads/2020/05/user-icon.png",
          stars: null,
          postedOnce: true,
          picture: "https://psr2222.creativityquarks.com/wp-content/uploads/2020/05/icone-maison.png"
        }
        // title: 'Test review from the GS Api',
      }
    };
  },
  components: {
    SlotTopSection,
    SlotBottomSection,
    SvgWavePostHeader,
    StarRating,
    FormModal
  },
  computed: {
    title() {
      return "Review from " + this.formData.fields.name;
    },
    ratingComment() {
      return this.formData.fields.stars ? `Vous avez choisi d'attribuer une note de ${this.formData.fields.stars * 2}/10${
        this.formData.fields.stars <= 3.5 ? "... êtes-vous sûr?" : ". Merci!"
      }` : `<p>Accorderiez-vous un <strong>10/10</strong> à PSR en cliquant sur la <strong>5ème étoile</strong>?</p>`
    },
    errorMsg() {
      return `<p>Il manque quelques champs à remplir, voudriez-vous les compléter s'il-vous-plaît?
      <br/> 
      <br/>
      Il s'agit de 
      
      ${this.errorList.map(
        item => "<li>" + "votre " + "<strong>" + item + "</strong>" + "</li>"
      ).join('')}</p>`;
    }
    // ${this.errorList.length === 1 ? "votre" : "vos"} 
  },
  methods: {
    onSendReview() {
      this.validation();
      setTimeout(() => {
        if (this.formValidated) {
          sendReview(this.title, this.formData.fields)
          // console.log(this.formData)
          .then(response => {
            console.log(response.json());
            if (response.status === 201) {
              this.$router.push({ path: "/success/" });
            } else {
              alert("Sorry smt went wrong with your review : Error " + response.status);
            }
          })
          .catch(error => alert(error));
        } else {
          this.showModal = true; // errorMsg gets computed and displayed
        }
      }, 500);
    },
    validation() {
      this.formData.fields.name ? null : this.errorList.push("nom");
      this.formData.fields.review ? null : this.errorList.push("avis");
      this.formData.fields.structure ? null : this.errorList.push("nature");
      this.formData.fields.relation ? null : this.errorList.push("rapport à PSR");
      this.formData.fields.stars ? null : this.errorList.push("évaluation");
      this.errorList.length === 0 ? (this.formValidated = true) : null;
      // console.log(this.errorList)
    },
    setRating(rating) {
      this.formData.fields.stars = rating;
    },
    onCloseFormModal() {
      this.showModal = false;
      this.errorList = [];
    }
  }
};
</script>

<!--
// Test data
const title = 'Test review from the GS Api'
const acf = {
          'name': 'Speedy Gonzales',
          'review': 'Avis from Postman',
          'title': 'Une collaboration parfaite',
          'structure': 'entreprise',
          'relation': 'partenaire',
          'avatar': 'https://psr2222.creativityquarks.com/wp-content/uploads/2020/05/user-icon.png',
          'stars': '5'
      }
// const acf = {}
// acf[name] = 'Speedy Gonzales'
// acf[review] = 'I am really really really happy, thx Eric.'
// acf[title] = 'GS Review test title'
-->


