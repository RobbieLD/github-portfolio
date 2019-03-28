import { VuexModule, mutation, action, getter, Module } from 'vuex-class-component';
import { GithubUser } from '@/models/github-user';
import GithubData from '@/services/github-data';
import { Config } from '@/models/app-config';

@Module( { namespacedPath: 'user/'})
export class UserStore extends VuexModule {

  // State/Getters
  @getter public gitUser: Partial<GithubUser> = {};

  @action()
  public async loadUser(cfg: Partial<Config>) {
    this.setUser(await GithubData.getUser(cfg));
  }

  @mutation
  private setUser(u: Partial<GithubUser> | undefined) {
    if (u) {
      this.gitUser = u;
    }
  }
}

export const user = UserStore.ExtractVuexModule( UserStore );

