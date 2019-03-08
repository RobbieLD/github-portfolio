<template>
  <div class="columns is-vcentered">
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
        <svg
          class="icon"
          viewBox="0 0 12 16"
          version="1.1"
          width="12"
          height="16"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
          ></path>
        </svg>
        <span>{{ user.location }}</span>
      </div>
      <div>{{ user.bio }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { GithubUser } from '@/models/github-user';
import GithubData from '@/services/github-data';

@Component
export default class Profile extends Vue {
  private user: Partial<GithubUser> = {};

  private async created() {
    this.user = await GithubData.getUser();
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
</style>
