<template>
    <div class="bg-white rounded-lg shadow-lg flex">
        <div class="w-1/3 h-40">
            <img :src="data.image_url" alt="Product" class="h-full w-full object-cover rounded-l-lg">
        </div>

        <div class="w-2/3 p-4">
            <h2 class="text-2xl font-semibold">{{data.name}}</h2>
            <p class="text-gray-600 text-sm">Harga: $99.99</p>
            <div class="flex items-center mt-2">
            <span class="text-yellow-500 text-2xl">⭐</span>
            <span class="text-gray-600 ml-1">4.5 (120 ulasan)</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
    name: 'NuxtCartProduct',

}
</script>