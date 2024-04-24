import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("../components/getComp"),
        alias: ["/home", "/get"],
    },
    {
        path: "/post",
        component: () => import("../components/postComp"),
    },
    {
        component: () => import("../components/userComp"),
        path: "/user/:id",
    },
    {
        path: "/user",
        redirect: "/",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
