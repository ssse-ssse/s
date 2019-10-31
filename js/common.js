var parser = new DOMParser();

function parseFromString(res, css, attrName, attrName2) {
	var doc = res;
	if (typeof res == 'string') doc = parser.parseFromString(res, "text/html");
	if (css) {
		var nodes = doc.querySelectorAll(css);
		if (nodes.length == 1) doc = nodes[0];
		else doc = nodes;
	}
	if (attrName) {
		if (doc.length || doc.length >= 0) {
			doc = doc[0];
		}
		for (var i = 0; i < doc.attributes.length; i++) {
			var attr = doc.attributes[i];
			if (attr.nodeName == attrName && !/^data/.test(attr.nodeValue)) {
				return attr.nodeValue;
			}
			if (attr.nodeName == attrName2 && !/^data/.test(attr.nodeValue)) {
				return attr.nodeValue;
			}
		}
	}
	return doc;
}

function ajax(url, success, method, dataType, data) {
	$.ajax({
		url: url,
		headers: {
			'upgrade-insecure-requests': 1,
			http_app_version: "1.1.0",
			token: 'b5020844d74664a3a5d65400689353e7'
		},
		data,
		method: (method || "GET"),
		dataType: (dataType || "json"),
		success: success,
	});
}

function encrypt(paramString) {
	if (paramString) {
		var i = paramString.indexOf("?sign=");
		if (i != -1) paramString = paramString.substring(0, i);
		var j = paramString.indexOf("/", paramString.indexOf("."));
		if (j >= 0) {
			var str1 = paramString.substring(j, 1 + paramString.lastIndexOf("/"));
			var l = parseInt(new Date().getTime() / 1000);
			var str2 = getRandomCharacterAndNumber(10);
			var stringBuilder1 = str1;
			stringBuilder1 +=
				"-" + l + "-" + str2 + "-" + 0 + "-" + "KDWn0Aj6eYponPw2sx7y";
			var str3 = encryptSb1(stringBuilder1);
			var str4 =
				paramString + "?sign=" + l + "-" + str2 + "-" + 0 + "-" + str3;
			return str4;
		}
	}
}

function getRandomCharacterAndNumber(paramInt) {
	var b = 0;
	var str = "";
	while (b < paramInt) {
		var str1;
		if (getNextRandom(2) % 2 == 0) {
			str1 = "char";
		} else {
			str1 = "num";
		}
		if (str1 == "char") {
			var i;
			if (getNextRandom(2) % 2 == 0) {
				i = 65;
			} else {
				i = 97;
			}
			var str2 = (str += String.fromCharCode(
				0x60 + getNextRandom(26)
			));
			str2 += String.fromCharCode(0x60 + getNextRandom(26));
			str = str2;
		} else if (str1 == "num") {
			str += getNextRandom(10);
		}
		b++;
	}
	return str;
}

function getNextRandom(max) {
	return Math.floor(Math.random() * (max || 26)) + 1;
}

function encryptSb1(paramString) {
	var arrayOfByte = md5.digest(stringToBytes(paramString));
	var i = arrayOfByte.length;
	var stringBuilder = "";
	for (var b = 0; ; b++) {
		if (b < i) {
			var num = arrayOfByte[b];
			var str = num.toString(16);
			if (str.split("").length == 1) {
				stringBuilder += "0" + str;
			} else {
				stringBuilder += str;
			}
		} else {
			return stringBuilder.toString();
		}
	}
	console.log(arrayOfByte);
}

function stringToBytes(str) {
	var ch,
		st,
		re = [];
	for (var i = 0; i < str.length; i++) {
		ch = str.charCodeAt(i); // get char
		st = []; // set up "stack"

		do {
			st.push(ch & 0xff); // push byte to stack
			ch = ch >> 8; // shift value down by 1 byte
		} while (ch);
		re = re.concat(st.reverse());
	}
	return re;
}

var player;

function playVideotoAddres(address) {
	// console.log(address);
	if (!address) {
		myApp.alert('对不起，未获取到播放地址，请播放其他视频！', '错误!');
		return
	}
	if (window.plus) {
		player = window.plus.video.createVideoPlayer("videoplayer", {
			src: address,
			autoplay: true,
			"enable-progress-gesture": false
		});
		plus.webview.currentWebview().append(player);
	} else {
		myApp.alert('当前系统不能播放！', '错误!');
	}
}

function queryListDataCom(href, index, resultType, queryUrl, queryListFun, queryAddressFun, queryTitleFun, queryImgFun,
	cardClickFun) {
	var itemHTML = '';
	queryData(1, function () {
		$(`.page[data-page="toolList"] .my-page-content[i="${index}"]`).append(itemHTML);
		$(`.page[data-page="toolList"] .my-page-content[i="${index}"] .card`).unbind('click');
		$(`.page[data-page="toolList"] .my-page-content[i="${index}"] .card`).on('click', cardClickFun);
		$(`.page[data-page="toolList"] .my-page-content[i="${index}"]`).parent().on('scroll', queryScrollByYinshi);
		searchMore = true;
	})

	function queryData(pageIndex, callback) {
		var pageIndex = parseInt(pageIndex || 1)
		var next = pageIndex + 1;
		var url = queryUrl.replace('${href}', href.replace('.html', '')).replace('${pageIndex}', pageIndex);
		ajax(url, function (res) {
			if (resultType == 'json') res = JSON.parse(res);
			var list = queryListFun(res);
			for (var i = 0; i < list.length; i++) {
				var item = list[i];
				var address = queryAddressFun(item);
				var title = queryTitleFun(item);
				var imgSrc = queryImgFun(item);
				if (item.isvip == '1') {
					continue;
				}
				itemHTML +=
					`<div class="card" c='${address}'
					u="querytoolListData" 
					h="${href}" 
					i="${index}" 
					n="${next}" 
					><div class="card-header">${title}</div><div class="card-content">`;
				itemHTML +=
					`<img src="${imgSrc}"/>`;
				itemHTML += '</div></div>';
			}
			if (pageIndex < 3) queryData(++pageIndex, callback);
			else callback()
		}, null, 'text')
	}
}

function fillToolBar(swiper, ListFun, hrefFun, textFun, clickFun) {
	var tabs = ListFun();
	var html = '';
	var j = 0;
	for (var i = 0; i < tabs.length; i++) {
		var href = hrefFun(tabs[i]);
		var text = textFun(tabs[i]);
		if (text !== '首页') {
			html += `<div i="${j}" d="${href}">${text}</div>`
			swiper.appendSlide(
				`<div class="swiper-slide">
				<div style="height: 100%;overflow: auto;">
					<div class="my-page-content" i="${j}"></div>
				</div>
			</div>`
			);
			j++;
		}
	}
	$('.page[data-page="toolList"] .my-tab-header').html(`<div>${html}</div>`);
	$('.page[data-page="toolList"] .my-tab-header div div').unbind('click');
	$('.page[data-page="toolList"] .my-tab-header div div').on('click', clickFun);
	$('.page[data-page="toolList"] .my-tab-header div div:nth-child(1)').click()
}

function queryScript(res, key) {
	var scripts = parseFromString(res, 'script');
	for (let s of scripts) {
		if (s.text.indexOf(key) != -1) {
			return s.text;
		}
	}
}