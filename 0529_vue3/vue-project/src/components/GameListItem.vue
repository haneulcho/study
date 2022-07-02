<template>
<li :class="item.platform" :id="item.name">
  <div class="thBox">
    <a :href="item.site" target="blank">
      <img :src="item.imgDefault" class="default" />
      <img :src="item.imgOver" class="over" />
    </a>
  </div>
  <p class="btn notice">
    <a
      @click.prevent="openModal"
      href="#popCommNotice"
      :data-img="item.popImg"
      :data-poplink="item.popLink"
      :data-name="item.name"
      >유의사항</a
    >
  </p>
</li>
<teleport to="body">
  <transition name="fade">
    <div v-if="showModal" class="layerPop" id="popCommNotice">
      <div class="imgs" :id="item.name">
        <p class="btn close"><button type="button" @click="closeModal"></button></p>
        <img :src="item.popImg" :alt="item.title">
      </div>
      <div class="back" @click="closeModal"></div>
    </div>
  </transition>
</teleport>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  item: {
    type: Object,
  }
})

const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>