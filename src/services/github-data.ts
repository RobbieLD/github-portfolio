import GithubApi from './github-api';
import config from '@/assets/config.json';
import { GithubUser } from '@/models/github-user';
import { GithubRepo} from '@/models/github-repo';

class GithubData {
    public getUser(): Promise<GithubUser> {
        return GithubApi.getUser(config.githubUser);
    }

    public getRepos(): Promise<GithubRepo[]> {
        return GithubApi.getUserRepos(config.githubUser);
    }
}

export default new GithubData();
