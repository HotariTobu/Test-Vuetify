<script setup lang="ts">
import { VSkeletonLoader } from 'vuetify/lib/labs/components.mjs';

const types = [
  "button",
  "article",
  "table",
  "image",
  "text",
  "table-row",
  "list-item",
  "sentences",
  "heading",
  "divider",
  "subtitle",
  "chip",
  "avatar",
  "actions",
  "paragraph",
  "card",
  "card-avatar",
  "date-picker",
  "date-picker-options",
  "date-picker-days",
  "list-item-avatar",
  "list-item-two-line",
  "list-item-avatar-two-line",
  "list-item-three-line",
  "list-item-avatar-three-line",
  "table-heading",
  "table-thead",
  "table-tbody",
  "table-row-divider",
  "table-tfoot",
]
</script>

<template>
  <div>
    <div
      class="mt-10"
      v-for="type of types"
      :key="type"
    >
      <p class="text-h5 text-center">{{ type }}</p>
      <v-skeleton-loader :type="type" />
    </div>
  </div>
</template>
