<template>
  <div>
    <h1 class="text-4xl mb-3 lg:mb-6 lg:text-6xl">
      Staff Engineer, IndieHacker, & Musician
    </h1>
    <p class="text-xl lg:text-2xl">
      I'm currently at <a
        class="text-slate-800 font-semibold underline"
        href="https://openly.com"
        target="_blank"
        rel="noopener noreferrer"
      >Openly</a> pushing the insurance industry forward one project at a time.
    </p>
    <div class="flex items-center my-8">
      <div class="h-14 w-14 bg-cover rounded-full mr-4" style="background-image: url('https://pbs.twimg.com/profile_images/1402045149673308161/vXFA16vI_400x400.jpg');" />
      <div>
        <a href="https://twitter.com/heyshadowsmith" class="text-slate-800 font-semibold">@heyshadowsmith</a>
        <p class="mb-0">
          {{ formatDate('2022-01-27') }}
        </p>
      </div>
    </div>
    <ContentLink v-for="(content, index) in contents" :key="index" :content="content" />
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    let contents = await $content(params.slug)
      .only(['title', 'type', 'slug', 'updatedAt'])
      .sortBy('updatedAt', 'desc')
      .fetch()

    contents = contents.map(content => ({
      title: content.title,
      type: content.type,
      year: new Date(content.updatedAt).toLocaleDateString('en', { year: 'numeric' }),
      link: `/${content.slug}`
    }))

    return { contents }
  },
  head () {
    return {
      title: 'About | Shadow Smith',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Shadow Smith is currently an IndieHacker, Musician, and Staff Frontend Engineer at Openly.'
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
