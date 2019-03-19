import { GithubRepo } from '@/models/github-repo';

type PartialNullable<T> = {
    [P in keyof T]?: T[P] | null;
};

export interface Config {
    githubUser: string;
    // Theme's come from https://jenil.github.io/bulmaswatch/
    theme: string;
    profile: ConfigProfile;
    social: ConfigSocial[];
    sections: ConfigSection[];
    repositoryOverrides: { [name: string]: PartialNullable<GithubRepo> };
}

export interface ConfigSection {
    title: string;
    class: string;
    repos: string[];
}

export interface Interest {
    title: string;
    sizeClass: string;
    colorClass: string;
}

export interface ConfigSocial {
    service: 'twitter' | 'bitbucket' | 'stack-overflow' | 'npm';
    url: string;
}

export interface ConfigProfile {
    showLocation: boolean;
    class: string;
    interests: Interest[];
}
