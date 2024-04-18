<template>
    <div class="m-2 p-2 border-2 rounded shadow-lg text-sm">
        <slot>My Defalt Slot</slot>
        <slot name="button">
            <button class="rounded bg-blue-700 px-3 py-1 m-1 shadow"></button>
        </slot>

        <div class="bg-red-400 text-sm text-center text-white px-3 rounded-lg">
            <slot name="danger"> </slot>
        </div>
    </div>
</template>
