<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const { currentPage, total } = useNav()

const progress = computed(() => {
  const current = currentPage.value || 1
  const totalPages = total.value || 30
  return (current / totalPages) * 100
})
</script>

<template>
  <div class="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-50">
    <div
      class="h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 transition-all duration-300"
      :style="{ width: `${progress}%` }"
    />
  </div>
</template>
