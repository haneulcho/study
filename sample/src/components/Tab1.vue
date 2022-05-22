<template>
  <div id="tab1" :class="['tab_cont', { 'active': index === 0 }]">
      <div class="section section1">
          <div class="inner">
              <div class="blind">
                  <h3>신규 승급 소개</h3>
                  <p>검은 책의 사서 솔로몬이 바이올렛에게 내리는 시련을 만나보세요</p>
                  <h4>승급 방법</h4>
                  <ul>
                      <li>
                          센텀시티에서 미니휠 NPC -> [새로운 시련] 퀘스트 수락
                          <em>- 조건 : 캐릭터 레벨 90 & 태스크 포스 전직 완료 센텀시티 지역 퀘스트 완료</em>
                      </li>
                      <li>사냥꾼의 밤 지역 입장기 -> 각 캐릭터별 승급 던전 플레이</li>
                      <li>단계별 퀘스트를 클리어하여 신규 승급 진행</li>
                  </ul>
                  <h4>입장 조건</h4>
                  <ul>
                      <li>캐릭터 레벨 : 90</li>
                      <li>적정 종합 전투력 : 10,000,000</li>
                      <li>기어 레벨 : 160이상</li>
                  </ul>
              </div>
          </div>
      </div>
      <div class="section section2">
          <div class="inner">
              <div class="blind">
                  <h4>승급 전용 데미지 폰트</h4>
                  <h4>승급 코스튬 풀세트</h4>
                  <p>전 파츠 1성 지급, 업그레이드 및 거래 불가</p>
                  <h4>승급 스킬 일러스트 컷잇</h4>
              </div>
              <p class="btn_download"><a href="https://closers.vod.nexoncdn.co.kr/event/2022/220407_advancement_zz103/cut1.zip">다운로드</a></p>
          </div>
      </div>
      <div class="section section3">
          <p class="btn_freepass"><a href="">파밍 없이 단 하루만에 승급하고 싶다면? 바이올렛 승급 프리패스 패키지 바로가기</a></p>
      </div>
      <div class="section section4">
          <h3 class="blind">신규 스킬</h3>
          <p class="blind">신규 승급 시 신규 액티브 스킬 2종 & 궁극기 1종 획득 / 패시브 1종 개방</p>
          <div>
              <em class="blind">FETAL CREW</em>
              <h4 class="blind">결사대원 바이올렛</h4>
              <div class="info info1">
                  <div class="blind">
                      <p>“하이드, 우리 차례가 왔어요. 검을 주세요. 전장을 장악할 테니!”</p>
                      <h5>신규 액티브</h5>
                      <dl>
                          <dt>아머 브레이커</dt>
                          <dd>일시적으로 대검의 파괴력을 극대화해서 묵직한 베기 기술을 시전한다.</dd>
                          <dt>꽃바람 연격</dt>
                          <dd>하이드와 함께 빠른 연계기를 펼친 다음, 강력한 마무리 일격을 시전한다.</dd>
                      </dl>
                  </div>
              </div>
              <div class="info info2">
                  <div class="blind">
                      <h5>신규 궁극기</h5>
                      <dl>
                          <dt>궁극기 : 퀸스 저지먼트</dt>
                          <dd>바이올렛과 하이드의 모든 위상력을 담은 클레이모어로 궁극의 일격을 펼친다.</dd>
                      </dl>
                  </div>
              </div>
          </div>
      </div>
      <div class="section section5">
          <div class="inner">
              <p class="copy">NEXON NADDIC GAMES Copyright ⓒ 2014 NEXON Korea Corporation & NADDIC GAMES. All Rights Reserved.</p>
          </div>
      </div>
  </div>
</template>

<script setup>
defineProps({
  index: {
    type: [Number, String],
  }
})
</script>