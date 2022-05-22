<template>
  <div id="nav">
    <div class="innerWrap">
      <ul class="clearFix">
        <li class="n0">
          <router-link :to="{ name: 'about' }"> 지스타 2020 </router-link>
        </li>
        <li class="n0">
          <router-link :to="{ name: 'necoje' }"> 네코제 9 </router-link>
        </li>
        <li class="n0">
          <router-link :to="{ name: 'event' }"> 스페셜 허니 쿠폰 </router-link>
        </li>
      </ul>
    </div>
    <span></span>
  </div>

  <!--
  <ul>
    <li>
      <router-link :to="{name: 'about'}">
        About
      </router-link>
    </li>
    <li>
      <router-link
        custom
        :to="{name: 'necoje'}"
        v-slot="{ isActive, navigate }"
        >
        <span :class="{'router-link-exact-active' : isActive}" @click="navigate">Necoje</span>
      </router-link>
    </li>
    <li>
      <router-link :to="{name: 'event'}">
        Event
      </router-link>
    </li>
  </ul>
  -->

  <!-- script 상에서 router push를 통해 접근 -->
  <button @click="goToAbout" type="button">About으로 이동</button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToAbout = () => {
  if (confirm('이동하시겠습니까?')) {
    // router.push('/about')
    router.push({
      name: 'about',
      query: { seq: 999 },
    })
  }
}
</script>

<style scoped>
/*
  ul{
    display: flex;
  }
  .router-link-exact-active{
    color: red;
  }
*/
</style>
