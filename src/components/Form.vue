<template>
  <div
    class="block w-full bg-gray-200 border rounded-lg py-3 px-4 mb-3 leading-tight"
  >
    <form
      name="contact"
      method="post"
      v-on:submit.prevent="handleSubmit"
      class="w-full"
    >
      <!-- <form
      name="contact"
      method="post"
      v-on:submit.prevent="handleSubmit"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      class="w-full"
    > -->
      <!-- Welcome bots, there you go -->
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out:
          <input name="bot-field" v-model="formData.botField" />
        </label>
      </p>
      <!-- End of the bots stuff -->

      <div
        class="block uppercase tracking-wide text-gray-600 text-s font-bold mb-6"
      >
        J'ai un projet!
      </div>

      <div class="flex flex-wrap -mx-3">
        <div class="w-full px-3 mb-6 md:mb-0">
          <div>
            <label
              for="name"
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-1 flex justify-start"
            >
              Mon nom / raison sociale
            </label>
            <input
              type="text"
              name="name"
              v-model="formData.fields.name"
              placeholder="Jean Dumont"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>

          <div class="flex flex-col md:flex-row">
            <div class="w-full md:flex-1">
              <label
                for="email"
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-1 flex justify-start"
                >Mon courriel</label
              >
              <input
                type="email"
                name="email"
                v-model="formData.fields.email"
                placeholder="jean.dumont@hotmail.fr"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div class="hidden md:block md:w-4"></div>
            <div class="w-full md:w-5/12">
              <label
                for="email"
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-1 flex justify-start"
                >Mon mobile</label
              >
              <input
                type="mobile"
                name="mobile"
                v-model="formData.mobile"
                placeholder="06 78 91 01 23"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
          </div>

        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            for="message"
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-1 flex justify-start"
            >Mon message</label
          >
          <textarea
            name="message"
            v-model="formData.fields.message"
            placeholder="Mon projet consiste en la construction d'une extension pour ma maison..."
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-32"
          ></textarea>
          <p class="text-gray-600 text-xs italic">
            Ce message sera envoyé par email à Eric qui vous répondra au plus
            tôt, le jour même ou le lendemain!
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
      formData: {
        botField: "",
        fields: {
          name: "",
          email: "",
          mobile: "",
          message: "",
        }
      }
    };
  },
  methods: {
    formValidation() {
      this.formData.botField ? "Do something because it's for sure an automated process/bot" : null
    }
  }
};
</script>


<!-- Netlify's code
export default {
  data() {
    return {
      formData: {
      }
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
-->