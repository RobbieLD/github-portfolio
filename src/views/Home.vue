<template>
  <section>
    <!-- Profile Setion -->
    <portfolio-section heroClass="is-info">
      <!-- Header -->
      <template v-slot:header></template>
      <!-- Body -->
      <template>
        <profile avatar="https://avatars2.githubusercontent.com/u/9649383?v=4"></profile>
      </template>
      <!-- Footer -->
      <template v-slot:footer></template>
    </portfolio-section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PortfolioSection from '@/components/PortfolioSection.vue';
import Profile from '@/components/Profile.vue';

@Component({
  components: {
    PortfolioSection,
    Profile,
  },
})
export default class Home extends Vue {}
</script>
