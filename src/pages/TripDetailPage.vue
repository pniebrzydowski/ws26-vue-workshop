<script setup lang="ts">
import { useTripsStore } from '@/state/useTripsStore';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const tripsStore = useTripsStore();
const { getTripById } = tripsStore;
const trip = getTripById(Number(route.params.id));
const tripLengthString = computed((): '-' | 'short' | 'medium' | 'long' => {
  if (!trip?.length) return '-'
  const len = trip.length
  if (len < 3) return 'short'
  if (len < 14) return 'medium'
  return 'long'
})
</script>

<template>
    <h2>Trip Detail</h2>
    <p>Trip ID: {{ trip?.id ?? '-' }}</p>
    <p>Name: {{ trip?.name ?? '-' }}</p>
    <p>Date: {{ trip?.date ?? '-'}}</p>
    <p>Description: {{ trip?.description ?? '-' }}</p>
    <p>Days: {{ trip?.length ?? '-' }}</p>
    <p>Length: {{ tripLengthString }}</p>
</template>

<style scoped></style>