<script setup lang="ts">
import TripList from '@/components/TripList.vue';
import { trips } from '../_mockData_/trips';
</script>

<template>
    <h2>Trip Overview</h2>
    <TripList :trips="trips" />
</template>

<style scoped></style>