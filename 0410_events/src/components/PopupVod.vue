<template>
  <div :id="popupId" class="layerPop">
    <div class="layerBody">
      <div class="ytb_wrap">
          <div id="videoArea" class="video"><div class="ytb"><iframe width="1277px" height="777px" src="https://www.youtube.com/embed/JT_mzilP7uk?rel=0&modestbranding=0&showinfo=0&mute=0" frameborder="0" allowfullscreen="" allow="autoplay;encrypted-media"></iframe></div></div>
          <p class="btn close"><button @click="closePopup" type="button">닫기</button></p>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  popupId: {
    type: String,
    default: 'popup'
  }
})

const emit = defineEmits(['on-popup-close'])

const closePopup = () => {
  emit('on-popup-close') // 부모 컴포넌트로 특정 이벤트를 올리겠다.
}
</script>