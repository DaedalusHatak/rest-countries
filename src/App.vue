<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
 <nav>
  <h1>Where in the world</h1>
  <button>Dark Mode</button>
 </nav>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
  padding: 0 3em;
}

</style>


