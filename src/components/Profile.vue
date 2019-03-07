<template>
    <div class="columns is-vcentered">
        <div class="column">
            <figure class="image is-256x256">
                <img v-bind:src="avatar" alt="User Avatar" class="is-rounded">
            </figure>
        </div>
        <div class="column is-three-quarters">
            <div class="title">{{ name }}</div>
            <div class="subtitle"><a href="#" class="is-link">@{{ handle }}</a></div>
            <div>
                {{ description }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Profile extends Vue {
    @Prop({ required: true })
    public avatar!: string;

    @Prop({ required: true })
    public name!: string;

    @Prop({ required: true })
    public handle!: string;

    @Prop( { required: true })
    public description!: string;
}

</script>

<style scoped>
    .is-256x256 {
        height: 256px;
        width: 256px;
}
</style>
