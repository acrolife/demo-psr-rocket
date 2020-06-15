    
<template>
  <Layout>
    <div>
      <div>



     

        <div class="flex h-40 my-20 justify-center">
          <div
            class="align-center py-10 px-20 bg-pink-300 text-gray-700 text-4xl font-bold rounded-lg shadow-lg"
        
          >
            Bravooooooo ! ^^
          </div>
        </div>
      </div>
    

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
      title: 'Test review from the GS Api', 
      fields: {
          name: 'Speedy Gonzales',
          review: 'Avis from Postman',
          title: 'Une collaboration parfaite',
          structure: 'entreprise',
          relation: 'collaborateur',
          avatar: 'https://psr2222.creativityquarks.com/wp-content/uploads/2020/05/user-icon.png',
          stars: 5
      }
    };
  },
  components: {
    SlotBottomSection,
    SvgWavePostHeader
  },
  methods: {
    onSendReview() {
      sendReview(this.title, this.acf)
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