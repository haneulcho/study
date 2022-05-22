 <template>
  <div class="tab_nav_wrap">
        <ul class="tab_nav">
            <li 
            v-for="(tab, index) in tabs" 
            :key="tab.href" 
            :class="[tab.class, {'active': currentTabIndex === index}]">
                <a 
                :href="`#${tab.href}`" 
                @click="handleClickTab(index)">
                <span class="blind">{{ tab.title }}</span>
                </a>
            </li>
        </ul>
    </div>

    <div id="tab_wrap" :style="`hieght:${tabs[currentTabIndex].hieght}`">
        
        <Tab1 :index="currentTabIndex"/>
        <Tab2 :index="currentTabIndex"/>
        
    </div>
</template>
<script setup>
    import { ref, computed } from 'vue' 

    import Tab1 from '@/components/Tab1.vue'
    import Tab2 from '@/components/Tab2.vue'
    import Notice from '@/components/Notice.vue'

    const tabs= ref([
        { title: '바이올렛 신규 승급 소개', class: 'tab1', href: 'tab1', height: 2969 },
        { title: '승급 기념 이벤트 & 프리패스', class: 'tab2', href: 'tab2' , height: 2492}
    ])


    const currentTabIndex = ref(0)


    // 버튼 클릭시 currentTabIndex를 메뉴에 맞는 숫자로 변경
    const handleClickTab = (tabIndex = 0) =>{
        //확인용 consle
        console.log(`isTab1Active : ${isTab1Active.value}`)
        console.log(`isTab2Active : ${isTab1Active.value}`)
    }



</script>
<style scoped>

  
</style>