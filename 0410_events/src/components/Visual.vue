<<<<<<< Updated upstream
=======
<template>
  <div id="visual">
      <div class="inner">
          <h1><a href="/Main/Index">CLOSERS THE CHARACTER</a></h1>
          <h2 class="blind">신규승급 UPDATE</h2>
          <p class="blind">2022. 4. 7</p>
          <h3 class="blind">FETAL CREW 결사대원 바이올렛</h3>
          <p class="btn_movie"><a @click.prevent="openVideoPop" href="#pop_video"></a></p>
          <span class="rock"></span>
          <teleport to="body">
            <transition name="loader">
              <template v-if="showVideoPop">
                <PopupVod popup-id="pop_video" @on-popup-close="closeVideoPop" />
              </template>
            </transition>
          </teleport>
      </div>
  </div>
</template>




<script setup>
import { ref } from 'vue'

import PopupVod from '@/components/PopupVod.vue'

defineProps({
  index: {
    type: [Number, String]
  }
})

const showVideoPop = ref(false)

const openVideoPop = () => {
  showVideoPop.value = true
  document.querySelector('body').classList.add('locked-scroll')
}
const closeVideoPop = () => {
  showVideoPop.value = false
  document.querySelector('body').classList.remove('locked-scroll')
}
</script>
>>>>>>> Stashed changes
