<template>
  <div id="contents" :style="`width:${contentsWidth}px`">
    <Visual ref="$visual" />
    <Tab v-if="isPageLoaded" :tabs="tabs" :visual-height="visualHeight" />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Visual from '@/components/Visual.vue'
import Tab from '@/components/Tab.vue'

defineProps({
  contentsWidth: {
    type: [String, Number]
  }
})

const isPageLoaded = ref(false);
const tabs = ref([{ title: '바이올렛 신규 승급 소개', class: 'tab1', href: 'tab1', height: 2969 },
  { title: '승급 기념 이벤트 & 프리패스', class: 'tab2', href: 'tab2', height: 2492 }])

const $visual = ref(null)
const visualHeight = ref(0)

onMounted(() => {
  visualHeight.value = parseInt(window.getComputedStyle($visual.value.$el).height)
  isPageLoaded.value = true
})
</script>