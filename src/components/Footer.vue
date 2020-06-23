<template>
  <div class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6">
          <g-link
            class="text-teal-500 no-underline hover:text-teal-600 font-bold text-2xl lg:text-4xl mr-6"
            to="/"
            >PSR
          </g-link>
        </div>

        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Social / Contact</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                :href="$static.companyinfo.acf.facebook"
                target="_blank"
                class="no-underline hover:text-teal-500 text-gray-800"
                >Facebook</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                :href="$static.companyinfo.acf.linkedin"
                target="_blank"
                class="no-underline hover:text-teal-500 text-gray-800"
                >Linkedin</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                :href="`mailto:${$static.companyinfo.acf.riEmail}`"
                target="_blank"
                class="no-underline hover:text-teal-500 text-gray-800"
                >Email</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                :href="`tel:${$static.companyinfo.acf.riPhoneNumber}`"
                target="_blank"
                class="no-underline hover:text-teal-500 text-gray-800"
                >Téléphone</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">L'entreprise</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <g-link
                to="/blog"
                class="no-underline hover:text-teal-500 text-gray-800"
                >Notre blog</g-link
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <g-link
                to="/realisations/"
                class="no-underline hover:text-teal-500 text-gray-800"
                >Nos clients</g-link
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="/notre-entreprise#coordonnees"
                class="no-underline hover:text-teal-500 text-gray-800"
                >Nos coordonnées</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Aspects légaux</p>
          <ul class="list-reset mb-6">
            <!-- <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <g-link
                to="/"
                class="no-underline hover:text-teal-500 text-gray-800"
                >CGV</g-link
              >
            </li> -->
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <g-link
                to="/"
                class="no-underline hover:text-teal-500 text-gray-800"
                >Politique de confidentialité</g-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
  query {
    companyinfo: wordPressReproducible (id: 440) { 
          acf {
            riEmail
            riPhoneNumber
            linkedin
            facebook
         }
      } 
  }
</static-query>

<script>
export default {
};
</script>