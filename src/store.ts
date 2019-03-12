import Vue from 'vue';
import Vuex from 'vuex';
import GithubData from '@/services/github-data';
import { VuexModule, mutation, action, getter, Module } from 'vuex-class-component';
import { GithubUser } from './models/github-user';

Vue.use(Vuex);

@Module( { namespacedPath: 'user/'})
export class UserStore extends VuexModule {

  // State/Getters
  @getter public user: Partial<GithubUser> = {};

  @action()
  public async loadUser() {
    this.setUser(await GithubData.getUser());
  }

  @mutation
  private setUser(u: Partial<GithubUser>) {
    this.user = u;
  }
}

export const user = UserStore.ExtractVuexModule( UserStore );

export default new Vuex.Store({
  modules: {
    user,
  },
});
