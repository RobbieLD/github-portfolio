<template>
  <section>
    <language-section mainTitle="C#" subTitle="My C# Projects" heroClass="is-primary"></language-section>
    <language-section mainTitle="JavaScript" subTitle="My JavaScript Projects" heroClass="is-info"></language-section>
    <language-section mainTitle="Random" subTitle="My Random Repos" heroClass="is-link"></language-section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LanguageSection from '@/components/LanguageSection.vue';

@Component({
  components: {
    LanguageSection,
  },
})
export default class Home extends Vue {}
</script>
