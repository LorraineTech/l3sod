import{createRouter , createWebHistory} from 'vue-router'
import HomeView from '../views/homeviews.vue'
import { Component } from 'react'

const routes = [
    {
        path:"/",
        name:"home", 
        Component: HomeView,

    },
];
 const router = createRouter({
    history: createWebHistory(),
    routes,

 });
 export default router;