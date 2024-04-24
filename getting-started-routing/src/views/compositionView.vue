<template>
    <div class="m-1 p-1 border">
        <button class="btn btn-primary" @click="inc">{{ count }}</button>
    </div>
</template>

<script>
export default {
    data() {
        count: 0;
    },
    methods: {
        inc() {
            this.count++;
        },
    },
};
</script>
