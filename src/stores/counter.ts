import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Country } from './interfaces'
export const countryStore = defineStore('store', () => {
  const isRegion = ref<string>('')
  const currentName = ref<string>('')
  const showDetails = ref<boolean>()
  const error = ref<string>()
  const borderCountries = ref<any[]>([])
  const currentCountry = ref<Country>()
  const data = ref<Country[]>()
  async function getCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all3432432")
    .then(response => {
      if(!response.ok)
      { 
        const err = new Error();
        if(response.status >= 400 && response.status < 500) err.name="Page ";
        err.name+=response.statusText;
        err.message = response.status.toString();
        throw err;
      }
      else{
       return response.json();
      }
    }) 
    .then(responseData => data.value = responseData)
    .catch(err => {
      console.log(err)
      error.value = err;
    })
    
  
  }

  function showMoreDetails(countryData: Country) {
    currentName.value = ''
    showDetails.value = true
    borderCountries.value = []

    currentCountry.value = countryData
    for (let i = 0; currentCountry.value.borders.length > i; i++) {
      
      const borderCountry:String = currentCountry.value.borders[i];
     if(data.value){
      const borderObject =  data.value.filter((country:any) => country.cca3 === borderCountry)
      borderCountries.value.push(borderObject[0])
     }
      
    }

  }

  function showAllCountries() {
    currentCountry.value = undefined
    showDetails.value = false
  }
  return {
    isRegion,
    error,
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
