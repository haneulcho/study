<template>
  <div class="tab_nav_wrap">
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
import { ref, computed, onMounted } from 'vue'

import Tab1 from '@/components/Tab1.vue'
import Tab2 from '@/components/Tab2.vue'

import UsePopup from '@/composables/UsePopup'

const {
  openPopupIds,
  closePopup,
  openPopup,
  handleIds
} = UsePopup()

console.log('얘는 Tab.vue')
console.log(openPopupIds.value)
console.log('얘는 Tab.vue')


onMounted(() => {
  handleIds('끝!')
})


const tabs = ref([
  { title: '바이올렛 신규 승급 소개', class: 'tab1', href: 'tab1', height: 2969 },
  { title: '승급 기념 이벤트 & 프리패스', class: 'tab2', href: 'tab2', height: 2492 }
])

const currentTabIndex = ref(0)

// 버튼 클릭 시, currentTabIndex를 메뉴에 맞는 숫자로 변경
const handleClickTab = (tabIndex = 0) => {
  currentTabIndex.value = tabIndex

  // 확인용 console.log
  console.log(`isTab1Active: ${isTab1Active.value}`)
  console.log(`isTab2Active: ${isTab2Active.value}`)
}




// DOM Element 저장
// const tab1 = ref(null)
// const tab2 = ref(null)
</script>