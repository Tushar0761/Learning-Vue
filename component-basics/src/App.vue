<template>
    <div class="text-xl">
        <h1 class="text-3xl text-center bg-slate-600 text-white p-2">
            {{ title }}
        </h1>
        <CustomComp
            msg="Hello World"
            number="10"
            :students="['tushar', 'varun', 'jelly']"
        />
        <CustomComp msg="Hello World" number="10" :students="myStudents" />
        <MyComp />
    </div>
</template>

<script>
import MyComp from "./components/MyComp.vue";
import "./assets/style.css";
import CustomComp from "./components/CustomComp.vue";
export default {
    name: "AppComponent",
    components: {
        MyComp,
        CustomComp,
    },
    data() {
        return {
            title: "Component Practice",
            myStudents: [1, 2, 3, 4, 5, 6],
        };
    },
};
</script>
