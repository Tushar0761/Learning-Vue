<template>
    <div>
        <h1>{{ title }}</h1>

        <div>
            <p>{{ count }}</p>
            <p>
                <button style="font-size: 2.5rem" @click="inc()">Inc</button>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            title: "My First vue app using CLI",
            count: 10,
        };
    },
    methods: {
        inc() {
            this.count++;
        },
    },
};
</script>
<style>
h1 {
    text-align: center;
    padding: 0 0 5px 0;
    border: solid black;
    border-width: 0 0 3px 0;
}
p {
    font-size: 3rem;
    text-align: center;
}
</style>
