<template>
  <div id="nav" class="fixed">
    <div class="innerWrap">
      <ul class="clearFix">
        <li class="n0">
          <router-link :to="{ name: 'about' }">지스타 2020</router-link>
        </li>
        <li class="n0">
          <router-link :to="{ name: 'necoje' }">네코제 9</router-link>
        </li>
        <li class="n0">
          <router-link :to="{ name: 'event' }"><small>WE DELIVER JOY</small>스페셜 허니 쿠폰</router-link>
        </li>
      </ul>
    </div>
    <span></span>
  </div>
</template>

<script setup>
</script>

<style scoped></style>
