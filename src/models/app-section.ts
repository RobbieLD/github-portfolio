import { GithubRepo } from './github-repo';

export class Section {

    public readonly title: string;
    public readonly class: string;
    public readonly repos: GithubRepo[];

    public constructor(tl: string, cl: string, rps: GithubRepo[]) {
        this.title = tl;
        this.class = cl;
        this.repos = rps;
    }
}
