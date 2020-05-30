<template>
  <div>
    <div class="text-3xl font-bold text-purple-600">Picture</div>
    <g-image
      class="h-64 w-1/2 object-cover"
      :src="realisation.acf.topImage"
      v-if="realisation.acf.topImage"
    />
    <div v-else>No image to display</div>
    <div class="text-3xl font-bold text-purple-600">Realisation Infos</div>
    <div class="text-xl font-bold text-purple-600">name</div>
    <div v-html="realisation.acf.name"></div>
    <div class="text-xl font-bold text-purple-600">cpkSelector</div>
    <div v-html="realisation.acf.cpkSelector"></div>
    <div class="text-xl font-bold text-purple-600">place</div>
    <div v-html="realisation.acf.place"></div>
    <div class="text-xl font-bold text-purple-600">realisation</div>
    <div v-html="realisation.acf.realisation"></div>
    <div class="text-xl font-bold text-purple-600">dateStart</div>
    <div v-html="realisation.acf.dateStart"></div>
    <div class="text-xl font-bold text-purple-600">dateEnd</div>
    <div v-html="realisation.acf.dateEnd"></div>


    <div class="text-3xl font-bold text-purple-600">repeaterCard</div>
    <!-- <div> {{realisation.acf.repeaterCard.length}} </div> -->
    <ul>
      <li v-for="index in realisation.acf.repeaterCard.length" :key="index">
        <p class="text-xl font-bold text-purple-600">Card {{ index }}</p>
        <div class="text-xl font-bold text-purple-600">
          repeaterCard[{{ index - 1 }}].title
        </div>
        <div v-html="realisation.acf.repeaterCard[index - 1].title"></div>
        <div class="text-xl font-bold text-purple-600">
          repeaterCard[{{ index - 1 }}].picture
        </div>
        <g-image
          class="h-32 w-1/4 object-cover"
          :src="realisation.acf.repeaterCard[index - 1].picture"
          v-if="realisation.acf.repeaterCard[index - 1].picture"
        />
        <div v-else>No image to display</div>
        <ul>
          <li
            v-for="index2 in realisation.acf.repeaterCard[index - 1]
              .repeaterParagraph.length"
            :key="index2"
          >
            <div class="text-xl font-bold text-purple-600">
              repeaterCard[{{ index - 1 }}].repeaterParagraph[
              {{ index2 - 1 }}
              ].htmlParagraph
            </div>
            <div
              v-html="
                realisation.acf.repeaterCard[index - 1].repeaterParagraph[
                  index2 - 1
                ].htmlParagraph
              "
            ></div>
            <br />
          </li>
        </ul>
      </li>
    </ul>

    <div class="text-3xl font-bold text-purple-600">rGallery</div>
    <ul>
      <li v-for="index in realisation.acf.rGallery.length" :key="index">
        <g-image
          class="h-32 w-1/4 object-cover"
          :src="realisation.acf.rGallery[index - 1].repeaterImages"
          v-if="realisation.acf.rGallery[index - 1].repeaterImages"
        />
         <div v-else>No image to display</div>
        <br />
      </li>
    </ul>

    <div class="text-3xl font-bold text-purple-600">repeaterCollaborateur</div>
    <ul>
      <li
        v-for="index in realisation.acf.repeaterCollaborateur.length"
        :key="index"
      >
        <div
          v-html="
            realisation.acf.repeaterCollaborateur[index - 1].collaborateur
          "
        ></div>
      </li>
    </ul>

    <div class="text-3xl font-bold text-purple-600">Link Card</div>
    <div class="text-xl font-bold text-purple-600">lcTitle</div>
    <div v-html="realisation.acf.lcTitle"></div>
    <div class="text-xl font-bold text-purple-600">lcContent</div>
    <div v-html="realisation.acf.nalcContentme"></div>
    <div class="text-xl font-bold text-purple-600">repeaterLink</div>
    <ul>
      <li v-for="index in realisation.acf.repeaterLink.length" :key="index">
        <p class="text-xl font-bold text-purple-600">
          Link Instance {{ index }}
        </p>
        <div class="text-xl font-bold text-purple-600">
          repeaterLink[{{ index - 1 }}].textBeforeLink
        </div>
        <div
          v-html="realisation.acf.repeaterLink[index - 1].textBeforeLink"
        ></div>
        <ul>
          <li
            v-for="index2 in realisation.acf.repeaterLink[index - 1].link
              .length"
            :key="index2"
          >
            <div class="text-xl font-bold text-purple-600">
              repeaterLink[{{ index - 1 }}].link[
              {{ index2 - 1 }}
              ].htmlParagraph
            </div>
            <div
              v-html="
                realisation.acf.repeaterLink[index - 1].link[index2 - 1].title
              "
            ></div>
            <div
              v-html="
                realisation.acf.repeaterLink[index - 1].link[index2 - 1].target
              "
            ></div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    realisation: {
      type: Object,
      required: true
    }
  }
};
</script>


<!--
<div>Dav put condition on top image to make it robust... => made the field required</div> 
    -->
<!--
Bumped on a stupid limitation of graphQL+WP. When the first image of a query comes with the value "false" because the field is empty, on purpose.. well then GraphQL decides the field is a Boolean :man-facepalming::skin-tone-4: then you're f***** for the rest of your images in this build : QQL trhows the error (visible in GraphiQL, and GS shows an error stating that he can't display an image whith a boolean variable. Only solution I found, is to put a dummy image on the first instance (of realisation, here) OR a strict condition like "required field" but you don't have images all the times in realisations.. altouhght maybe this one would be better, and more robust/relibale, and after all, if the client/Eric just explains the realisation without any picture what the point (I have such examples in the end oof the page "realisations" on ps-renovation.com. The weirdness of it is that it occurs only when the first image GQL "sees", is "false"...  mmm thinking deeeper, there should be a way to make it more robust changing the source-wp code to output something else than false if no image or change graphql ccode to deal better with the value false..  or simply not assuming the type of the field based on its value, if value if false..
-->