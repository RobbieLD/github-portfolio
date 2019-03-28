import GithubApi from './github-api';
import { GithubRepo } from '@/models/github-repo';
import { Config } from '@/models/app-config';
import { GithubUser } from '@/models/github-user';

class GithubData {
    public async getUser(cfg: Partial<Config>): Promise<GithubUser | undefined> {
        return cfg.githubUser ? await GithubApi.getUser(cfg.githubUser) : undefined;
    }

    public async getRepos(cfg: Partial<Config>): Promise<GithubRepo[]> {
        if (cfg.githubUser) {
            const userRepos =  GithubApi.getUserRepos(cfg.githubUser);
            if (cfg.externalRepositories) {
                const externalRepos = cfg.externalRepositories.map((name) => GithubApi.getExternalRepo(name));
                return (await userRepos).concat(await Promise.all(externalRepos));
            } else {
                return await userRepos;
            }
        }

        return [];
    }
}

export default new GithubData();
