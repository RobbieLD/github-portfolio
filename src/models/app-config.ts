export interface Config {
    githubUser: string;
    profile: ConfigProfile;
    social: ConfigSocial[];
    sections: ConfigSection[];
}

export interface ConfigSection {
    title: string;
    class: string;
    repos: string[];
}

export interface ConfigSocial {
    service: 'twitter' | 'bitbucket' | 'stack-overflow' | 'npm';
    url: string;
}

export interface ConfigProfile {
    showLocation: boolean;
}
