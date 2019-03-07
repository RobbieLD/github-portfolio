<template>
    <div class="box">
        <div class="title has-text-dark">{{ projectTitle }}</div>
        <div class="subtitle has-text-dark">{{ projectDescription }}</div>
    </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Project extends Vue {
    @Prop({ required: true })
    public projectTitle!: string;

    @Prop({ required: true })
    public projectDescription!: string;

    @Prop({ required: true })
    public projectLastUpdate!: string;
}
</script>