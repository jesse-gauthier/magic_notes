<template>
  <input
    type="checkbox"
    class="toggle theme-controller"
    :checked="isDarkMode"
    @change="toggleTheme"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDarkMode = ref(false)

onMounted(() => {
  const storedTheme = localStorage.getItem('theme')
  if (storedTheme === 'dark') {
    isDarkMode.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
})

function toggleTheme() {
  if (isDarkMode.value) {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  } else {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  }
  isDarkMode.value = !isDarkMode.value
}
</script>
