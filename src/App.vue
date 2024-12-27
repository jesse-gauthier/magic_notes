<script setup>
import { RouterView } from 'vue-router'
import ThemeController from './components/ThemeController.vue'
</script>

<template>
  <div class="max-w-[80vw] mx-auto py-5">
    <ThemeController />
    <RouterView />
  </div>
</template>
