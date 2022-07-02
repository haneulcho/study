<template>
  <div class="gameList">
    <transition name="fade">
      <ul v-if="gameList.length" class="clearFix">
        <!--
          id="" -> 게임 id
          class="pc" -> pc게임
          class="mobile" -> mobile 게임
        -->
        <GameListItem v-for="item in gameList" :item="item" />
      </ul>
    </transition>
    <div v-if="!gameList.length">
      <p>로딩중입니다.</p>
    </div>
  </div>
</template>

<script setup>
import GameListItem from '@/components/GameListItem.vue'
import { ref, computed, watch, inject } from 'vue'

const props = defineProps({
  platform: {
    type: String,
    default: 'pc',
  }
})

const axios = inject('axios')

// http://localhost:3000/gameInfo 로 접근하면 pc, mobile 정보가 다 나옴
// http://localhost:3000/gameInfo?platform=pc 로 접근하면 pc만 나옴
// http://localhost:3000/gameInfo?platform=mobile 로 접근하면 mobile만 나옴

const gameList = ref([])

// const filteredGameList = computed(() => {
//   return gameList.value.filter(item => item.platform === props.platform)
// })

const getGameList = (platform = 'pc') => {
  const apiUrl = `http://localhost:3000/gameInfo?platform=${platform}`

  gameList.value = []

  axios.get(apiUrl)
    .then((res) => {
      if (res?.data) {
        gameList.value = res.data
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

// const onCreated = () => {
//   getGameList()
// }

watch(
  () => props.platform,
  (newVal) => {
    getGameList(newVal)
  },
  {
    immediate: true
  }
)

// onCreated()
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