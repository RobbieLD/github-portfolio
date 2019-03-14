<template>
  <section>
    <!-- Profile Setion -->
    <portfolio-section heroClass="is-dark">
      <template>
        <profile :user="User"></profile>
      </template>
    </portfolio-section>

    <portfolio-section v-for="(section, index) in Sections" :key="index" :heroClass="section.class">
      <template v-slot:header>
        <div class="title is-10">{{ section.title }}</div>
      </template>
      <template>
        <projects :repos="section.repos"></projects>
      </template>
    </portfolio-section>

    <!-- JavaScript Section -->
    <!-- <portfolio-section heroClass="is-primary">
      <template v-slot:header>
        <div class="title is-10">JavaScript</div>
      </template>
      <template>
        <div class="columns is-multiline is-vcentered is-centered">
          <div class="column is-one-quarter-desktop is-half-tablet">
            <project
              projectTitle="Awesome Project 1"
              projectDescription="My very cool library of great usefulness."
              projectLastUpdate="1 Hour ago"
            ></project>
          </div>
          <div class="column is-one-quarter-desktop is-half-tablet">
            <project
              projectTitle="Awesome Project 1"
              projectDescription="My very cool library of great usefulness."
              projectLastUpdate="1 Hour ago"
            ></project>
          </div>
        </div>
      </template>
    </portfolio-section> -->
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { vxm } from '@/store';
import PortfolioSection from '@/components/PortfolioSection.vue';
import Profile from '@/components/Profile.vue';
import Project from '@/components/Project.vue';
import Projects from '@/components/Projects.vue';
import GithubData from '@/services/github-data';
import { GithubRepo } from '@/models/github-repo';
import { GithubUser } from '@/models/github-user';

@Component({
  components: {
    PortfolioSection,
    Profile,
    Project,
    Projects,
  },
})
export default class Home extends Vue {

  private get User() {
    return vxm.user.gitUser;
  }

  private get Sections() {
    return vxm.repo.sections;
  }

  private mounted() {
    vxm.user.loadUser();
    vxm.repo.loadRepos();
  }
}
</script>

<style scoped>
.is-10 {
  font-size: 10rem;
}
</style>

