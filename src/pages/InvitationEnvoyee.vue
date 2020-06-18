    
<template>
  <Layout>
    <div>
      <!--Hero slots section -->
      <SlotTopSection class="pt-12" :noCtaButton="true">
        <template slot="repeatable-title-1">
          PSR Admin
        </template>
        <template slot="repeatable-title-2">
          Félicitations, votre invitation a été envoyée!
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

      <!--Success message-->
      <section>
        <div
          class="flex flex-col justify-center my-20 mx-4 md:mx-20 py-6 md:py-10 px-4 md:px-20 bg-green-200 text-gray-700 font-bold rounded-lg shadow-lg"
        >
          <div class="flex justify-center mb-3 text-2xl md:text-3xl">
            Voilà, votre nouvelle invitation est partie ✅
          </div>
          <div class="flex justify-center text-justify text-lg font-bold">
            Un élément a été préparé dans la base de données Wordpress, il ne
            manque plus que le message à recevoir de la part de votre
            client/partenaire, et une validation par l'admistrateur du site 👨‍💻
          </div>
        </div>
      </section>

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
import SlotTopSection from "~/components/TopSection.vue";
import SlotBottomSection from "~/components/BottomSection.vue";
import SvgWavePostHeader from "~/components/svg/SvgWavePostHeader.vue";

export default {
  components: {
    SlotTopSection,
    SlotBottomSection,
    SvgWavePostHeader
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