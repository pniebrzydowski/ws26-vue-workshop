import TripDetail from "@/pages/TripDetail.vue"
import TripOverview from "@/pages/TripOverview.vue"
import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
    { name: 'home', path: '/', component: TripOverview },
    { name: 'detail', path: '/trip/:id', component: TripDetail }
]

export const router = createRouter({
    routes,
    history: createWebHashHistory()
})
