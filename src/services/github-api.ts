import { GithubUser } from '@/models/github-user';
import { GithubRepo } from '@/models/github-repo';

class GithubApi {
    private readonly baseUrl: string = 'https://api.github.com/';

    public getUser(username: string): Promise<GithubUser> {
        return this.get<GithubUser>(`users/${username}`);
    }

    public getUserRepos(username: string): Promise<GithubRepo> {
        return this.get<GithubRepo>(`users/${username}/repos`);
    }

    private async get<T>(url: string): Promise<T> {
        const request: RequestInit = {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json',
            },
            method: 'GET',
        };

        const response = await fetch(this.baseUrl + url, request);
        return await response.json() as T;
    }
}

export default new GithubApi();
