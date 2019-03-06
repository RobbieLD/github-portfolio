<template>
  <nav class="navbar" role="navigation" aria-label="main nagivation">
    <div class="navbar-brand">
      <a class="navbar-item">PROFILE IMAGE
        <!-- TODO: Profile Image here -->
        <img src="..\assets\logo.png">
      </a>
      <div class="navbar-burger burger" @click="toggleMobileMenu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" v-bind:class="{'is-active' : burger}">
      <div v-if="userEmail" class="navbar-start">
        <router-link v-if="userEmail" class="navbar-item" to="/home">Home</router-link>
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
