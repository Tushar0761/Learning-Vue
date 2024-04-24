<template>
    <div class="m-1 border p-2 text-center">
        <h3>GET</h3>
        <button @click="getData" class="btn btn-primary">Get</button>
        <div ref="getResult" class="border py-3 px-1 m-1 border-dark">
            <div v-if="data">{{ dataCount }} {{ data[0] }}</div>
            <div v-else>No fetch</div>
        </div>
        <hr />
        <p>Table</p>
        <table class="table table-border">
            <thead>
                <tr class="bg-dark table-dark">
                    <td>id</td>
                    <td>name</td>
                    <td>rank</td>
                    <td>review</td>
                </tr>
            </thead>
            <tbody v-if="data">
                <tr v-if="data.length === 0">
                    <td colspan="4">There is no data present</td>
                </tr>
                <tr v-for="u in data">
                    <td>{{ u.id }}</td>
                    <td>{{ u.name }}</td>
                    <td>{{ u.rank || "no rank" }}</td>
                    <td @click="$router.push(`/user/` + u.id)">
                        <button class="btn btn-info">View User</button>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="3">No data</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return { dataCount: 0, data: null };
    },
    methods: {
        getData() {
            this.dataCount++;
            fetch("http://localhost:3000/user")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    this.data = data;
                })
                .catch((e) => console.table(e));
        },
    },
    mounted() {
        this.getData();
    },
};
</script>
