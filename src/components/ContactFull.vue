   <template>
  <div
    class="bg-cover bg-center py-10 mt-12 mb-20"
    :style="{
      backgroundImage: 'url(' + bgimage + ')'
    }"
  >
    <div
      class="container px-3 md:px-6 lg:px-10 mx-auto flex flex-col md:flex-row"
    >
      <!--Left Col-->
      <div class="w-full md:w-1/2">
        <div
          class="h-128 flex flex-col bg-gray-200 bg-opacity-50 border rounded-lg mt-6 pt-2 px-4 mr-2 text-center md:text-left"
        >
          <h1
            class="mb-4 mx-auto text-3xl font-bold leading-tight md:lg-6 md:ml-0 md:text-4xl text-gray-700"
          >
            <slot name="title"></slot>
          </h1>
          <div
            class="flex flex-col mdg:h-112 leading-normal text-gray-600 text-xl w-full"
          >
            <div class="flex-initial">
              <slot name="divLeft"></slot>
            </div>
            <div class="flex-1"></div>
            <div class="flex-initial">
              <slot name="divLeftImage"></slot>
            </div>
            <div class="h-3"></div>
          </div>
          <!-- <button
            class="mx-auto white-psr text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg md:mx-0"
          >
            <slot name="cta-text"></slot>
          </button> -->
          <!-- <div class="flex-1"></div> -->
        </div>
      </div>
      <!--Right Col-->
      <div class="w-full md:w-1/2">
        <div class="py-6 ml-2 text-center mt-20 md:mt-0">
          <slot name="form"></slot>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>


<script>
export default {
  props: {
    bgimage: {
      type: String,
      required: true
    }
  }
};
</script>
