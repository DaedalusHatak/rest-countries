<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useColorMode } from '@vueuse/core'
import IconMoon from './components/icons/IconMoon.vue'
const mode = useColorMode({ attribute: 'color-scheme' })

</script>

<template>
  <nav>
    <h1>Where in the world</h1>
    <button class="change-theme-button" @click="mode = mode === 'dark' ? 'light' : 'dark'">
      <icon-moon></icon-moon>
      <p>Dark Mode</p>
    </button>
  </nav>

  <RouterView />
</template>

<style scoped lang="scss">
nav {
  background-color: var(--element);
  display: flex;
  justify-content: space-between;
  width: 100% !important;
  max-width: 1440px;
  font-size: 14px;
  border-bottom: 1px solid var(--element);
  box-shadow: rgb(2, 2, 2, 0.2) 0px 0px 12px 0px, rgb(0, 0, 0, 0.2) 0px 0px 12px 0px;
  padding: 1em 5em 1em 5em;
  h1 {
    font-weight: 800;
  }
  .change-theme-button {
    gap: 8px;
    display: flex;
    align-items: center;
    font-size: 16px;
    background-color: transparent;
    border: 0;
    color: var(--color-text);
    cursor: pointer;
    p {
      font-weight: 300;
    }
    svg {
      position: relative;
      width: 16px;
    }
  }
}
</style>
