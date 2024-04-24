<template>
    <nav class="bg-dark text-white p-1 d-flex gap-3">
        <router-link to="/profile">Profile</router-link>
        <router-link :to="{ name: `reels` }">Post</router-link>
        <router-link :to="{ name: `posts` }">Reels</router-link>
        <router-link to="main profile">Setting</router-link>
    </nav>
    <input type="text" v-model="myInput" />

    <div class="border p-3 m-2 shadow">
        <Transition name="profile" appear>
            <router-view />
        </Transition>
    </div>
</template>

<style>
.profile-enter-active {
    animation: animate 0.5s;
}
.profile-leave-active {
    animation: animate 0.5s reverse;
}

@keyframes animate {
    0% {
        transform: translateY(-20px);
    }

    100% {
        transform: translateY(0px);
    }
}
</style>
<script>
export default {
    data() {
        return {
            myInput: "ok",
        };
    },
    methods: {
        change() {
            console.log(this.myInput);
        },
    },
    provide() {
        return {
            search: this.myInput,
        };
    },
    created() {
        console.log(this);
    },
};
</script>
