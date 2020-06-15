<template>
  <div>
    <div
      v-if="childVisible"
      className="{cbS.contactbarWrapper}"
      @click="
        {
          onClick;
        }
      "
    >
      <div className="{cbS.contactbar}">
        <div
          className=""
          @click="
            {
              onClick;
            }
          "
        >
          <div className="{cbS.contactbarButton}">
            <p className="{cbS.symbolHide}">{'<<'}</p>
          </div>
        </div>

        <div className="{cbS.logoContainer}">
          <a
            href="whatsapp://send?text=Bonjour Gérard, je viens de visiter votre site et suis intéressé par une location pour les prochaines vacances d'été. A très bientôt, &phone=+33682408878"
          >
            <img
              className="{cbS.logo}"
              src="{whats_logo}"
              alt="Logo Whatsapp, site de Varcamdobb"
            />
          </a>
        </div>

        <div className="{cbS.logoContainer}">
          <a
            href="sms://+33682408878?body=Bonjour%20je%20souhaite%20être%20rappelé%20concernant%20une%20location%20à%20Salernes%20cet%20été.%20Merci%20Envoyé%20via%20Varcamdobb.com."
          >
            <img
              className="{cbS.logo}"
              src="{sms_logo}"
              alt="Logo SMS, site de Varcamdobb"
            />
          </a>
        </div>

        <div className="{cbS.logoContainer}">
          <a href="tel:+33682408878">
            <img
              className="{cbS.logo}"
              src="{mobile_logo}"
              alt="Logo mobile, site de Varcamdobb"
            />
          </a>
        </div>

        <div className="{cbS.logoContainer}">
          <a href="https://www.facebook.com/villasvarcamdobb">
            <img
              className="{cbS.logo__facebook}"
              src="{facebook_logo}"
              alt="Logo Facebook, site de Varcamdobb"
            />
          </a>
        </div>

        <div className="{cbS.logoContainer}">
          <a
            href="mailto:varcamdobb@hotmail.com?subject = Locations à Salernes. &body = Suite à la consultation de votre site, je souhaite reecvoir des informations au sujet des locations (écrire ici le nom de la location que vous souhaiteriez réserver) ... à Salernes."
          >
            <img
              className="{cbS.logo}"
              src="{email_logo}"
              alt="Logo email, site de Varcamdobb"
            />
          </a>
        </div>
      </div>
    </div>

    <div
      v-if="!childVisible"
      className="{cbS.contactbarWrapperHidden}"
      @click="
        {
          onClick;
        }
      "
    >
      <div className="{cbS.contactbarHidden}">
        <p className="{cbS.symbolOpen}">></p>
      </div>
    </div>
  </div>
</template>    

<script>
// import
import React, { useState, useEffect, useContext } from "react";
import facebook_logo from "../assets/images/facebook-logo.png";
import whats_logo from "../assets/images/whatsapp-logo.png";
import email_logo from "../assets/images/email-logo2.png";
import mobile_logo from "../assets/images/mobile-logo2.png";
import sms_logo from "../assets/images/sms-logo.png";

// refactor
import contactbarStyles from "../sass/components/contactbar.module.scss";
import footerStyles from "../sass/components/footer.module.scss";
const fS = footerStyles;
const cbS = contactbarStyles;

export default {
  data() {
    return {
      childVisible: false
    };
  },
  computed: {
    computeState() {
      this.childVisible ? this.flagHandler() : null;
    }
  },
  methods: {
    onClick() {
      this.toggleChildVisible();
    },
    flagHandler() {
      setTimeout(() => {
        if (this.childVisible === true) {
          this.toggleChildVisible();
        }
      }, 6000);
    },
    toggleChildVisible() {
      this.childVisible = !this.childVisible;
    }
  }
};

// const ContactBar = () => {
//   const [childVisible, toggleChildVisible] = useState(false)
//   const onClick = () => {
//     toggleChildVisible(!childVisible)
//   }
//   const flagHandler = () => {
// 		setTimeout(() => {
// 			if ( childVisible === true ) {
// 				toggleChildVisible(!childVisible)
// 			}
// 		}, 6000)
// 	}

// 	useEffect(() => {
// 		console.log("useEffect ran, with 'flagHandler' ")
// 		flagHandler()
// 	}, [])
// }
</script>