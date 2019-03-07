<template>
  <section>
    <!-- Profile Setion -->
    <portfolio-section heroClass="is-dark">
      <template>
        <profile 
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          handle="RobbieLD" 
          name="Rob Davis" 
          avatar="https://avatars2.githubusercontent.com/u/9649383?v=4"></profile>
      </template>
    </portfolio-section>
    <portfolio-section heroClass="is-primary">
      <template v-slot:header>
        C# Repositories
      </template>
      <template>
        <repository></repository>
      </template>
    </portfolio-section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PortfolioSection from '@/components/PortfolioSection.vue';
import Profile from '@/components/Profile.vue';
import Repository from '@/components/Repository.vue';

@Component({
  components: {
    PortfolioSection,
    Profile,
    Repository,
  },
})
export default class Home extends Vue {}
</script>
