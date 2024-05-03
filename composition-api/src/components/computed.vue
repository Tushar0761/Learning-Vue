<template>
    <div class="mx-5">
        Computed
        <input type="text" placeholder="Your Full Name" v-model.trim="name" />
        <h1>{{ capital }}</h1>
        <h1>{{ computedFunction() }}</h1>
    </div>
</template>
<script>
import { computed, ref } from "vue";
export default {
    setup() {
        const name = ref("");
        let capital = computed(() => {
            try {
                return name.value
                    .split(" ")
                    .map((word) => word[0].toUpperCase() + word.slice(1))
                    .join(" ");
            } catch (e) {
                return "";
            }
        });

        function computedFunction() {
            try {
                return name.value
                    .split(" ")
                    .map((word) => word[0].toUpperCase() + word.slice(1))
                    .join(" ");
            } catch (e) {
                return "";
            }
        }

        return {
            name,
            capital,
            computedFunction,
        };
    },
};
</script>
