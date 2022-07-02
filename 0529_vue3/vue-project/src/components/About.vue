<template>
  <div id="section0" class="section">
    <div class="innerWrap">
      <div class="contents content_0">
        <h3 class="blind">넥슨 신작 소개</h3>
        <AboutGameInfo name="kono" :info="gameInfo.kono" />
        <AboutGameInfo name="kurt" :info="gameInfo.kurt" />
      </div>
      <div class="contents content_1">
        <h3 class="blind">지스타 예능 영상</h3>
        <div id="movieList">
          <ul class="clearFix">
            <li>
              <a href="https://youtu.be/6RDiu5lbz2Y" target="_blank" title="유튜브 바로가기">
                <div class="thBox">
                  <img src="https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/section0/movieThumb/img_thumb0.png" class="thumb" /> <span class="ico"></span>
                </div>
                <p class="tit">FIFA온라인4 캐스터 지겹지 않니?</p>
              </a>
            </li>
            <li>
              <a href="https://youtu.be/GLsvChIRWic" target="_blank" title="유튜브 바로가기">
                <div class="thBox">
                  <img src="https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/section0/movieThumb/img_thumb1.png" class="thumb" /> <span class="ico"></span>
                </div>
                <p class="tit">서든어택 해본사람은 무조건 봐야하는 영상</p>
              </a>
            </li>
            <li>
              <a href="https://youtu.be/IKYt2GMN8qc" target="_blank" title="유튜브 바로가기">
                <div class="thBox">
                  <img src="https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/section0/movieThumb/img_thumb2.png" class="thumb" /> <span class="ico"></span>
                </div>
                <p class="tit">고품격라이브! 숨막히는 카러플 대결!</p>
              </a>
            </li>
            <li>
              <a href="https://youtu.be/7FsLPmQc_3c" target="_blank" title="유튜브 바로가기">
                <div class="thBox">
                  <img src="https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/section0/movieThumb/img_thumb3.png" class="thumb" /> <span class="ico"></span>
                </div>
                <p class="tit">현실 PK준비하는 던전앤파이터</p>
              </a>
            </li>
            <li>
              <a href="https://youtu.be/bErLGhjatTI" target="_blank" title="유튜브 바로가기">
                <div class="thBox">
                  <img src="https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/section0/movieThumb/img_thumb4.png" class="thumb" /> <span class="ico"></span>
                </div>
                <p class="tit">피파 아직도 PC로만 하니?</p>
              </a>
            </li>
            <li>
              <a href="https://youtu.be/M3nL0wei3GI" target="_blank" title="유튜브 바로가기">
                <div class="thBox">
                  <img src="https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/section0/movieThumb/img_thumb5.png" class="thumb" /> <span class="ico"></span>
                </div>
                <p class="tit">보는 사람 심장이 쫄깃 해지는 서든 대결!</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AboutGameInfo from '@/components/AboutGameInfo.vue'

const sliderPath = {
  kono: `https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/section0/konoSlide`,
  kurt: `https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/section0/kurtSlide`,
}

const gameInfo = ref({
  kono: {
    sliderOptions: {
      enableZoom: true,
      enableArrow: false,
    },
    sliderImages: [
      { src: `${sliderPath.kono}/img_slide0.png`, title: `6월` },
      { src: `${sliderPath.kono}/img_slide1.png`, title: `19일` },
      { src: `${sliderPath.kono}/img_slide2.png`, title: `오후 5시` },
      { src: `${sliderPath.kono}/img_slide3.png`, title: `17분` },
    ],
    youtubeSrc: `https://youtu.be/OVCnK_8A0ME`,
    thumbnail: `https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/section0/img_thumb0.png`,
  },
  kurt: {
    sliderImages: [
      { src: `${sliderPath.kurt}/img_slide0.png`, title: `6월` },
      { src: `${sliderPath.kurt}/img_slide1.png`, title: `19일` },
      { src: `${sliderPath.kurt}/img_slide2.png`, title: `오후 5시` },
      { src: `${sliderPath.kurt}/img_slide3.png`, title: `17분` },
    ],
    youtubeSrc: `https://youtu.be/Ciho7lgGQvg`,
    thumbnail: `https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/section0/img_thumb1.png`,
  },
})
</script>

<style scoped></style>
