<template>
  <div id="nav">
    <div class="innerWrap">
      <ul class="clearFix">
        <li class="n0">
          <router-link :to="{ name: 'about' }">지스타 2020</router-link>
        </li>
        <li class="n0">
          <router-link :to="{ name: 'necoje' }">네코제 9</router-link>
        </li>
        <li class="n0">
          <router-link :to="{ name: 'event' }">스페셜 허니 쿠폰</router-link>
        </li>
      </ul>
    </div>
    <span></span>
  </div>
  <!--
  <div>Navigation</div>
  <hr />
  <router-link :to="{ name: 'about' }">
    About
  </router-link>
  <router-link
    custom
    :to="{ name: 'necoje' }"
    v-slot="{ isActive, navigate }"
  >
    <span :class="{ 'router-link-active': isActive }" @click="navigate">Necoje</span>
  </router-link>
  <router-link :to="{ name: 'event' }">
    Event
  </router-link>
 
  <hr /> -->

  <!-- script 상에서 push를 통해 접근하고 싶을 때
  <p><button @click="goToAbout" type="button">About로 이동</button></p> -->
</template>

<script setup>
//import { useRouter } from 'vue-router'

//const router = useRouter()

// const goToAbout = () => {
//   if (confirm('이동하시겠습니까?')) {
//     //확인일때만 이동
//     router.push({
//       name: 'about',
//       query: { seq: 888 },
//     })
//   }
// }
</script>

<style scoped></style>
