<template>
  <div
    class="block w-full bg-gray-200 border rounded-lg py-3 px-4 mb-3 leading-tight"
  >
    <form
      name="contact"
      method="post"
      v-on:submit.prevent="handleSubmit"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      class="w-full"
    >
      <!-- Welcome bots, there you go -->
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label> Don’t fill this out: <input name="bot-field" /> </label>
      </p>
      <!-- End of the bots stuff -->

      <div
        class="block uppercase tracking-wide text-gray-600 text-s font-bold mb-6"
      >
        Parlons de votre projet!
      </div>

      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full px-3 mb-6 md:mb-0">
          <div>
            <label
              for="name"
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Votre nom
            </label>
            <input
              type="text"
              name="name"
              v-model="formData.name"
              placeholder="Jean Dumont"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div>
            <label
              for="email"
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >Votre email</label
            >
            <input
              type="email"
              name="email"
              v-model="formData.email"
              placeholder="jean.dumont@hotmail.fr"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            for="message"
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >Message</label
          >
          <textarea
            name="message"
            v-model="formData.message"
            placeholder="Mon projet consiste en la construction d'une extension pour ma maison..."
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-32"
          ></textarea>
          <p class="text-gray-600 text-xs italic">
            Ce message sera envoyé par email à Eric qui vous répondra au plus tôt, le jour même ou le lendemain!
          </p>
        </div>
      </div>

      <!-- <button
        type="submit"
        class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Envoyer le message
      </button> -->

      <button
        type="submit"
        class="mx-auto green-psr text-white font-bold rounded-full mt-3 mb-3 py-4 px-8 shadow-lg"
      >
        Envoyer le message
      </button>
    </form>
  </div>
</template>

<script>
export default {
  // props: {

  // }
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        // .then(() => this.$router.push("/success"))
        .then(() => this.$router.push("/services/#"))
        .catch(error => alert(error));
    }
  }
};
</script>
