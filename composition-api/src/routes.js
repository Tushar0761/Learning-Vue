import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./components/main.vue"),
        alias: ["/home", "/get"],
    },
    {
        path: "/computed",
        component: () => import("./components/computed"),
    },
    {
        path: "/hist",
        component: () => import("./components/histrogram"),
    },
    {
        path: "/search",
        component: () => import("./components/searching"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
