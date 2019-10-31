(function() {
	var zhiboConfig;
	var player = null;
	var mySwiper;
	var returnapp = false;

	function init() {
		if (window.plus) plus.key.addEventListener("backbutton", function() {
			if (player) {
				player.close();
				player = null;
			} else if (!$('#homePage').hasClass('page-current')) {
				$.router.back()
			} else if (!returnapp) {
				if (window.plus) plus.nativeUI.toast("再按一次退出应用！");
				else $.toast("再按一次退出应用！");
				returnapp = true;
				setTimeout(function() {
					returnapp = false;
				}, 3000);
			} else if (returnapp) {
				if (window.plus) plus.runtime.quit();
			}

		});

		$.ajax({
			url: 'js/common.json',
			dataType: 'json', //服务器返回json格式数据
			success: function(data) {
				zhiboConfig = data;
				initTab()
			}
		});
	}

	function initTab() {
		$(document).on('refresh', '#tab1 .pull-to-refresh-content', function(e) {
			var child = $(e.currentTarget).attr('c');
			var type = $(e.currentTarget).attr('i');
			var config = zhiboConfig[type];
			if (child) {
				queryAjax(config.ChildUrl.replace('%s', $(e.currentTarget).attr('address')), type, config.childList, false,
					config.childaddressField, config.childimgField, config.childtitleField,
					function(cardHTML) {
						$(e.currentTarget).find('.card-container>div').html(cardHTML);
						$.pullToRefreshDone('.pull-to-refresh-content');
						$(e.currentTarget).find('.test-lazyload').picLazyLoad({
							listCss: e.currentTarget
						});
					})
			} else {
				queryAjax(config.url, type, config.list, config.hasChildList, config.addressField, config.imgField, config.titleField,
					function(cardHTML) {
						$(e.currentTarget).find('.card-container>div').html(cardHTML);
						// 加载完毕需要重置
						$.pullToRefreshDone('.pull-to-refresh-content');
						$(e.currentTarget).find('.test-lazyload').picLazyLoad({
							listCss: e.currentTarget
						});
					})
			}
		});

		function queryAjax(url, type, listItem, hasChildList, addressField, imgField, titleField, callback) {
			$.ajax({
				url: url,
				dataType: type == 'BEI' ? 'text' : 'json', //服务器返回json格式数据
				success: function(data) {
					if (type == 'BEI') data = JSON.parse(data);
					var fields = listItem.split('.');
					var list = data;
					for (let key of fields) {
						list = list[key];
					}
					var cardHTML = '';
					for (var i = 0; i < list.length; i++) {
						var item = list[i]
						cardHTML +=
							`<div class="card col-25">
								<div class="card-content" c=${hasChildList} t=${type} address=${item[addressField]}>
									<div class=itemImg><img class="test-lazyload" data-original="${item[imgField]}" src="images/timg.png" onerror="this.src='images/timg.png'"></div>
									<div class="itemTitle">${item[titleField]}</div>
								</div>
							</div>`;
					}
					callback(cardHTML);
				}
			});
		}

		$(document).on('click', '#tab1 .button', function(e) {
			$($('.pull-to-refresh-content')[(e.currentTarget.href.substr(e.currentTarget.href.length - 1) - 1)]).trigger(
				'refresh')
		});

		$(document).on('click', '#homePage>.buttons-tab .tab-link', function(e) {
			if ($(e.currentTarget).hasClass('ship')) {
				initPageShip();
			} else {
				var video = $('#tab2 .swiper-slide-active video')[0];
				if (video) video.pause()
				if ($(e.currentTarget).hasClass('resource')) {
					initResourcePage();
				}
			}
		});

		$($('.pull-to-refresh-content')[0]).trigger('refresh')

		$(document).on('click', '#tab1 .card .card-content', function(e) {
			showVideoEvents(e);
		});
		$(document).on('click', '#tab4 .card .card-content', function(e) {
			showVideoEvents(e);
		});

		function showVideoEvents(e) {
			var hasChildList = $(e.currentTarget).attr('c');
			if (hasChildList == true || hasChildList == 'true') {
				$.router.load("#childVideoPage");
				$('#childVideoPage .pull-to-refresh-content').attr('i', $(e.currentTarget).attr('t'));
				$('#childVideoPage .pull-to-refresh-content').attr('address', $(e.currentTarget).attr('address'));
				$($('#childVideoPage .pull-to-refresh-content')[0]).trigger(
					'refresh')
			} else {
				showLive($(e.currentTarget).attr('address'), $(e.currentTarget).find('img').attr('src'));
			}
		}

		$(document).on('click', '#tab3 .card', function(e) {
			var address = e.currentTarget.attributes.address.value;
			if (plus.os.name == "Android") {
				plus.runtime.openURL(address, function(e) {
					console.log(e)
				});
			}
		});

		$(document).on('keydown', '#search', function(e) {
			if (e.keyCode == 13) {
				if (window.plus) {
					plus.key.hideSoftKeybord();
					plus.nativeUI.showWaiting("等待中...", {
						back: 'transmit'
					});
				} else {
					$.showIndicator();
				}
				searchCili(this.value);
			}
		});
	}

	function showLive(address, img) {
		if (window.plus) {
			if (!player) {
				player = plus.video.createVideoPlayer('videoplayer', {
					src: address,
					autoplay: true,
					'enable-progress-gesture': false,
					poster: img,
				});
				plus.webview.currentWebview().append(player);
			}
		}
	}

	var initShipPageed = false;

	function initPageShip() {
		if (initShipPageed) {
			$('#tab2 .swiper-slide-active video')[0].play()
			return;
		}
		initShipPageed = true;
		mySwiper = $("#tab2 .swiper-container").swiper({
			direction: 'vertical', // 垂直切换选项
		})
		queryShip();
		mySwiper.on('transitionStart', function(e) {
			e.container.find('#tab2 .swiper-slide-active video')[0].pause()
		});
		mySwiper.on('transitionEnd', function(e) {
			e.container.find('#tab2 .swiper-slide-active video')[0].play()
			var index = e.activeIndex;
			var len = e.slides.length;
			if (index >= len - 5) {
				queryShip();
			}
		});
	}

	var listIndex = [];

	function queryShip() {
		var random = Math.floor(Math.random() * (301 - 1 + 1) + 1);
		if (listIndex.indexOf(random) == -1) {
			listIndex.push(random);
			$.ajax({
				url: 'http://129.204.101.128:81/dy/' + random,
				success: function(data) {
					var list = JSON.parse(data).data;
					for (var i = 0; i < list.length; i++) {
						var item = list[i];
						mySwiper.appendSlide(
							`<div class="swiper-slide">
								<div>
									<video src="${item.url}" loop=loop controls=controls preload=preload poster=${item.img}></video>
								</div>
								<div>
									<div><img src="${item.img}" onerror="this.src='images/timg.png'"></div>
									<div><div>${item.nick_name}</div><div>${item.content}</div></div>
								</div>
							</div>`
						);
					}
					$('#tab2 .swiper-slide-active video')[0].play()
				}
			});
		}
	}

	function searchCili(keyword) {
		if (!keyword) {
			if (window.plus) plus.nativeUI.closeWaiting();
			else $.hideIndicator();
			return;
		}
		var array = [];
		var i = 0;
		// btbiti
		queryBtbiti(keyword, function(list) {
			console.log(list);
			queryList(list, ++i)
		});
		// 皮皮磁力
		queryPiPicili(keyword, function(list) {
			console.log(list);
			queryList(list, ++i)
		});
		// 搜搜
		querySoso(keyword, function(list) {
			console.log(list);
			queryList(list, ++i)
		});
		// 尼玛搜
		queryNiMa(keyword, function(list) {
			console.log(list);
			queryList(list, ++i)
		});

		function queryList(list, i) {
			array = array.concat(list)
			if (i == 4) {
				array = array.sort(function(a, b) {
					return b.hot - a.hot;
				});
				fillHtml(array)
			}
		}

		function fillHtml(list) {
			var html = '';
			for (var i = 0; i < list.length; i++) {
				var item = list[i];
				html +=
					`<div class="card" address="${item.link}">
						<div class="card-header">热度: ${item.hot}  收录时间: ${item.time} </div>
						<div class="card-content">
							${item.title}
						</div>
						<div class="card-footer">文件数:${item.count||'未知'} 大小: ${item.size}   引擎:${item.allow}</div>
					</div>`;
			}
			if (window.plus) plus.nativeUI.closeWaiting();
			else $.hideIndicator();
			$('#tab3 .content').html(html);
		}

	}

	function queryNiMa(key, callback) {
		var url = `http://www.nms000.com/l/${key}-first-asc-1`;
		$.ajax({
			url: url,
			method: "GET",
			dataType: 'text',
			success: function(result) {
				var list = $(result).find('.container table tr .x-item');
				var returnList = []
				for (var i = 0; i < list.length; i++) {
					var obj = {
						allow: 'NiMaSou'
					};
					let item = list[i]
					obj.title = $(item).find('.title').text().trim();
					obj.link = $(item).find('.tail a').attr('href');
					var infos = $(item).find('.tail').text().trim().split('\n')[0].split(' ');
					obj.size = infos[4] + infos[5];
					obj.hot = infos[7];
					obj.time = infos[1];
					returnList.push(obj)
				}
				callback(returnList);
			}
		});
	}

	function querySoso(key, callback) {
		var url = `http://sosocili.best/soso/${key}.html`;
		$.ajax({
			url: url,
			method: "POST",
			dataType: 'text',
			success: function(result) {
				var list = $(result).find('.search_list .item');
				var returnList = []
				for (var i = 0; i < list.length; i++) {
					var obj = {
						allow: 'SOSO'
					};
					let item = list[i]
					obj.title = $(item).find('dt a').text().trim();
					obj.link = $(item).find('.info span:nth-child(6) a').attr('href');
					obj.size = $(item).find('.info span:nth-child(3) b').text().trim();
					obj.count = $(item).find('.info span:nth-child(2) b').text().trim();
					obj.hot = $(item).find('.info span:nth-child(5) b').text().trim();
					obj.time = $(item).find('.info span:nth-child(1) b').text().trim();
					var slist = $(item).find('.filelist li');
					obj.list = [];
					for (var j = 0; j < slist.length; j++) {
						var lis = slist[j];
						var size = $(lis).find('span').text();
						var name = $(lis).text().replace(size, '').trim()
						obj.list.push({
							name,
							size
						});
					}
					returnList.push(obj)
				}
				callback(returnList);
			}
		});
	}

	function queryPiPicili(key, callback) {
		var url = `http://pipicili.space/pipi/${encodeURIComponent(key)}`;
		$.ajax({
			url: url,
			method: "POST",
			dataType: 'text',
			success: function(result) {
				var list = $(result).find('.pipibox');
				var returnList = []
				for (var i = 0; i < list.length; i++) {
					var obj = {
						allow: 'PiPi'
					};
					let item = list[i]
					obj.title = $(item).find('.title h3 a').text().trim();
					obj.link = $(item).find('.sort_bar span:nth-child(6) a').attr('href');
					obj.size = $(item).find('.sort_bar span:nth-child(1) b').text().trim();
					obj.count = $(item).find('.sort_bar span:nth-child(2) b').text().trim();
					obj.hot = $(item).find('.sort_bar span:nth-child(3) b').text().trim();
					obj.time = $(item).find('.sort_bar span:nth-child(4) b').text().trim();
					var slist = $(item).find('.slist li');
					obj.list = [];
					for (var j = 0; j < slist.length; j++) {
						var lis = slist[j];
						var size = $(lis).find('span').text();
						var name = $(lis).text().replace(size, '').trim()
						obj.list.push({
							name,
							size
						});
					}
					returnList.push(obj)
				}
				callback(returnList);
			}
		});
	}

	function queryBtbiti(key, callback) {
		var url = `http://btbiti.cc/search/${encodeURIComponent(key)}/1-1-0.html`;
		$.ajax({
			url: url,
			method: "GET",
			dataType: 'text',
			success: function(result) {
				var list = $(result).find('.rs');
				var returnList = []
				for (var i = 0; i < list.length; i++) {
					var obj = {
						allow: 'Btbiti'
					};
					let item = list[i]
					obj.title = $(item).find('.title h3 a').text().trim();
					obj.link = $(item).find('.sbar span:nth-child(1) a').attr('href');
					obj.size = $(item).find('.sbar span:nth-child(4) b').text().trim();
					obj.count = $(item).find('.sbar span:nth-child(5) b').text().trim();
					obj.time = $(item).find('.sbar span:nth-child(3) b').text().trim();
					obj.hot = $(item).find('.sbar span:nth-child(6) b').text().trim();
					var slist = $(item).find('.slist li');
					obj.list = [];
					for (var j = 0; j < slist.length; j++) {
						var lis = slist[j];
						var size = $(lis).find('span').text();
						var name = $(lis).text().replace(size, '').trim()
						obj.list.push({
							name,
							size
						});
					}
					returnList.push(obj)
				}
				callback(returnList);
			}
		});
	}

	var resourcePageinited = false;

	function initResourcePage() {
		if (resourcePageinited) {
			return
		}
		resourcePageinited = true;
		$.ajax({
			url: 'http://app.hhhlaa.top/mobile/video/cateList',
			success: function(data) {
				var list = data.data;
				for (var i = 0; i < list.length; i++) {
					$('#tab4 .buttons-tab').append(
						`<a href="#video_tab_${list[i].id}" i=${list[i].id}  class="tab-link button">${list[i].title}</a>
						`
					);
					$('#tab4 .tabs').append(
						`<div class='tab content' id='video_tab_${list[i].id}'>
						</div>`
					);
				}
				setTimeout(function() {
					$('#tab4 .tab-link[i="-1"]').click()
				}, 1000);
			}
		});
		$(document).on('click', '#tab4 .content .tab-link', function(e) {
			var id = $(e.currentTarget).attr('i');
			queryVideoById(id);
		});

	}

	function queryVideoById(id) {
		$.ajax({
			url: `http://app.hhhlaa.top/mobile/video/index?cate_id=${id}&page=1&limit=100`,
			success: function(data) {
				var list = data.data.lists;
				var html = '';
				for (var i = 0; i < list.length; i++) {
					html +=
						`<div class="card">
							<div class="card-content" address=${list[i].link}>
								<div><img data-original="${list[i].image}" src="images/timg.png" onerror="this.src='images/timg.png'"></div>
								<div>${list[i].title}</div>
							</div>
						</div>`;
				}
				// 添加新条目
				$(`#video_tab_${id}`).html(html);
				$(`#video_tab_${id} img`).picLazyLoad({
					listCss: `#video_tab_${id}`
				});
			}
		});
	}

	if ($.device.android) {
		document.addEventListener('plusready', init, false);
	} else {
		init();
	}
})();
