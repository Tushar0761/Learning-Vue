<template>
    <div class="text-xl text-center">
        <h1 class="text-3xl">{{ title }}</h1>
        <div class="border rounded p-2 m-2 pt-10">
            <input type="text" ref="name" class="border p-1 rounded-lg" />
            <button class="px-3 m-1 bg-slate-100 rounded" @click="handler()">
                Click
            </button>
            <button class="px-3 m-1 bg-blue-100 rounded" @click="style()">
                change class
            </button>
            <div class="text-center bg-red-300 m-3 p-3" ref="box">
                <p ref="output"></p>
            </div>
        </div>
    </div>
</template>

<script>
import "./assets/style.css";
export default {
    name: "App",
    data() {
        return {
            title: "Working with refs",
        };
    },
    methods: {
        style() {
            console.log("style changed");
            this.$refs.box.classList.replace("bg-red-300", "bg-yellow-500");
        },
        handler() {
            let input = this.$refs.output;

            input.innerHTML += this.$refs.name.value + "<hr/>";

            this.$refs.name.value = "";
            this.$refs.name.focus();
        },
    },
};
</script>
