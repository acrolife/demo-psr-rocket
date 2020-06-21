    
<template>
  <div>
    <div class="flex justify-center mt-12 ">
      <div class="my-10 w-full mx-4 md:mx-0 md:w-1/2">
        <div
          class="w-full bg-gray-200 border rounded-lg py-3 px-4 mb-3 leading-tight"
        >
          <form
            name="review"
            method="post"
            v-on:submit.prevent="onSendInvite"
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
              Invitation à laisser avis
            </div>

            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full px-3 mb-0 md:mb-0">
                <div class="flex-col md:flex md:flex-row">
                  <div class="w-full md:w-5/12">
                    <label
                      for="guestTitle"
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3"
                    >
                      Titre
                    </label>
                    <vSelect
                      :options="guestTitleArray"
                      v-model="formData.fields.guestTitle"
                      value="guestTitleArray[1]"
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border-1 border-gray-800 rounded leading-tight focus:outline-none focus:bg-white"
                    >
                      <!-- 
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        @input="storeServiceName()" -->
                    </vSelect>
                    <!-- <input
                        type="text"
                        name="guestTitle"
                        v-model="formData.fields.guestTitle"
                        placeholder="Monsieur"
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      /> -->
                  </div>
                  <div class="w-full md:w-1/12"></div>
                  <div class="w-full my-6 md:w-6/12 md:my-0">
                    <label
                      for="name"
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3"
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
                </div>

                <!--  Structure -->
                <div class="flex flex-wrap my-6 -mx-3">
                  <div class="w-full px-3 mb-2 md:mb-0">
                    <label
                      for="structure"
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >Structure/personne :
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
                      >Rapport à PSR :
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
                        <label for="client">client</label>
                      </div>
                      <div class="mx-3">
                        <input
                          class="mx-2"
                          type="radio"
                          id="partenaire"
                          value="partenaire"
                          v-model="formData.fields.relation"
                        />
                        <label for="partenaire">collaborateur</label>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Email -->
                <div>
                  <label
                    for="email"
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >Courriel</label
                  >
                  <input
                    type="email"
                    name="email"
                    v-model="formData.fields.toEmail"
                    placeholder="jean.dumont@yahoo.fr"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  />
                </div>
              </div>
            </div>

            <p class="text-gray-600 text-xs italic">
              Le système permet à la personne invitée de laisser son avis, en
              lui laissant la possibilité d'appuyer une seule fois sur "Envoyer
              mon avis". Suite à cela, une validation du contenu devra être
              faite par l'administrateur Wordpress.
            </p>

            <button
              type="submit"
              class="flex justify-center mx-auto md:mx-0 bg-pink-500 text-white font-bold rounded-full mt-6 mb-3 py-4 px-8 shadow-lg"
            >
              Envoyer l'invitation
            </button>
          </form>
        </div>
      </div>
    </div>

    <FormModal v-if="showModal" @close="onCloseFormModal">
      <div slot="header">
        <div class="text-xl text-gray-800 font-bold">
          Avant de pouvoir envoyer votre invitation...
        </div>
      </div>
      <div slot="body">
        <div class="text-lg text-gray-800" v-html="formMessage"></div>
      </div>
    </FormModal>

    <FormModal v-if="showModal" @close="onCloseFormModal">
      <div slot="header">
        <div class="text-xl text-gray-800 font-bold">
          Votre invitation est en cours de traitement...
        </div>
      </div>
      <div slot="body">
        <div class="text-lg text-gray-800" v-html="formMessage"></div>
      </div>
    </FormModal>
  </div>
</template>



<script>
import { postReview, sendEmail } from "~/services/api.js";
import { generatePassword } from "~/services/utilities.js";
import vSelect from "vue-select";
import "~/custom-modules/vue-select-css/vue-select.css";

import FormModal from "~/components/FormModal.vue";

export default {
  data() {
    return {
      formData: {
        fields: {
          name: "",
          guestTitle: "",
          token: "",
          // Issue with the image upload => anyway, have to implement the <upload></upload>
          avatar:
            "https://psr2222.creativityquarks.com/wp-content/uploads/2020/05/user-icon.png",
          picture:
            "https://psr2222.creativityquarks.com/wp-content/uploads/2020/05/icone-maison.png",
          postedOnce: false,
          fromEmailClient: "eric.renard@ps-renovation.com",
          fromEmailAdmin: "website-admin@ps-renovation.com",
          toEmail: "",
          toEmailCopy: "david.dedobbeleer@gmail.com",
          nameEmailClient: "PS-Rénovation - Une nouvelle vie pour votre bien!",
          nameEmailAdmin: "PS-Rénovation Website-Admin",
          subjectClient: "Invitation à écrire un avis pour PS-Rénovation",
          subjectAdmin: "Copie d'une invitation à laisser un avis",
        }
      },
      status: "publish",
      guestTitleArray: ["Monsieur", "Madame", "Mademoiselle", "Entreprise"],
      showModal: false,
      errorList: []
    };
  },
  components: {
    vSelect,
    FormModal
  },
  computed: {
    title() {
      return `Avis laissé par ${this.formData.fields.guestTitle} ${this.formData.fields.name}`;
    },
    formMessage() {
      return this.errorList.length
        ? `<p>Il manque quelques champs à remplir, voudriez-vous les compléter s'il-vous-plaît?
      <br/> 
      <br/>
      Il s'agit
      
      ${this.errorList
        .map(item => "<li>" + "du " + "<strong>" + item + "</strong>" + "</li>")
        .join("")} du client ou partenaire.</p>`
        : `<p> Veuillez patienter quelques instants, vos données sont transmises au backend afin de créer la strcuture du futur avis!<p>`;
    }
  },
  methods: {
    onSendInvite() {
      this.validation();
      this.formData.fields.token = generatePassword(this.formData.fields.toEmail);
      // console.log(this.formData.fields.token)
      setTimeout(() => {
        if (this.formValidated) {
          this.showModal = true;
          console.log("SEND INVITATION");
          // console.log(this.formData, this.title);
          postReview(this.title, this.formData.fields, this.status)
            .then(response => {
              // console.log(response.json());
              if (response.status === 201) {
                sendEmail(this.formData.fields, "review-tx").then(response => {
                  if (response.status == 200) {
                    this.$router.push({ path: "/invitation-envoyee" });
                  } else
                    alert(
                      "psrmail-api Backend Error: Une erreur s'est produite au niveau de la communication avec le backend psrmail-api, votre invitation n'a pu être envoyéee. Pouvez-vous prévenir l'administrateur du site svp ?"
                    );
                });
              } else {
                alert(
                  "WP Backend Error: Une erreur s'est produite au niveau de la communication avec le backend Wordpress, la structure de l'avis n'a pas pu être crée. Pouvez-vous prévenir l'administrateur du site svp ?"
                );
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
      this.formData.fields.guestTitle && this.formData.fields.structure
        ? null
        : this.errorList.push("titre personnel ou structure");
      this.formData.fields.relation
        ? null
        : this.errorList.push("rapport à PSR");
      this.formData.fields.toEmail ? null : this.errorList.push("courriel");
      this.errorList.length === 0 ? (this.formValidated = true) : null;
      // console.log(this.errorList)
    },
    onCloseFormModal() {
      this.errorList = [];
      this.showModal = false;
    }
  }
};
</script>
