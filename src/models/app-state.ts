import { GithubUser } from './github-user';

export interface AppState {
    user: GithubUser;
    theme: 'Light' | 'Dark';
}
