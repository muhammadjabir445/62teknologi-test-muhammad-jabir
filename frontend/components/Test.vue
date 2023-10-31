<!-- Please remove this file from your project -->
<template>
<div>
  <div>
    {{ responseData }} oke
  </div>
</div>
</template>

<script>
export default {
  async fetch() {
    const apiKey = process.env.API_KEY;
    console.log(apiKey)
    // const headers = {
    //   Authorization: `Bearer ${apiKey}`,
      
    // };

    try {
      const response = await this.$axios.$get('/search?location=nyc&price=4&price=1&open_now=true&sort_by=best_match&limit=10')
        .then((ress) => {
          console.log(ress)

        });
      this.responseData = response;
    } catch (error) {
      console.error('Terjadi kesalahan dalam mengambil data:', error);
      this.responseData = null;
    }
  },
  name: 'NuxtTest',
  data() {
    return {
      responseData: null
    };
  }
}
</script>
