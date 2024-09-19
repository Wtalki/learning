import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {

    //button
    submitAction(){
      console.log('submit Button clicked')
    },
    signInAction() {
      console.log('Sign In button clicked');
      // Handle sign-in logic
    },
    createAccountAction() {
      console.log('Create Account button clicked');
      // Handle account creation logic
    },
  },
  modules: {
  }
})
