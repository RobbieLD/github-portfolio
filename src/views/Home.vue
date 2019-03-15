<template>
  <section>
    <!-- Profile Setion -->
    <portfolio-section :heroClass="this.Config.profile.class">
      <template>
        <profile :user="User"></profile>
      </template>
    </portfolio-section>

    <portfolio-section v-for="(section, index) in Sections" :key="index" :heroClass="section.class" :hashLink="section.title">
      <template v-slot:header>
        <div v-bind:id="section.title" class="title is-10">{{ section.title }}</div>
      </template>
      <template>
        <projects :repos="section.repos"></projects>
      </template>
    </portfolio-section>
  </section>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import { Component, Mixin, Mixins } from 'vue-mixin-decorator';
import { vxm } from '@/store';
import PortfolioSection from '@/components/PortfolioSection.vue';
import Profile from '@/components/Profile.vue';
import Project from '@/components/Project.vue';
import Projects from '@/components/Projects.vue';
import GithubData from '@/services/github-data';
import { GithubRepo } from '@/models/github-repo';
import { GithubUser } from '@/models/github-user';
import { ConfigMixin } from '@/mixins/config';

@Component({
  components: {
    PortfolioSection,
    Profile,
    Project,
    Projects,
  },
})
export default class Home extends Mixins<ConfigMixin>(ConfigMixin) {

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

