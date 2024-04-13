<template>
    <div>
        <p class="text-2xl p-3 bg-red-500">Props comp</p>
        <p class="text-2xl p-3 bg-yellow-500">{{ msg }}</p>
        <p class="text-2xl p-3 bg-blue-500">{{ multiply }} | {{ added }}</p>
        <div class="text-2xl p-3 bg-green-500">
            <div
                class="flex gap-5 p-5 text-center text-white border-4 border-black"
            >
                <span
                    v-for="(s, index) in students"
                    class="border rounded border-2 border-white p-3"
                    :key="index"
                >
                    {{ s }}
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["msg", "number", "students"],
    computed: {
        multiply() {
            return this.number * Math.random();
        },
        added() {
            return Number(this.number) + 40;
        },
    },
};
</script>
