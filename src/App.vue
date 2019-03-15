<template>
  <div id="app">
    <div>
      <nav-bar></nav-bar>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import { Component, Mixin, Mixins } from 'vue-mixin-decorator';
import NavBar from '@/components/NavBar.vue';
import { ConfigMixin } from '@/mixins/config';

@Component({
  components: {
    NavBar,
  },
})
export default class App  extends Mixins<ConfigMixin>(ConfigMixin) {
  private created() {
     const themeUrl = 'https://unpkg.com/bulmaswatch/' + this.Config.theme.toLowerCase() + '/bulmaswatch.min.css';
     const themeLink = document.getElementById('theme');

     if (themeLink) {
       (themeLink as HTMLLinkElement).href = themeUrl;
     }
  }
}
</script>