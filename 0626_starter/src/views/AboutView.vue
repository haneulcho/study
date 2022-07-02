<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="item in aboutRoute[0].children" :key="item.path">
        <RouterLink :to="{ name: item.name }">{{ item.meta.title }}</RouterLink>

        <!-- 3Depth 메뉴 표기 -->
        <ul v-if="item?.children?.length > 0">
          <li>저는 children이 있어요.</li>

          <li v-for="subitem in item.children" :key="subitem.path">
            <RouterLink :to="{ name: subitem.name }">{{ subitem.meta.title }}</RouterLink>
          </li>
        <!-- 3Depth 메뉴 표기 끝 -->
        </ul>
      </li>
    </ul>

    <!-- <ul>
      <li>
        <RouterLink :to="{ name: 'about01' }">About 1</RouterLink>
        <ul>
          <li><RouterLink :to="{ name: 'about01_1' }">About 1_1</RouterLink></li>
          <li><RouterLink :to="{ name: 'about01_2' }">About 1_2</RouterLink></li>
        </ul>
      </li>
      <li><RouterLink :to="{ name: 'about02' }">About 2</RouterLink></li>
      <li><RouterLink :to="{ name: 'about03' }">About 3</RouterLink></li>
    </ul> -->
    <RouterView />
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref, computed } from 'vue'
import { RouterView, RouterLink, useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const aboutRoute = computed(() => router.options.routes.filter((route) => route.name === 'about'))

console.log(router)
</script>
