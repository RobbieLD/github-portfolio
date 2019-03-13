import { VuexModule, mutation, action, getter, Module } from 'vuex-class-component';
import { GithubUser } from '@/models/github-user';
import GithubData from '@/services/github-data';

@Module( { namespacedPath: 'user/'})
export class UserStore extends VuexModule {

  // State/Getters
  @getter public gitUser: Partial<GithubUser> = {};

  @action()
  public async loadUser() {
    this.setUser(await GithubData.getUser());
  }

  @mutation
  private setUser(u: Partial<GithubUser>) {
    this.gitUser = u;
  }
}

export const user = UserStore.ExtractVuexModule( UserStore );

