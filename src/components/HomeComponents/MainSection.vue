<template>
  <div id="home-main-section">
    <section
      class="uk-section uk-section-small uk-margin-small-top"
    >
      <!-- First Card -->
      <Card v-bind:imageSource="card1.image" v-bind:header="card1.header" v-bind:content="card1.content" v-bind:bgcolor="'background: #FF9650'" />

      <!-- Second Card -->
      <Card v-bind:imageSource="card2.image" v-bind:header="card2.header" v-bind:content="card2.content" v-bind:bgcolor="'background: #A41F76'" />

      <!-- Second Card -->
      <Card v-bind:imageSource="card3.image" v-bind:header="card3.header" v-bind:content="card3.content" v-bind:bgcolor="'background: #7F0056'" />

    </section>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "HomeMainSection",
  components: {
    Card,
  },
  data: function() {
    return {
      card1: {
        image: require("@/assets/Illustrations/ProjectManager.svg"),
        header: "No size fits all",
        content:
          "The Instrumentality project is focused on developers. Instead of trying to cover multiple use cases, we strive to achieve the best possible workflow for the programmer and aid the project manager in delivering a development strategy with great efficience."
      },

      card2: {
        image: require("@/assets/Illustrations/MachineLearning.svg"),
        header: "Let the machines do your work",
        content:
          "We packed some nice features for project managers to make it really easy for them to distribute tasks to their team. The machine learning module will evenly spread the tasks among the temmates based on their experience and area of expertise. All you need to do is tag the task appropriately and we'll do the rest. We'll also adjust you team's stats as we go."
      },

      card3: {
        image: require("@/assets/Illustrations/SecurityOpen.svg"),
        header: "Security isn't done in the darkness",
        content:
          "Unlike many of our predecessors, we don't believe that security is achieved by hiding everything we do. We use modern technologies and standards and because our code is fully released to the public you don't need to trust us, you can see for yourself. We do no shady deals using your data. If you don't like something that we do you can always create your own spin of Instrumentality using our code. The GPL3 license gives you full control over the code, the only requirement being that you must share your change with everyone if you want to launch your version to the public."
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "@/assets/theme.less";

.uk-section {
  background: white;
}

</style>
