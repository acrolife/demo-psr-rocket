    
<template>
  <Layout>
    <div>
      <!--Hero slots section -->
      <SlotTopSection class="pt-12" :noCtaButton="true">
        <template slot="repeatable-title-1">
          Félicitations.
        </template>
        <template slot="repeatable-title-2">
          Votre message a bien été transmis, une copie vous a été envoyée par email.
        </template>
        <!-- <template slot="cta-text">
          Confier un projet à PSR
        </template> -->
        <template slot="form">
          <div class="pt-6 pb-10 px-4 md:px-0">
            <g-image
              class="block rounded-lg"
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
            Votre message a été transmis ✅ et une copie vous a été envoyée
          </div>
          <div class="flex justify-center text-justify text-lg font-bold">
            Nous lisons nos messages 📬 tous les jours.
            Eric 👨‍💼 s'engage à vous donner une réponse au plus tôt, le soir même ou le matin suivant, même en période très chargée!
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

<page-query>
  query {
     reproduciblebannerqual: wordPressReproducible(id: 438) {
          id
          slug
          acf {
            repeaterCard { 
              title
              repeaterParagraph { 
                htmlParagraph                
              }
              picture
              ctaText
            }
         		riTitle
            riEmail
            riAdress
            riPhoneNumber
            riCtaText
            riRepeaterContent { 
              content
            }
            rfTitle
            rfRepeaterField { 
              text
            }
            rGallery { 
              repeaterImages
            }                  	  
         }
       }   
  }
</page-query>

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