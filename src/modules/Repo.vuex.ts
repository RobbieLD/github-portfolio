import { VuexModule, mutation, action, getter, Module } from 'vuex-class-component';
import GithubData from '@/services/github-data';
import { Section } from '@/models/app-section';
import config from '@/assets/config.json';
import { GithubRepo } from '@/models/github-repo';

@Module({ namespacedPath: 'repo/' })
export class RepoStore extends VuexModule {

    @getter public sections: Array<Partial<Section>> = [];

    @action()
    public async loadUser() {
        this.setRepos(await GithubData.getRepos());
    }

    @mutation
    private setRepos(rs: GithubRepo[]) {
        // Filter the git hub repos and create sections from them
    }
}

export const repo = RepoStore.ExtractVuexModule(RepoStore);
