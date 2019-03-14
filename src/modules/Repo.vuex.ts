import { VuexModule, mutation, action, getter, Module } from 'vuex-class-component';
import GithubData from '@/services/github-data';
import { Section } from '@/models/app-section';
import config from '@/assets/config.json';
import { GithubRepo } from '@/models/github-repo';
import { Config } from '@/models/app-config';

@Module({ namespacedPath: 'repo/' })
export class RepoStore extends VuexModule {

    @getter public sections: Section[] = [];

    @action()
    public async loadRepos() {
        this.setRepos(await GithubData.getRepos());
    }

    @mutation
    private setRepos(rps: GithubRepo[]) {
        // Filter the git hub repos and create sections from them
        this.sections = (config as Config).sections.map((cfgSection) =>
            (
                new Section(cfgSection.title, cfgSection.class, rps.filter((r) =>
                    cfgSection.repos.includes(r.name)),
                )
            ),
        );
    }
}

export const repo = RepoStore.ExtractVuexModule(RepoStore);
