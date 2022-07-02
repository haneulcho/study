<template>
  <div id="section2" class="section on" style="background-image: url(https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/bg_ver2.png)">
    <div class="innerWrap">
      <div class="blind"><h3></h3></div>
      <div id="event">
        <div class="eventIntro">
          <div class="ytbArea typeIframe" id="player4">
            <button type="button" data-param="m-Pv80NwJCI">
              <div class="thBox">
                <img src="https://i3.ytimg.com/vi/m-Pv80NwJCI/maxresdefault.jpg" class="thumb" /> <span class="ico"></span> <span class="cover"></span>
              </div>
            </button>
          </div>
          <div class="desc">
            WE DELIVER JOY 캠페인 기념 쿠폰 선물이 도착했습니다.<br />1개의 쿠폰으로 총 31 개의 게임에서 선물을 받을 수 있으며,<br />쿠폰 사용방법은 하단의 쿠폰
            상세 안내 및 사용방법을 참고 부탁드립니다.<br />※2020/11/30(월) 23 시 59 분까지 쿠폰을 입력할 수 있습니다
          </div>
        </div>
        <div class="openArea">
          <input type="input" v-model="copiedText" placeholder="복사할 텍스트" id="couponNumber" />
          <p class="btn copy">
            <button @click="copyCouponNumber" type="button" class="btnTarget" :disabled="disableCopyButton">복사하기</button>
          </p>
        </div>
        <p class="btn representNotice"><a href="#popNotice">유의사항 보기</a></p>
      </div>
      <div id="gameInfo">
        <div class="tabs">
          <ul class="clearFix">
            <li :class="['pc', { 'on': gameType === 'pc' }]">
              <button @click="changeGameType('pc')" type="button">PC 게임</button>
            </li>
            <li :class="['mobile', { 'on': gameType === 'mobile' }]">
              <button @click="changeGameType('mobile')" type="button">모바일 게임</button>
            </li>
          </ul>
        </div>
        <!-- 버튼을 누를 때마다 platform이 바뀌고 GameList에 platform을 전달해야 한다. -->
        <GameList :platform="gameType" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useClipboard } from '@vueuse/core'
import GameList from '@/components/GameList.vue'

import { ref, computed } from 'vue'

const gameType = ref('pc')

const changeGameType = (type) => {
  gameType.value = type
}

const copiedText = ref('조하늘')
const disableCopyButton = computed(() => copiedText.value === '')
const { copy, isSupported } = useClipboard({ source: copiedText })

const copyCouponNumber = () => {
  if (!isSupported) {
    alert('복사를 지원하지 않는 환경입니다.')
    return
  }

  copy()
    .then(() => {
      // 복사를 완료했다는 가정
      alert('코드 번호 복사 완료!\n원하는 곳에 Ctrl+V를 이용하여 사용하세요.')
    })
    .catch(() => {
      // 복사를 실패했다는 가정
      alert('에러가 발생했습니다.')
    })
}
</script>

<style scoped></style>
