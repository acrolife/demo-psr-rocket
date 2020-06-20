    
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
              class="my-10 rounded-lg w-full h-auto"
              src="https://psr2222.creativityquarks.com/wp-content/uploads/2020/06/undraw_status_update_jjgk.png"
            />
          </div>
        </template>
      </SlotTopSection>

      <!--IdentificationInvitation section -->
      <section v-if="!routeToForm">
        <div class="flex justify-center mt-12">
          <div class="my-10 w-full mx-4 md:mx-0 md:w-3/5">
            <div
              class="w-full bg-gray-200 border rounded-lg py-3 px-4 mb-3 leading-tight"
            >
              <form
                name="review"
                method="post"
                v-on:submit.prevent="onTokenValidation"
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
                  Mon avis : identification
                </div>

                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full px-3 mb-0 md:mb-0">
                    <!-- Token -->
                    <div class="my-4">
                      <label
                        for="token  "
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >
                        Token
                      </label>
                      <input
                        type="text"
                        name="token"
                        v-model="formData.fields.token"
                        placeholder="nIHUbpiEG5FwYgsHfMm3niEbT76ltrFn"
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      />
                      <p class="text-gray-600 text-xs italic">
                        Le token est un mot de passe indiqué dans l'email
                        d'invitation sécurisant l'envoi de votre avis.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  class="mx-auto bg-pink-500 text-white font-bold rounded-full mt-0 mb-3 py-4 px-8 shadow-lg flex justify-center"
                >
                  Vérifier mon token
                </button>
              </form>
            </div>
          </div>
        </div>

        <!-- <div class="flex justify-center mt-12">
        <div class="my-10 w-full mx-4 md:mx-0 md:w-3/5">
          <div
            class="w-full bg-gray-200 border rounded-lg py-3 px-4"
            v-html="formMessage"
          ></div>
        </div>
      </div> -->

        <FormModal v-if="showModal" @close="onCloseFormModal">
          <div slot="header">
            <div class="text-xl text-gray-800 font-bold">
              Soumission de votre avis...
            </div>
          </div>
          <div slot="body">
            <div class="text-lg text-gray-800" v-html="formMessage"></div>
          </div>
        </FormModal>
      </section>

      <!--Filling Form section -->
      <section v-if="routeToForm">
        <ReviewForm :review="review"/>
      </section>

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
import { getReviews } from "~/services/api.js";

import SlotTopSection from "~/components/TopSection.vue";
import SlotBottomSection from "~/components/BottomSection.vue";
import SvgWavePostHeader from "~/components/svg/SvgWavePostHeader.vue";
import FormModal from "~/components/FormModal.vue";
import ReviewForm from "~/components/ReviewForm.vue";

export default {
  data() {
    return {
      routeToForm: false,
      showModal: false,
      formValidated: false,
      errorList: [],
      formData: {
        fields: {
          postedOnce: true         
        }
      },
      tokenValidated: false,
      review: {
        id: 0
      }
    };
  },
  components: {
    SlotTopSection,
    SlotBottomSection,
    SvgWavePostHeader,
    FormModal,
    ReviewForm
  },
  computed: {
    formMessage() {
      return this.errorList.length
        ? `<p>Le champ "Token" n'est pas rempli ou comporte une valeur erronée, voudriez-vous les compléter/vérifier s'il-vous-plaît?</p>`
        : this.tokenValidated
        ? this.review.acf.postedOnce
          ? `<p> Il semble que vous ayez déjà rédigé et soumis un avis. Voudriez-vous s'il-vous-plaît contacter PSR pour mentionner le problème ? Merci! <p>`
          : `<p> Veuillez patienter quelques instants pendant l'envoi de votre avis s'il-vous-plaît.<p>`
        : `<p><strong>Erreur</strong>: Un problème quant à <strong>l'authentification</strong> est survenu : la validation du token fourni avec l'invitation n'a pu avoir lieu. <br/>
        Voudriez-vous s'il-vous-plaît contacter PSR pour mentionner le problème? Merci!<p>`;
    }
  },
  methods: {
    formValidation() {
      this.formData.fields.token ? null : this.errorList.push("token");
      this.errorList.length === 0 ? (this.formValidated = true) : null;
    },
    onCloseFormModal() {
      this.showModal = false;
      this.errorList = [];
    },
    async onTokenValidation() {
      this.formValidation();
      if (this.formValidated) {
        // console.log(JSON.stringify(this.review))
        // TEST TOKEN : nIHUbpiEG5FwYgsHfMm3niEbT76ltrFn
        await this.getOneReview();
        if (this.review.id) {
          console.log("Token validated");
          // console.log("this.review.id: " + JSON.stringify(this.review.id));
          this.tokenValidated = true;
          // console.log(
          //   "this.review.acf.postedOnce: " + this.review.acf.postedOnce
          // );
          if (!this.review.acf.postedOnce) {
            this.errorList = [];
            this.routeToForm = true;
            // this.$router.push({ path: `/votre-avis-compte/${this.review.id}` });
          } else {
            this.showModal = true;
          }
        } else {
          !this.tokenValidated ? this.errorList.push("token") : null
          this.showModal = true;
        }
      } else {
        this.showModal = true;
      }
    },
    async getOneReview() {
      const reviews = await getReviews();
      // console.log(reviews);
      this.review = reviews.filter(
        review => review.acf.token === this.formData.fields.token
      )[0];
      // console.log(JSON.stringify(this.review));
    }
  }
};
</script>

