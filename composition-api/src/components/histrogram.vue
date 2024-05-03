<template>
    <div class="mx-5">
        <h1>Histogram</h1>
        <p>enter array ( 1 2 4 => [1,2,4])</p>
        <input type="text" v-model.trim="arrString" @keyup="makeArr" />
        <p>my arr : {{ myArr }}</p>
        <button @click="sort">Sort</button>
        <div class="border p-3 d-flex align-items-end">
            <div
                v-for="count in myArr"
                :style="{ height: (count * 200) / diff + 'px' }"
                class="box bg-primary border border-dark"
            ></div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    setup() {
        let arr = [1, 2, 3, 4, 5];
        let arrString = ref("");

        let myArr = ref("");
        let maxHeight = 1;
        let minHeight = 0;
        let diff = ref(0);
        function makeArr() {
            myArr.value = arrString.value.split(" ");
            maxHeight = myArr.value.sort((a, b) => b - a)[0];
            minHeight = myArr.value.sort((a, b) => a - b)[0];
            diff.value = maxHeight - minHeight;
            console.log(diff);
            myArr.value = arrString.value.split(" ");
        }

        function sort() {
            myArr.value.sort((a, b) => b - a);
            arrString.value = myArr.value.join(" ");
        }

        return { arr, arrString, myArr, makeArr, maxHeight, diff, sort };
    },
};
</script>

<style>
.box {
    width: 100px;
    height: 100px;
}
</style>
