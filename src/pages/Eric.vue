    
<template>
  <Layout>
    <div>
      <!--Hero slots section -->
      <SlotTopSection class="pt-12" :noCtaButton="true">
        <template slot="repeatable-title-1">
          PSR Admin
        </template>
        <template slot="repeatable-title-2">
          Cette page est conçue pour envoyer une invitation à un client ou un
          collaborateur afin qu'il/elle laisse un avis au sujet d'une prestation
          de PSR.
        </template>
        <!-- <template slot="cta-text">
          Confier un projet à PSR
        </template> -->
        <template slot="form">
          <div class="hidden md:flex md:justify-center">
            <g-image
              class="my-10 rounded-lg"
              src="https://psr2222.creativityquarks.com/wp-content/uploads/2020/06/undraw_status_update_jjgk.png"
            />
          </div>
        </template>
      </SlotTopSection>

      <!--Svg display for TopSection, in mobile mode section -->
      <section class="-mb-16 md:mb-0 h80 w-auto sm:h-96 md:h-0 flex justify-center md:hidden">
        <g-image
          class="my-10 rounded-lg"
          src="https://psr2222.creativityquarks.com/wp-content/uploads/2020/06/undraw_status_update_jjgk.png"
        />
      </section>

      <!--IdentificationAdmin section -->
      <section v-if="!routeToForm">
        <div class="flex justify-center mt-12">
          <div class="my-10 w-full mx-4 md:mx-0 md:w-3/5">
            <div
              class="w-full bg-gray-200 border rounded-lg py-3 px-4 mb-3 leading-tight"
            >
              <form
                name="review"
                method="post"
                v-on:submit.prevent="onCredentialsValidation"
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
                  Identification
                </div>

                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full px-3 mb-0 md:mb-0">
                    <!-- Login -->
                    <div class="my-4">
                      <label
                        for="login"
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >
                        Login
                      </label>
                      <input
                        type="text"
                        name="login"
                        v-model="login"
                        placeholder="Robert Redford"
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      />
                      <p class="text-gray-600 text-xs italic">
                        Il s'agit de votre login administrateur
                      </p>
                    </div>

                    <!-- Password -->
                    <div class="my-4">
                      <label
                        for="password  "
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >
                        Mot de passe
                      </label>
                      <input
                        type="text"
                        name="password"
                        v-model="password"
                        placeholder="nIHUbpiEG5FwYgsHfMm3niEbT76ltrFn"
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      />
                      <p class="text-gray-600 text-xs italic">
                        Il s'agit de votre mot de passe administrateur,
                        sécurisant l'accès à la fonction d'envoi des invitations
                        à laisser un avis.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  class="mx-auto bg-pink-500 text-white font-bold rounded-full mt-0 mb-3 py-4 px-8 shadow-lg flex justify-center"
                >
                  Vérifier mes identifiants
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
            <div class="text-lg text-gray-800" v-html="formMessage"></div>
          </div>
        </FormModal>
      </section>

      <!--Filling Form section -->
      <section v-if="routeToForm">
        <InvitationForm />
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
import SlotTopSection from "~/components/TopSection.vue";
import SlotBottomSection from "~/components/BottomSection.vue";
import SvgWavePostHeader from "~/components/svg/SvgWavePostHeader.vue";
import FormModal from "~/components/FormModal.vue";
import InvitationForm from "~/components/InvitationForm.vue";

export default {
  data() {
    return {
      routeToForm: false,
      showModal: false,
      login: "",
      password: "",
      errorList: []
    };
  },
  components: {
    SlotTopSection,
    SlotBottomSection,
    SvgWavePostHeader,
    FormModal,
    InvitationForm
  },
  computed: {
    formMessage() {
      return this.errorList.length
        ? `<p>Il manque quelques champs à remplir, voudriez-vous les compléter s'il-vous-plaît?
      <br/> 
      <br/>
      Il s'agit
      
      ${this.errorList
        .map(item => "<li>" + "du " + "<strong>" + item + "</strong>" + "</li>")
        .join("")}.</p>`
        : !this.credentialsValidated
        ? `<p> Un ou plusieurs des <strong>champs identifiants</strong> comporte(nt) une <strong>erreur</strong>. Si le problème persiste veuillez contacter l'administrateur du site.<p>`
        : `<p> Veuillez patienter quelques instants, vous allez être redirigé vers la page d'invitation administrateur.<p>`;
    },
    credentialsValidated() {
      return (
        this.login.toLowerCase() === "eric" &&
        this.password === "psr-rocket-2020"
      );
    }
  },
  methods: {
    onCredentialsValidation() {
      this.formValidation();
      setTimeout(() => {
        if (this.formValidated && this.credentialsValidated) {
          this.showModal = true;
          console.log("Admin acces to form");
          this.routeToForm = true;
        } else {
          this.showModal = true; // formMessage gets computed and displayed
        }
      }, 500);
    },
    formValidation() {
      this.login ? null : this.errorList.push("login");
      this.password ? null : this.errorList.push("mot de passe");
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
