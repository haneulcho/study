<template>
  <div :id="`${sliderName}Slide`" class="keen-slider-wrapper slider">
    <button
      v-if="enableArrow"
      @click="slider.prev()"
      :class="[
        'keen-prev keen-arrow',
        {
        arrow: true,
        'arrow--left': true,
        'arrow--disabled': current === 0,
        }
      ]"
      type="button">Previous</button>
    <div ref="container" :class="[
        'keen-slider',
        { 'zoom-out': enableZoom }
      ]">
      <div
        v-for="(image, imageIndex) in sliderImages"
        :class="['keen-slider__slide', { 'zoom-out__slide': enableZoom }, `number-slide${imageIndex + 1}`]"
      >
        <div :style="`transform: scale(${enableZoom ? scales[imageIndex] : 1})`">
          <img :src="image.src" :title="image.title" :alt="image.title" />
        </div>
      </div>
    </div>
    <button
        v-if="enableArrow"
        @click="slider.next()"
        type="button"
        :class="[
          'keen-next keen-arrow',
          {
            arrow: true,
            'arrow--right': true,
            'arrow--disabled': current === slideCount - 1,
          }
        ]"
      >Next</button>
    <ul v-if="slider" class="dots keen-dots">
      <li v-for="(idx, index) in slideCount" :class="[{ active: current === index }]">
        <button
          @click="slider.moveToIdx(index)"
          :class="{ dot: true }"
          :key="index"
        ></button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { useKeenSlider } from 'keen-slider/vue.es'

const props = defineProps({
  sliderName: {
    type: String,
    default: 'promo',
  },
  sliderImages: {
    type: Array,
    default: () => [],
  },
  enableArrow: {
    type: Boolean,
    default: true,
  },
  enableZoom: {
    type: Boolean,
    default: false,
  },
})

const current = ref(0)
const scales = ref([])
const sliderOptions = {
  loop: true,
  initial: current.value,
  slideChanged: (s) => {
    current.value = s.track.details.rel
  },
  detailsChanged: (s) => {
    const slides = s.track.details.slides
    scales.value = s.slides.map((_element, idx) => {
      const slide = slides[idx]
      const scale_size = 0.7
      const scale = 1 - (scale_size - scale_size * slide.portion)
      return scale
    })
  },
}

const [ container, slider ] = useKeenSlider(sliderOptions)

const isSliderLoaded = computed(() => slider.value ? true : false)
const slideCount = computed(() => isSliderLoaded.value ? slider.value.track.details.slides.length : 0)
</script>

<style scoped>
.keen-arrow {z-index: 5; position: absolute; background-color: rgba(0, 0, 0, 0)}
.keen-prev {left:225px; top:auto; bottom: 10px; display:block; width: 20px; height: 20px; background-image:url(https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/btn_slide_prev.png);background-repeat:no-repeat; text-indent: -9999px; outline:none; opacity:0.8; transition:opacity 0.3s;}
.keen-next {right:225px; top:auto; bottom: 10px;  display:block; width: 20px; height: 20px; background-image:url(https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/btn_slide_next.png);background-repeat:no-repeat; text-indent: -9999px; outline:none; opacity:0.8; transition:opacity 0.3s;}
.keen-prev:hover,
.keen-next:hover {opacity:1;}
.keen-dots {z-index: 1; position: absolute; left: 0; bottom: 11px; text-align: center; width: 100%;}
.keen-dots li {margin:0 5px;width: 8px; height: 8px; background:#fff; opacity:0.1; border-radius:4px; display:inline-block;  }
.keen-dots li button {display: block; text-indent: -9999px; width: 100%; height: 100%; background:none;}
.keen-dots .active {opacity:1;}

.zoom-out {
  perspective: 1000px;
  height: 50vw;
}

@media (min-width: 768px) {
  .zoom-out {
    height: 300px;
  }
}

.zoom-out__slide div {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
}

.zoom-out__slide img {
  background-color: transparent;
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
}
</style>