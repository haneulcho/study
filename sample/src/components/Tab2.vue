<template>
  <div id="tab2" :class="['tab_cont', { 'active': index === 1 }]">
      <div class="section section1">
          <div class="inner">
              <h3 class="blind">바이올렛 결사대원 신규 승급기념 던전 클리어 이벤트</h3>
              <p class="blind">이벤트 기간 : 2022.3.10(목) 점검 후 ~ 2022.4.7(목) 점검 전 </p>
              <table>
                  <thead>
                      <tr>
                          <th scope="col"><span class="blind">클리어 횟수</span></th>
                          <th scope="col"><span class="blind">지급 아이템</span></th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td><span class="blind">5</span></td>
                          <td><span class="blind">매실 과즙 x 2</span></td>
                      </tr>
                      <tr>
                          <td><span class="blind">10</span></td>
                          <td><span class="blind">일반 강화기 연료 x 5</span></td>
                      </tr>
                      <tr>
                          <td><span class="blind">20</span></td>
                          <td><span class="blind">일반 D 컴포넌트 : 기어 x 3</span></td>
                      </tr>
                      <tr>
                          <td><span class="blind">30</span></td>
                          <td><span class="blind">일반 D 컴포넌트 : 코스튬 x 2</span></td>
                      </tr>
                      <tr>
                          <td><span class="blind">40</span></td>
                          <td><span class="blind">완벽한 PNA 진화 키트 x 5</span></td>
                      </tr>
                      <tr>
                          <td><span class="blind">50</span></td>
                          <td><span class="blind">초월의 비약 x 1</span></td>
                      </tr>
                      <tr>
                          <td><span class="blind">60</span></td>
                          <td><span class="blind">코스튬 퓨전 섬유 x 1</span></td>
                      </tr>
                      <tr>
                          <td><span class="blind">70</span></td>
                          <td><span class="blind">2S 섬성의 격돌 액세서리 풀세트 x 1</span></td>
                      </tr>
                      <tr>
                          <td><span class="blind">85</span></td>
                          <td><span class="blind">미니 바이올렛 펫의 성체 보관함 x 1</span></td>
                      </tr>
                      <tr>
                          <td><span class="blind">100</span></td>
                          <td><span class="blind">3성 보스 무기 상자 (1종) x 1</span><a @click.prevent="openTooltip" href="#pop_tooltip" class="btn_more"></a></td>

                          <teleport to="body">
                            <transition name="loader">
                            <template v-if="showTooltip">
                              <Popup
                                popup-id="pop_tooltip" 
                                @on-popup-close="closeTooltip" />
                            </template>
                            </transition>
                          </teleport>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
      <div class="section section2">
          <div class="inner">
              <div class="blind">
                  <h3>바이올렛 결사대원 프리패스 패키지 출시</h3>
                  <ul>
                      <li>바이올렛 결사대원 코스튬 전 파츠</li>
                      <li>작전구역 프리패스 - 솔로몬의 시련 x 6</li>
                      <li>유니온 특제 행운 적합률 안정제 x 100</li>
                      <li>강화기백신 x 2</li>
                      <li>초월의 비약 x 3</li>
                      <li>슬롯 타입 변경툴 x 4</li>
                      <li>알파 이퀄라이저 x 3</li>
                      <li>코스튬 퓨전 섬유 x 2</li>
                  </ul>
                  <p>바이올렛 캐릭터로만 개봉 가능</p>
                  <p>모든 구성품이 29,900원(캐릭터당 1회 구매 가능)</p>
                  <strong>패키지 구매 시 파밍 없이 1일만에 승급 가능!</strong>
              </div>
          </div>
      </div>
      <div class="section section3">
          <div class="inner">
              <h3 class="blind">아직 모르시는 분들을 위한 작은 TIP!</h3>
              <ul class="tip_wrap">
              </ul>
          </div>
      </div>
      <div class="section section4">
          <div class="inner">
              <Notice />
              <p class="copy">NEXON NADDIC GAMES Copyright ⓒ 2014 NEXON Korea Corporation & NADDIC GAMES. All Rights Reserved.</p>
          </div>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Popup from '@/components/Popup.vue'
import Notice from '@/components/Notice.vue'

defineProps({
  index: {
    type: [Number, String]
  }
})

const showTooltip = ref(false)

const openTooltip = () => {
  showTooltip.value = true
  document.querySelector('body').classList.add('locked-scroll')
}
const closeTooltip = () => {
  showTooltip.value = false
  document.querySelector('body').classList.remove('locked-scroll')
}
</script>