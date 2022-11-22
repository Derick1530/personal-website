<template>
  <div v-if="isAuthorized">
    <h1 class="md:text-center text-4xl mb-3 lg:mb-6 lg:text-6xl">
      Paid link generator
    </h1>
    <p class="md:text-center text-xl lg:mb-12 lg:text-2xl">
      Pick a destination URL, monetize it, and share it.
    </p>
    <form class="flex flex-col lg:flex-row mb-12" @submit.prevent="createPaidLink">
      <input v-model="destinationURL" type="text" class="py-1 px-2 sm:py-2 border border-slate-300 rounded text-slate-500 bg-white flex-1 mb-4 lg:mb-0 lg:mr-4" placeholder="Destination URL...">
      <button
        class="inline-flex items-center justify-center bg-slate-800 text-white border border-slate-800 rounded py-2 px-12"
        target="_blank"
        rel="noopener noreferrer"
        type="submit"
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
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
        Generate Paid Link
      </button>
    </form>
    <input v-if="paidLink" v-model="paidLink" type="text" class="w-full py-1 px-2 sm:py-2 border border-slate-300 rounded text-slate-500 bg-white flex-1 mb-4 lg:mb-0 lg:mr-4" readonly>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import auth from '~/mixins/auth'

export default {
  mixins: [auth],
  data () {
    return {
      destinationURL: '',
      paidLink: ''
    }
  },
  head () {
    return {
      title: 'Paid Link Generator | Shadow Smith',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A tool designed to allow for Shadow Smith to create paid links.'
        }
      ]
    }
  },
  methods: {
    async createPaidLink () {
      const response = await axios.get(`/api/create-paid-link?destination=${this.destinationURL}`)
      this.paidLink = response.data
    }
  }
}
</script>
