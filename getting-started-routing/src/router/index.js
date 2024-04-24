import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        alias: "/app",
    },
    { path: "/home", redirect: "/" },
    {
        path: "/about/:value?",
        name: "about",
        sensitive: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
        path: "/profile",
        component: () => import("../views/ProfileView"),
        children: [
            {
                name: "profile",
                path: "",
                component: () => import("../components/ProfileComp"),
            },
            {
                name: "reels",
                path: "reels",
                component: () => import("../components/ReelsComp.vue"),
            },
            {
                name: "posts",
                path: "posts",
                component: () => import("../components/PostsComp"),
            },
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notFound",
        component: () => import("../views/PageNotFound"),
    },
    {
        path: "/option",
        name: "option",
        component: () => import("../views/optionView"),
    },
    {
        path: "/composition",
        name: "composition",
        component: () => import("../views/compositionView"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
