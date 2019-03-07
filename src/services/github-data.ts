import GithubApi from './github-api';
import config from '@/assets/config.json';
import { GithubUser } from '@/models/github-user';

class GithubData {
    public getUser(): Promise<GithubUser> {
        return GithubApi.getUser(config.githubUser);
    }
}

export default new GithubData();
