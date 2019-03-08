<template>
  <div class="box">
    <div class="title has-text-dark">{{ projectTitle }}</div>
    <div class="subtitle has-text-dark has-text-weight-light">@3 days ago</div>
    <div class="subtitle has-text-dark">
        {{ projectDescription }}

        <a href="#" class="has-text-danger" aria-label="Demo" title="Demo">
          <font-awesome-icon icon="desktop"/>
        </a>
    </div>
    <!-- <div class="level is-mobile">
        <div class="level-left">
            <span class="is-7 has-text-weight-light">
                Last update 5 hours ago
            </span>
        </div>
        <div class="level-right">
            <a href="#" class="level-item button is-danger">Demo</a>
        </div>
    </div> -->
    <div class="level is-mobile">
      <div class="level-left">
        <a href="#" class="level-item has-text-info" aria-label="Stars" title="Stars">
          <font-awesome-icon icon="star"/>
          &nbsp;(5)
        </a>
        <a href="#" class="level-item has-text-info" aria-label="Forks" title="Forks">
          <font-awesome-icon icon="code-branch"/>
          &nbsp;(1)
        </a>
        <a href="#" class="level-item has-text-info" aria-label="Contributors" title="Contributors">
          <font-awesome-icon icon="users"/>
          &nbsp;(2)
        </a>
        <a href="#" class="level-item has-text-info" aria-label="Commits" title="Commits">
          <font-awesome-icon icon="upload"/>
          &nbsp;(50)
        </a>
        <a href="#" class="level-item has-text-info" aria-label="Releases" title="Releases">
          <font-awesome-icon icon="tag"/>
          &nbsp;(6)
        </a>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {},
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