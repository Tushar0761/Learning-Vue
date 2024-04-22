<template>
    <div>
        <div>Hello</div>
        <div class="fs-3">Welcome to home page</div>
        <button class="btn btn-primary mx-3" @click="count++">
            {{ count }}
        </button>

        <button class="btn btn-primary" @click="inc()">
            {{ newCount }}
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return { count: 0 };
    },
};
</script>

<script setup>
import { ref } from "vue";

let newCount = ref(0);

function inc() {
    newCount.value++;
    console.log(newCount);
}
</script>
