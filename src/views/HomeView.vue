<script setup lang="ts">
import { computed } from 'vue'
import CountryDetails from '@/components/CountryDetails.vue'
import { countryStore } from '../stores/counter'

import IconSearch from '@/components/icons/IconSearch.vue'


const store = countryStore()
store.getCountries()
const filteredData: any = computed(() => {
  let sortedData
  console.log(store.data)
  if (store.isRegion && !store.currentName) {
    sortedData = Object.values(store.data).filter((country) =>
      country.region.includes(store.isRegion)
    )
  } else {
    sortedData = Object.values(store.data).filter((country) =>
      country.name.common.toLowerCase().includes(store.currentName.toLowerCase())
    )
  }
  return sortedData.sort((a, b) => b.area - a.area)
})
</script>

<template>
  <main>

  <country-details v-if="store.showDetails && store.currentCountry" :data="store.currentCountry"></country-details>

     


    <div class="countries" v-else-if="!store.showDetails">
      <div class="selection">
        <div class="input-field">
          <icon-search></icon-search><input
            placeholder="Search for a country..."
            type="text"
            v-model="store.currentName"
          />
        </div>
        <select v-model="store.isRegion" name="region" id="regions">
          <option value="" disabled selected hidden>Choose a region</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
          <option value="Asia">Asia</option>
        </select>
      </div>
      <div class="countries-wrapper">
        <div
          class="card"
          v-for="country in filteredData"
          @click="store.showMoreDetails(country)"
          :key="country.name.common"
        >
          <img :src="country.flags.png" alt="" />
          <div class="country-details">
            <p class="country-title">{{ country.name.common }}</p>
            <p><span>Population: </span>{{ country.population.toLocaleString('en-GB') }}</p>
            <p><span>Region: </span>{{ country.region }}</p>

            <p v-if="country.capital"><span>Capital: </span>{{ country.capital[0] }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.countries {
  .selection {
    display: grid;
    grid-template-columns: 35% auto;
    justify-content: space-between;
    justify-items: center;
    margin-bottom: 2em;
  }

  .input-field {
    display: inline-flex;
    background-color: var(--element);
    padding-left: 2.5em;
    width: 100%;
    border-radius: 8px;
    box-shadow: 1px;
    margin: 0 5.25em;
    box-shadow: rgba(92, 85, 85, 0.1) 0px 1px 10px 0px, rgba(92, 85, 85, 0.1) 0px 1px 5px 0px;
    font-size: 14px;

svg{
  width:25px;
}
 
    input,
    input:focus-visible,
    input:hover,
    input:active,
    input:focus {
      background-color: var(--element);
      color: var(--input);
      padding: 1.25em;
      border-radius: 8px;
      width: 100%;
      border: none;
      outline: none;
      font-size: 14px;
    }
    input::placeholder {
      color: var(--input);
    }
  }
  select,
  select:focus-visible,
  select:hover,
  select:active,
  select:focus,
  option {
   
    background-color: var(--element);
    color:var(--colot-text);
    font-size: 14px;
    outline: none;
    border: none;
    box-shadow: rgba(92, 85, 85, 0.1) 0px 1px 10px 0px, rgba(92, 85, 85, 0.1) 0px 1px 5px 0px;
    padding: 1em;
    border-radius: 8px;
    border-right: 16px solid transparent
  }
  select option {
 
  font-size: 14px;
  color: red;
  background-color: #fff;
  padding: 1em;
}



}
.countries-wrapper {
  display: grid;
  align-content: space-between;
  justify-content: space-between;
  gap: 68px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  .card {
    box-shadow: rgba(92, 85, 85, 0.1) 0px 1px 10px 0px, rgba(92, 85, 85, 0.1) 0px 1px 5px 0px;
    border-radius: 8px;
    background-color: var(--element);
    cursor: pointer;
    font-size: 14px;
    .country-details {
      padding: 0 0 3em 2em;
      font-weight: 800;
      font-size: 14px;
      span {
        color: var(--color-text);
        font-weight:600;
      }
      .country-title {
        padding: 1em 0;
        font-size: 16px;
        font-weight: 800;
      }

    }
  }
  .card-detail {
    font-size: 16px;
  }
  img {
    border-radius: 8px 8px 0 0;
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 3/2;
  }
}
@media screen and (min-width: 1400px) {
  .countries-wrapper {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
