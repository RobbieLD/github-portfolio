import GithubApi from './github-api';
import config from '@/../public/config.json';
import { GithubUser } from '@/models/github-user';
import { GithubRepo } from '@/models/github-repo';
import { Config } from '@/models/app-config';

class GithubData {
    private config = config as Config;
    public getUser(): Promise<GithubUser> {
        return GithubApi.getUser(this.config.githubUser);
    }

    public async getRepos(): Promise<GithubRepo[]> {
        const userRepos = GithubApi.getUserRepos(this.config.githubUser);
        if (this.config.externalRepositories) {
            const externalRepos = this.config.externalRepositories.map((name) => GithubApi.getExternalRepo(name));
            return (await userRepos).concat(await Promise.all(externalRepos));
        }

        return await userRepos;
    }
}

export default new GithubData();
