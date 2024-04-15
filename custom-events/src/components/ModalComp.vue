<template>
    <div
        @click.self="closeModel"
        class="absolute top-0 bg-black opacity-80 h-screen w-screen flex justify-center items-center"
    >
        <div class="text-black opacity-100 bg-white size-48 rounded-lg">
            Here
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        closeModel() {
            this.$emit("close");
        },
    },
};
</script>
