var gameList = {}

gameList = {
  event : {
    param : 'm-Pv80NwJCI',
    src : 'https://i3.ytimg.com/vi/m-Pv80NwJCI/maxresdefault.jpg',
    id : 'player4',
    eventDesc : 'WE DELIVER JOY 캠페인 기념 쿠폰 선물이 도착했습니다.<br>1개의 쿠폰으로 총 31 개의 게임에서 선물을 받을 수 있으며,<br>쿠폰 사용방법은 하단의 쿠폰 상세 안내 및 사용방법을 참고 부탁드립니다.<br>※2020/11/30(월) 23 시 59 분까지 쿠폰을 입력할 수 있습니다',
    couponNumber : 'DELIVERYCOMPLETED'
  },
  gameInfo : [{
      platform : 'pc',
      name : 'maplestory',
      title : '메이플스토리',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_maple.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_maple_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/popup/img_maple.png',
      popLink : '-',
      site : 'https://maplestory.nexon.com/',
      moSite : ''
    },
    {
      platform : 'pc',
      name : 'fifaonline4',
      title : '피파온라인4',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_fifa.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_fifa_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/popup/img_fifa.png',
      popLink : '-',
      site : 'http://fifaonline4.nexon.com/',
      moSite : ''
    },
    {
      platform : 'pc',
      name : 'df',
      title : '던전앤파이터',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_df.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_df_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/popup/img_df.png',
      popLink : '-',
      site : 'http://df.nexon.com/',
      moSite : ''
    },
    {
      platform : 'pc',
      name : 'sudden',
      title : '서든어택',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_sudden.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_sudden_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/popup/img_sudden.png',
      popLink : '-',
      site : 'http://sa.nexon.com/',
      moSite : ''
    },
    {
      platform : 'pc',
      name : 'mabinogi',
      title : '마비노기',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_mabinogi.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_mabinogi_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/popup/img_mabinogi.png',
      popLink : '-',
      site : 'http://mabinogi.nexon.com/',
      moSite : 'http://m.mabinogi.nexon.com/'
    },
    {
      platform : 'pc',
      name : 'baram',
      title : '바람의나라',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_baram.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_baram_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/popup/img_baram.png',
      popLink : '-',
      site : 'https://baram.nexon.com/',
      moSite : ''
    },
    {
      platform : 'pc',
      name : 'kart',
      title : '카트라이더',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_kart.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_kart_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/popup/img_kart.png',
      popLink : '-',
      site : 'http://kart.nexon.com/',
      moSite : ''
    },
    {
      platform : 'pc',
      name : 'tales',
      title : '테일즈위버',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_tales.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_tales_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/popup/img_tales.png',
      popLink : '-',
      site : 'http://tales.nexon.com/',
      moSite : ''
    },
    {
      platform : 'pc',
      name : 'heroes',
      title : '마비노기영웅전',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_heroes.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_heroes_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/popup/img_heroes.png',
      popLink : '-',
      site : 'http://heroes.nexon.com/',
      moSite : ''
    },
    {
      platform : 'pc',
      name : 'elsword',
      title : '엘소드',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_elsword.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_elsword_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/popup/img_elsword.png',
      popLink : '-',
      site : 'http://elsword.nexon.com/',
      moSite : ''
    },
    {
      platform : 'pc',
      name : 'cyphers',
      title : '사이퍼즈',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_cyphers.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_cyphers_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/popup/img_cyphers.png',
      popLink : '-',
      site : 'http://cyphers.nexon.com/',
      moSite : ''
    },
    {
      platform : 'pc',
      name : 'closers',
      title : '클로저스',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_closers.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_closers_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/popup/img_closers.png',
      popLink : '-',
      site : 'http://closers.nexon.com/',
      moSite : ''
    },
    {
      platform : 'pc',
      name : 'sky',
      title : '천애명월도',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_sky.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_sky_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/popup/img_sky.png',
      popLink : '-',
      site : 'http://sky.nexon.com/',
      moSite : ''
    },
    {
      platform : 'pc',
      name : 'maplestory2',
      title : '메이플스토리2',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_maple2.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_maple2_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/popup/img_maple2.png',
      popLink : '-',
      site : 'http://maplestory2.nexon.com/',
      moSite : ''
    },
    {
      platform : 'pc',
      name : 'csonline',
      title : '카운터스트라이크온라인',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_cs.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_cs_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/popup/img_cs.png',
      popLink : '-',
      site : 'http://csonline.nexon.com/',
      moSite : ''
    },
    {
      platform : 'pc',
      name : 'tos',
      title : '트리오브세이비어',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_tos.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_tos_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/popup/img_tos.png',
      popLink : '-',
      site : 'http://tos.nexon.com/',
      moSite : ''
    },
    {
      platform : 'pc',
      name : 'asgard',
      title : '아스가르드',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_asgard.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_asgard_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/popup/img_asgard.png',
      popLink : '-',
      site : 'http://asgard.nexon.com/',
      moSite : ''
    },
    {
      platform : 'pc',
      name : 'tera',
      title : '테라',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_tera.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_tera_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/popup/img_tera.png',
      popLink : '-',
      site : 'http://tera.nexon.com/',
      moSite : ''
    },
    {
      platform : 'pc',
      name : 'ca',
      title : '크레이지아케이드',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_ca.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_ca_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/popup/img_ca.png',
      popLink : '-',
      site : 'https://ca.nexon.com/',
      moSite : 'http://m.ca.nexon.com/'
    },
    {
      platform : 'pc',
      name : 'lod',
      title : '어둠의전설',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_lod.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_lod_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/popup/img_lod.png',
      popLink : '-',
      site : 'http://lod.nexon.com/',
      moSite : ''
    },
    {
      platform : 'pc',
      name : 'bf',
      title : '버블파이터',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_bf.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/img_bf_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/pc/popup/img_bf.png',
      popLink : '-',
      site : 'https://bf.nexon.com/',
      moSite : ''
    },
    {
      platform : 'mobile',
      name : 'baramy',
      title : '바람의나라:연',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/img_baramy.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/img_baramy_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/popup/img_baramy.png',
      popLink : '-',
      site : 'https://baramy.nexon.com/?channel=2101',
      moSite : ''
    },
    {
      platform : 'mobile',
      name : 'kartrush',
      title : '카트라이더 러쉬플러스',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/img_kartrush.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/img_kartrush_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/popup/img_kartrush.png',
      popLink : '-',
      site : 'https://kartrush.nexon.com/',
      moSite : ''
    },
    {
      platform : 'mobile',
      name : 'fifamobile',
      title : 'fifa mobile',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/img_fifam.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/img_fifam_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/popup/img_fifam.png',
      popLink : 'https://fifamobile.nexon.com/events/200610/Index?section=1',
      site : 'https://fifamobile.nexon.com/',
      moSite : ''
    },
    {
      platform : 'mobile',
      name : 'v4',
      title : 'v4',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/img_v4.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/img_v4_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/popup/img_v4.png',
      popLink : 'https://mcoupon.nexon.com/v4',
      site : 'https://v4.nexon.com/',
      moSite : ''
    },
    {
      platform : 'mobile',
      name : 'counterside',
      title : '카운터사이드',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/img_counter.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/img_counter_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/popup/img_counter.png',
      popLink : 'https://mcoupon.nexon.com/counterside',
      site : 'https://counterside.nexon.com/',
      moSite : ''
    },
    {
      platform : 'mobile',
      name : 'traha',
      title : '트라하',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/img_traha.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/img_traha_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/popup/img_traha.png',
      popLink : '-',
      site : 'https://traha.nexon.com/',
      moSite : ''
    },
    {
      platform : 'mobile',
      name : 'bnbm',
      title : '크레이지아케이드M',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/img_bnbm.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/img_bnbm_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/popup/img_bnbm.png',
      popLink : '-',
      site : 'https://bnbm.nexon.com/',
      moSite : ''
    },
    {
      platform : 'mobile',
      name : 'maplestorym',
      title : '메이플스토리M',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/img_maplem.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/img_maplem_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/popup/img_maplem.png',
      popLink : 'https://mcoupon.nexon.com/maplestorym',
      site : 'https://maplestorym.nexon.com/',
      moSite : ''
    },
    {
      platform : 'mobile',
      name : 'axe',
      title : '엑스',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/img_axe.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/img_axe_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/popup/img_axe.png',
      popLink : '-',
      site : 'https://axe.nexon.com/',
      moSite : ''
    },
    {
      platform : 'mobile',
      name : 'da3',
      title : 'da3',
      imgDefault : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/img_da3.png',
      imgOver : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/img_da3_over.png',
      popImg : 'https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/mobile/popup/img_da3.png',
      popLink : '-',
      site : 'https://cafe.naver.com/darkavenger3',
      moSite : ''
    }
  ]
}