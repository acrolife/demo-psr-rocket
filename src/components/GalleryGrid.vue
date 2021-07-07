<template>
  <div class="bg-white px-8 pt-8 pb-8">
    <div class="container max-w-5xl mx-auto xl:max-w-6xl">
       <h2
        class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800 xl:text-5xl"        
      >Galerie photos</h2>

      <!-- Underline for h1 -->
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
      </div>
      
      <ul>
        <div
          class="md:grid md:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:max-w-screen-xl"
        >
          <li v-for="(item, index) in gallery" :key="index">
            <div class="container mx-auto">
              <!-- 2 Rows Columns of Cards -->
              <!-- <div class="lg:px-4"></div> -->

              <div class="flex py-2 sm:w-2/3 sm:mx-auto sm:py-4 md:mx-0 md:p-0 md:w-full">
                <g-image
                  class="flex-1 h-64 w-auto bg-cover bg-center shadow-xl border rounded border-4"
                  :src="item.repeaterImages"
                ></g-image>
              </div>

              <!-- END 2 Rows Columns of Cards -->
            </div>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    gallery: {
      type: Array,
      required: true
    }
  }
};
</script>