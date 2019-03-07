<template>
    <div class="container">
        <div v-for="(repo, index) in repos" :key="index">
            {{repo.name}}
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';
import GithubData from '@/services/github-data';
import { GithubRepo } from '@/models/github-repo';

@Component
export default class Repository extends Vue {
    private repos: GithubRepo[] = [];

    private async mounted() {
        this.repos = await GithubData.getRepos();
    }
}

</script>

<style scoped>

</style>

