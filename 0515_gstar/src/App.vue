<template>
  <Navigation />
  <Visual />
  <div id="container">
    <router-view> </router-view>
    <Footer />
  </div>
</template>

<script setup>
import Visual from '@/components/Visual.vue'
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

// import About from '@/components/About.vue'
// import Necoje from '@/components/Necoje.vue'
// import Event from '@/components/Event.vue'

// import PageNotFound from '@/components/PageNotFound.vue'
</script>

<style></style>
