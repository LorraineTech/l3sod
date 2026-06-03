import{createRouter , createWebHistory} from 'vue-router'
import HomeView from '../views/Home.vue'
import ContactView from '../views/Contact.vue'
import AboutView from '../views/about.vue'
import PhotosView from '../views/Photos.vue'
import VideosView from '../views/Videos.vue'
import DestinationsView from '../views/Destinations.vue'
import ServicesView from '../views/Services.vue'
import EastView from '../views/east.vue'
import NorthView from '../views/north.vue'
import SouthView from '../views/south.vue'
import WestView from '../views/west.vue'
import KigaliView from '../views/kigali.vue'
import Login from '../views/Login.vue'
import register from '../views/register.vue'
import Dashboard from '../views/dashboard/dashboard.vue'

const routes = [
    {
        path:"/",
        name:"home", 
        component: HomeView,
    },
       {
        path:"/about",
        name:"about", 
        component:AboutView,
    },
    {
        path:"/contact",
        name:"contact", 
        component: ContactView,
    },

    {
        path:"/photos",
        name:"photos", 
        component: PhotosView,
    },
    {
        path:"/videos",
        name:"videos", 
        component: VideosView,
    },
    {
        path:"/destinations",
        name:"destinations", 
        component: DestinationsView,
    },
    {
        path:"/services",
        name:"services", 
        component: ServicesView,
    },
    {
        path:"/east",
        name:"east", 
        component: EastView,
    },
    {
        path:"/north",
        name:"north", 
        component: NorthView,
    },
    {
        path:"/south",
        name:"south", 
        component: SouthView,
    },
    {
        path:"/west",
        name:"west", 
        component: WestView,
    },
    {
        path:"/kigali",
        name:"kigali", 
        component: KigaliView,
    },
    {
        path:"/login",
        name:"login",
        component: Login,
    },
    {
        path:"/register",
        name:"register",
        component: register,
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
    }
];
 const router = createRouter({
    history: createWebHistory(),
    routes,

 });
 export default router;