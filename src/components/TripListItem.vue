<script setup lang="ts">
import type { Trip } from '@/App.vue';
import { useLengthTransform } from '@/logic/useLengthTransform';
import { RouterLink } from 'vue-router';

const props = defineProps<{
    trip: Trip
}>();

const tripLengthTransform = useLengthTransform();

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
    <RouterLink :to="`/trip/${props.trip.id}`">Go to Details</RouterLink>
    {{ props.trip.name }} | {{ props.trip.description }} | {{ props.trip.date }} | 
    {{ tripLengthTransform.getTripLengthString(trip.length) }}
    <button @click="onDelete()">Delete Trip</button>
  </li>
</template>

<style scoped>
</style>
