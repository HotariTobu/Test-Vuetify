<script setup lang="ts">
import extendPath from "@/utils/extend-path";

const props = defineProps({
  views: {
    type: Array<string>,
    required: true,
  },
})
</script>

<template>
  <div>
    <div v-for="view in props.views" :key="view">
      <RouterLink :to="extendPath(view)">
        <div>{{ view }}</div>
      </RouterLink>
    </div>
  </div>
</template>
