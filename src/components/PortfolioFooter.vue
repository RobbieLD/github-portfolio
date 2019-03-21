<template>
  <section v-bind:class="heroClass" class="hero is-dark is-medium is-bold">
    <div class="hero-body">      
        <div class="has-text-centered">Created By <a href="https://github.com/RobbieLD" class="is-text">@RobbieLd</a> and <a href="https://github.com/a-jackson">@a-jackson</a></div>
      </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PortfolioFooter extends Vue {}
</script>

<style>
</style>
