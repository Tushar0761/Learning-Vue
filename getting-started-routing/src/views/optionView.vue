<template>
    <div class="m-1 p-1 border">
        <h1>{{ title }}</h1>
        <button class="btn btn-primary" @click="inc">{{ count }}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "Option API",
            count: 0,
        };
    },
    methods: {
        inc() {
            this.count++;
        },
    },
    beforeUpdate() {
        console.log("updating");
    },
    updated() {
        console.log("updated with", this.$data);
    },
    created() {
        console.log(this.$data);
    },
};
</script>
