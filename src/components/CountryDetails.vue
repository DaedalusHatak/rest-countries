<template>
  <div>
    <button class="button" @click="store.showAllCountries"><icon-arrrow-back></icon-arrrow-back> Back</button>
    <div class="card" v-if="props.data">
      <img class="flag" :src="props.data.flags.png" alt="" />
<section>
        <h1 class="country-title">{{ props.data.name.common }}</h1>
        <div class="card-desc">
        <div>
        
          <p v-if="props.data.altSpellings">
            <span>Native Name: </span>{{ props.data.altSpellings[1] }}
          </p>
          <p><span>Population: </span> {{ props.data.population.toLocaleString('en-GB') }}</p>
          <p><span>Region: </span> {{ props.data.region }}</p>
          <p><span>Sub Region: </span> {{ props.data.subregion }}</p>

          <p v-if="props.data.capital"><span>Capital: </span> {{ props.data.capital[0] }}</p>
         
        </div>
        <div class="card-right">
        <p><span>Top Level Domain: </span> {{ props.data.tld[0] }}</p>
        <p v-for="currency in props.data.currencies" :key="currency.name">
          <span>Currencies: </span> {{ currency.name }}
        </p>
        <span>Languages: </span>
        <span class="lang-list" v-for="lang in props.data.languages" :key="lang"> {{ lang }} </span>
      </div>
      </div></section>
        
    </div>


     
  </div>
</template>
<script setup lang="ts">
import IconArrrowBack from './icons/IconArrrowBack.vue'
const props = defineProps({
  data: Object
})

import { defineProps } from 'vue'

import { countryStore } from '../stores/counter'


const store = countryStore()
</script>

<style scoped lang="scss">
.button{
  background-color: var(--element);
    color:var(--colot-text);
    font-size: 14px;
    outline: none;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 7px 1px, rgb(0, 0, 0, 0.5) 0px 0px 7px 1px;
    padding: 1em;
    border-radius: 8px;
    border-right: 16px solid transparent;
    cursor: pointer;
margin-bottom: 80px;
  display: flex;
  align-items: center;
  padding: 0.5em 2em;
  gap: 5px;
  svg{
    width: 15px;
    height: 20px;
    
  }

}
@media (prefers-color-scheme: light) {
  .button{
    box-shadow: rgb(206, 206, 206) 0px 0px 7px 1px, rgb(206, 206, 206) 0px 0px 7px 1px;

  }
  
}
h1{
  font-size: xx-large;
  font-weight: 700;
  margin-bottom: 20px;
}
.flag{
  width:100%;
  padding-bottom: 50px;
  max-width: 500px;

}
.card{
  display: flex;
  flex-direction: column;

  
}

p{
  margin-bottom: 8px;
}
span{
  
 
  font-weight: 700;
}
.lang-list{
  font-weight: 500;
}
.lang-list:after {
  content: ', ';
}
.lang-list:last-child::after {
  content: '';
}
.card-desc {
 justify-self: left;
  
  gap:120px;
}
@media (min-width: 1000px){
.flag{
  width: 80%;
 
}
.card {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.card-desc {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: space-between;
  gap:120px;
}

}
</style>
