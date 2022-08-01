export const state = () => ({
  isAuthorized: false,
  previousRoute: ''
})

export const mutations = {
  authorize (state) {
    state.isAuthorized = true
  },
  setPreviousRoute (state, previousRoute) {
    state.previousRoute = previousRoute
  }
}
