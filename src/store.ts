import Vue from 'vue';
import Vuex from 'vuex';
import { user, UserStore } from './modules/User.vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    user,
  },
});

export const vxm = {
  user: UserStore.CreateProxy( store, UserStore ) as UserStore,
};
