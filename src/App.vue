<script setup lang="ts">
import TripList from './components/TripList.vue'
export interface Trip {
  id: number
  name: string
  description: string
  date: string
}

const trips: Trip[] = [
  {
    id: 1,
    name: 'Ljubljana',
    description: 'Lake Bled',
    date: '2026-10-01',
  },
  {
    id: 2,
    name: 'Rome',
    description: 'Trip to Lignano',
    date: '2026-11-20',
  },
  {
    id: 3,
    name: 'Berlin',
    description: 'Trip to Munich',
    date: '2026-12-22',
  },
]
</script>

<template>
  <h1>Welcome</h1>
  <TripList :trips="trips" />
</template>

<style scoped></style>
