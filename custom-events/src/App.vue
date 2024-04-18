<template>
    <div class="text-center relative">
        <h1 class="text-2xl">Hello</h1>
        <div v-if="showModel">
            <ModalComp @close="toggleModal" />
        </div>
        <button @click="toggleModal" class="bg-slate-300">Click</button>

        <hr />
        <div class="flex gap-4 p-3 flex-wrap">
            <CardComp> </CardComp>
            <CardComp>
                <p>This is my msg to card</p>
                <h1 class="bg-red-500 px-2 py-1 rounded">Heading</h1>
            </CardComp>

            <CardComp>
                <CardComp>
                    <p class="bg-slate-500 px-3 rounded text-white text-sm">
                        I am component inside component with slot
                    </p></CardComp
                >
                <h1 class="bg-blue-500 px-2 py-1 rounded">Helo</h1>
                <template v-slot:button>click me</template>
            </CardComp>
            <CardComp>
                <p>This is my msg to card</p>
                <h1 class="bg-red-500 px-2 py-1 rounded">Heading</h1>
            </CardComp>

            <CardComp>
                <template v-slot:danger>
                    <p>This is alert msg</p>
                </template>
            </CardComp>

            <CardComp>
                <CardComp>
                    <CardComp>
                        <CardComp>
                            <CardComp>
                                <CardComp>
                                    <CardComp>
                                        <CardComp> Hello</CardComp>
                                    </CardComp>
                                </CardComp>
                            </CardComp>
                        </CardComp>
                    </CardComp>
                </CardComp>
            </CardComp>
        </div>
    </div>
</template>

<script>
import ModalComp from "./components/ModalComp.vue";
import CardComp from "./components/CardComp";

export default {
    data() {
        return {
            showModel: false,
        };
    },
    methods: {
        toggleModal() {
            console.log(event);
            this.showModel = !this.showModel;
        },
    },
    components: { ModalComp, CardComp },
};
</script>

<style></style>
