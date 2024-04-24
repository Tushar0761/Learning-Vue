<template>
    <div>
        <h1 class="text-center">HTTP request Protocols</h1>
        <hr />
        <div class="d-flex bg-dark text-white gap-3 px-3 py-1">
            <button class="btn btn-secondary" @click="$router.push('/')">
                Get
            </button>
            <button class="btn btn-secondary" @click="$router.push('/post')">
                Post
            </button>
        </div>
        <RouterView />
    </div>
</template>
