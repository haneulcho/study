<template>
  <transition name="loader">
    <PageLoader v-if="isPageLoaded" />
  </transition>
  <Event />
</template>

<script setup>
import eventStyle from '@/styles/style.scss'
import { ref } from 'vue'

// import 컴포넌트명 from '컴포넌트경로/컴포넌트명.vue'
import PageLoader from '@/components/PageLoader.vue'
import Event from '@/components/Event.vue'

const isPageLoaded = ref(true)

setTimeout(() => {
  isPageLoaded.value = false
}, 500)
</script>

<style>
.loader-enter-active,
.loader-leave-active {
  transition: opacity 0.5s ease;
}

.loader-enter-from,
.loader-leave-to {
  opacity: 0;
}
</style>
