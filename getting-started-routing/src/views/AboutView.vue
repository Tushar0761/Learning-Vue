<template>
    <div class="about">
        <h1>
            Welcome,
            <span class="bg-warning">
                {{ $route.params.value || "Admin" }}
            </span>
        </h1>
    </div>
</template>
