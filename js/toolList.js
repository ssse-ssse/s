var toolMySwiper3;
var toolListPageConfig;

function inittoolListPage(page) {
	toolListPageConfig = page.query;
	toolMySwiper3 = myApp.swiper('.swiper-tool', {
		onSlideChangeEnd: function(swiper) {
			$(`.page[data-page="toolList"] .my-tab-header div div:nth-child(${swiper.activeIndex+1})`).click()
		}
	});

	if (toolListPageConfig.ListType != 'bar') {
		ajax(toolListPageConfig.url, function(res) {
			fillToolBar(toolMySwiper3, function() {
				var tabs = res;
				if (toolListPageConfig.ChildResultType == 'json') {
					for (let s of toolListPageConfig.ListCss.split('.')) {
						tabs = tabs[s];
					}
				} else {
					tabs = parseFromString(res, toolListPageConfig.ListCss);
				}
				return tabs
			}, function(item) {
				if (toolListPageConfig.ChildResultType == 'json') {
					return item[toolListPageConfig.hrefCss];
				} else {
					return parseFromString(item, toolListPageConfig.hrefCss, 'href');
				}
			}, function(item) {
				if (toolListPageConfig.ChildResultType == 'json') {
					return item[toolListPageConfig.textCss];
				} else {
					return parseFromString(item, toolListPageConfig.textCss).innerText;
				}
			}, inittoolListMenuClick);
		}, null, toolListPageConfig.ListType)
	} else {
		fillToolBar(toolMySwiper3, function() {
			return toolListPageConfig.url;
		}, function(item) {
			return item[toolListPageConfig.hrefCss]
		}, function(item) {
			return item[toolListPageConfig.textCss]
		}, inittoolListMenuClick);
	}

}

function inittoolListMenuClick() {
	$('.page[data-page="toolList"] .my-tab-header div div').removeClass('active');
	$(this).addClass('active')
	var href = $$(this).attr('d');
	var index = $$(this).attr('i');
	toolMySwiper3.slideTo(index);
	var len = $(`.page[data-page="toolList"] .my-page-content[i="${index}"] .card`).length;
	if (len == 0) querytoolListData(href, index)
}

function querytoolListData(href, index) {
	queryListDataCom(href, index, toolListPageConfig.ChildResultType, toolListPageConfig.ChildListUrl, function(res) {
		var tabs = res;
		if (toolListPageConfig.ChildResultType == 'json') {
			for (let s of toolListPageConfig.ChildListCss.split('.')) {
				tabs = tabs[s];
			}
		} else {
			tabs = parseFromString(res, toolListPageConfig.ChildListCss);
		}
		return tabs
	}, function(item) {
		if (toolListPageConfig.ChildResultType == 'json') {
			return item[toolListPageConfig.ChildAddressCss];
		} else {
			return parseFromString(item, toolListPageConfig.ChildAddressCss, 'href');
		}
	}, function(item) {
		if (toolListPageConfig.ChildResultType == 'json') {
			return item[toolListPageConfig.ChildTitleCss];
		} else {
			return parseFromString(item, toolListPageConfig.ChildTitleCss).innerText;;
		}
	}, function(item) {
		if (toolListPageConfig.ChildResultType == 'json') {
			return item[toolListPageConfig.ChildImgCss];
		} else {
			var src = parseFromString(item, toolListPageConfig.ChildImgCss, 'src', 'data-original');
			if (/^\//.test(src)) {
				src = 'http://www.czhhdj.com/' + src;
			}
			return src;
		}
	}, function(e) {
		var address = this.attributes.c.nodeValue;
		if (toolListPageConfig.PlayUrlType == 0) {
			return playVideotoAddres(address)
		}
		querytoolVideoAddress2Play(address)
	});
}

function querytoolVideoAddress2Play(href, nextUrl, callback) {
	var url = nextUrl || toolListPageConfig.PlayUrl.replace('${address}', href);
	ajax(url, function(res) {
		var address;
		if (callback && toolListPageConfig.NextInScript) {
			var text = queryScript(res, toolListPageConfig.NextUrlKey);
			try {
				eval(text.replace(toolListPageConfig.NextUrlKey, 'tttf'));
			} catch (e) {}
			address = tttf;
			if (typeof address != 'string') {
				address = address[toolListPageConfig.NextUrlBeanKey]
			}
		} else if (toolListPageConfig.PlayUrlInUrl) {
			address = parseFromString(res, toolListPageConfig.ScriptIndex, toolListPageConfig.ScriptStartWith);
		} else if (toolListPageConfig.PlayUrlInScript) {
			var text=queryScript(res, toolListPageConfig.ScriptIndex||'player_data');
			var json = text.substr(toolListPageConfig.ScriptStartWith||16, toolListPageConfig.ScriptEndWith||999)
			if (toolListPageConfig.PlayUrlInJson) {
				var j = JSON.parse(json);
				address = j[toolListPageConfig.PlayUrlIndex||'url'];
			}
		} else {
			address = JSON.parse(res);
			for (let s of toolListPageConfig.ScriptIndex.split('.')) {
				address = address[s];
			}
			if (!address) {
				address = JSON.parse(res);
				for (let s of toolListPageConfig.ScriptIndex2.split('.')) {
					address = address[s];
				}
			}
		}
		if (callback) {
			return callback(address);
		}
		if (toolListPageConfig.NextPlayUrl) {
			var base = address;
			if (toolListPageConfig.baseUrl) base = toolListPageConfig.baseUrl + address;
			querytoolVideoAddress2Play(null, base, function(a) {
				playVideotoAddres(a);
			})
		} else {
			playVideotoAddres(address);
		}
	}, null, 'text')
}
