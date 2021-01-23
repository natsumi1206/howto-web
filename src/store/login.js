import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export const userData = {
  email: "",
  password: "",
  loggedIn: false
}

export const Store = new Vuex.Store({
  state: userData,
  mutations,
  actions: {},
  getters: {},
  plugins: [createPersistedState()]
});

const mutations = {}