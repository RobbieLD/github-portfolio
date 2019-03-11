import Vue from 'vue';
import Vuex from 'vuex';
import GithubData from '@/services/github-data';
import Cookies from 'js-cookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },

    setTheme(state, theme) {
      Cookies.set('theme', theme);
    },
  },
  actions: {
    async loadUser({ commit }) {
      commit('setUser', await GithubData.getUser());
    },
  },

  getters: {
    theme() {
      return Cookies.get('theme') || 'theme';
    },
    user: (state) => state.user,
  },
});
