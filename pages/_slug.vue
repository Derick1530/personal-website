<template>
  <div class="animated fadeInUp">
    <h1 class="text-4xl mb-3 lg:mb-6 lg:text-6xl">
      {{ content.title }}
    </h1>
    <div>
      <p class="text-xl lg:text-2xl">
        {{ content.description }}
      </p>
      <audio v-if="content.track" controls class="mb-6">
        <source :src="content.track" type="audio/mpeg">
      </audio>
      <div v-if="content.buttonLink && content.buttonText || content.body.children.length > 0" class="mt-6">
        <a
          v-if="content.buttonLink && content.buttonText"
          :href="content.buttonLink"
          class="inline-flex items-center bg-black text-white border border-black rounded py-2 px-12 mr-2"
          target="_blank"
          rel="noopener noreferrer"
        >{{ content.buttonText }} <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-external-link ml-2"
        ><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg></a>
        <button v-if="content.body.children.length > 0" class="bg-white text-gray-500 border rounded py-2 px-12" @click="showContent = !showContent">
          <template v-if="!showContent">
            Read
          </template>
          <template v-else>
            Hide
          </template>
          <span v-if="content.track">Lyrics</span>
        </button>
      </div>
    </div>
    <div class="flex items-center my-8">
      <div class="flex items-center mr-6">
        <div class="h-14 w-14 bg-cover rounded-full mr-4" style="background-image: url('https://pbs.twimg.com/profile_images/1402045149673308161/vXFA16vI_400x400.jpg');" />
        <div>
          <a href="https://twitter.com/heyshadowsmith" class="text-black font-semibold">@heyshadowsmith</a>
          <p class="mb-0">
            {{ formatDate(content.updatedAt) }}
          </p>
        </div>
      </div>
    </div>
    <div v-if="showContent" class="animated fadeIn">
      <nuxt-content :document="content" />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const content = await $content(params.slug).fetch()

    return { content }
  },
  data () {
    return {
      showContent: false
    }
  },
  head () {
    return {
      title: `${this.content.title} | Shadow Smith`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.content.description
        }
      ]
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }

      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
