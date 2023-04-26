<template>
    <div>
      <button @click="store.showAllCountries">Go back</button>

<div class="card" v-if="store.currentCountry">
  <img :src="store.currentCountry.flags.png" alt="" />
 <div> <p class="country-title">{{ store.currentCountry.name.common }}</p>
  <p v-if="store.currentCountry.altSpellings"><span>Native name: </span>{{ store.currentCountry.altSpellings[1] }}</p>
            <p><span>Population: </span>{{ store.currentCountry.population.toLocaleString('en-GB') }}</p>
            <p><span>Region: </span>{{ store.currentCountry.region }}</p>

            <p v-if="store.currentCountry.capital"><span>Capital: </span>{{ store.currentCountry.capital[0] }}</p></div>
</div>
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import CountryDetails from '@/components/CountryDetails.vue'
import { countryStore } from '../stores/counter'
import { Countries, Country } from '@/stores/interfaces'

const store = countryStore()
</script>

<style scoped>
.card{
  display: grid;
  grid-template-columns: 1fr 1fr;
}</style>