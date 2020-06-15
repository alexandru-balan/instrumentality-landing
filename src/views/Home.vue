<template>

  <!-- Main page wrapper component -->
  <div id="home-page">

    <!-- Page content -->
    <TypedHeader class="uk-text-center uk-margin-large-top" />

    <HomeMainSection />

    <Paths />

  </div>

</template>

<script>
import TypedHeader from '@/components/HomeComponents/TypedHeader.vue';
import HomeMainSection from '@/components/HomeComponents/MainSection.vue';
import Paths from '@/components/HomeComponents/Paths.vue'

export default {
  name: 'Home',

  components: {
    TypedHeader,
    HomeMainSection,
    Paths
  }
}
</script>

<style lang="less" scoped>

</style>