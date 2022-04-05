<template>
  <div>
    <h1 class="md:text-center text-4xl mb-3 lg:mb-6 lg:text-6xl">
      Quote image generator
    </h1>
    <p class="md:text-center text-xl lg:mb-12 lg:text-2xl">
      Pick a theme, write a quote, save the image, and share it.
    </p>
    <div class="flex flex-col lg:flex-row mb-12">
      <div class="inline-flex items-center py-1 px-2 sm:py-2 border border-slate-300 rounded text-slate-500 bg-white mb-2 lg:mb-0 lg:mr-4">
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
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
        <select
          v-model="selectedTheme"
          name="selectedTheme"
          class="appearance-none bg-transparent focus:outline-none w-full lg:w-auto"
        >
          <option v-for="(theme, index) in themes" :key="index" :value="theme.toLowerCase()">
            {{ theme }}
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
      <input v-model="quote" type="text" class="py-1 px-2 sm:py-2 border border-slate-300 rounded text-slate-500 bg-white flex-1 mb-4 lg:mb-0 lg:mr-4" placeholder="Quote...">
      <button
        class="inline-flex items-center justify-center bg-slate-800 text-white border border-slate-800 rounded py-2 px-12"
        target="_blank"
        rel="noopener noreferrer"
        @click="createQuoteImage"
      >
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
          class="mr-2"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            ry="2"
          />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        Generate Quote Image
      </button>
    </div>
    <img :src="imageSrc" alt="Quote image">
    <Footer />
  </div>
</template>

<script>
export default {
  data () {
    return {
      quote: '',
      selectedTheme: 'dark',
      themes: [
        'Light',
        'Dark'
      ],
      imageSrc: '/api/quote-image?theme=dark'
    }
  },
  head () {
    return {
      title: 'Interactive diagram for managing complex change | Shadow Smith',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'An interactive widget made from an extremely valuable diagram for managing complex change.'
        }
      ]
    }
  },
  methods: {
    createQuoteImage () {
      this.imageSrc = `/api/quote-image?theme=${this.selectedTheme}&text=${this.quote}`
    }
  }
}
</script>
