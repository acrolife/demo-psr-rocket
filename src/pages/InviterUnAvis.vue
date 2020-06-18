    
<template>
  <Layout>
    <div>
      <!--Hero slots section -->
      <SlotTopSection class="pt-12" :noCtaButton=true>
        <template slot="repeatable-title-1">
          PSR Admin
        </template>
        <template slot="repeatable-title-2">
          Cette page est conçue pour envoyer une invitation à un client ou un collaborateur afin qu'il/elle laisse un avis au sujet d'une prestation de PSR.
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

      <div class="flex justify-center mt-12 ">
        <div class="my-10 w-full mx-4 md:mx-0 md:w-1/2">
          <div
            class="w-full h-128 bg-gray-200 border rounded-lg py-3 px-4 mb-3 leading-tight"
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
                  <div>
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
                  <div>
                    <label
                      for="email"
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >Email</label
                    >
                    <input
                      type="email"
                      name="email"
                      v-model="formData.fields.email"
                      placeholder="jean.dumont@yahoo.fr"
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              <p class="text-gray-600 text-xs italic">
            Le système permet à la personne invitée de laisser son avis, en lui laissant la possibilité d'appuyer une seule fois sur "Envoyer mon avis". 
            Suite à cela, une validation du contenu devra être faite par l'administrateur Wordpress.
          </p>

              <button
                type="submit"
                class="mx-auto bg-pink-500 text-white font-bold rounded-full mt-6 mb-3 py-4 px-8 shadow-lg"
              >
                Envoyer l'invitation
              </button>
            </form>
          </div>
        </div>
      </div>

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
      <SlotBottomSection :noCtaButton=true>
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
import { sendReview } from "~/services/api.js";

export default {
  data() {
    return {
      formData: {
        fields: {
          name: "Speedy Gonzales",
          review: "Avis from Postman",
          title: "Une collaboration parfaite",
        },
        title: 'Test review from the GS Api',
      }
    };
  },
  components: {
    SlotTopSection,
    SlotBottomSection,
    SvgWavePostHeader
  },
  computed: {
    title() {
      return "Review from " + this.formData.fields.name;
    }
  },
  methods: {
    onSendReview() {
      sendReview(this.title, this.formData.fields)
        // .then(() => this.$router.push('/success'))
        .then(response => {
          console.log(response.json());
          if (response.status === 201) {
            this.$router.push({ path: "/success/" });
          } else {
            alert("Une erreur s'est produite, votre avis n'a pu être soummis. Pouvez-vous nous prévenir de ce pas par email svp ?");
          }
        })
        .catch(error => alert(error));
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
          'relation': 'collaborateur',
          'avatar': 'https://psr2222.creativityquarks.com/wp-content/uploads/2020/05/user-icon.png',
          'stars': '5'
      }
// const acf = {}
// acf[name] = 'Speedy Gonzales'
// acf[review] = 'I am really really really happy, thx Eric.'
// acf[title] = 'GS Review test title'
-->