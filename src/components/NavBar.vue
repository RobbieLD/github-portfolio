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
        <a v-for="(section, index) in sections" :key="index" v-bind:href="createHashLink(section.title)" v-bind:class="section.class" class="navbar-item">{{ section.title }}</a>
      </div>
      <!-- 
          We could make these configurable in the config file
      -->
      <div class="navbar-end">
        <a href="#" class="navbar-item is-size-4" aria-label="GitHub" title="GitHub">
          <font-awesome-icon :icon="['fab', 'github']"/>
        </a>
        
        <a href="#" class="navbar-item is-size-4" aria-label="Twitter" title="Twitter">
          <font-awesome-icon :icon="['fab', 'twitter']"/>
        </a>
        
        <a href="#" class="navbar-item is-size-4" aria-label="Stack Overflow" title="Stack Overflow">
          <font-awesome-icon :icon="['fab', 'stack-overflow']"/>
        </a>
        
        <a href="#" class="navbar-item is-size-4" aria-label="Npm" title="Npm">
          <font-awesome-icon :icon="['fab', 'npm']"/>
        </a>
        
        <a href="#" class="navbar-item is-size-4" aria-label="Bitbucket" title="Bitbucket">
          <font-awesome-icon :icon="['fab', 'bitbucket']"/>
        </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { GithubUser } from '@/models/github-user';
import { vxm } from '@/store';

@Component
export default class NavBar extends Vue {
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
}
</script>
