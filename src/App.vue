<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
 <nav>
  <h1>Where in the world</h1>
  <button><img src="./assets/moon-outline.svg" alt=""><p>Dark Mode</p></button>
 </nav>

  <RouterView />
</template>

<style scoped lang="scss">

button{
  gap:8px;
display: flex;
align-items: center;
font-size: 16px;
background-color: transparent;
border: 0;
color:var(--color-text);
cursor: pointer;
p{
  font-weight: 300;
}
img{
  
  position: relative;
  width:16px;
};
}



nav {
  
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;

  padding: 1em 5em;
  h1{
  font-weight: 800;
}
}


</style>


