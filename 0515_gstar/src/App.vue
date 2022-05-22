<template>
  <Navigation />
  <Visual />
  <!-- 주소가 바뀔 때, 해당하는 라우트를 보여줄 구역 -->
  <div id="container">
    <router-view>
    </router-view>

    <Footer />
  </div>
</template>

<script setup>
import Visual from '@/components/Visual.vue'
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
</script>
