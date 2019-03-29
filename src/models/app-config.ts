import { GithubRepo } from '@/models/github-repo';

type PartialNullable<T> = {
    [P in keyof T]?: T[P] | null;
};

interface InterestTypes {
    [name: string]: InterestType;
}

interface RepositoryOverrides {
    [name: string]: PartialNullable<GithubRepo>;
}

export interface Config {
    githubUser: string;
    profile: ConfigProfile;
    social: ConfigSocial[];
    sections: ConfigSection[];
    repositoryOverrides?: RepositoryOverrides;
    externalRepositories?: string[];
}

export interface ConfigSection {
    title: string;
    class: string;
    repos: string[];
}

export interface InterestType {
    title: string;
    colorClass: string;
}

export interface Interest {
    title: string;
    sizeClass: string;
    type: keyof InterestTypes;
}

export interface ConfigSocial {
    service: 'twitter' | 'bitbucket' | 'stack-overflow' | 'npm' | 'envelope' | 'facebook' | '500px' | 'flickr';
    url: string;
}

export interface ConfigProfile {
    showLocation: boolean;
    class: string;
    interestTypes: InterestTypes;
    interests: Interest[];
}
