<template>
  <div :id="popupId" class="layerPop">
    <div class="layerBody">
      <p class="btn close"><button @click="closePopup" type="button">닫기</button></p>
    </div>
  </div>
</template>

<script setup>
import UsePopup from '@/composables/UsePopup'

const {
  openPopupIds,
  closePopup,
  openPopup
} = UsePopup()

console.log(openPopupIds.value)












defineProps({
  popupId: {
    type: String,
    default: 'popup'
  }
})

const emit = defineEmits(['on-popup-close'])

// const openPopup = () => {

// }

// const closePopup = () => {
//   emit('on-popup-close') // 부모 컴포넌트로 특정 이벤트를 올리겠다.
// }
</script>