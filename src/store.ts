import Vue from 'vue';
import Vuex from 'vuex';
import { user, UserStore } from './modules/User.vuex';
import { repo, RepoStore } from './modules/Repo.vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    user,
    repo,
  },
});

export const vxm = {
  user: UserStore.CreateProxy( store, UserStore ) as UserStore,
  repo: RepoStore.CreateProxy( store, RepoStore ) as RepoStore,
};
