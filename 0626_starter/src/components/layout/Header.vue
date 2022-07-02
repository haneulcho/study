<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="pcss">
nav {
  @apply flex justify-center space-x-4 bg-white rounded-lg;

  a {
    &:hover {
      @apply underline;
    }
    &.router-link-active {
      @apply font-semibold underline text-purple-600;
    }
  }
}
</style>
