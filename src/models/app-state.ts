import { GithubUser } from './github-user';

export interface AppState {
    user: Partial<GithubUser>;
    theme: 'Light' | 'Dark';
}
