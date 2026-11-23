import TripDetail from "@/pages/TripDetailPage.vue"
import TripForm from "@/pages/TripFormPage.vue"
import TripOverview from "@/pages/TripOverviewPage.vue"
import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
    { name: 'home', path: '/', component: TripOverview },
    { name: 'detail', path: '/trip/:id', component: TripDetail },
    { name: 'form', path: '/trip-form', component: TripForm }
]

export const router = createRouter({
    routes,
    history: createWebHashHistory()
})
