<template>
  <div id="header" ref="$header" :class="headerClass">
    <div class="innerWrap">
      <h1 class="logo">
        <a href="http://gstar.nexon.com/gstar2020/Home"><img src="https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/img_logo.png" alt="WE DELIVER JOY" /></a>
      </h1>
      <div class="sns">
        <ul class="clearFix">
          <li class="btn ytb"><a href="https://www.youtube.com/user/NEXONKR" target="_blank">유튜브 바로가기</a></li>
          <li class="btn fb"><a href="https://www.facebook.com/NEXON.KR" target="_blank">페이스북 바로가기</a></li>
          <li class="btn tw"><a href="https://twitter.com/NEXON_KR" target="_blank">트위터 바로가기</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'

const { x: scrollTopX, y: scrollTopY } = useWindowScroll()

const headerTopPos = computed(() => scrollTopY.value > 63 ? '0' : '63px')
const headerClass = computed(() => scrollTopY.value >= 746 + 63 ? 'fixed' : '')

// const $header = ref(null)
const handleHeaderScroll = () => {
  // console.log('scrolled!')
  // Vue의 장점이 사라집니다. 이건 jQuery를 쓰는 것과 같아요.
  // if (scrollTopY > 63) {
  //   $header.style.top = '0'
  // } else {
  //   $header.style.top = '63px'
  // }

// Vue의 장점이 사라집니다. 이건 jQuery를 쓰는 것과 같아요.
  // if (scrollTopY >= 746 + 63) {
  //   $header.classList.add('fixed')
  // } else {
  //   $header.classList.remove('fixed')
  // }
}

// Vue의 장점이 사라집니다. 이건 jQuery를 쓰는 것과 같아요.
// onMounted(() => {
//   window.addEventListener('scroll', () => {
//     handleHeaderScroll()
//   })
// })
</script>

<style scoped>
#header {z-index: 150; position: fixed; top: v-bind(headerTopPos); left: 0; width: 100%; transition:top 0.3s;}
#header .logo {position: absolute; left: 45px; top: 28px; width: 125px; transition:width 0.3s}
#header .logo img {width: 100%;}
#header .sns {position: absolute; right: 45px; top: 28px;}
#header .sns ul {width: 110px;}
#header .sns li {margin-right:9px; float: left; width: 30px; height: 30px; background:url(https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/spr_sns_default.png) no-repeat;}
#header .sns li:last-child {margin-right:0;}
#header .sns li a {background:url(https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/spr_sns_over.png) no-repeat;}
#header .sns li.ytb,
#header .sns li.ytb a {background-position: 0 0;}
#header .sns li.fb,
#header .sns li.fb a {background-position: -39px 0;}
#header .sns li.tw,
#header .sns li.tw a {background-position: -78px 0;}

#header.fixed .logo {width: 105px; top: 10px; opacity:1;}
#header.fixed .sns {top: 34px; opacity:1;}
</style>