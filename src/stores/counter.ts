import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Country, Countries } from './interfaces'
export const countryStore = defineStore('store', () => {
  const isRegion = ref<string>('')
  const currentName = ref<string>('')
  const showDetails = ref<boolean>()
  const borderCountries = ref<any[]>([])
  const currentCountry = ref<Country>()
  const data = ref<Countries>({})
  async function getCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all')
    data.value = await response.json()
  }

  function showMoreDetails(countryData: Country) {
    currentName.value = ''
    showDetails.value = true
    borderCountries.value = []
    console.log(data.value)
    currentCountry.value = countryData
    for (let i = 0; currentCountry.value.borders.length > i; i++) {
      
      const borderCountry:String = currentCountry.value.borders[i];

      borderCountries.value.push(
        Object.values(data.value).filter((country) => country.cca3 === borderCountry)
      )
    }

  }

  function showAllCountries() {
    currentCountry.value = undefined
    showDetails.value = false
  }
  return {
    isRegion,
    showAllCountries,
    currentCountry,
    currentName,
    data,
    getCountries,
    showDetails,
    showMoreDetails,
    borderCountries
  }
})
