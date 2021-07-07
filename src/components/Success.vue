    
<template>
      <!--Success message-->
        <div
          class="flex flex-col justify-center my-20 mx-4 md:mx-20 py-6 md:py-10 px-4 md:px-20 bg-green-200 text-gray-700 font-bold rounded-lg shadow-lg"
        >
          <div class="flex justify-center mb-3 text-2xl md:text-3xl">
            Au nom de PSR, merci! ✨
          </div>
          <div class="flex justify-center text-justify text-lg font-bold">
            Votre avis contribue à valoriser l'image de l'entreprise sur
            internet et cela est très important pour nous 😃
          </div>
        </div>
</template>



<script>
export default {
    props: {
    successText: {
      type: Object,
      required: true
    }
  }
};
</script>
