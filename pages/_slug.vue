<template>
  <div>
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
      <div v-if="(content.buttonText && content.externalLink) || (content.buttonText && content.internalLink)" class="mt-6">
        <a
          v-if="content.buttonText && content.externalLink"
          :href="content.externalLink"
          class="inline-flex items-center bg-black text-white border border-black rounded py-2 px-12"
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
        <nuxt-link
          v-if="content.buttonText && content.internalLink"
          :to="content.internalLink"
          class="inline-flex items-center bg-black text-white border border-black rounded py-2 px-12"
        >
          {{ content.buttonText }}
        </nuxt-link>
      </div>
    </div>
    <div class="flex items-center my-8">
      <div class="flex items-center mr-6">
        <div class="h-14 w-14 bg-cover rounded-full border-2 border-slate-800 mr-4" style="background-image: url('https://pbs.twimg.com/profile_images/1402045149673308161/vXFA16vI_400x400.jpg');" />
        <div>
          <a href="https://twitter.com/heyshadowsmith" class="text-slate-800 font-semibold">@heyshadowsmith</a>
          <p class="mb-0">
            {{ formatDate(content.updatedAt) }}
          </p>
        </div>
      </div>
    </div>
    <div v-if="content.body.children.length > 0">
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
      const options = { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' }

      return new Date(date).toLocaleDateString('en-US', options)
    }
  }
}
</script>
