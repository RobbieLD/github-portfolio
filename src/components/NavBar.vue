<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main nagivation">
    <div class="navbar-brand">
      <a class="navbar-item" v-on:click="navLinkClicked('profile')">
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
          v-on:click="navLinkClicked(section.title)"
          :key="index"
          v-bind:class="section.class"
          class="navbar-item"
        >{{ section.title }}</a>
      </div>

      <div class="navbar-end">
        <a
          v-for="(social, index) in Socials"
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

@Component
export default class NavBar extends Vue {
  private isMobileMenuActive = false;

  public navLinkClicked(targetName: string) {
    const target = document.getElementById(targetName);
    const navbar = document.getElementsByClassName('navbar-brand')[0];
    let scrollHeight = 0;
    if (target) {
      scrollHeight += target.offsetTop;
    }

    if (navbar) {
      scrollHeight -= navbar.clientHeight;
    }

    const supportsNativeSmoothScroll =
      'scrollBehavior' in document.documentElement.style;
    if (supportsNativeSmoothScroll) {
      window.scrollTo({ left: 0, top: scrollHeight, behavior: 'smooth' });
    } else {
      window.scrollTo(0, scrollHeight);
    }

    if (this.isMobileMenuActive) {
      this.toggleMobileMenu();
    }
  }

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

  private get Socials() {
    return vxm.config.cfg.social;
  }

  private createFontImport(name: string) {
    return ['fab', name];
  }
}
</script>
