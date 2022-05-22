<template>
  <h4>유의사항</h4>
  <ul>
    <li v-for="item in noticeList">{{ item.desc }}</li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
import noticeJson from '@/sample/notice.json'

const noticeList = ref(noticeJson)
</script>