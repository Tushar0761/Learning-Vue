<template>
    <div class="mx-5 broder border-dark p-3">
        <h1>search</h1>
        <input type="text" v-model="name" placeholder="by name" />
        <input type="text" v-model="price" placeholder="max price " />
        <div>{{ name }} - {{ price }}</div>
        <div class="d-flex flex-column gap-2 my-2">
            <div class="p-1 border border-dark" v-for="product in result">
                {{ product.name }} - {{ product.price }}
            </div>
        </div>
        <button @click="stopWatchCalled">stop watch</button>
    </div>
</template>

<script>
import { computed, ref, watch } from "vue";
export default {
    setup() {
        let name = ref("");
        let price = ref("");

        let stopWatch = watch(name, () => {
            console.log("i'm watching");
        });

        let stopWatchCalled = () => stopWatch();

        let products = [
            {
                name: "Moja",
                price: 66,
            },
            {
                name: "bidi",
                price: 100,
            },
            {
                name: "mouse",
                price: 150,
            },
            {
                name: "laptop",
                price: 1000,
            },
            {
                name: "mog",
                price: 606,
            },
        ];
        const result = computed(() => {
            if (name.value !== "" && price.value !== "") {
                console.log("by price and name ");
                return products.filter((p) => {
                    console.log(
                        p.name.toLowerCase().includes(name.value.toLowerCase()),
                        p.price < price.value,
                        p
                    );
                    return (
                        p.name
                            .toLowerCase()
                            .includes(name.value.toLowerCase()) &&
                        p.price < price.value
                    );
                });
            }
            if (name.value !== "") {
                console.log("by name");
                return products.filter((p) =>
                    p.name.toLowerCase().includes(name.value.toLowerCase())
                );
            }
            if (price.value !== "") {
                console.log("by price");
                return products.filter((p) => p.price < price.value);
            }

            console.log("default");
            return products;
        });

        return { name, price, result, stopWatchCalled };
    },
};
</script>
