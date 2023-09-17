<script setup lang="ts">
const sizes = [
  'auto',
  'screen',
  0,
  25,
  50,
  75,
  100,
]
</script>

<template>
  <VSheet height="300" class="ma-12 elevation-10 d-flex">
    <div v-for="size of sizes" :key="size" class="mx-4 bg-secondary" :class="`h-${size}`">{{ size }}</div>
  </VSheet>

  <VSheet height="300" class="ma-12 elevation-10">
    <div v-for="size of sizes" :key="size" class="my-4 bg-primary" :class="`w-${size}`">{{ size }}</div>
  </VSheet>
</template>
