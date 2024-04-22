<template>
    <div style="text-align: center">
        <div id="nav">
            <a href="#/">Home</a>
            <a href="#/about">Router</a>
            <a href="#/contact-us">contact us</a>
        </div>
        <component :is="currentView" />
    </div>
</template>

<style>
#nav {
    padding-left: 20px;
    display: flex;
    gap: 10px;
}
</style>

<script setup>
import { ref, computed } from "vue";
import HomeComp from "./components/home.vue";
import AboutComp from "./components/about.vue";
import ContactComp from "./components/contact";
const routes = {
    "/": HomeComp,
    "/about": AboutComp,
    "/contact-us": ContactComp,
};

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
    currentPath.value = window.location.hash;
});
const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || "/"];
});
</script>
