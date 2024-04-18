<template>
    <div class="text-center">
        <div>HEllo World</div>
        <button
            @click="toggleComp = !toggleComp"
            class="px-3 py-2 m-1 border rounded shadow bg-blue-400"
        >
            {{ toggleComp ? "Hide" : "Show" }}
        </button>

        <button
            @click="count++"
            class="px-3 py-2 m-1 border rounded shadow bg-blue-700"
        >
            {{ count }}
        </button>
        <hr />
        <div v-if="toggleComp">
            <MyComp :number="count"></MyComp>
        </div>
        <InnerComp></InnerComp>
    </div>
</template>
<script>
import MyComp from "./components/MyComp";
import InnerComp from "./components/InnerComp";

export default {
    data() {
        return {
            toggleComp: false,
            count: 1,
        };
    },
    components: { MyComp, InnerComp },
};
</script>
