import { VuexModule, mutation, action, getter, Module } from 'vuex-class-component';
import { Config } from '@/models/app-config';

@Module({ namespacedPath: 'config/' })
export class ConfigStore extends VuexModule {
    @getter public cfg!: Config;

    private readonly configPath: string = 'config.json';

    @action()
    public async loadConfig() {
        const response = await fetch(this.configPath);
        this.setConfig(await response.json() as Config);
    }

    @mutation
    private setConfig(cfg: Config) {
        this.cfg = cfg;
    }
}

export const config = ConfigStore.ExtractVuexModule(ConfigStore);
