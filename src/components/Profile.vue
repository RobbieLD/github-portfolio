<template>
    <figure class="image is-256x256">
        <img v-bind:src="avatar" alt="User Avatar" class="is-rounded">
    </figure>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Profile extends Vue {
    @Prop({ required: true })
    public avatar!: string;
}

</script>

<style scoped>
    .is-256x256 {
        height: 256px;
        width: 256px;
}
</style>


</style>

