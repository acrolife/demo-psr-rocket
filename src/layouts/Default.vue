<template>
  <div>
    <NavBar :reproduciblebannerqual="reproduciblebannerqual"/>
    <!-- <slot /> -->
    <div
      class="leading-normal tracking-normal pt-12"
      style="font-family: 'Source Sans Pro', sans-serif;"
    >
      <slot />
    </div>
    <Footer />
  </div>
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
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer
  },
  computed: {
    reproduciblebannerqual(){
      return this.$page.reproduciblebannerqual
    }
  }
};
</script>