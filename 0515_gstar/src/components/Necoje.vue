<template>
  <div id="section1" class="section">
    <div class="innerWrap">
      <div class="blind">
        <h3>네코제 9</h3>
        <p>2020.11.27(목) ~ 2020.11.29(일)</p>
      </div>
      <div class="contents content_0">
        <div id="necojeContents">
          <ul class="clearFix">
            <li v-for="(item, index) in videoSrc" :class="`list${index}`" :key="item">
              <div class="ytbArea typeIframe">
                <iframe
                  v-if="currentVideoIdx === index"
                  width="1190"
                  height="628"
                  :src="`https://www.youtube.com/embed/${item}?rel=0&autoplay=1`"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <button type="button" @click="currentVideoIdx = index">
                  <div class="thBox">
                    <img :src="`http://i3.ytimg.com/vi/${item}/maxresdefault.jpg`" class="thumb" /> <span class="ico"></span> <span class="cover"></span>
                  </div>
                </button>
              </div>
              <div v-if="index === 2" class="btns">
                <p class="btn btn0"><a href="https://necoje.nexon.com/news/notice/view/152" target="_blank"></a></p>
                <p class="btn btn1"><a href="https://www.youtube.com/user/NEXONKR" target="_blank"></a></p>
              </div>
              <div v-if="index === 3" class="btns">
                <p class="btn btn0"><a href="https://twitter.com/necoje" target="_blank"></a></p>
              </div>
            </li>
            <li class="list4">
              <div class="imgs"><img src="https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/section1/img_schedule.png" /></div>
              <div class="btns">
                <p class="btn btn0"><a href="https://necoje.nexon.com/main/index" target="_blank"></a></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const videoSrc = ref(['Iv9-oQNCwyY', '5bDt08N4qZ0', 'reXgHcmaJXQ', 'ZKYp9nXVxDc'])
const currentVideoIdx = ref(null)
</script>
