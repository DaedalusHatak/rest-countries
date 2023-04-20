<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref, watch } from 'vue';

// async function getCountries() {
//   await (axios.get('https://restcountries.com/v3.1/all').then((response) => {
// data.value = response.data;
// console.log(response.data)
// }));
// }
const data: any = ref({});
async function getCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  data.value = await response.json();
  console.log(data.value.capital);
}
getCountries()


</script>

<template>
  <main>
  <div class="countries-wrapper">
   <div class="card" v-for="country in data">
  <img :src="country.flags.png" alt="">
{{ country.name.common }}
{{ country.population }}
{{ country.region }}
{{ country.capital}}
</div>
  </div>
  </main>
</template>

<style scoped lang="scss">
.countries-wrapper{
  padding:0 4.85em;
  display:grid;
  align-content: space-between;
  justify-content: space-between;
  gap: 68px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
.card{
text-align: center;
}
  img{
    width: 100%;
    height: auto;
  }
}
@media screen and (min-width: 768px) {
  .countries-wrapper {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>