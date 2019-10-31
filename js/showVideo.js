var mySwiper3;
var domListPageConfig;

function initShowVideoPage(page) {
	domListPageConfig = page.query;
	mySwiper3 = myApp.swiper('.swiper-dom', {
		onSlideChangeEnd: function(swiper) {
			$(`.page[data-page="domList"] .my-tab-header div div:nth-child(${swiper.activeIndex+1})`).click()
		}

	});
	ajax(page.query.url, function(res) {
		res = res.substring(res.indexOf('id="nav"') - 5, res.indexOf('class="nav-menu"') - 5 - 6);
		var tabs = $(res)[0].childNodes;
		var html = '';
		var j = 0;
		for (var i = 0; i < tabs.length; i++) {
			var href = $$(tabs[i]).attr('href');
			var text = $$(tabs[i]).text();
			href = href
			if (text !== '首页') {
				html += `<div i="${j}" d="${href}">${text}</div>`
				mySwiper3.appendSlide(
					`<div class="swiper-slide">
					<div style="height: 100%;overflow: auto;">
						<div class="my-page-content" i="${j}"></div>
					</div>
				</div>`
				);
				j++;
			}
		}
		$('.page[data-page="domList"] .my-tab-header').html(`<div>${html}</div>`);
		$('.page[data-page="domList"] .my-tab-header div div').on('click', initMenuClick);
		$('.page[data-page="domList"] .my-tab-header div div:nth-child(1)').click()
	}, null, 'text')
}

function initMenuClick() {
	$('.page[data-page="domList"] .my-tab-header div div').removeClass('active');
	$(this).addClass('active')
	var href = $$(this).attr('d');
	var index = $$(this).attr('i');
	mySwiper3.slideTo(index);
	var len = $(`.page[data-page="domList"] .my-page-content[i="${index}"] .card`).length;
	if (len == 0) querydomData(href, index)
}

function querydomData(href, index) {
	queryData(href, index, 1, function() {
		searchMore=true;
	})
	
	function queryData(href, index, j, callback) {
		ajax(domListPageConfig.url + href, function(res) {
			res = res.substring(res.indexOf('class="video-list"') - 5, res.indexOf('id="link"') - 5)
			var list = $$(res)[0].childNodes;
			var pages = $$(res).find('.page_link');
			var nextPageUrl;
			for (var i = 0; i < pages.length; i++) {
				var p = pages[i];
				if (p.title == '下一页') {
					nextPageUrl=p.pathname;
				}
			}
			
			var itemHTML = '';
			for (var i = 0; i < list.length; i++) {
				var item = list[i];
				itemHTML +=
					`<div class="card" onclick="queryVideoAddress2Play('${$(item).find('a').attr('href')}')"
					u="querydomData" 
					np="${nextPageUrl}"
					i="${index}" 
					><div class="card-header">${$(item).find('.title').text()}</div><div class="card-content">`;
				itemHTML +=
					`<img src="${$(item).find('img').attr('src')}"/>`;
				itemHTML += '</div></div>';
			}
			$(`.page[data-page="domList"] .my-page-content[i="${index}"]`).append(itemHTML);
			$(`.page[data-page="domList"] .my-page-content[i="${index}"]`).parent().on('scroll', queryScrollByYinshi);
			if (j <= 3&&nextPageUrl) queryData(nextPageUrl, index, ++j, callback);
			else callback()
		}, null, 'text')
	}
	
}

function queryVideoAddress2Play(href) {
	ajax(domListPageConfig.url + href, function(res) {
		res = res.substring(res.indexOf('player_data'));
		res = res.substring(0, res.indexOf('}') + 1);
		res = res.substring(12);
		var json = JSON.parse(res);
		var address = json.url;
		playVideotoAddres(address);
	}, null, 'text')
}
