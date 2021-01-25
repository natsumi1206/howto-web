import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { userData } from "./login";


Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: userData,
  getters: {
    loggedIn: (state) => {
      return Boolean(state.email || state.password)
    }
  },
  mutations: {
    setEmail(state, email){
      state.email = email
    },
    setPassword(state, password) {
      state.password = password
    },
    RESET_VUEX_STATE (state) {
      Object.assign(state, JSON.parse(localStorage.getItem("userData")));
    },
  },
  actions: {},
})

export default store