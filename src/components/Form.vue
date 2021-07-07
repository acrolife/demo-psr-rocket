<template>
  <div>
    <div
      class="block w-full bg-gray-200 border rounded-lg py-3 px-4 mb-3 leading-tight"
    >
      <form
        name="contact"
        method="post"
        v-on:submit.prevent="onSendMessage"
        class="w-full"
      >
        <!-- Netlify forms
      <form
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
                  v-model="formData.fields.toEmail"
                  placeholder="jean.dumont@hotmail.fr"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
              <div class="hidden md:block md:w-4"></div>
              <div class="w-full md:w-5/12">
                <label
                  for="mobile"
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-1 flex justify-start"
                  >Mon mobile</label
                >
                <input
                  type="mobile"
                  name="mobile"
                  v-model="formData.fields.mobile"
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
              Eric vous répondra au plus tôt, le jour même ou le
              lendemain! Il vous reste {{ charachtersLimit - messageCharacterCounter }} caractères.
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

    <FormModal v-if="showModal" @close="onCloseFormModal">
      <div slot="header">
        <div class="text-xl text-gray-800 font-bold">
          Envoi de votre message...
        </div>
      </div>
      <div slot="body">
        <div class="text-lg text-gray-800" v-html="errorMsg"></div>
      </div>
    </FormModal>
  </div>
</template>

<script>
import { postMessage, sendEmail } from "~/services/api.js";
import { generateDate } from "~/services/utilities.js";
import FormModal from "~/components/FormModal.vue";

export default {
  // props: {
  // }
  data() {
    return {
      showModal: false,
      formValidated: false,
      errorList: [],
      charachtersLimit: 400,
      formData: {
        botField: "",
        fields: {
          name: "",
          mobile: "",
          message: "",
          date: "",
          toEmail: "",
          toEmailCopy: "eric.renard@ps-renovation.com",
          nameEmailClient: "PS-Rénovation - Une nouvelle vie pour votre bien!",
          nameEmailAdmin: "PS-Rénovation Website-Admin",
          fromEmailClient: "eric.renard@ps-renovation.com",
          fromEmailAdmin: "website-admin@ps-renovation.com",
          subjectClient: "Copie de votre message envoyé à PS-Rénovation",
          subjectAdmin: "Lead - Copie d'un message envoyé par un client"
        }
      }
      // !! status: "draft" => reminder, msg should not go public, if do so later, have to put auth on it
    };
  },
  components: {
    FormModal
  },
  computed: {
    title() {
      return (
        "Message de " +
        this.formData.fields.name +
        ", " +
        this.formData.fields.date
      );
    },
    messageCharacterCounter() {
      this.formData.fields.message =
        this.formData.fields.message.length >= this.charachtersLimit
          ? this.formData.fields.message.slice(0, this.charachtersLimit)
          : this.formData.fields.message;
      return this.formData.fields.message.length;
    },
    errorMsg() {
      return this.errorList.length
        ? `<p>Il manque quelques champs à remplir, voudriez-vous les compléter s'il-vous-plaît?
      <br/> 
      <br/>
      Il s'agit de
      
      ${this.errorList
        .map(
          item => "<li>" + "votre " + "<strong>" + item + "</strong>" + "</li>"
        )
        .join("")}</p>`
        : `<p> Veuillez patienter quelques instants s'il-vous-plaît, la communication a été établie avec le serveur email.<br/> 
        A l'issue vous recevrez une copie de votre message par courrriel!<p>`;
    }
  },
  methods: {
    onSendMessage() {
      this.formData.fields.date = generateDate();
      // Triggers the form validation (formValidation method)
      this.formValidation();
      // Triggers the api call, with the patchReview, if the form has been validated
      setTimeout(() => {
        if (this.formValidated) {
          this.showModal = true;
          console.log("SEND MESSAGE");
          // console.log(this.formData)
          postMessage(this.title, this.formData.fields)
            .then(response => {
              // console.log(response.json());
              if (response.status === 201) {
                sendEmail(this.formData.fields, "lead").then(response => {
                  if (response.status == 200) {
                    this.$router.push({ path: "/message-transmis/" });
                  } else
                    console.log(
                      "psrmail-api Backend Error: couldn't send warning email about the submitted review"
                    );
                });
              } else {
                alert(
                  "Nous sommes désolés, un problème technique est survenu quant à l'envoi de votre message : Erreur " +
                    response.status +
                    " " +
                    "Voudriez-vous s'il-vous-plaît contacter par PSR par email à eric.renard@ps-renovation.com ? Merci!"
                );
              }
            })
            .catch(error => alert(error));
        } else {
          this.showModal = true; // errorMsg gets computed and displayed
        }
      }, 500);
    },
    formValidation() {
      this.formData.botField
        ? "Sorry it seems you are a bot, only them have access to that field"
        : null;
      this.formData.fields.name ? null : this.errorList.push("nom");
      this.formData.fields.toEmail ? this.formData.fields.to_email = this.formData.fields.toEmail : this.errorList.push("courriel"); // WP to GS requires my_field to give camelCase output
      this.formData.fields.mobile ? null : this.errorList.push("mobile");
      this.formData.fields.message ? null : this.errorList.push("message");
      this.errorList.length === 0 ? (this.formValidated = true) : null;
    },
    onCloseFormModal() {
      this.errorList = [];
      this.showModal = false;
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