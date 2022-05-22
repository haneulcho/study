<template>
  <div>
    테스트 컴포넌트
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const students = reactive({
  no: 3,
  name: '하늘',
  age: 31
})
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  color: white
}
</style>