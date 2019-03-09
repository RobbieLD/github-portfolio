<template>
  <div class="box">
    <div class="title has-text-dark">{{ repo.name }}</div>
    <div class="subtitle has-text-dark has-text-weight-light">
      <timeago :datetime="repo.updated_at"></timeago>
    </div>
    <div class="subtitle has-text-dark">
        {{ repo.description }}
    </div>
    <div class="level is-mobile">
      <div class="level-left">
        <a href="#" class="level-item has-text-info" aria-label="Stars" title="Stars">
          <font-awesome-icon icon="star"/>
          <span class="is-size-7 has-text-weight-light has-right-nudge">{{ repo.stargazers_count }}</span>
        </a>
        <a href="#" class="level-item has-text-info" aria-label="Forks" title="Forks">
          <font-awesome-icon icon="code-branch"/>
          <span class="is-size-7 has-text-weight-light has-right-nudge">{{ repo.forks }}</span>
        </a>
        <a href="#" class="level-item has-text-info" aria-label="Contributors" title="Contributors">
          <font-awesome-icon icon="users"/>
          <span class="is-size-7 has-text-weight-light has-right-nudge">2</span>
        </a>
        <a href="#" class="level-item has-text-info" aria-label="Commits" title="Commits">
          <font-awesome-icon icon="upload"/>
          <span class="is-size-7 has-text-weight-light has-right-nudge">20</span>
        </a>
        <a href="#" class="level-item has-text-info" aria-label="Releases" title="Releases">
          <font-awesome-icon icon="tag"/>
          <span class="is-size-7 has-text-weight-light has-right-nudge">6</span>
        </a>
        <a :href="repo.homepage" v-if="repo.homepage" class="has-text-danger" aria-label="Demo" title="Demo">
          <font-awesome-icon icon="desktop"/>
        </a>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { GithubRepo } from '@/models/github-repo';

@Component({
  components: {},
})
export default class Project extends Vue {
  @Prop({ required: true })
  public repo!: GithubRepo;
}
</script>

<style scoped>
  .has-right-nudge {
    padding-left: 5px;
  }
</style>
