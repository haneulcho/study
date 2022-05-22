<template>
  <div :id="popupId" class="layerPop">
    <div class="layerBody">
      <div class="ytb_wrap">
        <div id="videoArea" class="video">
          <iframe
            :width="width"
            :height="height"
            :src="`https://www.youtube.com/embed/${src}?rel=0&modestbranding=0&showinfo=0&autoplay=${autoPlay}&mute=${mute}`" 
            frameborder="0"
            allowfullscreen=""
            allow="autoplay;encrypted-media"
          >
          </iframe>
        </div>
      </div>
      <p class="btn close"><button @click="closePopup" type="button">닫기</button></p>
    </div>
  </div>
</template>
<script setup>
defineProps({
  popupId: {
    type: String,
    default: 'popup'
  },
  src: {
    type: String,
    default: ''
  },
  width: {
    type: Number,
    default: 0
  },
  height: {
    type: Number,
    default: 0
  },
  autoPlay: {
    type: Number,
    default: 0
  },
  mute: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['on-popup-close'])

const closePopup = () => {
  emit('on-popup-close') // 부모 컴포넌트로 특정 이벤트를 올리겠다.
}
</script>