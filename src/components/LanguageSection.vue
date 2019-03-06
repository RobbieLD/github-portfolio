<template>
  <section v-bind:class="heroClass" class="hero is-fullheight-with-navbar">
    <div class="hero-head"></div>
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ mainTitle }}</h1>
        <h2 class="subtitle">{{ subTitle }}</h2>
      </div>
    </div>
    <div class="hero-footer"></div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class LanguageSection extends Vue {
  @Prop({ required: true })
  mainTitle!: string;

  @Prop({ required: true })
  subTitle!: string;

  @Prop({ default: "is-primary" })
  heroClass!: string;
}
</script>