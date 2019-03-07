<template>
  <section v-bind:class="heroClass" class="hero is-fullheight-with-navbar is-bold">
    <div class="hero-head">
      <slot name="header"></slot>
    </div>
    <div class="hero-body">
      <section class="container">
        <slot></slot>
      </section>
    </div>
    <div class="hero-footer">
      <slot name="footer"></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PortfolioSection extends Vue {
  @Prop({ default: 'is-primary' })
  public heroClass!: string;
}
</script>