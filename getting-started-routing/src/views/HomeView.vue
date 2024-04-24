<template>
    <div class="home">
        <input type="text" ref="myInput" />
        <button class="btn btn-primary" @click="goClicked">Go</button>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "HomeView",
    methods: {
        goClicked() {
            let value = this.$refs.myInput.value;
            // this.$router.push(`/about/${value}`);
            this.$router.push({ name: "about", params: { value: value } });
        },
    },
};
</script>
