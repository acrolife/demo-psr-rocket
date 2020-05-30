<template>
  <Layout>
    <div>
      <div class="h-10 bg-yellow-500">h-10 1/3</div>
      <div class="h-10 bg-red-500">h-10 2/3</div>
      <div class="h-10 bg-orange-500">h-10 3/3</div>
      <h1 class="text-4xl">A wonderfull web site</h1>
      <p class="p-6 bg-purple-500">
        A slug from WP: {{ $page.data.edges[0].node.slug }}
      </p>
      <div class="p-6 bg-pink-500 h-160 flex">
        <p>Hello Marcooo, I'm Gina.. do you have a large screen ? 👀</p>

        <a
          href="/test/"
          class="hidden p-2 lg:block lg:w-1/2"
          style="clip-path:polygon(50% 5%, 20% 100%, 100% 35%, 5% 35%, 80% 100%)"
        >
          <div
            class="h-full object-cover"
            style="background-image: url(https://icsr.info/wp-content/uploads/2018/06/ICSR-Team-Gina-1000x750px-700x525.jpg)"
          >
            <!-- <div class="h-full bg-black opacity-25"></div> -->
          </div>
        </a>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    data: allWordPressRealisations {
      edges {
        node {
          id
          slug
          title
          acf {
            topImage
            repeaterCard { 
            	repeaterParagraph { 
              htmlParagraph
              }
            }
          }
        }
      }
    }    
  }
  
</page-query>

<script>
export default {
  components: {},
  metaInfo: {
    title: "Welcome to my blog :)"
  }
};
</script>
