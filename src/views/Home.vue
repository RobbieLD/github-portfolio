<template>
  <section>
    <portfolio-section heroClass="is-info">
      <!-- Header -->
      <template v-slot:header></template>
      <!-- Body -->
      <template>
        <div class="container">
          <h1 class="title">Rob Davis</h1>
          <h2 class="subtitle">GitHub Showcase</h2>
        </div>
      </template>
      <!-- Footer -->
      <template v-slot:footer></template>
    </portfolio-section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PortfolioSection from '@/components/PortfolioSection.vue';

@Component({
  components: {
    PortfolioSection,
  },
})
export default class Home extends Vue {}
</script>
