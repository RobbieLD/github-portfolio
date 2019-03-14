import Vue from 'vue';
import { Mixin } from 'vue-mixin-decorator';
import config from '@/assets/config.json';
import { Config } from '@/models/app-config';

@Mixin
export class ConfigMixin extends Vue {
    public Config: Config = config as Config;
}
