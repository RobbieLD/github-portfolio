import GithubApi from './github-api';
import { GithubUser } from '@/models/github-user';
import { GithubRepo } from '@/models/github-repo';
import { Config } from '@/models/app-config';

class GithubData {
    public getUser(cfg: Partial<Config>): Promise<GithubUser> {
        if (cfg.githubUser) {
            return GithubApi.getUser(cfg.githubUser);
        } else {
            // is this very bad?
            return new Promise<GithubUser>(() => undefined);
        }
    }

    public async getRepos(cfg: Partial<Config>): Promise<GithubRepo[]> {
        if (cfg.githubUser) {
            const userRepos = GithubApi.getUserRepos(cfg.githubUser);
            if (cfg.externalRepositories) {
                const externalRepos = cfg.externalRepositories.map((name) => GithubApi.getExternalRepo(name));
                return (await userRepos).concat(await Promise.all(externalRepos));
            }

            return await userRepos;
        } else {
            // this too?
            return new Promise<GithubRepo[]>(() => undefined);
        }
    }
}

export default new GithubData();
