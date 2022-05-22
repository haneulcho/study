Tab.vue

<template>
  <!-- tab_nav_wrap - 필수 클래스 -->
  <!-- scrolled - isTabFixed 스크롤 위치에 따라 바꿀 클래스 -->
  <div :class="[
    'tab_nav_wrap',
    { 'scrolled': isTabFixed },
  ]">
    <ul class="tab_nav">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.href"
        :class="[tab.class, { 'active': currentTabIndex === index }]"
      >
        <a :href="`#${tab.href}`" @click.prevent="handleClickTab(index)">
          <span class="blind">{{ tab.title }}</span>
        </a>
      </li>
    </ul>
  </div>
  <div id="tab_wrap" :style="`height:${tabs[currentTabIndex].height}px`">
    <Tab1 :index="currentTabIndex" />
    <Tab2 :index="currentTabIndex" />
  </div>
</template>

<script setup>
import { throttle } from 'throttle-debounce'
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  watch
} from 'vue'

import Tab1 from '@/components/Tab1.vue'
import Tab2 from '@/components/Tab2.vue'

const props = defineProps({
  tabs: {
    type: Array,
    default: () => ([])
  },
  visualHeight: {
    type: Number,
  }
})

const currentTabIndex = ref(0)
const isTabFixed = ref(false)

// 버튼 클릭 시, currentTabIndex를 메뉴에 맞는 숫자로 변경
const handleClickTab = (tabIndex = 0) => {
  currentTabIndex.value = tabIndex
}

const fixTabWrapElement = () => {
  // 현재 스크롤바 위치
  const scrollY = window.pageYOffset || window.scrollY

  // 특정 수치를 지나면 scrolled 클래스를 추가
  const visualHeight = props.visualHeight

  // 삼항연산자로 수정
  isTabFixed.value = scrollY >= visualHeight
}

const throttleFunc = throttle(100, () => {
  fixTabWrapElement()
})

onMounted(() => {
  window.addEventListener('scroll', throttleFunc)
  throttleFunc()
})

onBeforeUnmount(() => {
  throttleFunc.cancel()
})

// 특정값이 변화하면 함수를 실행해라
watch(
  // 매개변수 1 (감지할 값)
  () => currentTabIndex.value,
  // 매개변수 2 (값이 변화하면 실행할 함수)
  (newVal, oldVal) => {
    window.scroll({
      top: props.visualHeight,
      behavior: 'smooth',
    })
  },
  // 매개변수 3 (watch 옵션)
  {
    immediate: true,
  }
)
</script>