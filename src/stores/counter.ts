import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Country, Countries } from './interfaces'
export const countryStore = defineStore('store', () => {
  const isRegion = ref<string>("");
  const currentName = ref<string>("");
  const showDetails = ref<boolean>();
  const currentCountry = ref<Country>();
  const data = ref<Countries>({});
async function getCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  data.value = await response.json();
}

function showMoreDetails(data:Country) {
  currentName.value = "";
showDetails.value=true;
currentCountry.value = data;
}
function showAllCountries(){
  currentCountry.value = undefined;
  showDetails.value = false;
  }
  return { isRegion, showAllCountries,currentCountry,currentName,data,getCountries,showDetails,showMoreDetails }
})
