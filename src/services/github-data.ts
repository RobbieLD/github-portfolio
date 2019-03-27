import GithubApi from './github-api';
import { GithubUser } from '@/models/github-user';
import { GithubRepo } from '@/models/github-repo';
import { Config } from '@/models/app-config';

class GithubData {
    public getUser(cfg: Config): Promise<GithubUser> {
        return GithubApi.getUser(cfg.githubUser);
    }

    public async getRepos(cfg: Config): Promise<GithubRepo[]> {
        const userRepos = GithubApi.getUserRepos(cfg.githubUser);
        if (cfg.externalRepositories) {
            const externalRepos = cfg.externalRepositories.map((name) => GithubApi.getExternalRepo(name));
            return (await userRepos).concat(await Promise.all(externalRepos));
        }

        return await userRepos;
    }
}

export default new GithubData();
