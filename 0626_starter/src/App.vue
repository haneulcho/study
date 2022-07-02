<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="wrapper">
    <button type="button" class="wrapper__btn-top">버튼</button>
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped lang="pcss">
.wrapper {
  @apply m-[30px] p-[60px] bg-gray-200 rounded-[10px] shadow-lg;

  &__btn-top {
    @apply px-[20px] py-[10px] font-semibold text-lg text-pink-600 bg-white border border-pink-600 transition-colors duration-300 shadow-lg;

    &:hover {
      @apply  text-white bg-pink-600;
    }
  }
}
</style>
