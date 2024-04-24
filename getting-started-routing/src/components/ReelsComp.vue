<template>
    <div>
        <p class="border px-2 py-1">you are seacrhing :{{ data }}</p>
        <h1>This is reels comp</h1>
    </div>
</template>
<script>
export default {
    inject: ["search"],
    data() {
        return {
            data: this.search,
        };
    },
    created() {
        console.log(this);
        // console.log(this.$data, "Data");
        // console.log(this.search);
    },
};
</script>
