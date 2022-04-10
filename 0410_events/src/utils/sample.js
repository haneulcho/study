/* ================================================================
	* FILENAME: event.ui.js
	* PROJECT: [클로저스] 바이올렛 5차 승급 이벤트
	* UPDATE: 22.04.05
	* RELEASE: 22.04.07
================================================================ */
var $window = $(window);
var evObj = evObj || (function () {
	var UI = {};
	var _Store = {
		isPageLoaded: false,
		isScrolled: false,
		isFirstScroll: false,
		pageType: 2
	};

	var disableScroll = function () {
		_Store.isScrolled = true;
		if (window.addEventListener) {
			window.addEventListener('scroll', preventDefault, { passive: false });
			window.addEventListener('wheel', preventDefault, { passive: false });
			window.addEventListener('DOMMouseScroll', preventDefault, { passive: false });
			window.addEventListener('mousewheel', preventDefault, { passive: false });
		} else {
			$('html, body').on('scroll wheel DOMMouseScroll mousewheel', function () { return false; });
		}
	};

	var enableScroll = function () {
		_Store.isScrolled = false;
		if (window.removeEventListener) {
			window.removeEventListener('scroll', preventDefault, { passive: false });
			window.removeEventListener('wheel', preventDefault, { passive: false });
			window.removeEventListener('DOMMouseScroll', preventDefault, { passive: false });
			window.removeEventListener('mousewheel', preventDefault, { passive: false });
		} else {
			$('html, body').off('scroll wheel DOMMouseScroll mousewheel');
		}
	};

	var getUrlParamsInfo = function (paramName) {
		var sPageURL = decodeURIComponent(window.location.search.substring(1)),
			sURLVariables = sPageURL.split('&'), sParameterName, i;
		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');
			if (sParameterName[0] === paramName) {
				return sParameterName[1] === undefined ? true : sParameterName[1];
			}
		}
	};

	UI.pageLoader = function () {
		var $target = $('.loader'), targetSpeed = 800;
		if ($target.length > 0) {
			_Store.pageType = getUrlParamsInfo('tab');
			_Store.eventType = getUrlParamsInfo('event');

			if (_Store.pageType != null) {
				var $pageTarget = $('.tab_nav').find('.tab' + _Store.pageType);
				if ($pageTarget.length) {
					_Store.isFirstScroll = true;
					$pageTarget.children('a').trigger('click');
					console.log($pageTarget.children('a'))
					setTimeout(function () {
						_Store.isFirstScroll = false;
					}, 1000);
				}
			}
			if (_Store.eventType != null) {
				var $targetPos = $('.tab_cont').find('#event' + _Store.eventType).offset().top - 80;
				UI.bodyScroll($targetPos)
			}
			if (_Store.pageType == 1 || !_Store.pageType) {
				var $tab1 = $('#tab1');
				$('#tab_wrap').css('height', $tab1.height() + 119);
				$tab1.find('.cont1').addClass('on');
			}
			$target.stop(true, true).fadeOut(targetSpeed, function () {
				_Store.isPageLoaded = true;
			});
			// UI.visualAnimation();
		}
	};

	UI.visualAnimation = function () {
		var isIE = UI.checkIE();
		if (isIE > 8) {
		}
	};

	UI.fixBackgroundBlurry = function (target) {
		if ($(target).length) {
			var wWidth = parseInt($window.width());
			var fixWidth = (wWidth % 2 != 0) ? wWidth - 1 : wWidth;
			$(target).css('width', fixWidth + 'px');
		}
	};

	UI.checkIE = function () {
		var ua = window.navigator.userAgent, other = 999, msie = ua.indexOf('MSIE '), trident = ua.indexOf('Trident/'), edge = ua.indexOf('Edge/'), rv = ua.indexOf('rv:');
		if (msie > 0) { return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		} else if (trident > 0) { return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
		} else if (edge > 0) { return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
		} else { return other; }
	};

	UI.getGnbHeight = function () {
		return $('.global_wrap').length ? 60 : 63;
	};

	UI.getRandomInt = function (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	UI.layerControl = {
		openLayer: function (target) {
			var isVisible = $(target).is(':visible');
			if (!isVisible) {
				var $target = $(target);
				if (!$('.overlay').length) {
					$('#wrap').append('<div class="overlay"></div>');
				}
				$('.layerPop:visible').addClass('inactive');
				$('body').addClass('locked-scroll');
				$('.overlay').fadeIn(150);
				this.setLayerSize(target, function () {
					$target.css({ 'z-index': 300 + $('.layerPop:visible').length }).fadeIn(200);
				});
			}
		},
		closeLayer: function (target) {
			var isVisible = $(target).is(':visible');
			if (isVisible) {
				var $target = $(target);
				if ($('.layerPop:visible').length > 1) {
					this.getHighestLayer(target).removeClass('inactive');
				} else {
					$('.overlay').fadeOut(150);
					$('body').removeClass('locked-scroll');
				}
				$target.fadeOut(150, function () {
					$target.removeClass('inactive').removeAttr('style');
				});
				if ($target.find('iframe').length) {
					$target.find('iframe').remove();
				}
			}
		},
		getHighestLayer: function (target) {
			var highestLayer = '',
				highestIdx = 0;
			$('.layerPop:visible').not(target).each(function () {
				var zIdx = parseInt($(this).css('z-index'), 10);
				if (zIdx > highestIdx) {
					highestLayer = $(this);
					highestIdx = zIdx;
				}
			});
			return highestLayer;
		},
		setLayerSize: function (target, callBack) {
			if ($(target).length) {
				var $target = $(target),
					timeLimit = (!_Store.isPageLoaded) ? 200 : 0;
				setTimeout(function () {
					var targetHeight = $target.find('.layerBody').height();
						layerTopMargin = 0,
						min = 150,
						max = $window.height;

					layerTopMargin = ($window.height() < targetHeight + min) ? min : 212;

					if (callBack && $.isFunction(callBack)) {
						$target.find('.layerBody').css({ top: layerTopMargin });
						callBack();
					} else {
						$target.find('.layerBody').css({ top: layerTopMargin });
					}
				}, timeLimit);
			}
		}
	};

	UI.bodyScroll = function (scrollTop) {
		if ($window.scrollTop() != scrollTop) {
			disableScroll();
			$('html, body').stop().animate({ scrollTop: scrollTop }, 650, 'easeInOutCubic', function () {
				enableScroll();
			});
		}
	};

	UI.getYtbSrc = function ($target) {
		if ($target.attr('data-ytb-src') && $target.attr('data-ytb-src').indexOf('#') == -1) {
			return $target.attr('data-ytb-src');
		} else {
			return null;
		}
	};

	UI.insertYtbIframe = function ($target, ytbSrc, w, h, autoplay, mute) {
		if (ytbSrc) {
			var autoplay = (autoplay) ? '&autoplay=1' : '&autoplay=0',
				mute = (mute) ? '&mute=1' : '&mute=0',
				str = '<iframe width="' + w + '" height="' + h + '" src="https://www.youtube.com/embed/' + ytbSrc + '?rel=0&modestbranding=0&showinfo=0' + autoplay + mute + '" frameborder="0" allowfullscreen="" allow="autoplay;encrypted-media"></iframe>';

			if ($target.find('.ytb').length) {
				$target.find('.thumb').fadeOut();
				$target.find('.ytb').empty().html(str);
			} else {
				$target.empty().html(str);
			}
		}
	};

	UI.setTabContents = function (opts) {
		var opts = opts || { tabWrap: '#tab_wrap', tabConts: '#tab_wrap .tab_cont', tabLinks: '#tab_nav a' };
		var $tabWrap = $('body').find(opts.tabWrap),
			$tabConts = $('body').find(opts.tabConts),
			$tabLink = $('body').find(opts.tabLinks);

		if ($tabWrap.length && $tabConts.length && $tabLink.length) {
			$tabLink.on('click', function (e) {
				e.preventDefault();
				var $pLi = $(this).parent('li'),
					pIdx = parseInt($pLi.index()),
					$next = $tabConts.eq(pIdx),
					$current = $tabWrap.children('.active');

				if (!_Store.isTranslated && !_Store.isScrolled) {
					if (!$next.hasClass('active')) {
						$('.layerPop:visible').hide();
						_Store.isTranslated = true;
						$('.tab_nav li:eq(' + pIdx + ')').addClass('active').siblings().removeClass('active');
						$tabWrap.css('height', $next.height() + 119);
						$next.addClass('active');
						$current.removeClass('active');
						setTimeout(function () {
							_Store.isTranslated = false;
						}, 250);
					}
					if (!_Store.isFirstScroll) {
						UI.bodyScroll($tabWrap.offset().top);
						// $('html, body').scrollTop(0);
					}
				}
			});
		}
	};

	UI.fixElement = function (opts) {
		var opts = opts || { target: '#tab_nav', fixClass: 'scrolled' };
		var $target = $('body').find(opts.target),
			fixClass = opts.fixClass;

		if ($target.length) {
			setTimeout(function () {
				var fixPos = UI.getGnbHeight() + 911;
				$window.on('scroll', function () {
					var wPos = $(this).scrollTop(),
						wPosL = $(this).scrollLeft();
					if (fixPos < wPos) {
						$target.addClass(fixClass);
						// if ($('#contents').width() > $window.width()) {
							// $target.css({ 'left': '-320px', 'margin-left': -wPosL });
						// } else {
							$target.css({ 'left': '50%', 'margin-left': '-1280px' });
						// }
					} else {
						$target.removeClass(fixClass);
						$target.css({ 'left': '50%', 'margin-left': '-1280px' });
					}
				}).trigger('scroll');
			}, 1100);
		}
	};

	return UI;
})(); // Closers Module END

function preventDefault (e) {
	e = e || window.event;
	if (e.preventDefault)
		e.preventDefault();
	e.returnValue = false;
}

$(document).ready(function () {
	setTimeout(function () {
		evObj.pageLoader();
	}, 450);

	// Fix Background Width Bug
	evObj.fixBackgroundBlurry('#contents');
	evObj.setTabContents({ tabWrap: '#tab_wrap', tabConts: '#tab_wrap .tab_cont', tabLinks: '.tab_nav a' });
	evObj.fixElement({ target: '.tab_nav_wrap', fixClass: 'scrolled' });

	$(document).on('click', '.btn_movie a', function (e) {
		e.preventDefault();
		var target = $(this).attr('href');
		evObj.layerControl.openLayer(target);

		evObj.insertYtbIframe($('#videoArea'), 'JT_mzilP7uk', 1277, 777, 1);
	});

	$(document).on('click', '.layerPop .close button, .layerPop .confirm button', function () {
		var target = '#' + $(this).parents('.layerPop').attr('id');
		evObj.layerControl.closeLayer(target);
	});

	// 승급 프리패스 패키지 바로가기
	$(document).on('click', '#tab1 .section3 .btn_freepass a', function(e) {
		e.preventDefault();
		$('.tab2 a').trigger('click');
		setTimeout(function () {
			evObj.bodyScroll($('#tab2 .section2').offset().top - 104);
		}, 50);
	});

	// tooltip
	$(document).on('click', '.btn_more', function (e) {
		e.preventDefault();
		var target = $(this).attr('href');
		evObj.layerControl.openLayer(target);
	});

	// tip html
	var tipList = '<li>\
						<span class="blind">코스 원샷+15, 유니크 액세서리 풀세트 획득 찬스! 블라썸 캡슐 뽑기 버프! (4/21 점검 전까지)</span>\
						<a href="/Events2022/0324/Blossom">구경하러 가기</a>\
				   </li>\
				   <li>\
						<span class="blind">던전 플레이로 T2 플래칩 등 제작 가능! 머슬 레인저 이벤트! (4/21 점검 전까지)</span>\
						<a href="/News/Events/View?n4ArticleSN=3039&n4ArticleCategorySN=2">구경하러 가기</a>\
				   </li>\
				   <li>\
						<span class="blind">신규/복귀 클로저 넥슨캐시 최대 2만 획득 가능! 클저하기 좋은 날! (5/6 점검 전까지)</span>\
						<a href="/events2022/0407/goodday">구경하러 가기</a>\
				   </li>'
	$('#tab2 .section3 .tip_wrap').append(tipList);
}); // @ready function END

$(window).on({
    load: function () {
        $(window).trigger('scroll');
    },
    scroll: function () {
        var _windowScrollTop = $(window).scrollTop();
        var _getWindowSize = getWindowSize();
        var _getParallaxOffsets = getParallaxOffsets(_getWindowSize.height, $('.parallax'));

        // parallax
        for (var i = 0; i < _getParallaxOffsets.parallaxOffsetsArr.length; i++) {
            if (_windowScrollTop >= _getParallaxOffsets.parallaxOffsetsArr[i].from) {
                _getParallaxOffsets.target.eq(i).addClass('active');
            } else if (_windowScrollTop < _getParallaxOffsets.parallaxOffsetsArr[i].to) {
                _getParallaxOffsets.target.eq(i).removeClass('active');
            }
        }
    },
	resize: function () {
		evObj.fixBackgroundBlurry('#contents');
		evObj.layerControl.setLayerSize($('.layerPop:visible'));
	}
});

function getWindowSize () {
    var _width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var _height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    return {
        width: _width,
        height: _height
    }
}
function getParallaxOffsets (windowHeight, target) {
    var parallaxOffsetsArr = [];
    var modifyDistance = parseInt(windowHeight * 0.85);
    var $target = target;

    $target.each(function (i) {
        var obj = {};

        obj.from = $(this).offset().top - modifyDistance < 0 ? 0 : $(this).offset().top - modifyDistance;
        obj.to = Math.max(1, obj.from - windowHeight);

        parallaxOffsetsArr.push(obj);
    });

    return {
        target: $target,
        parallaxOffsetsArr: parallaxOffsetsArr
    }
}