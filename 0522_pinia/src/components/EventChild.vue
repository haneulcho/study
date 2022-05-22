<template>
  <div>
    <h1>Event Child.vue</h1>
    <p v-if="isLogged">로그인 중 입니다.</p>
    <p v-else>로그아웃 상태입니다.</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const isLogged = ref(true)

const loginStyle = computed(() => isLogged.value ? 'yellow' : 'white')
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 300px;
}
p {
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  background:rgb(0, 0, 0);
  color: v-bind(loginStyle);
}
</style>