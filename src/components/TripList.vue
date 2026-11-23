<script setup lang="ts">
import type { Trip } from '@/App.vue';
import TripListItem from './TripListItem.vue';

const props = defineProps<{
    trips: Trip[]
}>();

const vHighlight = {
  mounted: (el: HTMLElement) => {
    el.classList.add('is-highlight')
  }
}

const onTripDeleted = (id: number) => {
    alert(`Trip ${id} was deleted`);
}
</script>

<template>
  <h2 v-highlight>You have so many trips!</h2>
  <ul>
    <TripListItem v-for="trip in props.trips" :key="trip.id" :trip="trip" @trip-deleted="onTripDeleted" />
  </ul>
</template>

<style scoped>
.is-highlight {
    color: yellow;
}
</style>
