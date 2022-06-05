<template>
  <Header />
  <Navigation />
  <Visual />
  <div id="container">
    <transition name="fade"><router-view></router-view></transition>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Visual from '@/components/Visual.vue'
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

//const heightSize = [3790, 5050, 3660]
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>