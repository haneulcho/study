<template>
  <div id="visual">
      <div class="inner">
          <h1><a href="/Main/Index">CLOSERS THE CHARACTER</a></h1>
          <h2 class="blind">신규승급 UPDATE</h2>
          <p class="blind">2022. 4. 7</p>
          <h3 class="blind">FETAL CREW 결사대원 바이올렛</h3>
          <p class="btn_movie"><a @click.prevent="openTooltip" href="#pop_video"></a></p>
           <teleport to="body">
              <transition name="loader">
              <template v-if="showTooltip">
                <PopupVideo
                  popup-id="pop_video"
                  :src="dataYtbSrc"
                  width="1277"
                  height="777"
                  auto-play="1"
                  @on-popup-close="closeTooltip"
                />
              </template>
              </transition>
            </teleport>
          <span class="rock"></span>
      </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import PopupVideo from './PopupVideo.vue';

const showTooltip = ref(false)

const dataYtbSrc = ref('JT_mzilP7uk')

const openTooltip = () => {
  if (!dataYtbSrc.value) {
    return alert('준비중입니다.')
  }
  showTooltip.value = true
  document.querySelector('body').classList.add('locked-scroll')
}
const closeTooltip = () => {
  showTooltip.value = false
  document.querySelector('body').classList.remove('locked-scroll')
}

</script>