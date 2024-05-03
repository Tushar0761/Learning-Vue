<template>
    <div>
        <div class="mx-5 border p-2">
            Welcome
            <h1 ref="h1" class="bg-primary">{{ name }}</h1>
            <h3>{{ age }}</h3>
            <input type="text" v-model="age" />
            <button @click="changeName()">Change</button>
            <button @click="usingRefToChangeAge()">Change age</button>
        </div>
        <div class="mx-5 border p-2">
            Welcome data function
            <h1 ref="h1" class="bg-primary">{{ dataName }}</h1>
            <h1 ref="h1" class="bg-primary">{{ dataName }}</h1>

            <input type="text" v-model="dataName" />
        </div>
        <div class="mx-5 border p-2 my-3">
            Reactive Product : {{ product.name }} <br />
            price : {{ product.price }} <br />
            <button
                class="btn bg-warning"
                @click="() => (product.price = rand())"
            >
                Change
            </button>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
    name: "App",
    data() {
        return { dataName: "" };
    },
    setup() {
        let name = "Tushar";
        const age = ref("20");

        const h1 = ref(null);

        const product = reactive({ name: "Sabu", price: 40 });

        function rand() {
            return Math.floor(Math.random() * 100);
        }

        function changeName() {
            h1.value.textContent = name;
            console.log(h1);
            h1.value.className =
                h1.value.className === "bg-danger" ? "bg-primary" : "bg-danger";
        }
        function usingRefToChangeAge() {
            console.log(h1);
            console.log(age);
            age.value = 30;
        }
        return {
            name,
            changeName,
            h1,
            usingRefToChangeAge,
            age,
            product,
            rand,
        };
    },
};
</script>
