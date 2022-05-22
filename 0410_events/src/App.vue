<template>
  <transition name="loader">
    <PageLoader v-if="isPageLoaded" />
  </transition>
  <Event :contents-width="width" />
  <Test />
</template>

<script setup>
import { throttle } from 'throttle-debounce'
import eventStyle from '@/styles/style.scss'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// import 컴포넌트명 from '컴포넌트경로/컴포넌트명.vue'
import PageLoader from '@/components/PageLoader.vue'
import Event from '@/components/Event.vue'
import Test from '@/components/Test.vue'

const width = ref(0)
const isPageLoaded = ref(true)

const fixBackgroundBlurry = () => {
  const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

  width.value = (windowWidth % 2 !== 0) ? windowWidth - 1 : windowWidth
}

const onCreated = () => {
  window.addEventListener('resize', throttleFunc)

  setTimeout(() => {
    isPageLoaded.value = false
  }, 500)
}

const throttleFunc = throttle(300, () => {
  fixBackgroundBlurry()
})

// 컴포넌트 DOM이 마운트 되면 실행
onMounted(() => {
  throttleFunc()
})

// 컴포넌트 setup 코드와 함께 무조건 최초 실행
onCreated()

// 컴포넌트 마운트가 해제되면 무한으로 동작하지 않도록 이벤트를 제거
onBeforeUnmount(() => {
  throttleFunc.cancel()
})
</script>

<style>

</style>
