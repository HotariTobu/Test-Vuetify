<script lang="ts" setup>
const views = [
  'wireframes',
  'utility-classes',
]

import Links from "@/components/Links.vue";
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <div>
    <HelloWorld />
    <Links :views="views"></Links>
  </div>
</template>
