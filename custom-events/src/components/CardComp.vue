<template>
    <div class="m-2 p-2 border-2 rounded shadow-lg text-sm">
        <slot>My Defalt Slot</slot>
        <div class="bg-red-400 text-sm text-center text-white px-3 rounded-lg">
            <slot name="danger"> </slot>
        </div>
    </div>
</template>
