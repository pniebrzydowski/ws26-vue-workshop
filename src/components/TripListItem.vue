<script setup lang="ts">
import type { Trip } from '@/App.vue';

const props = defineProps<{
    trip: Trip
}>();

</script>

<template>
  <li>{{ props.trip.name }} | {{ props.trip.description }} | {{ props.trip.date }}</li>
</template>

<style scoped>
</style>
