import { VuexModule, mutation, action, getter, Module } from 'vuex-class-component';
import GithubData from '@/services/github-data';
import { Section } from '@/models/app-section';
import { GithubRepo } from '@/models/github-repo';
import { Config } from '@/models/app-config';

@Module({ namespacedPath: 'repo/' })
export class RepoStore extends VuexModule {
    @getter public sections: Section[] = [];

    @action()
    public async loadRepos(cfg: Partial<Config>) {
        if (cfg.sections) {
            const repos = await GithubData.getRepos(cfg);
            const sections = cfg.sections.map((cfgSection) =>
                new Section(
                    cfgSection.title,
                    cfgSection.class,
                    repos
                        .filter((r) => cfgSection.repos.includes(r.name))
                        .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
                        .map((repository) => cfg.repositoryOverrides &&
                            cfg.repositoryOverrides[repository.name] ?
                            Object.assign(repository, cfg.repositoryOverrides[repository.name]) : repository)));
            this.setRepos(sections);
        }
    }

    @mutation
    private setRepos(s: Section[]) {
        this.sections = s;
    }
}

export const repo = RepoStore.ExtractVuexModule(RepoStore);
