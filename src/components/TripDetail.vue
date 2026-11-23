<script setup lang="ts">
import type { Trip } from '@/App.vue';
import { useWeatherService } from '@/service/useWeatherService';
import { useTripsStore } from '@/state/useTripsStore';
import { useQuery } from '@tanstack/vue-query';
import { computed } from 'vue';

const props = defineProps<{ id: Trip['id'] }>();
const tripsStore = useTripsStore();
const { getTripById } = tripsStore;
const trip = getTripById(props.id);
const tripLengthString = computed((): '-' | 'short' | 'medium' | 'long' => {
  if (!trip?.length) return '-'
  const len = trip.length
  if (len < 3) return 'short'
  if (len < 14) return 'medium'
  return 'long'
})

const weatherService = useWeatherService();
const { isFetching, data, error } = useQuery({
  queryKey: ['geolocation'],
  queryFn: () => weatherService.getGeoLocationFromName(trip?.name ?? ''),
  enabled: !!trip?.name,
  staleTime: 2 * 60 * 1000,
});
</script>

<template>
    <h2>Trip Detail</h2>
    <p>Trip ID: {{ trip?.id ?? '-' }}</p>
    <p>Name: {{ trip?.name ?? '-' }}</p>
    <p>Date: {{ trip?.date ?? '-'}}</p>
    <p>Description: {{ trip?.description ?? '-' }}</p>
    <p>Days: {{ trip?.length ?? '-' }}</p>
    <p>Length: {{ tripLengthString }}</p>
    <p>Coordinates: <span v-if="isFetching">Loading...</span><span v-else>{{ data }}</span></p>
    <p v-if="!!error">{{ error }}</p>
</template>

<style scoped></style>