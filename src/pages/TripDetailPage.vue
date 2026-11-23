<script setup lang="ts">
import TripDetail from '@/components/TripDetail.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <Suspense>
      <TripDetail :id="Number(route.params.id)" />
    </Suspense>
</template>

<style scoped></style>