import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue"
import Profiles from "../views/Profiles.vue"
import Register from "../views/Register.vue"
import ProfileView from "../views/ProfileView.vue"
import Login from "../views/Login.vue"
import DefaultLayout from "../components/DefaultLayout.vue"
import AuthLayout from "../components/AuthLayout.vue"
import store from "../store";
const routes = [
    {
        path: '/',
        redirect: "/dashboard",
        component: DefaultLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: "/dashboard",
                name: "Dashboard",
                component: Dashboard
            },
            {
                path: "/profiles",
                name: "Profiles",
                component: Profiles
            },
            {
                path: "/profiles/create",
                name: "ProfileCreate",
                component: ProfileView
            },
            {
                path: "/profiles/:id",
                name: "ProfileView",
                component: ProfileView
            },
        ]
    },
    {
        path: "/auth",
        redirect: "/login",
        name: "Auth",
        component: AuthLayout,
        meta: {isGuest: true},
        children: [
            { path: '/login', name: 'Login', component: Login },
            { path: '/register', name: 'Register', component: Register },
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: 'Login' })
    } else if(store.state.user.token && to.meta.isGuest) {
        next({name: 'Dashboard'})
    } else {
        next()
    }
})

export default router