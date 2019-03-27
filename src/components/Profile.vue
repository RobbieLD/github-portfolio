<template>
  <div v-if="Config.profile" class="columns is-vcentered" id="profile">
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
        <font-awesome-icon
          v-if="this.Config.profile.showLocation"
          class="is-size-3"
          :icon="['fas', 'map-marker-alt']"
        />
        <span v-if="this.Config.profile.showLocation" class="nudge-right">{{ user.location }}</span>
      </div>
      <div class="nudge-down">{{ user.bio }}</div>
      <div class="tags">
        <span
          class="tag"
          v-for="(interest, index) in Config.profile.interests"
          :key="index"
          v-bind:class="[interest.sizeClass, Config.profile.interestTypes[interest.type].colorClass]"
        >{{ interest.title }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator';
import { Component, Mixin, Mixins } from 'vue-mixin-decorator';
import { GithubUser } from '@/models/github-user';
import { vxm } from '@/store';

@Component
export default class Profile extends Vue {
  @Prop({ required: true })
  public user!: GithubUser;

  private get Config() {
    return vxm.config.cfg;
  }

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

.nudge-down {
  margin-bottom: 20px;
}

.nudge-right {
  margin-left: 5px;
}
</style>
