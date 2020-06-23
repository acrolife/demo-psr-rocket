    
<template>
  <div>
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
                      Il s'agit d'un texte d'une longueur entre en une phrase et
                      300 caractères. Il reste
                      {{
                        charachtersLimit - reviewCharacterCounter
                      }}
                      caractères.
                    </p>
                  </div>
                </div>

                <!--  Structure & relation-->
                <div class="flex flex-wrap my-6 -mx-3">
                  <div class="w-full px-3 mb-2 md:mb-0">
                    <label
                      for="structure"
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
                      for="relation"
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
                        <label for="partenaire"> je suis un partenaire</label>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Rating -->
                <div class="my-6">
                  <label
                    for="titre"
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold -mb-2"
                    >Note</label
                  >
                  <div class="flex justify-center mb-2">
                    <StarRating
                      :increment="0.5"
                      :rating="boundRating"
                      :show-rating="false"
                      @rating-selected="setRating"
                    ></StarRating>
                  </div>
                  <div
                    class="text-gray-600 mt-4 mb-2"
                    v-html="ratingComment"
                  ></div>
                  <p class="text-gray-600 text-xs italic">
                    N'hésitez pas à être généreux, cette note aidera de futur
                    clients à faire confiance à PSR !
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

    <FormModal v-if="showModal" @close="onCloseFormModal">
      <div slot="header">
        <div class="text-xl text-gray-800 font-bold">
          Soumission de votre avis...
        </div>
      </div>
      <div slot="body">
        <div class="text-lg text-gray-800" v-html="errorMsg"></div>
      </div>
    </FormModal>
  </div>
</template>



<script>
import StarRating from "vue-star-rating/src";
// source :  https://github.com/craigh411/vue-star-rating
import { patchReview, sendEmail } from "~/services/api.js";
import { generateDate, getEmailFromPassword } from "~/services/utilities.js";

import FormModal from "~/components/FormModal.vue";

export default {
  props: {
    review: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showModal: false,
      boundRating: 5,
      formValidated: false,
      charachtersLimit: 300,
      errorList: [],
      formData: {
        fields: {
          postedOnce: true,
          structure: "",
          relation: "",
          review: "",
          stars: "",
          date: "",
          toEmail: "",
          toEmailCopy: "david.dedobbeleer@gmail.com",
          nameEmailClient: "PS-Rénovation - Une nouvelle vie pour votre bien!",
          nameEmailAdmin: "PS-Rénovation Website-Admin",
          fromEmailClient: "eric.renard@ps-renovation.com",
          fromEmailAdmin: "website-admin@ps-renovation.com",
          subjectClient: "Copie de l'avis écrit pour PS-Rénovation",
          subjectAdmin: "Copie d'un avis déposé par un client"
        }
      }
    };
  },
  components: {
    StarRating,
    FormModal
  },
  computed: {
    title() {
      return "Review from " + this.formData.fields.name;
    },
    reviewCharacterCounter() {
      this.formData.fields.review =
        this.formData.fields.review.length >= this.charachtersLimit
          ? this.formData.fields.review.slice(0, this.charachtersLimit)
          : this.formData.fields.review;
      return this.formData.fields.review.length;
    },
    classTextEval() { 
      return this.formData.fields.stars <= 3.5 ? 'text-red-600 text-lg' : 'text-green-600 text-lg'
    },
    ratingComment() {      
      return this.formData.fields.stars
        ? `<p class="${this.classTextEval}">Vous avez choisi d'attribuer <strong>une note de ${this.formData.fields
            .stars * 2}/10</strong>${
            this.formData.fields.stars <= 3.5
              ? "... êtes-vous sûr?"
              : ". Merci!"
          }</p>`
        : `<p>Accorderiez-vous un <strong>10/10</strong> à PSR en nous attribuant <strong>5 étoiles</strong>? 😊</p>`;
    },
    errorMsg() {
      return this.errorList.length
        ? `<p>Il manque quelques champs à remplir, voudriez-vous les compléter s'il-vous-plaît?
      <br/> 
      <br/>
      Il s'agit de 
      
      ${this.errorList
        .map(
          item => "<li>" + "votre " + "<strong>" + item + "</strong>" + "</li>"
        )
        .join("")}</p>`
        : `<p> Veuillez patienter quelques instants pendant l'envoi de votre avis s'il-vous-plaît, le processus est presque terminé!<p>`;
    }
  },
  methods: {
    onSendReview() {
      this.formData.fields.date = generateDate();
      // Triggers the form validation (formValidation method)
      this.formValidation();
      // Generates a token based on secret + email => email carried y the token ;)
      this.formData.fields.toEmail = getEmailFromPassword(
        this.review.acf.token
      );
      // WP to GS requires my_field to give camelCase output
      this.formData.fields.to_email = this.formData.fields.toEmail 
      this.formData.fields.posted_once = this.formData.fields.postedOnce
      // Triggers the api call, with the patchReview, if the form has been validated
      setTimeout(() => {
        if (this.formValidated) {
          this.showModal = true;
          patchReview(this.title, this.formData.fields, this.review.id)
            // console.log(this.formData)
            .then(response => {
              // console.log(response.json());
              if (response.status === 200) {
                sendEmail(this.formData.fields, "review-rx").then(response => {
                  if (response.status == 200) {
                    this.$router.push({ path: "/avis-transmis/" });
                  } else
                    console.log(
                      "psrmail-api Backend Error: couldn't send warning email about the submitted review"
                    );
                });
              } else {
                alert(
                  "Un problème technique est survenu quant à l'envoi de votre avis : Erreur " +
                    response.status +
                    " " +
                    "Voudriez-vous s'il-vous-plaît contacter par PSR via notre formulaire de contact ? Merci!"
                );
              }
            })
            .catch(error => alert(error));
        } else {
          this.showModal = true; // errorMsg gets computed and displayed
        }
      }, 500);
    },
    formValidation() {
      this.formData.fields.review ? null : this.errorList.push("avis");
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
  },
  created() {
    this.formData.fields.structure = this.review.acf.structure;
    this.formData.fields.relation = this.review.acf.relation;
    this.formData.fields.name = this.review.acf.name;
    this.formData.fields.token = this.review.acf.token;
  }
};
</script>



