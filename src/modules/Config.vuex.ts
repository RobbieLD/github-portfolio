import { VuexModule, mutation, action, getter, Module } from 'vuex-class-component';
import { Config } from '@/models/app-config';

@Module({ namespacedPath: 'config/' })
export class ConfigStore extends VuexModule {
    // This needs to be a partial or it won't be reactive
    @getter public cfg: Partial<Config> = {};

    @action()
    public async loadConfig() {
        const response = await fetch('config.json');
        const conf = await response.json() as Config;
        this.setConfig(conf);
    }

    @mutation
    private setConfig(c: Config) {
        this.cfg = c;
    }
}

export const config = ConfigStore.ExtractVuexModule(ConfigStore);
