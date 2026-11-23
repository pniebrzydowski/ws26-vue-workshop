<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <h2>Trip Detail</h2>
    <p>Trip ID: {{ route.params.id }}</p>
</template>

<style scoped></style>