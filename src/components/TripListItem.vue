<script setup lang="ts">
import type { Trip } from '@/App.vue';
import { RouterLink } from 'vue-router';

const props = defineProps<{
    trip: Trip
}>();

const emit = defineEmits<{
  (e: 'trip-deleted', id: number): void
}>()

const onDelete = () => {
  console.log('trip delete', props.trip.id);
  emit('trip-deleted', props.trip.id);
}
</script>

<template>
  <li>
    {{ props.trip.name }} | {{ props.trip.description }} | {{ props.trip.date }}
    <RouterLink :to="`/trip/${props.trip.id}`">Go to Details</RouterLink>
    <button @click="onDelete()">Delete Trip</button>
  </li>
</template>

<style scoped>
</style>
