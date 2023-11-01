<!-- Please remove this file from your project -->
<template>
  <div class="px-20 py-10">
     <div v-for="item in responseData" :key="item.id" class="mb-4">
      <CardProduct :data="item" />
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
