<script setup lang="ts">
import { RouterView } from 'vue-router';

export interface Trip {
  id: number
  name: string
  description: string
  date: string
}
</script>

<template>
  <h1>Welcome</h1>
  <RouterView />
</template>

<style scoped></style>
