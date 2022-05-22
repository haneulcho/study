<template>
  <div id="section1" class="section">
    <div class="innerWrap">
      <div class="blind">
        <h3>네코제 9</h3>
        <p>2020.11.27(목) ~ 2020.11.29(일)</p>
      </div>
      <div class="contents content_0">
        <div id="necojeContents">
          <ul>
            <template v-for="(item, index) in videoList" :key="index">
              <li :class="['list' + index]">
                <div v-if="item.vods" class="ytbArea typeIframe">
                  <iframe
                    v-if="currentVideoIdx === index"
                    width="1190"
                    height="628"
                    :src="`https://www.youtube.com/embed/${item.vods}?rel=0&autoplay=1`"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <button type="button" @click="currentVideoIdx = index">
                    <div class="thBox">
                      <img :src="`http://i3.ytimg.com/vi/${item.vods}/maxresdefault.jpg`" class="thumb" /> <span class="ico"></span>
                      <span class="cover"></span>
                    </div>
                  </button>
                </div>
                <div v-if="item.imgs" class="imgs"><img :src="item.imgs" /></div>
                <div v-if="item.btns" class="btns">
                  <p v-for="(btn, index) in item.btns" :key="index" :class="['btn', `btn${index}`]"><a :href="btn.link" target="_blank" /></p>
                </div>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentVideoIdx = ref(null)

const videoList = [
  { vods: 'Iv9-oQNCwyY' },
  { vods: '5bDt08N4qZ0' },
  {
    vods: 'reXgHcmaJXQ',
    btns: [
      { link: 'https://necoje.nexon.com/news/notice/view/152' },
      { link: 'https://www.youtube.com/user/NEXONKR' }
    ]
  },
  { vods: 'ZKYp9nXVxDc', btns: [{ link: 'https://twitter.com/necoje' }] },
  { imgs: 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/section1/img_schedule.png', btns: [{ link: 'https://necoje.nexon.com/main/index' }] },
]
</script>
