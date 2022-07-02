import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    gnbHeight: 63,
    visualHeight: 746
  }),
  actions: {

  },
  getters: {

  }
})


////////////////////////////////////////////
//////////// Store

             ////// state - 어느 컴포넌트에서나 접근 가능한 데이터
            ////// actions - 어느 컴포넌트에서나 값을 수정할 수 있는 메서드
            ///// getters - 데이터를 가공해서 쓸 수 있게 만드는 데이터 (computed와 비슷, 캐싱 처리가 된다)