import { VuexModule, mutation, action, getter, Module } from 'vuex-class-component';
import GithubData from '@/services/github-data';
import { Section } from '@/models/app-section';
import config from '@/../public/config.json';
import { GithubRepo } from '@/models/github-repo';
import { Config } from '@/models/app-config';

@Module({ namespacedPath: 'repo/' })
export class RepoStore extends VuexModule {
    @getter public sections: Section[] = [];
    private config = config as Config;

    @action()
    public async loadRepos() {
        this.setRepos(await GithubData.getRepos());
    }

    @mutation
    private setRepos(rps: GithubRepo[]) {
        // Filter the git hub repos and create sections from them
        this.sections = this.config.sections.map((cfgSection) =>
            new Section(
                cfgSection.title,
                cfgSection.class,
                rps
                    .filter((r) => cfgSection.repos.includes(r.name))
                    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
                    .map((repository) => this.config.repositoryOverrides &&
                        this.config.repositoryOverrides[repository.name] ?
                        Object.assign(repository, this.config.repositoryOverrides[repository.name]) : repository)));
    }
}

export const repo = RepoStore.ExtractVuexModule(RepoStore);
