<template>
  <form @submit.prevent="authorizeUser">
    <h1 class="text-4xl mb-3 lg:mb-6 lg:text-6xl">
      Login
    </h1>
    <div class="inline-flex items-center py-1 px-2 sm:py-2 border border-slate-300 rounded text-slate-500 bg-white mb-4">
      <input v-model="pass" type="password" class="appearance-none bg-transparent focus:outline-none mr-2">
    </div>
  </form>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'

export default {
  data () {
    return {
      pass: ''
    }
  },
  computed: mapState({
    previousRoute: state => state.auth.previousRoute
  }),
  methods: {
    ...mapMutations({
      authorize: 'auth/authorize'
    }),
    async authorizeUser () {
      const response = await axios.get(`/api/simple-auth?pass=${this.pass}`)
      const authorized = response.data

      if (authorized) {
        this.authorize()
        this.$router.push(this.previousRoute)
      }

      this.pass = ''
    }
  }
}
</script>
