<template>
    <div>Comp inside Comp</div>
</template>
<script setup>
import { onMounted, onUpdated } from "vue";

onMounted(() => {
    console.log(`The Inner Comp is mounted .`);
});

onUpdated(() => {
    console.log("the inner is updated with value");
});
</script>
