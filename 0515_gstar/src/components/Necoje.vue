<template>
  <div id="section1" class="section">
    <div class="innerWrap">
      <div class="blind">
        <h3>네코제 9</h3>
        <p>2020.11.27(목) ~ 2020.11.29(일)</p>
      </div>
      <div class="contents content_0">
        <div id="necojeContents">
          <!-- 아이프레임은 1나이되 반복으로 들억가게끔 하기 과제 ...몰라 ..-->
          <ul class="clearFix">
            <li v-for="(video, index) in videos" :key="index" :class="`list${index}`">
              <div class="ytbArea typeIframe">
                <iframe
                  v-if="currentVideoIdx === index"
                  :src="`https://www.youtube.com/embed/${video[index]}?rel=0&autoplay=1`"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>

                <button type="button" @click="handleClickVideo(index)">
                  <div class="thBox">
                    <img :src="`http://i3.ytimg.com/vi/${video[index]}/maxresdefault.jpg`" class="thumb" /> <span class="ico"></span>
                    <span class="cover"></span>
                  </div>
                </button>
              </div>

              <div class="btns" v-if="currentVideoIdx === 2">
                <p class="btn btn0"><a href="https://necoje.nexon.com/news/notice/view/152" target="_blank"></a></p>
                  <p class="btn btn1"><a href="https://www.youtube.com/user/NEXONKR" target="_blank"></a></p>
              </div>
              <div class="btns" v-else-if="currentVideoIdx === 3">
                <p class="btn btn0"><a href="https://twitter.com/necoje" target="_blank"></a></p>
              </div>
              <div class="btns" v-else></div>
            </li>
           <!-- 
            <li class="list1">
              <div class="ytbArea typeIframe">
                <button type="button" data-param="5bDt08N4qZ0">
                  <div class="thBox">
                    <img src="https://i3.ytimg.com/vi/5bDt08N4qZ0/maxresdefault.jpg" class="thumb" /> <span class="ico"></span>
                    <span class="cover"></span>
                  </div>
                </button>
              </div>
              <div class="btns"></div>
            </li>

            <li class="list2">
              <div class="ytbArea typeIframe">
                <button type="button" data-param="reXgHcmaJXQ">
                  <div class="thBox">
                    <img src="https://i3.ytimg.com/vi/reXgHcmaJXQ/maxresdefault.jpg" class="thumb" /> <span class="ico"></span>
                    <span class="cover"></span>
                  </div>
                </button>
              </div>
              <div class="btns">
                <p class="btn btn0"><a href="https://necoje.nexon.com/news/notice/view/152" target="_blank"></a></p>
                <p class="btn btn1"><a href="https://www.youtube.com/user/NEXONKR" target="_blank"></a></p>
              </div>
            </li>

            <li class="list3">
              <div class="ytbArea typeIframe">
                <button type="button" data-param="ZKYp9nXVxDc">
                  <div class="thBox">
                    <img src="https://i3.ytimg.com/vi/ZKYp9nXVxDc/maxresdefault.jpg" class="thumb" /> <span class="ico"></span>
                    <span class="cover"></span>
                  </div>
                </button>
              </div>
              <div class="btns">
                <p class="btn btn0"><a href="https://twitter.com/necoje" target="_blank"></a></p>
              </div>
            </li>

            <li class="list4">
              <div class="imgs"><img src="https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/section1/img_schedule.png" /></div>
              <div class="btns">
                <p class="btn btn0"><a href="https://necoje.nexon.com/main/index" target="_blank"></a></p>
              </div>
            </li>
            -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const video = ['Iv9-oQNCwyY', '5bDt08N4qZ0', 'reXgHcmaJXQ', 'ZKYp9nXVxDc']

const currentVideoIdx = ref(0)

const handleClickVideo = (videoIndex = 0) => {
  currentVideoIdx.value = videoIndex
}

// const necojeContent = document.querySelectorAll('#necojeContents ul li').valud
// const videoItem = necojeContent.length

// for (const videoList of necojeContent) {
//   console.log(videoList)
// }

// <div class="ytbArea typeIframe">
//   <iframe
//     v-if="currentVideoIdx === 0"
//     src="https://www.youtube.com/embed/Iv9-oQNCwyY?rel=0&autoplay=1"
//     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//     allowfullscreen
//   ></iframe>
//   <button type="button" @click="currentVideoIdx = 0">
//     <div class="thBox">
//       <img src="http://i3.ytimg.com/vi/Iv9-oQNCwyY/maxresdefault.jpg" class="thumb" /> <span class="ico"></span>
//       <span class="cover"></span>
//     </div>
//   </button>
// </div>
</script>

<style scoped>
.ytbArea iframe {
  width: 1190px;
  height: 628px;
  border: none;
}
</style>
