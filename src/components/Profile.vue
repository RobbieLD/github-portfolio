<template>
  <div class="columns is-vcentered" id="profile">
    <div class="column">
      <figure class="image is-256x256">
        <img v-bind:src="user.avatar_url" alt="User Avatar" class="is-rounded">
      </figure>
    </div>
    <div class="column is-three-quarters">
      <div class="title">{{ user.name }}</div>
      <div class="subtitle">
        <a :href="repoUrl" class="is-link" target="_blank">@{{ user.login }}</a>
      </div>
      <div class="subtitle">
        <font-awesome-icon v-if="this.Config.profile.showLocation" class="is-size-3" :icon="['fas', 'map-marker-alt']"/>
        <span v-if="this.Config.profile.showLocation" class="nudge-right">{{ user.location }}</span>
      </div>
      <div>{{ user.bio }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator';
import { Component, Mixin, Mixins } from 'vue-mixin-decorator';
import { GithubUser } from '@/models/github-user';
import { ConfigMixin } from '@/mixins/config';

@Component
export default class Profile extends Mixins<ConfigMixin>(ConfigMixin) {

  @Prop({ required: true })
  public user!: GithubUser;

  private get repoUrl() {
    if (this.user && this.user.login) {
      return `https://github.com/${this.user.login}`;
    }
  }
}
</script>

<style>
.is-256x256 {
  height: 256px;
  width: 256px;
}
.hero.is-dark {
  fill: whitesmoke;
}

.nudge-right {
  margin-left: 5px;
}
</style>
