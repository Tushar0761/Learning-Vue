<template>
    <div class="d-flex gap-3 p-3">
        <div class="card col-4 p-2 text-center">
            <div v-if="!user">{{ status }}</div>
            <div v-else>
                <div class="">{{ $route.params.id }} : {{ user.name }}</div>
                <div v-if="user.rank">Rank : {{ user.rank }}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            status: "loading",
            user: null,
        };
    },
    mounted() {
        const id = this.$route.params?.id;
        fetch("http://localhost:3000/user/" + id)
            .then((res) => {
                if (res.ok) return res.json();
                else throw res;
            })
            .then((data) => {
                this.user = data;
                console.log(data);
            })
            .catch((e) => {
                this.status = e.statusText;
            });
    },
};
</script>
