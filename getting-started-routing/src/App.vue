<template>
    <div>
        <NavComp></NavComp>
        <Transition name="app" appear mode="out-in">
            <router-view />
        </Transition>
    </div>
</template>

<script>
import NavComp from "./components/NavComp";

export default {
    components: { NavComp },
};
</script>
<style>
.app-enter-active {
    animation: animate 0.5s;
}
.app-leave-active {
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
