<template>
  <div :id="name">
    <Slider
      :slider-name="name"
      :slider-images="info.sliderImages"
      :enable-zoom="info?.silderOptions?.enableZoom"
      :enable-arrow="info?.silderOptions?.enableArrow"
    />
    <p class="ytbLink">
      <a :href="info.youtubeSrc" target="_blank" title="유튜브 바로가기"
        ><img :src="info.thumbnail" class="thumb" /><span class="ico"></span
      ></a>
    </p>
  </div>
</template>

<script setup>
import Slider from '@/components/shared/Slider.vue'

defineProps({
  name: {
    type: String,
    default: 'game',
  },
  info: {
    type: Object,
    default: () => {}
  }
})
</script>