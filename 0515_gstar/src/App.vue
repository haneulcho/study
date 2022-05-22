<template>
  <Navigation />
  <Visual />
  <div id="container">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script setup>
import Visual from '@/components/Visual.vue'
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

console.log('git commit 연습')
</script>

<style></style>
