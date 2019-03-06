<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main nagivation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="..\assets\logo.png">
      </a>
      <div class="navbar-burger burger" @click="toggleMobileMenu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" v-bind:class="{'is-active' : isMobileMenuActive}">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/home">Home</router-link>
        <router-link class="navbar-item" to="/home">GitHub</router-link>
        <router-link class="navbar-item" to="/home">Nuget</router-link>
      </div>
      <!-- 
          Proably don't need this but if we want something at the right of the nav bar it goes here
        <div class="navbar-end">
        </div> 
      -->
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
  private isMobileMenuActive = false;

  private toggleMobileMenu(): void {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }
}
</script>
