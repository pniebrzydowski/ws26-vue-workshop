<script setup lang="ts">
import type { Trip } from '@/App.vue';
import TripListItem from './TripListItem.vue';

const props = defineProps<{
    trips: Trip[]
}>();

const onTripDeleted = (id: number) => {
    alert(`Trip ${id} was deleted`);
}
</script>

<template>
  <h2 v-show="trips.length > 5">You have so many trips!</h2>
  <ul>
    <TripListItem v-for="trip in props.trips" :key="trip.id" :trip="trip" @trip-deleted="onTripDeleted" />
  </ul>
</template>

<style scoped>
</style>
