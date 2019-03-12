<template>
  <section>
    <!-- Profile Setion -->
    <portfolio-section heroClass="is-dark">
      <template>
        <profile
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          handle="RobbieLD"
          name="Rob Davis"
          avatar="https://avatars2.githubusercontent.com/u/9649383?v=4"
        ></profile>
      </template>
    </portfolio-section>

    <!-- C# Section -->
    <portfolio-section heroClass="is-warning">
      <template v-slot:header>
        <div class="title is-10">C#</div>
      </template>
      <template>
        <div class="columns is-multiline is-vcentered is-centered">
          <div class="column is-one-quarter-desktop is-half-tablet">
            <project projectTitle="Awesome Project 1" projectDescription="My very cool library of great usefulness." projectLastUpdate="1 Hour ago"></project>
          </div>
          <div class="column is-one-quarter-desktop is-half-tablet">
            <project projectTitle="Awesome Project 1" projectDescription="My very cool library of great usefulness." projectLastUpdate="1 Hour ago"></project>
          </div>
          <div class="column is-one-quarter-desktop is-half-tablet">
            <project projectTitle="Awesome Project 1" projectDescription="My very cool library of great usefulness." projectLastUpdate="1 Hour ago"></project>
          </div>
          <div class="column is-one-quarter-desktop is-half-tablet">
            <project projectTitle="Awesome Project 1" projectDescription="My very cool library of great usefulness." projectLastUpdate="1 Hour ago"></project>
          </div>
        </div>
      </template>
    </portfolio-section>

    <!-- JavaScript Section -->
    <portfolio-section heroClass="is-primary">
      <template v-slot:header>
        <div class="title is-10">JavaScript</div>
      </template>
      <template>
        <div class="columns is-multiline is-vcentered is-centered">
          <div class="column is-one-quarter-desktop is-half-tablet">
            <project projectTitle="Awesome Project 1" projectDescription="My very cool library of great usefulness." projectLastUpdate="1 Hour ago"></project>
          </div>
          <div class="column is-one-quarter-desktop is-half-tablet">
            <project projectTitle="Awesome Project 1" projectDescription="My very cool library of great usefulness." projectLastUpdate="1 Hour ago"></project>
          </div>
        </div>
      </template>
    </portfolio-section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { vxm } from '@/store';
import PortfolioSection from '@/components/PortfolioSection.vue';
import Profile from '@/components/Profile.vue';
import Project from '@/components/Project.vue';

@Component({
  components: {
    PortfolioSection,
    Profile,
    Project,
  },
})
export default class Home extends Vue {
  private mounted() {
    vxm.user.loadUser();
  }
}
</script>

<style scoped>
.is-10 {
  font-size: 10rem;
}
</style>

