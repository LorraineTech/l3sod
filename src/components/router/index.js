import{createRouter , createWebHistory} from 'vue-router'
import HomeView from '../views/Home.vue'
import ContactView from '../views/Contact.vue'
import LoginView from '../views/Login.vue'

const routes = [
    {
        path:"/",
        name:"home", 
        component: HomeView,
    },
    {
        path:"/contact",
        name:"contact", 
        component: ContactView,
    },
    {
        path:"/login",
        name:"login", 
        component: LoginView,
    },
];
 const router = createRouter({
    history: createWebHistory(),
    routes,

 });
 export default router;