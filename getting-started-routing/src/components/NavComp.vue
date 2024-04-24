<template>
    <div class="d-flex gap-3 bg-light text-white">
        <router-link to="/">Home</router-link>
        <router-link :to="{ name: `about` }" replace>About</router-link>
        <router-link :to="{ name: `profile` }">Profile</router-link>
        <router-link :to="{ name: `profile` }">Profile</router-link>
        <router-link :to="{ name: `option` }"
            >Counter with option API</router-link
        >
        <router-link :to="{ name: `composition` }"
            >Counter with Composition API</router-link
        >
    </div>
    <div class="p-1 d-flex gap-3">
        <button @click="backward" class="btn btn-dark"><</button>
        <button class="btn btn-dark" @click="forward()">></button>
    </div>
</template>

<script></script>
<script setup>
import router from "../router/index.js";
function forward() {
    router.go(1);
}

function backward() {
    router.go(-1);
}
</script>
