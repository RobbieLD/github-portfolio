<template>
  <div class="columns is-multiline is-vcentered is-centered">
    <div
      class="column is-one-quarter-desktop is-half-tablet"
      v-for="(repo, index) in repos"
      :key="index"
    >
      <project :repo="repo"></project>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import GithubData from '@/services/github-data';
import Project from '@/components/Project.vue';
import { GithubRepo } from '@/models/github-repo';

@Component({
  components: {
    Project,
  },
})
export default class Projects extends Vue {
  @Prop({ required: true })
  private repos: GithubRepo[] = [];
}
</script>

<style scoped>
</style>

