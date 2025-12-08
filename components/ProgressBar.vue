<template>
  <div class="progress-container">
    <div class="progress-bar" :style="{ width: progressWidth }"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const { currentPage, total } = useNav()

const progressWidth = computed(() => {
  if (!currentPage || !total) return '0%'
  return `${(currentPage / total) * 100}%`
})
</script>

<style scoped>
.progress-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 10;
  pointer-events: none;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%);
  transition: width 0.3s ease;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.6);
}
</style>
