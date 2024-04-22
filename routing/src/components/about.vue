<template>
    <div>
        <h1>This is router example</h1>
        <div class="d-flex gap-3 bg-primary-subtle ps-4">
            <router-link to="/about/main">Main</router-link>
            <router-link to="/about/second">Second</router-link>
        </div>
        <div class="border rounded p-3 m-2 shadow bg-light">
            <router-view />
        </div>
    </div>
</template>

<script setup>
import { createRouter, createMemoryHistory } from "vue-router";
import MainComp from "./main.vue";
import SecondComp from "./second.vue";

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        { path: "/about/main", component: MainComp },
        { path: "/about/second", component: SecondComp },
    ],
});
</script>
