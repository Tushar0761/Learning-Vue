<template>
    <div class="text-center relative">
        <h1 class="text-2xl">Hello</h1>
        <div v-if="showModel">
            <ModalComp @close="toggleModal" />
        </div>
        <button @click="toggleModal" class="bg-slate-300">Click</button>
    </div>
</template>

<script>
import ModalComp from "./components/ModalComp.vue";

export default {
    data() {
        return {
            showModel: false,
        };
    },
    methods: {
        toggleModal() {
            console.log(event);
            this.showModel = !this.showModel;
        },
    },
    components: { ModalComp },
};
</script>

<style></style>
