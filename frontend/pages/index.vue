<!-- Please remove this file from your project -->
<template>
  <div class="px-20 py-10">
      <div class="bg-white rounded-lg shadow-lg flex">
        <div class="w-1/3">
          <img src="path-to-your-image.jpg" alt="Product" class="h-full w-full object-cover rounded-l-lg">
        </div>

        <div class="w-2/3 p-4">
          <h2 class="text-2xl font-semibold">Nama Produk</h2>
          <p class="text-gray-600 text-sm">Harga: $99.99</p>
          <div class="flex items-center mt-2">
            <span class="text-yellow-500 text-2xl">⭐</span>
            <span class="text-gray-600 ml-1">4.5 (120 ulasan)</span>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    let responseData = {}
    try {
      console.log("test")
      const response = await $axios.$get('bussnies.json')
        .then((ress) => {
          responseData = ress;

        });
    } catch (error) {
      console.error('Terjadi kesalahan dalam mengambil data:', error);
      responseData = null;
    }
    return {
      responseData
    }
  },
  // fetchOnServer: false,
  // async fetch() {
  //   try {
  //     console.log("test")
  //     const response = await this.$axios.$get('bussnies.json')
  //       .then((ress) => {
  //         this.responseData = ress;

  //       });
  //   } catch (error) {
  //     console.error('Terjadi kesalahan dalam mengambil data:', error);
  //     this.responseData = null;
  //   }
  // },
  name: 'IndexPage',
  data() {
    return {
      // responseData: null
    };
  }
}
</script>
