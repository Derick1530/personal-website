<template>
  <div>
    <h1 class="text-4xl mb-3 lg:mb-6 lg:text-6xl">
      Software Engineer, IndieHacker, & Musician
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
      <div class="h-14 w-14 bg-cover rounded-full border-2 border-slate-800 mr-4" style="background-image: url('https://pbs.twimg.com/profile_images/1402045149673308161/vXFA16vI_400x400.jpg');" />
      <div>
        <a href="https://twitter.com/heyshadowsmith" class="text-slate-800 font-semibold">@heyshadowsmith</a>
        <p class="mb-0">
          {{ formatDate('2022-01-27') }}
        </p>
      </div>
    </div>
    <div class="inline-flex items-center py-1 px-2 sm:py-2 border border-slate-300 rounded text-slate-500 bg-white mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="#fafbff"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="stroke-current mr-2"
      >
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
      <select
        v-model="filter"
        name="filter"
        class="appearance-none bg-transparent focus:outline-none mr-2"
      >
        <option v-for="(type, index) in contentTypes" :key="index" :value="type.value">
          {{ type.label }}
        </option>
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="stroke-current rotate-90"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    </div>
    <ContentLink v-for="(content, index) in filteredContents" :key="index" :content="content" />
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

    const types = contents.map(({ type }) => type)

    const dedupedTypes = [...new Set(types)]

    return {
      contents,
      contentTypes: [
        {
          label: 'All Content',
          value: 'ALL'
        },
        ...dedupedTypes.map((type) => {
          let label
          const typeEndsInY = type.substring(type.length - 1) === 'y'

          if (typeEndsInY) {
            label = `${type.substring(0, type.length - 1)}ies`
          } else {
            label = `${type}s`
          }

          return {
            label,
            value: type.toUpperCase()
          }
        })
      ]
    }
  },
  data () {
    return {
      filter: 'ALL'
    }
  },
  head () {
    return {
      title: 'Shadow Smith',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Shadow Smith is currently a Staff Frontend Engineer at Openly, IndieHacker, & Musician.'
        }
      ]
    }
  },
  computed: {
    filteredContents () {
      return this.filter === 'ALL' ? this.contents : this.contents.filter(({ type }) => type.toUpperCase() === this.filter.toUpperCase())
    }
  },
  mounted () {
    const filterParameter = this.getUrlParameter('filter')

    if (filterParameter) {
      this.filter = filterParameter.substring(0, filterParameter.length - 1).toUpperCase()
    }
  },
  methods: {
    formatDate (date) {
      const options = { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' }

      return new Date(date).toLocaleDateString('en-US', options)
    },
    getUrlParameter (name) {
      name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')
      const regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
      const results = regex.exec(location.search)
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
    }
  }
}
</script>
