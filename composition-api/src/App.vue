<template>
    <div class="">
        <nav class="mx-5 d-flex gap-3 fs-5">
            <router-link to="/">Home</router-link>
            <router-link to="/computed">Computed</router-link>
            <router-link to="/hist">histogrma</router-link>
            <router-link to="/search">search</router-link>
        </nav>
        <router-view />
    </div>
</template>
