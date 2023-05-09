<template>
    <div class="modal-wrapper"><div class="modal"><p class="modal-header">Error occured</p>
        <p>{{ store.error }}</p>
        <p>Something went wrong, please try again later. We are doing our best to fix it</p>
        <button class="button-modal" @click="clearError">Okay</button>
    </div>
   
    </div>
</template>

<script setup lang="ts">
import { countryStore } from '../stores/counter'
const store = countryStore();
function clearError(){
  store.error = undefined;
}
</script>
<style lang="scss">
    :root[color-scheme='light'] {
  .button-modal {
    box-shadow: rgb(206, 206, 206) 0px 0px 7px 1px, rgb(206, 206, 206) 0px 0px 7px 1px;
  }
}
:root[color-scheme='dark'] {
  .button-modal {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 7px 1px, rgb(0, 0, 0, 0.5) 0px 0px 7px 1px;
  }
}
.modal-wrapper{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height:100%;
    z-index: 1000;
    display:grid;
    text-align: center;
    align-items: center;
    align-content: center;
    justify-items: center;
    background-color: rgba(53, 47, 47,0.5);
    

}
.modal{
    
    border-radius: 20px;
    opacity: 1 !important;
    background-color: var(--element);
    width:100%;
    max-width: 600px;
    height:300px;
    display:grid;
    align-items: center;
    align-content: center;
    justify-items: center;
    .button-modal{
        position: absolute;
        right:40px;
        bottom:30px;
        background-color: var(--color-background-modal);
  color: white;
  font-size: 14px;
  outline: none;
  border: none;
  border-radius: 8px;
font-size: 16px;
  cursor: pointer;
  padding: 0.5em 2em;
  gap: 5px;
    }


    .modal-header{
        border-radius: 20px 20px 0 0;
        background-color: var(--color-background-modal);
        color:white;
        padding: 1em 0;
        width:100%;
        position: absolute;
        top:0;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 700;
    }
}

</style>