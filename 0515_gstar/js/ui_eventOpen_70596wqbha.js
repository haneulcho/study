var gStarUI = {};
var scrollTime = 0.3;
var scrollDistance = 300;

var rollingId = '';
var isCookie;


$.fn.scrollStopped = function(callback) {
  var that = this, $this = $(that);
  $this.scroll(function(ev) {
    clearTimeout($this.data('scrollTimeout'));
    $this.data('scrollTimeout', setTimeout(callback.bind(that), 250, ev));
  });
};


(function(){
	gStarUI.storage = {
		browser : {
			ie : false,
			ie9Low : false,
			ie8Low : false,
			ie7Low : false,
			ie9 : false,
			ie8 : false,
			ie7 : false,
			ie6 : false,
			chrome : false,
			firefox : false,
			flash : false
		},
    device : {
      pc : false,
      mobile : false,
			tablet : false,
      android : false,
      iphone : false,
      portrait : false,
      landscape : false
    },
		commGnbH : null,
		initVideoCnt : 0,
		isPlay : false,
		swiper : null,
		fontsConH : 0,
		param : 0,
		isScrolling : true,
		isOn : '',
		fixedControllerType : '',
		isDownCache : '',
		isDownType : '',
		isDownCheck : false,
		isPopOpen : false,
		isCache : null
	
	},
	gStarUI.polyfill = function(){
    Number.isNaN = Number.isNaN || function(value) {
			return value !== value;
		}

		if (!String.prototype.repeat) {
			String.prototype.repeat = function(count) {
				'use strict';
				if (this == null) {
					throw new TypeError('can\'t convert ' + this + ' to object');
				}
				var str = '' + this;
				count = +count;
				if (count != count) {
					count = 0;
				}
				if (count < 0) {
					throw new RangeError('repeat count must be non-negative');
				}
				if (count == Infinity) {
					throw new RangeError('repeat count must be less than infinity');
				}
				count = Math.floor(count);
				if (str.length == 0 || count == 0) {
					return '';
				}
				// Ensuring count is a 31-bit integer allows us to heavily optimize the
				// main part. But anyway, most current (August 2014) browsers can't handle
				// strings 1 << 28 chars or longer, so:
				if (str.length * count >= 1 << 28) {
					throw new RangeError('repeat count must not overflow maximum string size');
				}
				var maxCount = str.length * count;
				count = Math.floor(Math.log(count) / Math.log(2));
				while (count) {
					str += str;
					count--;
				}
				str += str.substring(0, maxCount - str.length);
				return str;
			}
		}
  },
	gStarUI.init = {
		setAgent : function ( ) {
			var browser, name, version, device, deviceType, model, orientation;
			browser = gStarUI.storage.browser;
      device = gStarUI.storage.device;
			name = Detectizr.browser.name;
			version = parseInt(Detectizr.browser.version);
      deviceType = Detectizr.device.type;
      model = Detectizr.device.model;
      orientation = Detectizr.device.orientation;

			if ( name == 'ie' ) browser.ie = true;
			if ( name == 'ie' && version <= 9 ) browser.ie9Low = true;
			if ( name == 'ie' && version <= 8 ) browser.ie8Low = true;
			if ( name == 'ie' && version <= 7 || Detectizr.browser.version == '8.compat' ) browser.ie7Low = true;
			if ( name == 'ie' && version == 9 ) browser.ie9 = true;
			if ( name == 'ie' && version == 8 ) browser.ie8 = true;
			if ( name == 'ie' && version == 7 || Detectizr.browser.version == '8.compat' ) browser.ie7 = true;
			if ( name == 'ie' && version == 6 ) browser.ie6 = true;
			if ( name == 'chrome' ) browser.chrome = true;
			if ( name == 'firefox' ) browser.firefox = true;

			if ( deviceType == 'pc' ) device.pc = true;
      if ( deviceType == 'mobile' ) device.mobile = true;
			if ( deviceType == 'tablet' ) device.tablet = true;
      if ( model == 'android' ) device.android = true;
      if ( model == 'iphone' ) device.iphone = true;
			
			if(window.matchMedia('(orientation: portrait)').matches){ // 세로모드
        device.portrait = true;
        device.landscape = false;
      }else if(window.matchMedia('(orientation: landscape)').matches){ //가로모드
        device.portrait = false;
        device.landscape = true;
      }

			try {
				gStarUI.storage.flash = Boolean(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
			} catch(exception) {
				gStarUI.storage.flash = ('undefined' != typeof navigator.mimeTypes['application/x-shockwave-flash']);
			}

		},
		setPlayer : function(){
			var winH, winW,
					h, w;

			winH = $(window).height();
			winW = $(window).width();

			winH = winH < 1080 ? 1080 : winH;
			// winW = winW < 1500 ? 1500 : winW;

			h = winH;
			w = 16 * h / 9;

			if(w < winW){
				w = winW;
				h = 9 * w / 16;
			}

			$('.bgVideo video').css({
				'width' : w,
				'height' : h
			});

			$('.bgVideo .cover').css({
				'width' : w,
				'height' : h
			});

			if(winW <= 1000) return;
			$('.bgVideo video').each(function(){
				$(this).center();
			});

		}
	},

	gStarUI.loader = function(loding, speed){
		$("#fakeLoader").fakeLoader({
			timeToHide:1200000, //Time in milliseconds for fakeLoader disappear
			zIndex:"99999999",//Default zIndex
			spinner:"spinner2",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
			bgColor:"#000", //Hex, RGB or RGBA colors
		});

		setTimeout(function(){
			$('#fakeLoader').stop().animate({'opacity' : '0'}, speed, function(){
				$(this).remove();
			});
			
		}, loding);

		var pageType = gStarUI.functions.getParam('page')

		if( pageType == "tab1" ){
			$('#nav li').eq(0).find('a').trigger("click");
		}else if(pageType == "tab2" ){
			$('#nav li').eq(1).find('a').trigger("click");
		}else if(pageType == "tab3" ){
			$('#nav li').eq(2).find('a').trigger("click");
		}


		
		

		// $('.loader').stop().delay(500).animate({'opacity' : '0'}, loaderTime, function(){
		// 	$(this).remove();
		// 	gStarUI.intro();
		// });
	},

	gStarUI.functions = {
		getParam : function ( sname ) {

			var params = location.search.substr(location.search.indexOf("?")+1);
			var sval = "";
			params = params.split("&");
			for (var i=0; i<params.length; i++)
			{
				temp = params[i].split("=");
				if ( [temp[0]] == sname ) { sval = temp[1]; }
			}
			return sval;

		},

		smoothScroll : function (target, speed, smooth ) {

			if (target === document)
				target = (document.scrollingElement 
									|| document.documentElement 
									|| document.body.parentNode 
									|| document.body) // cross browser support for document scrolling
					
			var moving = false;
			var pos = target.scrollTop;
			var temp = document.getElementsByTagName('html');
			var frame = target === document.body 
									&& document.documentElement 
									? document.documentElement 
									: target // safari is the new IE
			
			target.addEventListener('mousewheel', scrolled, { passive: false })
			target.addEventListener('DOMMouseScroll', scrolled, { passive: false });
			

			function scrolled(e) {
				e.preventDefault(); // disable default scrolling

				var delta = normalizeWheelDelta(e);

				if (!moving) pos = target.scrollTop;

				pos += -delta * speed
				pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

				if (!moving) update()
				// if (!moving) update()
			}

			function normalizeWheelDelta(e){
				if(e.detail){
					if(e.wheelDelta)
						return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
					else
						return -e.detail/3 // Firefox
				}else
					return e.wheelDelta/120 // IE,Safari,Chrome
			}

			function update() {
				
				moving = true
				
				var delta = (pos - target.scrollTop) / smooth
				
				target.scrollTop += delta

				if (Math.abs(delta) > 1) requestFrame(update)
				else moving = false
				
				// if (Math.abs(delta) > 0.5)
				// 	requestFrame(update)
				// else
				// 	moving = false
			}

			var requestFrame = function() { // requestAnimationFrame cross browser
				return (
					window.requestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					window.oRequestAnimationFrame ||
					window.msRequestAnimationFrame ||
					function(func) {
						window.setTimeout(func, 1000 / 50);
					}
				);
			}()
		

		},

		na_setCookie : function(name, value, expiredays){// setCookie
			var todayDate = new Date();
			todayDate.setDate(todayDate.getDate() + expiredays);
			document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
		},

		na_getCookie : function(name){  // getCookie
			var nameOfCookie = name + "=";
			var x = 0;
			var y = 0;
			var endOfCookie;

			while (x <= document.cookie.length) {
					y = (x + nameOfCookie.length);
					if (document.cookie.substring(x, y) == nameOfCookie) {
							endOfCookie = document.cookie.indexOf(";", y);

							if (endOfCookie == -1) {
									endOfCookie = document.cookie.length;
							}

							return unescape(document.cookie.substring(y, endOfCookie));
					}
					x = document.cookie.indexOf(" ", x) + 1;
					if (x == 0) {
							break;
					}
			}
			return "";
		},

		copyToClipboard : function(target) {
			var copyText = document.getElementById(target);
  		copyText.select();
			// console.log(copyText)
  		document.execCommand("Copy");
			alert('코드 번호 복사 완료!\n원하는 곳에 Ctrl+V를 이용하여 사용하세요.')
		}


	},

	
	gStarUI.bindEvents = function(){
		



		// if( pageType == "pc" ){
		// 	window.location.href = "http://gstar.nexon.com/gstar2020/Home";
		// }else{
		// 	if(gStarUI.storage.device.mobile || gStarUI.storage.device.tablet){
		// 		window.location.href = "http://gstar.nexon.com/gstar2020m/Home";
		// 	}
		// }
		
		var visH = parseInt($('#visual').height(), 10);
		var secH = parseInt($('#section0').height(), 10);
		var resultH = visH + secH;
		$('#wrap').css('height', resultH + 'px');
		$('#container').css('height', secH + 'px');
		$('#loader').remove();
		$('body').append('<div id="fakeLoader"></div>');
		$('#nav li').eq(2).find('a').html('<small>WE DELIVER JOY</small><p>쿠폰 이벤트</p>');

		
		$('#nav li').eq(0).addClass('on');
		$('#section0').addClass('on');


		$('#wrap .bgVideo').append('<video id="bgVideo" preload="auto" autoplay="" playsinline="" muted="muted" loop="loop"><source src="https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/bg_update_ver1.mp4" type="video/mp4"></video>');
		gStarUI.init.setPlayer();

		var isNavClick = false;

		$(document).on('click', '#nav li a', function(e){
			e.preventDefault();
			if(!isNavClick){
				isNavClick = true;
				var target = $(this).attr('href');
				var posY;
				var listHeight = $('.gameList').outerHeight() + 120;
				var honeyHeight = $('#event').outerHeight();
				secH = parseInt($(target).height(), 10);
				resultH = visH + secH;

				
				posY = $(target).offset().top;

				$('#nav li').removeClass('on');
				$(this).parent().addClass('on');

				$('.section').removeClass('on');
				$(target).addClass('on');

				$('.ytbArea iframe').remove();

				if(target == '#section2'){
					$('#wrap').css('height', (visH + listHeight + honeyHeight)+ 'px');
					$('#container').css('height', (listHeight + honeyHeight) + 'px')
				}else{
					$('#wrap').css('height', resultH + 'px');
					$('#container').css('height', secH + 'px');
				}

				


				$('body, html').animate({scrollTop : (posY + 50) + 'px'}, 500, 'easeInOutQuart', function(){
					isNavClick = false;
				})
				
			}
			

		});


		$(document).on('click', '.typeIframe button', function(){
			var param = $(this).attr('data-param');
			var target = $(this).parent('.ytbArea');

			$('.ytbArea.typeIframe iframe').remove();

			$(target).append('<iframe width="1190" height="628" src="https://www.youtube.com/embed/' + param + '?rel=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
		});


		

		$(document).on('click', '#visual .movie a', function(e){
			e.preventDefault();

			var dataurl = 'SUrEoP76bmM';

			$('#popMovie .youtubeArea').append('<iframe width="853" height="480" src="https://www.youtube.com/embed/' + dataurl + '?rel=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

			$('#popMovie').fadeIn(300);	
			$('.overlay').fadeIn(300);

		});

		$(document).on('click', '#popMovie .close button', function(){
			$('#popMovie').fadeOut(300, function(){
				$('#popMovie .youtubeArea').html('');
			});	
			$('.overlay').fadeOut(300);

		})

	},


	gStarUI.fixBG = function(){
		var w = $(window).width() - 1; //var w = $(window).width() - 1;
		if ($(window).width() % 2 != 0) $('html').width(w);
		else $('html').width('100%');
	},

	gStarUI.commGnbFunc = function(){
		if($('.gnbWrapper').length){
			gStarUI.storage.commGnbH = 63
		}else if($('.global_wrap').length){
			gStarUI.storage.commGnbH = 60
		}
		
	}

	gStarUI.fixNavPosition = function () {
		var	scrollLeft = $(window).scrollLeft();
		var gnbH = 63;
    var scrollTop = $(window).scrollTop(),
			winWidth = $(window).width(),
			docWidth = $(document).width();
		
		var header = $('#header.fixed'),
			visual = $('#visual'),
			nav = $('#nav.fixed');
			
		if(scrollTop > gnbH){
			if(scrollTop < 746){
				$('#header').css('left', '0');
				$('#nav').css('left', 0 + 'px');
			}
			if(winWidth < 1280){
				header.css('left', - scrollLeft + 'px');
				nav.css('left', - scrollLeft + 'px');
				visual.css('left', - scrollLeft + 'px');
			}else{
				header.css('left', '0px');
				nav.css('left', 0 + 'px');
				visual.css('left', 0 + 'px');
			}
		}else{
			$('#header').css('left', 0 + 'px');
			if(winWidth < 1280){
				visual.css('left', - scrollLeft + 'px');
			}else{
				visual.css('left', 0 + 'px');
			}
		}
	},


	gStarUI.parsingInit = {
		gstarSlide : function(){
			var obj = gstarEleObj.gstarSlide;
			var konoObj = gstarEleObj.gstarSlide.kono;
			var dataIdx = 0;

			// $('#kono').append('<p class="' + key + '"><a href="' + key.link + '" target="_blank"><img src="' + key.src + '" class="thumb"><span class="ico"></span></a></p>');


			$.each(obj, function(key, value){
				$('#' + key).append('<p class="ytbLink"><a href="' + value.ytbLink.link + '" target="_blank" title="유튜브 바로가기"><img src="' + value.ytbLink.src + '" class="thumb"><span class="ico"></span></a></p>');

				$('#' + key + 'Slide').attr('data-idx', dataIdx++);


				for(var i = 0; i < value.slide.length; i++){
					$('#' + key + 'Slide').append('<div class="slide"><img src="' + value.slide[i] + '" alt=""></div>')
				}

			});


		},

		gstarMovieList : function(){
			var obj = gstarEleObj.gstarMovieList;

			$('#section0 #movieList').append('<ul class="clearFix"></ul>');

			$.each(obj, function(key, value){
				$('#section0 #movieList ul').append('<li>\
					<a href="' + value.link + '" target="_blank" title="유튜브 바로가기">\
						<div class="thBox">\
							<img src="' + value.src + '" class="thumb">\
							<span class="ico"></span>\
						</div>\
						<p class="tit">' + value.tit + '</p>\
					</a>\
				</li>');

			});

		},

		necojeContents : function(){
			var obj = gstarEleObj.necojeContents;
			var targetLeng;
			var targetId = [] 

			$('#section1 #necojeContents').append('<ul class="clearFix"></ul>');
			
			// 썸네일 버전
			$.each(obj, function(key, value){
				if(value.param){
					$('#section1 #necojeContents ul').append('<li class="list' + key + '">\
						<div class="ytbArea typeIframe">\
							<button type="button" data-param="' + value.param + '">\
								<div class="thBox">\
									<img src="' + value.src + '" class="thumb">\
									<span class="ico"></span>\
									<span class="cover"></span>\
								</div>\
							</button>\
						</div>\
						<div class="btns">\
						</div>\
					</li>');
				}else{
					$('#section1 #necojeContents ul').append('<li class="list' + key + '">\
						<div class="imgs">\
							<img src="' + value.src + '">\
						</div>\
						<div class="btns">\
						</div>\
					</li>');
				}	
				
				if(value.btns.length){
					for(var i = 0; i < value.btns.length; i++){
						$('#necojeContents li').eq(key).find('.btns').append('<p class="btn btn' + i + '"><a href="' + value.btns[i] + '" target="_blank"></a></p>')
					}
				}

			});

			
		},

		event : function(){
			$('#container').append('<div id="section2" class="section" style="background-image:url(https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/bg_ver2.png);">\
				<div class="innerWrap">\
					<div class="blind">\
						<h3></h3>\
					</div>\
				</div>\
			</div>');

			var obj = gameList.event;
			var targetLeng;
			var targetId = [];



			$('#section2 .innerWrap').append('<div id="event">\
				<div class="eventIntro">\
					<div class="ytbArea typeIframe" id="' + obj.id + '">\
						<button type="button" data-param="' + obj.param + '">\
							<div class="thBox">\
								<img src="' + obj.src + '" class="thumb">\
								<span class="ico"></span>\
								<span class="cover"></span>\
							</div>\
						</button>\
					</div>\
					<div class="desc">' + obj.eventDesc + '</div>\
				</div>\
				<div class="openArea">\
					<input type="input" value="' + obj.couponNumber + '" id="couponNumber" disabled>\
					<p class="btn copy"><button type="button" class="btnTarget" data-clipboard-action="copy" data-clipboard-text="' + obj.couponNumber + '">복사하기</button></p>\
				</div>\
				<p class="btn representNotice"><a href="#popNotice">유의사항 보기</a></p>\
			</div>');

			$('#popNotice').css('background-image', 'url(https://ssl.nexon.com/s2/game/Gstar/2020/pc/update/openEvent_60589oiybn/img_popNotice.png)');
			$('#popNotice').append('<p class="btn close"><button type="button"></button></p>')



			// $(document).on('click', '#event .copy button', function(e){
			// 	// gStarUI.functions.copyToClipboard('couponNumber')
			// });


			$(document).on('click', '.representNotice a', function(e){
				e.preventDefault();
				$('.overlay').fadeIn(300);
				$('#popNotice').fadeIn(300);
			});

			$(document).on('click', '#popNotice .close button', function(e){
				$('.overlay').fadeOut(300);
				$('#popNotice').fadeOut(300);
			});



		
		},

		gameInfo : function(){
			var obj = gameList.gameInfo;

			$('#section2 .innerWrap').append('<div id="gameInfo">\
				<div class="tabs">\
					<ul class="clearFix">\
						<li class="pc on"><button type="button" data-platform="pc">PC 게임</button></li>\
						<li class="mobile"><button type="button" data-platform="mobile">모바일 게임</button></li>\
					</ul>\
				</div>\
				<div class="gameList"><ul class="clearFix"></ul></div>\
			</div>');

			$.each(obj, function(key, value){
				$('#gameInfo .gameList ul').append('<li class="' + value.platform + '" id="' + value.name + '">\
					<div class="thBox">\
						<a href="' + value.site + '" target="blank">\
							<img src="' + value.imgDefault + '" class="default">\
							<img src="' + value.imgOver + '" class="over">\
						</a>\
					</div>\
					<p class="btn notice"><a href="#popCommNotice" data-img="' + value.popImg + '" data-poplink="' + value.popLink + '" data-name="' + value.name + '">유의사항</a></p>\
				</li>');

				if(value.platform == 'mobile'){
					$('#gameInfo .gameList li').eq(key).addClass('hide');
				}
				

			});

			$(document).on('click', '#section2 .gameList .notice a', function(){
				var imgLink = $(this).attr('data-img');
				var popLink = $(this).attr('data-poplink');
				var name = $(this).attr('data-name');
				var imgW, imgH;

				$('#popCommNotice .imgs').attr('id', name);
				$('#popCommNotice .imgs').append('<img src="' + imgLink + '">');
				if(popLink != '-'){
					$('#popCommNotice .imgs').append('<a href="' + popLink + '" target="_blank" class="link"></a>');
				}


				$('#popCommNotice .imgs img').each(function(idx) {
          
          var tmpImg = new Image() ;
          
          tmpImg.onload = function(){
            imgW = $('#popCommNotice .imgs img').prop('naturalWidth');
            imgH = $('#popCommNotice .imgs img').prop('naturalHeight');

						$('#popCommNotice .imgs').css({'width' : imgW + 'px', 'height' : imgH + 'px', 'margin-top' : '-' + (imgH/2) + 'px', 'margin-left' : '-' + (imgW/2) + 'px'})

          }
          
          tmpImg.src = $(this).attr('src') ;
        });


				
				$('#popCommNotice').fadeIn(300);	
				// $('.overlay').fadeIn(300);

			})


			$(document).on('click', '#popCommNotice .close button', function(){
				
				$('#popCommNotice').fadeOut(300, function(){
					$('#popCommNotice .imgs').attr('id', '');
					$('#popCommNotice .imgs img').remove();
					$('#popCommNotice .imgs').css({'width' : '0px', 'height' : '0px', 'margin-top' : '0px', 'margin-left' : '0px'})
				});	



			})


			$(document).on('click', '#section2 .tabs li button', function(){
				var platform = $(this).attr('data-platform');
				var listLeng = $('#gameInfo .gameList li').length;
				var li = $('#gameInfo .gameList li');
				var listHeight = $('.gameList').outerHeight() + 120;
				var honeyHeight = $('#event').outerHeight();
				var visH = parseInt($('#visual').height(), 10);

				li.addClass('hide');

				for(var i = 0; i <= listLeng - 1; i++){
					if(platform == 'pc'){
						$('#gameInfo .gameList .pc').removeClass('hide');
					}else if(platform == 'mobile'){
						$('#gameInfo .gameList .mobile').removeClass('hide');
					}
					// console.log(li.eq(0).attr('class') == 'pc')
				
				}	

				listHeight = $('.gameList').outerHeight() + 120;

				$('#section2 .tabs li').removeClass('on');
				$(this).parent().addClass('on');

				$('#wrap').css('height', (visH + listHeight + honeyHeight)+ 'px');
				$('#container').css('height', (listHeight + honeyHeight) + 'px')

			})


			
		}
	}

	gStarUI.slideFunc = function(){
		$('.slider').slick({
			dots: true,
  		infinite: true,
			slidesToShow: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			pauseOnHover: true,
			pauseOnDotsHover: true
		});

		var mouseenter = false;
		var dataIdx = 0;
    // $('.slider').on('mouseenter', function(){
    //   mouseenter = true;
		// 	dataIdx = parseInt($(this).attr('data-idx'));
    //   swiper[dataIdx].autoplay.stop();
    // }).on('mouseleave', function(){
    //   mouseenter = false;
    //   swiper[dataIdx].autoplay.start();
    // })
	



	}

	


})();


$(document).ready(function(){
	gStarUI.polyfill();
	gStarUI.init.setAgent();

	gStarUI.commGnbFunc();
	gStarUI.fixNavPosition();
	gStarUI.parsingInit.gstarSlide();
	gStarUI.parsingInit.gstarMovieList();
	gStarUI.parsingInit.necojeContents();
	gStarUI.parsingInit.event();
	gStarUI.parsingInit.gameInfo();
	gStarUI.bindEvents();
	gStarUI.slideFunc();
	gStarUI.fixBG();	
	
	gStarUI.loader(1000, 600);
	if ( !gStarUI.storage.browser.ie8Low && !Modernizr.mobile && !Modernizr.tablet ) {
		gStarUI.functions.smoothScroll(document, 100, 12);
	}



	var clipboard = new ClipboardJS('.btnTarget');
	clipboard.on('success', function(e) {
		alert('코드 번호 복사 완료!\n원하는 곳에 Ctrl+V를 이용하여 사용하세요.')
	});
	clipboard.on('error', function(e) {
		alert('에러가 발생했습니다.');
	});


	isCache = gStarUI.functions.na_getCookie('gstar');
	
});

$(window).on('load', function(){
	gStarUI.commGnbFunc();

	var pageType2 = gStarUI.functions.getParam('type');


		if( pageType2 == "pc" ){
			if(isCache == 'done'){ // 캐시가 없을때
				window.location.href = "http://gstar.nexon.com/gstar2020/Home";
			}

		}else{
			if(gStarUI.storage.device.mobile || gStarUI.storage.device.tablet){
				window.location.href = "http://gstar.nexon.com/gstar2020m/Home";
			}
		}


}).on('resize', function(){
	gStarUI.fixBG();
	gStarUI.init.setPlayer();
	gStarUI.fixNavPosition();
	


}).on('scroll', function(e){
	e.preventDefault();
	gStarUI.fixNavPosition();

	var scrollTop = parseInt($(window).scrollTop(), 10);
	var gnbH = 63
//	var sec0PosY = $('#section0').offset().top;
//	var sec1PosY = $('#section1').offset().top;
	//var sec2PosY = $('#section2').offset().top;



	// if(scrollTop >= 0 && scrollTop < sec0PosY){
	// 	$('#nav li').removeClass('on');

	// }else if(scrollTop >= sec0PosY && scrollTop < sec1PosY){
	// 	$('#nav li').removeClass('on');
	// 	$('#nav li').eq(0).addClass('on');
	// }else if(scrollTop >= sec1PosY && scrollTop < sec2PosY){
	// 	$('#nav li').removeClass('on');
	// 	$('#nav li').eq(1).addClass('on');
	// }else if(scrollTop >= sec2PosY){
	// 	$('#nav li').removeClass('on');
	// 	$('#nav li').eq(2).addClass('on');
	// }
	if(scrollTop > 63){
		$('#header').css('top', '0')
	}else{
		$('#header').css('top', '63px')
	}


	if(scrollTop >= 746 + 63){
		$('#nav').addClass('fixed');
		$('#header').addClass('fixed');
		// $('#header .logo').addClass('resize');
		// $('#header .sns').addClass('resize');
	}else{
		$('#nav').removeClass('fixed');
		$('#header').removeClass('fixed');
		
		// $('#header .logo').removeClass('resize');
		// $('#header .sns').removeClass('resize');
	}



	gStarUI.fixNavPosition();



	

	
});



// $(window).scrollStopped(function(ev){
// 	$('.ytbArea .cover').css('display', 'none')
  
// });














