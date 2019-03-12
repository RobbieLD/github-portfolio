import Vue from 'vue';
import Vuex from 'vuex';
import GithubData from '@/services/github-data';
import Cookies from 'js-cookie';
import { AppState } from '@/models/app-state';

Vue.use(Vuex);

export default new Vuex.Store<AppState>({
  state: {
    user: {},
    theme: 'Light',
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },

    setTheme(state, theme) {
      state.theme = theme;
      Cookies.set('theme', theme);
    },
  },
  actions: {
    async loadUser({ commit }) {
      commit('setUser', await GithubData.getUser());
    },
  },

  getters: {
    theme(state) {
      return state.theme || Cookies.get('theme');
    },
    user: (state) => state.user,
  },
});
