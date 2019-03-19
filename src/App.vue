<template>
  <div id="app">
    <div>
      <nav-bar></nav-bar>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue';
import { ConfigMixin } from '@/mixins/config';

@Component({
  components: {
    NavBar,
  },
})
export default class App  extends Vue {}
</script>