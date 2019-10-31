var ciLiSwiper3;

function initSearchCiliPage(page) {
	var mySearchbar = myApp.searchbar('.searchbar', {
		searchList: '.list-block-search',
		customSearch: true
	});

	ciLiSwiper3 = myApp.swiper('.swiper-cili', {
		onSlideChangeEnd: function(swiper) {
			$(`.page[data-page="searchCili"] .my-tab-header div div:nth-child(${swiper.activeIndex+1})`).click()
		}
	});

	$$('.searchbar input').on('search', function() {
		_tabIndex = 0;
		$('.page[data-page="searchCili"] .my-tab-header>div').html('');
		ciLiSwiper3.removeAllSlides();
		searchCili(this.value)
	});
}

function searchCili(key) {
	key = '081117-477';
	searchHeian(key, function(res) {
		return parseFromString(res, '.hash-view-download li a', 'href')
	});
	searchLaoWang(key, function(res) {
		return parseFromString(res, '.fa-magnet').parentElement.children[1].innerText;
	});
	searchCiLiGuanJia(key, function(res) {
		return parseFromString(parseFromString(res, '.list-group div.list-group-item')[1], 'a', 'href')
	});
	searchCiLiWang(key);
	
	search1207(key, function(res) {
		return parseFromString(parseFromString(res, '.panel-default.no-border-radius .panel-body')[2], 'a', 'href')
	});
	searchHaha(key, function(res) {
		var json=JSON.parse(res);
		return 'magnet:?xt=urn:btih:'+json.result[0].info_hash;
	});
	searchSoBt(key, function(res) {
		return parseFromString(res, '#down-url','href')
	});
	
	searchCiliGuo(key);
	searchBySky(key);
	
	searchByMonova(key,function(res){
		return parseFromString(res, '#download-file','href')
	});
	
	searchByNingMeng(key,function(res){
		return parseFromString(res, '.fa-magnet').parentElement.children[1].innerText;
	});
	
	searchByBTdad(key)
}

function searchByBTdad(key) {
	ajax(`http://www.btdad.com/search-${key}-0-0-1.html`, function(html) {
		var l = [];
		var list = parseFromString(html, '.tbox .ssbox');
		for (var i = 0; i < list.length - 1; i++) {
			var item = list[i];
			var title = parseFromString(item, '.title a span').innerText
			var url = parseFromString(item, '.sbar a', 'href');
			var size = parseFromString(item, '.sbar span b')[1].innerText;
			var time = parseFromString(item, '.sbar span b')[0].innerText;
			var hot = parseFromString(item, '.sbar span b')[3].innerText;
			l.push({
				title,
				url,
				size,
				time,
				hot,
				hasChild: false
			});
		}
		fillList('BTdad', l);
	}, "GET", 'text')
}

function searchByNingMeng(key,searchMagnet) {
	ajax(`https://lemencili6.xyz/search?keyword=${key}&s=date`, function(html) {
		var l = [];
		var list = parseFromString(html, '.panel.panel-default');
		for (var i = 2; i < list.length - 1; i++) {
			var item = list[i];
			var title = parseFromString(item, '.panel-title a').innerText;
			var url = 'https://lemencili6.xyz' + parseFromString(item, '.panel-title a', 'href');
			var size = parseFromString(item, '.panel-footer span')[0].innerText;
			var time = parseFromString(item, '.panel-footer span')[2].innerText;
			var hot = null;
			l.push({
				title,
				url,
				size,
				time,
				hot,
				hasChild: true
			});
		}
		fillList('磁力柠檬', l,searchMagnet);
	}, "GET", 'text')
}

function searchBySky(key) {
	ajax(`https://www.skytorrents.lol/?query=${key}&sort=seeders`, function(html) {
		var l = [];
		var list = parseFromString(html, '#results .result');
		for (var i = 0; i < list.length ; i++) {
			var item = list[i];
			var title = parseFromString(item, 'a:nth-child(1)').innerText;
			var url =parseFromString(item, 'a:nth-child(4)','href')
			var size = parseFromString(item, 'td:nth-child(2)').innerText
			var time = parseFromString(item, 'td:nth-child(4)').innerText
			var hot = parseFromString(item, 'td:nth-child(6)').innerText
			l.push({
				title,
				url,
				size,
				time,
				hot,
				hasChild: false
			});
		}
		fillList('Sky', l);
	}, "GET", 'text')
}

function searchByMonova(key,searchMagnet) {
	ajax(`https://monova.to/search?term=${key}`, function(html) {
		var l = [];
		var list = parseFromString(html, '.desktop');
		for (var i = 0; i < list.length ; i++) {
			var item = list[i];
			var title = parseFromString(item, '.torrent_name a').innerText.trim()
			var url ='https:'+parseFromString(item, '.torrent_name a','href')
			var size = parseFromString(item, '.center-align').innerText
			var time = null
			var hot = null
			l.push({
				title,
				url,
				size,
				time,
				hot,
				hasChild: true
			});
		}
		fillList('Monova', l,searchMagnet);
	}, "GET", 'text')
}

function searchCiliGuo(key, searchMagnet) {
	ajax(`https://ciliguo.cc/search?q=${key}`, function(html) {
		var l = [];
		var list = parseFromString(html, '.card');
		for (var i = 0; i < list.length ; i++) {
			var item = list[i];
			var title = parseFromString(item, '.card-body a').innerText;
			var url =parseFromString(item, '.card-body .text-right button:nth-child(2)','data-src')
			var size = parseFromString(item, '.card-footer-info small:nth-child(2) span').innerText
			var time = parseFromString(item, '.card-footer-info small:nth-child(1) span').innerText
			var hot = parseFromString(item, '.card-footer-info small:nth-child(3) span').innerText
			l.push({
				title,
				url,
				size,
				time,
				hot,
				hasChild: false
			});
		}
		fillList('磁力果', l, searchMagnet);
	}, "GET", 'text')
}

function searchSoBt(key, searchMagnet) {
	ajax(`http://www.sobt5.co/q/${key}.html?sort=time`, function(html) {
		var l = [];
		var list = parseFromString(html, '.search-list .search-item');
		for (var i = 0; i < list.length ; i++) {
			var item = list[i];
			var title = parseFromString(item, '.item-title a').innerText;
			var url ='http://www.sobt5.co'+parseFromString(item, '.item-title a', 'href');
			var size = parseFromString(item, '.item-bar span:nth-child(3) b').innerText
			var time = parseFromString(item, '.item-bar span:nth-child(2) b').innerText
			var hot = parseFromString(item, '.item-bar span:nth-child(4) b').innerText
			l.push({
				title,
				url,
				size,
				time,
				hot,
				hasChild: true
			});
		}
		fillList('SoBt', l, searchMagnet);
	}, "GET", 'text')
}

function searchHaha(key, searchMagnet) {
	ajax(`https://bthaha.men/cn/search/${key}/?c=&s=create_time`, function(html) {
		var l = [];
		var list = parseFromString(html, '.x-item');
		for (var i = 0; i < list.length ; i++) {
			var item = list[i];
			var title = parseFromString(item, 'a', 'title');
			var h=parseFromString(item, 'a', 'href').split('/')[3];
			var url ='https://bthaha.men/api/json_info?hashes='+h.replace('.html','') ;
			
			var p=parseFromString(item, '.tail').innerText
			
			var size = p.substring(p.indexOf('文件大小'));
			size = size.substring(5, size.indexOf('人气指数')).trim();
			
			var time = null;
			
			var hot = p.substring(p.indexOf('人气指数'));
			hot = hot.substring(5, hot.indexOf('最近访问时间')).trim();
			l.push({
				title,
				url,
				size,
				time,
				hot,
				hasChild: true
			});
		}
		fillList('BT哈哈', l, searchMagnet);
	}, "GET", 'text')
}

function search1207(key, searchMagnet) {
	ajax(`https://bt1207.icu/search?keyword=${key}&s=date`, function(html) {
		var l = [];
		var list = parseFromString(html, '.list-unstyled');
		for (var i = 0; i < list.length ; i++) {
			var item = list[i];
			var title = parseFromString(item, '.result-resource-title', 'title');
			var url ='https://bt1207.icu'+ parseFromString(item, '.result-resource-title', 'href');
			var size = parseFromString(item, '.result-resource-meta-info span:nth-child(2)').innerText;
			var time = parseFromString(item, '.result-resource-meta-info span:nth-child(1)').innerText;
			var hot = parseFromString(item, '.result-resource-meta-info span:nth-child(4)').innerText;
			l.push({
				title,
				url,
				size,
				time,
				hot,
				hasChild: true
			});
		}
		fillList('1207', l, searchMagnet);
	}, "GET", 'text')
}

function searchCiLiWang(key, searchMagnet) {
	ajax(`https://www.ciliwang.club/list.html?keyword=${key}&sort=time`, function(html) {
		var l = [];
		var list = parseFromString(html, '#list_cont .single_cont');
		for (var i = 0; i < list.length ; i++) {
			var item = list[i];
			var title = parseFromString(item, '.title a', 'title');
			var url = parseFromString(item, '.title a', 'data-src');
			var size = parseFromString(item, '.org_radius').innerText.trim();
			var time = parseFromString(item, 'ul .data_text')[0].innerText.substr(5);
			var hot = parseFromString(item, 'ul .data_text')[2].innerText.substr(4);
			l.push({
				title,
				url,
				size,
				time,
				hot,
				hasChild: false
			});
		}
		fillList('磁力王', l, searchMagnet);
	}, "GET", 'text')
}

function searchCiLiGuanJia(key, searchMagnet) {
	ajax(`http://99cili.xyz/search/kw/${key}/order/last_seen.html`, function(html) {
		var l = [];
		var list = parseFromString(html, 'body>.row>div.col-md-8>.row');
		for (var i = 0; i < list.length; i++) {
			var item = list[i];
			var title = parseFromString(item, 'h4 a').innerText;
			var url = 'http://99cili.xyz' + parseFromString(item, 'h4 a', 'href');
			var size = parseFromString(item, '.col-md-12 .col-md-3')[1].innerText.substr(5);
			var time = parseFromString(item, '.col-md-12 .col-md-3')[3].innerText.substr(5);
			var hot = parseFromString(item, '.col-md-12 .col-md-3')[0].innerText.substr(3);
			l.push({
				title,
				url,
				size,
				time,
				hot,
				hasChild: true
			});
		}
		fillList('磁力管家', l, searchMagnet);
	}, "GET", 'text')
}

function searchLaoWang(key, searchMagnet) {
	ajax(`https://laowang1.xyz/search?keyword=${key}&s=date`, function(html) {
		var l = [];
		var list = parseFromString(html, '.panel.panel-default.search-panel');
		for (var i = 2; i < list.length - 1; i++) {
			var item = list[i];
			var title = parseFromString(item, '.panel-title a').innerText;
			title = title.substr(4);
			var url = 'https://laowang1.xyz' + parseFromString(item, '.panel-title a', 'href');
			var size = parseFromString(item, '.panel-footer span')[0].innerText;
			var time = parseFromString(item, '.panel-footer span')[2].innerText;
			var hot = null;
			l.push({
				title,
				url,
				size,
				time,
				hot,
				hasChild: true
			});
		}
		fillList('老王磁力', l, searchMagnet);
	}, "GET", 'text')
}

function searchHeian(key, searchMagnet) {
	ajax(`https://www.iheian.com/search-create/${key}.html`, function(html) {
		var l = [];
		var list = parseFromString(html, 'article.item');
		for (var i = 0; i < list.length; i++) {
			var item = list[i];
			var title = parseFromString(item, 'h4').innerText;
			title = title.substr(4);
			var url = 'https://www.iheian.com' + parseFromString(item, 'a', 'href');
			var p = parseFromString(item, 'p')[0].innerText;
			var size = p.substring(p.indexOf('文件大小：'));
			size = size.substring(5, size.indexOf('创建时间')).trim();
			var time = p.substring(p.indexOf('创建时间：'));
			time = time.substring(5, time.indexOf('文件数量')).trim();
			var hot = p.substring(p.indexOf('热度：'));
			hot = hot.substring(3, hot.indexOf('文件大小')).trim();
			l.push({
				title,
				url,
				size,
				time,
				hot,
				hasChild: true
			});
		}
		fillList('黑暗磁力', l, searchMagnet);
	}, "GET", 'text')
}

function fillList(key, list, searchMagnet) {
	addTab(key)
	for (let item of list) {
		var itemHTML =
			`<div class="card" c='${item.hasChild}' d='${item.url}'><div class="card-header">${item.title}</div><div class="card-content">`;
		itemHTML +=
			`<div>文件大小:${item.size}`;
		if (item.hot) itemHTML += `&nbsp;&nbsp;&nbsp;&nbsp;热度:${item.hot}`;
		if (item.time) itemHTML += `&nbsp;&nbsp;&nbsp;&nbsp;时间:${item.time}`;
		itemHTML += '</div></div></div>';
		$(`.page[data-page="searchCili"] .my-page-content[i="${key}"]`).append(itemHTML);
	}
	$(`.page[data-page="searchCili"] .my-page-content[i="${key}"] .card`).unbind('click');
	$(`.page[data-page="searchCili"] .my-page-content[i="${key}"] .card`).on('click', function() {
		var url = $(this).attr('d')
		var hasChild = eval($(this).attr('c'))
		if (hasChild) {
			ajax(url, function(msg) {
				var p = searchMagnet(msg);
				gotoDownLoadMagent(p)
			}, 'GET', 'text')
		} else {
			gotoDownLoadMagent(url)
		}
	});
}

var _tabIndex = 0;

function addTab(name) {
	var d = $(`<div>${name}</div>`)[0];
	d.tabIndex = _tabIndex;
	_tabIndex++;
	$('.page[data-page="searchCili"] .my-tab-header>div').append(d);
	ciLiSwiper3.appendSlide(
		`<div class="swiper-slide">
		<div style="height: 100%;overflow: auto;">
			<div class="my-page-content" i='${name}'></div>
		</div>
	</div>`
	);

	$('.page[data-page="searchCili"] .my-tab-header div div').unbind('click');
	$('.page[data-page="searchCili"] .my-tab-header div div').on('click', initCiLiMenuClick);
	if(_tabIndex==1){
		$('.page[data-page="searchCili"] .my-tab-header div div:nth-child(1)').click();
	}
}

function initCiLiMenuClick() {
	$('.page[data-page="searchCili"] .my-tab-header div div').removeClass('active');
	$(this).addClass('active')
	var index = $$(this)[0].tabIndex;
	ciLiSwiper3.slideTo(index);
}

function gotoDownLoadMagent(url) {
	console.log(url)
}
