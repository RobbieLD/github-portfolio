<template>
  <section>
    <!-- Profile Setion -->
    <portfolio-section heroClass="is-dark">
      <template>
        <profile></profile>
      </template>
    </portfolio-section>

    <!-- C# Section -->
    <portfolio-section heroClass="is-warning">
      <template v-slot:header>
        <div class="title is-10">C#</div>
      </template>
      <template>
        <div class="columns is-multiline is-vcentered is-centered">
          <div class="column is-one-quarter-desktop is-half-tablet">
            <project projectTitle="Awesome Project 1" projectDescription="My very cool library of great usefulness" projectLastUpdate="1 Hour ago"></project>
          </div>
          <div class="column is-one-quarter-desktop is-half-tablet">
            <project projectTitle="Awesome Project 1" projectDescription="My very cool library of great usefulness" projectLastUpdate="1 Hour ago"></project>
          </div>
          <div class="column is-one-quarter-desktop is-half-tablet">
            <project projectTitle="Awesome Project 1" projectDescription="My very cool library of great usefulness" projectLastUpdate="1 Hour ago"></project>
          </div>
          <div class="column is-one-quarter-desktop is-half-tablet">
            <project projectTitle="Awesome Project 1" projectDescription="My very cool library of great usefulness" projectLastUpdate="1 Hour ago"></project>
          </div>
        </div>
      </template>
    </portfolio-section>

    <!-- JavaScript Section -->
    <portfolio-section heroClass="is-primary">
      <template v-slot:header>
        <div class="title is-10">JavaScript</div>
      </template>
      <template>
        <div class="columns is-multiline is-vcentered is-centered">
          <div class="column is-one-quarter-desktop is-half-tablet">
            <project projectTitle="Awesome Project 1" projectDescription="My very cool library of great usefulness" projectLastUpdate="1 Hour ago"></project>
          </div>
          <div class="column is-one-quarter-desktop is-half-tablet">
            <project projectTitle="Awesome Project 1" projectDescription="My very cool library of great usefulness" projectLastUpdate="1 Hour ago"></project>
          </div>
        </div>
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
import Project from '@/components/Project.vue';

@Component({
  components: {
    PortfolioSection,
    Profile,
    Project,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
.is-10 {
  font-size: 10rem;
}
</style>

