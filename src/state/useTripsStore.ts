import { defineStore } from "pinia";
import { trips as mockTrips } from '../_mockData_/trips';
import type { Trip } from "@/App.vue";
import { computed, ref } from "vue";

export const useTripsStore = defineStore('trips', () => {
    const trips = ref(mockTrips);

    const tripsInFuture = computed(() => {
        const futureTrips = trips.value.filter(({ date }) => date > '2026-11-23');
        return futureTrips;
    });

    function getTripById(id: number): Trip | undefined {
        return trips.value.find((trip) => trip.id === id);
    }

    // function removeTrip(id: number)
    // function addTrip(id: number)

    return { trips, getTripById, tripsInFuture };
})