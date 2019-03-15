<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main nagivation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <figure class="image is-24x24">
          <img class="is-rounded" :src="avatar">
        </figure>
      </a>
      <div class="navbar-burger burger" @click="toggleMobileMenu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" v-bind:class="{'is-active' : isMobileMenuActive}">
      <div class="navbar-start">
        <a
          v-for="(section, index) in sections"
          :key="index"
          v-bind:href="createHashLink(section.title)"
          v-bind:class="section.class"
          class="navbar-item"
        >{{ section.title }}</a>
      </div>

      <div class="navbar-end">
        <a
          v-for="(social, index) in this.Config.social"
          :key="index"
          v-bind:href="social.url"
          target="_blank"
          class="navbar-item is-size-4"
          v-bind:aria-label="social.service"
          v-bind:title="social.service"
        >
          <font-awesome-icon :icon="createFontImport(social.service)"/>
        </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator';
import { Component, Mixin, Mixins } from 'vue-mixin-decorator';
import { GithubUser } from '@/models/github-user';
import { vxm } from '@/store';
import { ConfigMixin } from '@/mixins/config';

@Component
export default class NavBar extends Mixins<ConfigMixin>(ConfigMixin) {
  private isMobileMenuActive = false;

  private toggleMobileMenu(): void {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }

  private get avatar() {
    return vxm.user.gitUser.avatar_url;
  }

  private get name() {
    return vxm.user.gitUser.name;
  }

  private get sections() {
    return vxm.repo.sections;
  }

  private createHashLink(name: string) {
    return '#' + name;
  }

  private createFontImport(name: string) {
    return ['fab', name];
  }
}
</script>
