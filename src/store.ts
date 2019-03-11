import Vue from 'vue';
import Vuex from 'vuex';
import GithubData from '@/services/github-data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    // The default theme
    theme: 'light',
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async loadUser({ commit }) {
      commit('setUser', await GithubData.getUser());
    },
  },

  getters: {
    theme: (state) => state.theme,
    user: (state) => state.user,
  },
});
