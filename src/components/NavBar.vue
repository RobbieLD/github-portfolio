<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main nagivation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <figure class="image is-24x24">
          <img class="is-rounded" :src="avatarUrl">
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
        <span class="navbar-item">{{name}}</span>
        <!-- <router-link class="navbar-item" to="/home">Home</router-link>
        <router-link class="navbar-item" to="/home">GitHub</router-link>
        <router-link class="navbar-item" to="/home">Nuget</router-link>-->
      </div>
      <!-- 
          We could make these configurable in the config file
      -->
      <div class="navbar-end">
        <a href="#" class="level-item is-size-7" aria-label="GitHub" title="GitHub">
          <span class="fa-stack fa-2x">
            <font-awesome-icon class="fa-stack-2x" icon="circle"/>
            <font-awesome-icon class="fa-stack-1x fa-inverse" :icon="['fab', 'github']"/>
          </span>
        </a>
        
        <a href="#" class="level-item is-size-7" aria-label="Twitter" title="Twitter">
          <span class="fa-stack fa-2x">
            <font-awesome-icon class="fa-stack-2x" icon="circle"/>
            <font-awesome-icon class="fa-stack-1x fa-inverse" :icon="['fab', 'twitter']"/>
          </span>
        </a>
        
        <a href="#" class="level-item is-size-7" aria-label="Stack Overflow" title="Stack Overflow">
          <span class="fa-stack fa-2x">
            <font-awesome-icon class="fa-stack-2x" icon="circle"/>
            <font-awesome-icon class="fa-stack-1x fa-inverse" :icon="['fab', 'stack-overflow']"/>
          </span>
        </a>
        
        <a href="#" class="level-item is-size-7" aria-label="Npm" title="Npm">
          <span class="fa-stack fa-2x">
            <font-awesome-icon class="fa-stack-2x" icon="circle"/>
            <font-awesome-icon class="fa-stack-1x fa-inverse" :icon="['fab', 'npm']"/>
          </span>
        </a>
        
        <a href="#" class="level-item is-size-7" aria-label="Bitbucket" title="Bitbucket">
          <span class="fa-stack fa-2x">
            <font-awesome-icon class="fa-stack-2x" icon="circle"/>
            <font-awesome-icon class="fa-stack-1x fa-inverse" :icon="['fab', 'bitbucket']"/>
          </span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import GithubData from '@/services/github-data';

@Component
export default class NavBar extends Vue {
  private isMobileMenuActive = false;
  private avatarUrl = '';

  private toggleMobileMenu(): void {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }

  private async mounted() {
    const user = await GithubData.getUser();
    this.avatarUrl = user.avatar_url;
  }
}
</script>
