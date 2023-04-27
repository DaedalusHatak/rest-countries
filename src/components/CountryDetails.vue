<template>
    <div>
      <button @click="store.showAllCountries">Go back</button>

<div class="card" v-if="props.data">
  <img :src="props.data.flags.png" alt="" />
 <div> <div>

  <h1 class="country-title">{{ props.data.name.common }}</h1>
  <p v-if="props.data.altSpellings">
            <span>Native name: </span>{{ props.data.altSpellings[1] }}
  </p>
            <p><span>Population: </span>              {{ props.data.population.toLocaleString('en-GB') }}</p>
            <p><span>Region: </span>                  {{ props.data.region }}</p>
            <p><span>Sub Region: </span>              {{ props.data.subregion }}</p>

            <p v-if="props.data.capital">
              <span>Capital: </span>                  {{ props.data.capital[0] }}
            </p></div>
 </div>

 <div>     
            <p><span>Top Level Domain: </span>        {{ props.data.tld[0] }}</p>
  <p v-for="currency in props.data.currencies" :key="currency.name">
            <span>Currencies: </span>                 {{ currency.name }}</p>
            <span>Languages: </span>
            <span class="lang-list" v-for="lang in props.data.languages" :key="lang">  
                                                      {{ lang }}   </span>
 


 </div>
</div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
  data: Object
})

import { computed, ref,defineProps } from 'vue'
import CountryDetails from '@/components/CountryDetails.vue'
import { countryStore } from '../stores/counter'
import { Countries, Country } from '@/stores/interfaces'

const store = countryStore()
</script>

<style scoped>
.lang-list:after{
  content: ", "
}
.card{
  display: grid;
  grid-template-columns: 1fr 1fr;
}</style>