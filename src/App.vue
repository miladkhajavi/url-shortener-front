<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Background from './components/icons/index.vue'
import CutUrl from './views/CutUrl.vue';
</script>

<template>
<div class="v-background-img">
  <Background />
  <RouterView />
  <CutUrl/>
</div>
</template>

<style scoped>

</style>
