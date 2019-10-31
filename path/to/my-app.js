var myApp = new Framework7();

var $$ = Framework7.$;

var mainView = myApp.addView('.view-main', {});

var config;
var ptrContent;
var barSwiper;

function queryConfig() {
	ptrContent = $$('.page[data-page="home"] .pull-to-refresh-content');
	ptrContent.on('refresh', function(e) {
		queryMenu(function() {
			myApp.pullToRefreshDone();
		})
	});
	barSwiper = myApp.swiper('.page[data-page="home"] .swiper-container', {
		speed: 400,
		loop: true,
		autoplay: 3000,
	});

	var configJson = localStorage.getItem('config');
	var date = localStorage.getItem('date');
	if (!configJson || (new Date().getTime() - date > 1000 * 60 * 60 * 5)) {
		var ver = queryVersion();
		ajax('http://sses.gearhostpreview.com/index.js?v=' + ver, function(c) {
			localStorage.setItem('config', JSON.stringify(c));
			localStorage.setItem('date', new Date().getTime());
			nextQ(c);
		});
	} else {
		nextQ(JSON.parse(configJson));
	}
}

function queryVersion() {
	var ver = localStorage.getItem('ver');
	if (!ver) ver = 1;
	else ver++;
	localStorage.clear();
	localStorage.setItem('ver', ver);
	return ver;
}

function nextQ(c) {
	config = c;
	var list = c.barner;
	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		barSwiper.appendSlide(`<div class="swiper-slide"><img src="${item.img}" ></div>`);
	}
	queryMenu();
}

myApp.onPageInit('home', function(page) {
	queryConfig()
});

function queryMenu(callback) {
	var list = config.menu;
	var itemHTML = '';
	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		itemHTML +=
			`<div class="card"><div class="card-header">${item.name}</div><div class="card-content row no-gutter">`;
		if (item.children)
			for (var j = 0; j < item.children.length; j++) {
				var child = item.children[j];
				 if(!child.hidden)
				itemHTML +=
					`<div class="col-25" onclick="gotoPage(this)" p="${item.goto}" i="${j}" d="${i}">
					<img src="${child.img}" onerror="this.src='/img/timg10.png'"/>
					<div>${child.name}</div></div>`;
			}
		itemHTML += '</div></div>';
	}
	ptrContent.find('.content-block').html(itemHTML);
	if (callback) callback();
}

queryConfig();

function gotoPage(obj) {
	var f = config.menu[$$(obj).attr('d')].children[$$(obj).attr('i')];
	var nextPage = $$(obj).attr('p') + '.html';
	if (f.goto) {
		nextPage = f.goto + '.html';
	}
	mainView.router.load({
		url: nextPage,
		query: f
	})
}

myApp.onPageInit('zhiboOnly', initPageChild);

function queryVideos(cont, config, callback) {
	ajax(config.url, function(result) {
		var list = result;
		var fs = config.list.split('.');
		for (let key of fs) {
			list = list[key];
		}
		fillRooms(cont, config, list, callback)
	},config.name=='Anna'?"POST":"GET");
}

function fillRooms(cont, config, list, callback) {
	var itemHTML = '';
	for (let s of list) {
		itemHTML +=
			`<div class="col-20" onclick="showVideoOrChildView(this)" h="${config.hasChildList}" 
				ChildUrl="${config.ChildUrl}"
				address="${s[config.addressField]}" 
				addressField="${config.childaddressField}"
				imgField="${config.childimgField}"
				titleField="${config.childtitleField}"
				n="${config.name}"
				l="${config.childList}">
				<div class="photo"><img src="${s[config.imgField]}" onerror="this.src='img/timg10.png'"/></div><div>${s[config.titleField]}</div></div>`;
	}
	cont.find('.card-content').html(itemHTML);
	if (callback) callback();
}

function showVideoOrChildView(obj) {
	var h = JSON.parse($$(obj).attr('h'))
	var address = $$(obj).attr('address')
	if (h) {
		// 还有下级，继续下一页
		mainView.router.load({
			url: 'childrenZhibo.html',
			query: {
				url: $$(obj).attr('ChildUrl').replace('%s', address),
				list: $$(obj).attr('l'),
				hasChildList: false,
				addressField: $$(obj).attr('addressField'),
				imgField: $$(obj).attr('imgField'),
				titleField: $$(obj).attr('titleField'),
				name: $$(obj).attr('n'),
			}
		})
	} else {
		// 无下级，直接播放视频
		playVideotoAddres(address);
	}
}


myApp.onPageInit('childrenZhibo', initPageChild);

function initPageChild(page) {
	var zhibopageSwiper = myApp.swiper(`.page[data-page="${page.name}"] .swiper-container`, {
		speed: 400,
		loop: true,
		autoplay: 3000,
	});
	for (var i = 0; i < config.barner.length; i++) {
		var item = config.barner[i];
		zhibopageSwiper.appendSlide(`<div class="swiper-slide"><img src="${item.img}" ></div>`);
	}
	var videoPageContentRefresh = $$(`.page[data-page="${page.name}"] .pull-to-refresh-content`);
	videoPageContentRefresh.on('refresh', function(e) {
		nextInit(page, videoPageContentRefresh);
	});
	nextInit(page, videoPageContentRefresh);
}

function nextInit(page, cont) {
	var config = page.query;
	console.log(config)
	queryVideos(cont, config, function() {
		myApp.pullToRefreshDone();
	})
}

var currentPageIndex = 1;
myApp.onPageInit('videoPage', function(page) {
	var zhibopageSwiper = myApp.swiper(`.page[data-page="videoPage"] .swiper-container`, {
		speed: 400,
		direction: 'vertical',
		onSlideChangeEnd: function(swiper) {
			var videos=$$(`.page[data-page="videoPage"] .swiper-container .swiper-slide video`);
			for (var i = 0; i < videos.length; i++) {
				videos[i].pause()
			}
			$$(`.page[data-page="videoPage"] .swiper-container .swiper-slide.swiper-slide-active video`)[0].play()
			if (swiper.activeIndex > swiper.slides.length - 4) {
				queryVideo(zhibopageSwiper, page.query, ++currentPageIndex)
			}
		}
	});
	queryVideo(zhibopageSwiper, page.query, currentPageIndex);
});

function queryVideo(Swiper, conf, pageIndex) {
	ajax(conf.url.replace('%s', pageIndex), function(res) {
		var list = res;
		for (let s of conf.list.split('.')) {
			list = list[s];
		}
		for (var i = 0; i < list.length; i++) {
			var item = list[i];
			if (item.uid != '14978' && !item.isad) {
				var url = item[conf.videoField];
				if (conf.name == '抖阴') {
					url = encrypt(url)
				}
				var img=item[conf.imgField];
				img=img.substr(img.lastIndexOf('http'))
				Swiper.appendSlide(
					`<div class="swiper-slide"><video src="${url}" loop="loop"
					  controls="controls"
					  preload="preload"
					  poster="${img}" ></div>`
				);
			}
		}
	}, conf.name=='短视频'?'GET':'POST');
}

myApp.onPageInit('toolList', inittoolListPage);
myApp.onPageInit('searchCili', initSearchCiliPage);