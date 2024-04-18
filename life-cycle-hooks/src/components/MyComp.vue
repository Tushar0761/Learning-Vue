<template>
    <div>
        <div>This is from diff comp</div>
        <div id="value">{{ number }}</div>
    </div>
</template>

<script>
import InnerComp from "./InnerComp";

export default {
    props: ["number"],
    components: { InnerComp },
};
</script>

<script setup>
import { onMounted, onUpdated } from "vue";

onMounted(() => {
    console.log(
        `The my app component is mounted with value.`,
        document.querySelector("#value").textContent
    );
});

onUpdated(() => {
    console.log(
        "the app is updated with value",
        document.querySelector("#value").textContent
    );
});
</script>
