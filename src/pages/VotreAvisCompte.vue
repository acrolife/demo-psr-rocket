    
<template>
  <Layout>
    <div>
      <div class="flex justify-center mt-12 ">
        <div class="my-10 w-full mx-4 md:mx-0 md:w-1/2">
          <div
            class="w-full h-128 bg-gray-200 border rounded-lg py-3 px-4 mb-3 leading-tight"
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
                Tell us what you have in mind... Marco
              </div>

              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full px-3 mb-6 md:mb-0">
                  <div>
                    <label
                      for="name"
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                      Your name
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
                      for="title"
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >Title</label
                    >
                    <input
                      type="title"
                      name="title"
                      v-model="formData.fields.title"
                      placeholder="My wonderful review title"
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full px-3 mb-6 md:mb-0">
                  <label
                    for="review"
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >Review</label
                  >
                  <textarea
                    name="review"
                    v-model="formData.fields.review"
                    placeholder="This is what I think..."
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-32"
                  ></textarea>
                  <p class="text-gray-600 text-xs italic">
                    Thank you for your collaboration, your review will appear on
                    our site in the next few days !
                  </p>
                </div>
              </div>

              <button
                type="submit"
                class="mx-auto bg-pink-500 text-white font-bold rounded-full mt-3 mb-3 py-4 px-8 shadow-lg"
              >
                Envoyer le message
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
      <SlotBottomSection>
        <template slot="main-text">
          Notre expertise
        </template>
        <template slot="secondary-text">
          Au service de votre projet !
        </template>
        <template slot="cta-text">
          J'ai un projet
        </template>
      </SlotBottomSection>
    </div>
  </Layout>
</template>



<script>
import SlotBottomSection from "~/components/BottomSection.vue";
import SvgWavePostHeader from "~/components/svg/SvgWavePostHeader.vue";
import { sendReview } from "~/services/api.js";

export default {
  data() {
    return {
      formData: {
        fields: {
          // name: "Speedy Gonzales",
          // review: "Avis from Postman",
          // title: "Une collaboration parfaite",
          structure: "entreprise",
          relation: "collaborateur",
          avatar:
            "https://psr2222.creativityquarks.com/wp-content/uploads/2020/05/user-icon.png",
          stars: 5
        }
        // title: 'Test review from the GS Api',
        // fields: {
        //     name: 'Speedy Gonzales',
        //     review: 'Avis from Postman',
        //     title: 'Une collaboration parfaite',
        //     structure: 'entreprise',
        //     relation: 'collaborateur',
        //     avatar: 'https://psr2222.creativityquarks.com/wp-content/uploads/2020/05/user-icon.png',
        //     stars: 5
        // }
      }
    };
  },
  components: {
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
          } else { alert('Sorry smt went wrong with your review :(')}
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