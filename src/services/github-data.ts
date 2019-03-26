import GithubApi from './github-api';
import config from '@/assets/config.json';
import { GithubUser } from '@/models/github-user';
import { GithubRepo} from '@/models/github-repo';

class GithubData {
    public getUser(): Promise<GithubUser> {
        return GithubApi.getUser(config.githubUser);
    }

    public async getRepos(): Promise<GithubRepo[]> {
        const userRepos = GithubApi.getUserRepos(config.githubUser);
        const externalRepos = config.externalRepositories.map((name) => GithubApi.getExternalRepo(name));

        return (await userRepos).concat(await Promise.all(externalRepos));
    }
}

export default new GithubData();
