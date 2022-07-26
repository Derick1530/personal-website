import { mapState, mapMutations } from 'vuex'

export default {
  mounted () {
    if (!this.isAuthorized) {
      this.setPreviousRoute(this.$router.history.current.fullPath)
      this.$router.push('/login')
    }
  },
  computed: mapState({
    state: state => state,
    isAuthorized: state => state.auth.isAuthorized
  }),
  methods: mapMutations({
    setPreviousRoute: 'auth/setPreviousRoute'
  })
}
