{
    "barner": [
        {
            "url": "javascript:",
            "img": "https://i.servimg.com/u/f98/20/11/38/21/110.png"
        },
        {
            "url": "javascript:",
            "img": "https://i.servimg.com/u/f98/20/11/38/21/110.png"
        },
        {
            "url": "javascript:",
            "img": "https://i.servimg.com/u/f98/20/11/38/21/110.png"
        }
    ],
    "menu": [
        {
            "name": "直播聚合",
            "goto": "zhiboOnly",
            "children": [
                {
                    "name": "DKS推荐",
                    "img": "img/ic_lau10.png",
                    "url": "http://app.hhhlaa.top/mobile/live/tuijian",
                    "list": "data.lists",
                    "imgField": "img",
                    "addressField": "address",
                    "titleField": "title",
                    "hasChildList": false,
                    "hidden": true
                },
                {
                    "name": "DKS全部",
                    "img": "img/ic_lau10.png",
                    "url": "http://app.hhhlaa.top/mobile/live/quanbu",
                    "list": "data.lists",
                    "imgField": "img",
                    "addressField": "address",
                    "titleField": "title",
                    "hasChildList": false,
                    "hidden": true
                },
                {
                    "name": "太阳",
                    "img": "img/logo10.png",
                    "url": "http://afi0i.cn/api_taiyang.php",
                    "list": "data",
                    "imgField": "img",
                    "addressField": "latform_type",
                    "titleField": "title",
                    "hasChildList": true,
                    "ChildUrl": "http://pay.fwlcb.cn/api_taiyang.php?pt=&pt=%s",
                    "childList": "data",
                    "childimgField": "img",
                    "childaddressField": "url",
                    "childtitleField": "title"
                },
                {
                    "name": "备用",
                    "img": "img/timg10.png",
                    "url": "http://api.vipmisss.com:81/xcdsw/json.txt",
                    "list": "pingtai",
                    "imgField": "xinimg",
                    "addressField": "address",
                    "titleField": "title",
                    "hasChildList": true,
                    "ChildUrl": "http://api.vipmisss.com:81/xcdsw/%s",
                    "childList": "zhubo",
                    "childimgField": "img",
                    "childaddressField": "address",
                    "childtitleField": "title"
                },
                {
                    "name": "Anna",
                    "img": "img/app_logo.png",
                    "url": "http://yjxtv.com/mobile/live/index",
                    "list": "data.lists",
                    "imgField": "img",
                    "addressField": "name",
                    "titleField": "title",
                    "hasChildList": true,
                    "ChildUrl": "http://yjxtv.com/mobile/live/anchors?name=%s",
                    "childList": "data.lists",
                    "childimgField": "img",
                    "childaddressField": "play_url",
                    "childtitleField": "title",
                    "hidden": true
                }
            ]
        },
        {
            "name": "小视频",
            "goto": "videoPage",
            "children": [
                {
                    "name": "抖阴",
                    "img": "https://i.servimg.com/u/f39/20/11/38/51/icon_t10.png",
                    "url": "https://www.orq652.com/api/public/?service=Video.getRecommendVideos&uid=-1&p=%s&isstart=0",
                    "list": "data.info",
                    "videoField": "href",
                    "imgField": "thumb",
                    "nicenameField": "userinfo.user_nicename",
                    "titleField": "title"
                },
                {
                    "name": "天使小视频",
                    "img": "https://i.servimg.com/u/f39/20/11/38/51/20190510.png",
                    "url": "http://api.1905.tssp123.com/apiv2/public/?service=Video.getRecommendVideos&uid=-1&p=%s",
                    "list": "data.info",
                    "videoField": "href",
                    "imgField": "thumb_s"
                },
                {
                    "name": "天使影院",
                    "img": "https://i.servimg.com/u/f39/20/11/38/51/20190510.png",
                    "url": "http://api.1905.tssp123.com/apiv2/public/?service=Classic.classiclist&uid=-1&p=1",
                    "list": "data.info",
                    "videoField": "href",
                    "imgField": "thumb"
                },
                {
                    "name": "短视频",
                    "img": "https://i.servimg.com/u/f39/20/11/38/51/timg10.png",
                    "url": "http://129.204.101.128:81/dy/%s",
                    "list": "data",
                    "videoField": "url",
                    "imgField": "img",
                    "hidden": true
                }
            ]
        },
        {
            "name": "影视",
            "goto": "showVideo",
            "children": [
                {
                    "name": "玉皇大帝",
                    "goto": "toolList",
                    "img": "img/yudi.png",
                    "url": [
                        {
                            "cateid": "20",
                            "catename": "亚洲情色"
                        },
                        {
                            "cateid": "21",
                            "catename": "制服师生"
                        },
                        {
                            "cateid": "22",
                            "catename": "卡通动漫"
                        },
                        {
                            "cateid": "23",
                            "catename": "丝袜美腿"
                        },
                        {
                            "cateid": "24",
                            "catename": "强奸乱伦"
                        },
                        {
                            "cateid": "25",
                            "catename": "偷拍自拍"
                        },
                        {
                            "cateid": "29",
                            "catename": "人妻熟女"
                        },
                        {
                            "cateid": "30",
                            "catename": "无码专区"
                        },
                        {
                            "cateid": "32",
                            "catename": "自淫系列"
                        },
                        {
                            "cateid": "36",
                            "catename": "国产精品"
                        },
                        {
                            "cateid": "33",
                            "catename": "拳交系列"
                        },
                        {
                            "cateid": "28",
                            "catename": "欧美性爱"
                        },
                        {
                            "cateid": "31",
                            "catename": "SM捆绑"
                        },
                        {
                            "cateid": "35",
                            "catename": "男同女同"
                        },
                        {
                            "cateid": "26",
                            "catename": "4K岛国"
                        },
                        {
                            "cateid": "27",
                            "catename": "中文字幕"
                        },
                        {
                            "cateid": "37",
                            "catename": "三级伦理"
                        }
                    ],
                    "ListType": "bar",
                    "hrefCss": "cateid",
                    "textCss": "catename",
                    "ListCss": "ul ol li a",
                    "ChildListUrl": "https://www.yhdd.space/index.php/vod/type/id/${href}/page/${pageIndex}.html",
                    "ChildListCss": ".video-list .video-item",
                    "ChildAddressCss": "a",
                    "ChildTitleCss": ".title",
                    "ChildImgCss": "img",
                    "PlayUrlInScript": true,
                    "PlayUrl": "https://www.yhdd.space/${address}",
                    "PlayUrlInJson": true
                },
                {
                    "name": "小嘿嘿",
                    "goto": "toolList",
                    "img": "img/heihei.png",
                    "url": "http://www.168888888888.top/type",
                    "ListType": "json",
                    "ListCss": "data",
                    "hrefCss": "TypeId",
                    "textCss": "Title",
                    "ChildListUrl": "http://www.168888888888.top/type/${href}?page=${pageIndex}",
                    "ChildResultType": "json",
                    "ChildListCss": "data",
                    "ChildAddressCss": "PlayerUrl",
                    "ChildTitleCss": "Title",
                    "ChildImgCss": "ImgUrl",
                    "PlayUrlType": 0,
                    "PlayUrlInScript": false
                },
                {
                    "name": "香蕉",
                    "goto": "toolList",
                    "img": "img/xiangjiao.png",
                    "url": "https://android.fuliapps.com/vod/listing-0-0-0-0-0-0-0-0-0-1",
                    "ListType": "json",
                    "ListCss": "data.categories",
                    "hrefCss": "cateid",
                    "textCss": "catename",
                    "ChildListUrl": "https://android.fuliapps.com/vod/listing-${href}-0-0-0-0-0-0-0-0-${pageIndex}",
                    "ChildResultType": "json",
                    "ChildListCss": "data.vodrows",
                    "ChildAddressCss": "play_url",
                    "ChildTitleCss": "title",
                    "ChildImgCss": "coverpic",
                    "PlayUrlType": 1,
                    "PlayUrlInScript": false,
                    "PlayUrl": "https://android.fuliapps.com${address}",
                    "ScriptIndex": "data.httpurl",
                    "ScriptIndex2": "data.httpurl_preview"
                },
                {
                    "name": "猫咪",
                    "goto": "toolList",
                    "img": "img/maomi.png",
                    "url": [
                        {
                            "cateid": "短视频",
                            "catename": "短视频"
                        },
                        {
                            "cateid": "国产精品",
                            "catename": "国产精品"
                        },
                        {
                            "cateid": "女优专辑",
                            "catename": "女优专辑"
                        },
                        {
                            "cateid": "中文字幕",
                            "catename": "中文字幕"
                        },
                        {
                            "cateid": "亚洲无码",
                            "catename": "亚洲无码"
                        },
                        {
                            "cateid": "欧美精品",
                            "catename": "欧美精品"
                        },
                        {
                            "cateid": "成人动漫",
                            "catename": "成人动漫"
                        }
                    ],
                    "ListType": "bar",
                    "hrefCss": "cateid",
                    "textCss": "catename",
                    "ChildListUrl": "https://www.966uy.com/shipin/list-${href}-${pageIndex}.html",
                    "ChildResultType": "text",
                    "ChildListCss": "#grid .shown",
                    "ChildAddressCss": "a",
                    "ChildTitleCss": "a p",
                    "ChildImgCss": "a img",
                    "PlayUrlType": 1,
                    "PlayUrlInScript": true,
                    "PlayUrl": "https://www.966uy.com${address}",
                    "PlayUrlInUrl": true,
                    "ScriptIndex": ".app_hide input",
                    "ScriptStartWith": "value"
                },
                {
                    "name": "色虎",
                    "goto": "toolList",
                    "img": "img/ic_sehu.png",
                    "url": [
                        {
                            "cateid": 1,
                            "catename": "国产精品"
                        },
                        {
                            "cateid": 2,
                            "catename": "日韩情色"
                        },
                        {
                            "cateid": 3,
                            "catename": "欧美性爱"
                        },
                        {
                            "cateid": 4,
                            "catename": "动漫伦理"
                        }
                    ],
                    "ListType": "bar",
                    "hrefCss": "cateid",
                    "textCss": "catename",
                    "ChildResultType": "json",
                    "ChildListUrl": "https://saohu19.com/v1/api/apiFetchMovieData?classifyid=${href}&type=0&pagesize=40&page=${pageIndex}",
                    "ChildListCss": "data.list",
                    "ChildAddressCss": "playurl",
                    "ChildTitleCss": "title",
                    "ChildImgCss": "cover",
                    "PlayUrlType": 0
                },
                {
                    "name": "蝌蚪窝",
                    "goto": "toolList",
                    "img": "img/icon_kdw.png",
                    "url": "http://www.caca033.com/categories/",
                    "ListType": "text",
                    "ListCss": ".list-categories .item",
                    "hrefCss": null,
                    "textCss": ".title",
                    "ChildResultType": "text",
                    "ChildListUrl": "${href}?mode=async&function=get_block&block_id=list_videos_common_videos_list&sort_by=post_date&from=${pageIndex}&_=1570509398958",
                    "ChildListCss": ".list-videos .item",
                    "ChildAddressCss": "a",
                    "ChildTitleCss": ".title",
                    "ChildImgCss": "img",
                    "PlayUrlType": 1,
                    "PlayUrlInUrl": true,
                    "PlayUrl": "${address}",
                    "ScriptIndex": "a[data-attach-session=\"PHPSESSID\"]",
                    "ScriptStartWith": "href"
                },
                {
                    "name": "AV视频",
                    "goto": "toolList",
                    "img": "img/av.png",
                    "baseUrl": "http://www.czhhdj.com/",
                    "url": [
                        {
                            "cateid": 1,
                            "catename": "中文字幕"
                        },
                        {
                            "cateid": 2,
                            "catename": "国产精品"
                        },
                        {
                            "cateid": 28,
                            "catename": "欧美在线"
                        },
                        {
                            "cateid": 29,
                            "catename": "日韩有码"
                        }
                    ],
                    "ListType": "bar",
                    "hrefCss": "cateid",
                    "textCss": "catename",
                    "ChildResultType": "text",
                    "ChildListUrl": "http://www.czhhdj.com/ai3p/666-666-${href}-${pageIndex}.html",
                    "ChildListCss": ".video-item",
                    "ChildAddressCss": "a",
                    "ChildTitleCss": ".title",
                    "ChildImgCss": "img",
                    "PlayUrlType": 1,
                    "PlayUrl": "http://www.czhhdj.com/${address}",
                    "PlayUrlInUrl": true,
                    "ScriptIndex": "iframe",
                    "ScriptStartWith": "src",
                    "NextPlayUrl": true,
                    "NextInScript": true,
                    "NextUrlKey": "videoUrl"
                },
                {
                    "name": "QQ视频",
                    "goto": "toolList",
                    "img": "img/QQ.png",
                    "baseUrl": "https://www.qqqda.com/",
                    "url": [
                        {
                            "cateid": 23,
                            "catename": "日韩"
                        },
                        {
                            "cateid": 24,
                            "catename": "欧美"
                        },
                        {
                            "cateid": 25,
                            "catename": "三级"
                        },
                        {
                            "cateid": 26,
                            "catename": "动漫"
                        },
                        {
                            "cateid": 1,
                            "catename": "乱伦"
                        },
                        {
                            "cateid": 2,
                            "catename": "出轨"
                        },
                        {
                            "cateid": 3,
                            "catename": "制服"
                        },
                        {
                            "cateid": 4,
                            "catename": "自慰"
                        },
                        {
                            "cateid": 5,
                            "catename": "偷拍"
                        },
                        {
                            "cateid": 20,
                            "catename": "自拍"
                        },
                        {
                            "cateid": 21,
                            "catename": "国产"
                        }
                    ],
                    "ListType": "bar",
                    "hrefCss": "cateid",
                    "textCss": "catename",
                    "ChildResultType": "text",
                    "ChildListUrl": "https://www.qqqda.com/index.php/vod/type/id/${href}/page/${pageIndex}.html",
                    "ChildListCss": ".img-list li",
                    "ChildAddressCss": "a",
                    "ChildTitleCss": "h2",
                    "ChildImgCss": "img",
                    "PlayUrlType": 1,
                    "PlayUrl": "https://www.qqqda.com/${address}",
                    "PlayUrlInScript": true,
                    "PlayUrlInJson": true
                },
                {
                    "name": "最大AV",
                    "goto": "toolList",
                    "img": "img/zuida.png",
                    "baseUrl": "https://www.zdasp.top/",
                    "url": [
                        {
                            "cateid": 21,
                            "catename": "女神学生"
                        },
                        {
                            "cateid": 22,
                            "catename": "美女直播"
                        },
                        {
                            "cateid": 23,
                            "catename": "人妻系列"
                        },
                        {
                            "cateid": 24,
                            "catename": "强奸乱伦"
                        },
                        {
                            "cateid": 25,
                            "catename": "自拍偷拍"
                        },
                        {
                            "cateid": 26,
                            "catename": "制服诱惑"
                        },
                        {
                            "cateid": 27,
                            "catename": "巨乳系列"
                        },
                        {
                            "cateid": 28,
                            "catename": "自慰系列"
                        },
                        {
                            "cateid": 29,
                            "catename": "国产视频"
                        },
                        {
                            "cateid": 30,
                            "catename": "无码视频"
                        },
                        {
                            "cateid": 31,
                            "catename": "有码视频"
                        },
                        {
                            "cateid": 32,
                            "catename": "中文字幕"
                        },
                        {
                            "cateid": 33,
                            "catename": "日韩精品"
                        },
                        {
                            "cateid": 34,
                            "catename": "欧美精品"
                        },
                        {
                            "cateid": 35,
                            "catename": "动漫精品"
                        },
                        {
                            "cateid": 36,
                            "catename": "三级伦理"
                        }
                    ],
                    "ListType": "bar",
                    "hrefCss": "cateid",
                    "textCss": "catename",
                    "ChildResultType": "text",
                    "ChildListUrl": "https://www.zdasp.top/index.php/vod/type/id/${href}/page/${pageIndex}.html",
                    "ChildListCss": ".videos li",
                    "ChildAddressCss": "a",
                    "ChildTitleCss": ".video-title",
                    "ChildImgCss": "img",
                    "PlayUrlType": 1,
                    "PlayUrl": "https://www.zdasp.top/${address}",
                    "PlayUrlInScript": true,
                    "PlayUrlInJson": true
                },
                {
                    "name": "苹果",
                    "goto": "toolList",
                    "img": "img/pingguo.png",
                    "baseUrl": "https://www.pgxdy.xyz/",
                    "url": [
                        {
                            "cateid": 20,
                            "catename": "韩国美眉"
                        },
                        {
                            "cateid": 21,
                            "catename": "骑兵有码"
                        },
                        {
                            "cateid": 22,
                            "catename": "日韩主播"
                        },
                        {
                            "cateid": 23,
                            "catename": "国产偷拍"
                        },
                        {
                            "cateid": 24,
                            "catename": "欧美激情"
                        },
                        {
                            "cateid": 25,
                            "catename": "步兵无码"
                        },
                        {
                            "cateid": 26,
                            "catename": "金发幼齿"
                        },
                        {
                            "cateid": 27,
                            "catename": "三级伦理"
                        },
                        {
                            "cateid": 28,
                            "catename": "岛国中文"
                        },
                        {
                            "cateid": 29,
                            "catename": "岛国无码"
                        }
                    ],
                    "ListType": "bar",
                    "hrefCss": "cateid",
                    "textCss": "catename",
                    "ChildResultType": "text",
                    "ChildListUrl": "https://www.pgxdy.xyz/index.php/vod/type/id/${href}/page/${pageIndex}.html",
                    "ChildListCss": ".pic li",
                    "ChildAddressCss": "a",
                    "ChildTitleCss": "a",
                    "ChildImgCss": "img",
                    "PlayUrlType": 1,
                    "PlayUrl": "https://www.pgxdy.xyz/${address}",
                    "PlayUrlInUrl": true,
                    "ScriptIndex": ".playurl2 a",
                    "ScriptStartWith": "href",
                    "NextPlayUrl": true,
                    "NextInScript": true,
                    "NextUrlKey": "player_data",
                    "NextUrlBeanKey": "url"
                },
                {
                    "name": "那种",
                    "goto": "toolList",
                    "img": "img/nazong.png",
                    "baseUrl": "https://www.nzxsp.top/",
                    "url": [
                        {
                            "cateid": 1,
                            "catename": "人妻熟女"
                        },
                        {
                            "cateid": 2,
                            "catename": "强奸乱伦"
                        },
                        {
                            "cateid": 3,
                            "catename": "制服师生"
                        },
                        {
                            "cateid": 4,
                            "catename": "网红主播"
                        },
                        {
                            "cateid": 20,
                            "catename": "偷拍自拍"
                        },
                        {
                            "cateid": 21,
                            "catename": "自慰自淫"
                        },
                        {
                            "cateid": 22,
                            "catename": "国产专区"
                        },
                        {
                            "cateid": 23,
                            "catename": "虐待同性"
                        },
                        {
                            "cateid": 24,
                            "catename": "日韩精品"
                        },
                        {
                            "cateid": 25,
                            "catename": "欧美性爱"
                        },
                        {
                            "cateid": 26,
                            "catename": "卡通动漫"
                        },
                        {
                            "cateid": 27,
                            "catename": "三级伦理"
                        }
                    ],
                    "ListType": "bar",
                    "hrefCss": "cateid",
                    "textCss": "catename",
                    "ChildResultType": "text",
                    "ChildListUrl": "https://www.nzxsp.top/index.php/vod/type/id/${href}/page/${pageIndex}.html",
                    "ChildListCss": ".list li.item",
                    "ChildAddressCss": "a",
                    "ChildTitleCss": ".s1",
                    "ChildImgCss": "img",
                    "PlayUrlType": 1,
                    "PlayUrl": "https://www.nzxsp.top/${address}",
                    "PlayUrlInScript": true,
                    "PlayUrlInJson": true
                },
                {
                    "name": "AV大战",
                    "goto": "toolList",
                    "img": "img/dazhan.png",
                    "baseUrl": "https://www.avdz2.xyz/",
                    "url": [
                        {
                            "cateid": 20,
                            "catename": "偷拍自拍"
                        },
                        {
                            "cateid": 21,
                            "catename": "强奸乱伦"
                        },
                        {
                            "cateid": 22,
                            "catename": "人妻熟女"
                        },
                        {
                            "cateid": 23,
                            "catename": "制服情景"
                        },
                        {
                            "cateid": 24,
                            "catename": "国产情色"
                        },
                        {
                            "cateid": 25,
                            "catename": "亚洲精品"
                        },
                        {
                            "cateid": 26,
                            "catename": "卡通动漫"
                        },
                        {
                            "cateid": 27,
                            "catename": "欧美性爱"
                        },
                        {
                            "cateid": 28,
                            "catename": "精品三级"
                        }
                    ],
                    "ListType": "bar",
                    "hrefCss": "cateid",
                    "textCss": "catename",
                    "ChildResultType": "text",
                    "ChildListUrl": "https://www.avdz2.xyz/index.php/vod/type/id/${href}/page/${pageIndex}.html",
                    "ChildListCss": ".main li",
                    "ChildAddressCss": "a",
                    "ChildTitleCss": ".pname",
                    "ChildImgCss": "img",
                    "PlayUrlType": 1,
                    "PlayUrl": "https://www.avdz2.xyz/${address}",
                    "PlayUrlInScript": true,
                    "PlayUrlInJson": true
                },
                {
                    "name": "少林寺",
                    "goto": "toolList",
                    "img": "img/sls.png",
                    "baseUrl": "https://www.slszx.top/",
                    "url": [
                        {
                            "cateid": 20,
                            "catename": "主播网红"
                        },
                        {
                            "cateid": 21,
                            "catename": "偷拍自拍"
                        },
                        {
                            "cateid": 22,
                            "catename": "人妻熟女"
                        },
                        {
                            "cateid": 23,
                            "catename": "强奸乱伦"
                        },
                        {
                            "cateid": 24,
                            "catename": "制服丝袜"
                        },
                        {
                            "cateid": 25,
                            "catename": "自慰变态"
                        },
                        {
                            "cateid": 26,
                            "catename": "国产精品"
                        },
                        {
                            "cateid": 27,
                            "catename": "亚洲情色"
                        },
                        {
                            "cateid": 28,
                            "catename": "卡通动漫"
                        },
                        {
                            "cateid": 29,
                            "catename": "三级伦理"
                        },
                        {
                            "cateid": 30,
                            "catename": "欧美精品"
                        }
                    ],
                    "ListType": "bar",
                    "hrefCss": "cateid",
                    "textCss": "catename",
                    "ChildResultType": "text",
                    "ChildListUrl": "https://www.slszx.top/index.php/vod/type/id/${href}/page/${pageIndex}.html",
                    "ChildListCss": ".row-boder .well",
                    "ChildAddressCss": "a",
                    "ChildTitleCss": ".video-title",
                    "ChildImgCss": "img",
                    "PlayUrlType": 1,
                    "PlayUrl": "https://www.slszx.top/${address}",
                    "PlayUrlInScript": true,
                    "PlayUrlInJson": true
                },
                {
                    "name": "乐开花",
                    "goto": "toolList",
                    "img": "img/lkh.png",
                    "baseUrl": "https://www.lkhsp.icu/",
                    "url": [
                        {
                            "cateid": 20,
                            "catename": "偷拍自拍"
                        },
                        {
                            "cateid": 21,
                            "catename": "人妻熟女"
                        },
                        {
                            "cateid": 22,
                            "catename": "强奸乱伦"
                        },
                        {
                            "cateid": 23,
                            "catename": "制服丝袜"
                        },
                        {
                            "cateid": 24,
                            "catename": "主播名人"
                        },
                        {
                            "cateid": 25,
                            "catename": "自慰同性"
                        },
                        {
                            "cateid": 26,
                            "catename": "变态SM"
                        },
                        {
                            "cateid": 27,
                            "catename": "国产精品"
                        },
                        {
                            "cateid": 28,
                            "catename": "日韩情色"
                        },
                        {
                            "cateid": 29,
                            "catename": "欧美情色"
                        },
                        {
                            "cateid": 30,
                            "catename": "卡通动漫"
                        },
                        {
                            "cateid": 31,
                            "catename": "三级精品"
                        }
                    ],
                    "ListType": "bar",
                    "hrefCss": "cateid",
                    "textCss": "catename",
                    "ChildResultType": "text",
                    "ChildListUrl": "https://www.lkhsp.icu/index.php/vod/type/id/${href}/page/${pageIndex}.html",
                    "ChildListCss": ".img-list li",
                    "ChildAddressCss": "a",
                    "ChildTitleCss": "h2",
                    "ChildImgCss": "img",
                    "PlayUrlType": 1,
                    "PlayUrl": "https://www.lkhsp.icu/${address}",
                    "PlayUrlInScript": true,
                    "PlayUrlInJson": true
                },
                {
                    "name": "大波妇",
                    "goto": "toolList",
                    "img": "img/dpf.png",
                    "baseUrl": "https://www.dabofu.xyz/",
                    "url": [
                        {
                            "cateid": 20,
                            "catename": "亚洲情色"
                        },
                        {
                            "cateid": 21,
                            "catename": "制服师生"
                        },
                        {
                            "cateid": 22,
                            "catename": "卡通动漫"
                        },
                        {
                            "cateid": 24,
                            "catename": "强奸乱伦"
                        },
                        {
                            "cateid": 26,
                            "catename": "中文字幕"
                        },
                        {
                            "cateid": 25,
                            "catename": "偷拍自拍"
                        },
                        {
                            "cateid": 27,
                            "catename": "欧美性爱"
                        },
                        {
                            "cateid": 28,
                            "catename": "人妻熟女"
                        },
                        {
                            "cateid": 29,
                            "catename": "无码专区"
                        },
                        {
                            "cateid": 23,
                            "catename": "三级伦理"
                        }
                    ],
                    "ListType": "bar",
                    "hrefCss": "cateid",
                    "textCss": "catename",
                    "ChildResultType": "text",
                    "ChildListUrl": "https://www.dabofu.xyz/index.php/vod/type/id/${href}/page/${pageIndex}.html",
                    "ChildListCss": ".row .video-card",
                    "ChildAddressCss": "a",
                    "ChildTitleCss": ".video-title a",
                    "ChildImgCss": "img",
                    "PlayUrlType": 1,
                    "PlayUrl": "https://www.dabofu.xyz/${address}",
                    "PlayUrlInScript": true,
                    "PlayUrlInJson": true
                },
                {
                    "name": "无本色",
                    "goto": "toolList",
                    "img": "img/wbs.png",
                    "baseUrl": "https://www.wubense.xyz/",
                    "url": [
                        {
                            "cateid": 22,
                            "catename": "无码专区"
                        },
                        {
                            "cateid": 23,
                            "catename": "中文字幕"
                        },
                        {
                            "cateid": 24,
                            "catename": "强奸乱伦"
                        },
                        {
                            "cateid": 25,
                            "catename": "人妻熟女"
                        },
                        {
                            "cateid": 26,
                            "catename": "亚洲情色"
                        },
                        {
                            "cateid": 27,
                            "catename": "制服丝袜"
                        },
                        {
                            "cateid": 28,
                            "catename": "SM捆绑"
                        },
                        {
                            "cateid": 29,
                            "catename": "自淫系列"
                        },
                        {
                            "cateid": 30,
                            "catename": "三级伦理"
                        }
                    ],
                    "ListType": "bar",
                    "hrefCss": "cateid",
                    "textCss": "catename",
                    "ChildResultType": "text",
                    "ChildListUrl": "https://www.wubense.xyz/index.php/vod/type/id/${href}/page/${pageIndex}.html",
                    "ChildListCss": ".fed-list-info .fed-list-item",
                    "ChildAddressCss": "a",
                    "ChildTitleCss": ".fed-list-title",
                    "ChildImgCss": "a",
                    "PlayUrlType": 1,
                    "PlayUrl": "https://www.wubense.xyz/${address}",
                    "PlayUrlInScript": true,
                    "PlayUrlInJson": true
                },
                {
                    "name": "芭乐草",
                    "goto": "toolList",
                    "img": "img/blc.png",
                    "baseUrl": "https://www.balecao.icu/",
                    "url": [
                        {
                            "cateid": 21,
                            "catename": "强奸乱伦"
                        },
                        {
                            "cateid": 22,
                            "catename": "偷拍自拍"
                        },
                        {
                            "cateid": 23,
                            "catename": "风骚寡妇"
                        },
                        {
                            "cateid": 24,
                            "catename": "制服师生"
                        },
                        {
                            "cateid": 25,
                            "catename": "欧美性爱"
                        },
                        {
                            "cateid": 26,
                            "catename": "JAV高清"
                        },
                        {
                            "cateid": 27,
                            "catename": "VR虚拟"
                        },
                        {
                            "cateid": 28,
                            "catename": "人兽"
                        },
                        {
                            "cateid": 29,
                            "catename": "人妖"
                        },
                        {
                            "cateid": 30,
                            "catename": "男同"
                        },
                        {
                            "cateid": 31,
                            "catename": "女同"
                        },
                        {
                            "cateid": 32,
                            "catename": "动漫"
                        },
                        {
                            "cateid": 33,
                            "catename": "三级伦理"
                        }
                    ],
                    "ListType": "bar",
                    "hrefCss": "cateid",
                    "textCss": "catename",
                    "ChildResultType": "text",
                    "ChildListUrl": "https://www.balecao.icu/index.php/vod/type/id/${href}/page/${pageIndex}.html",
                    "ChildListCss": ".list li",
                    "ChildAddressCss": "a",
                    "ChildTitleCss": "h3 span",
                    "ChildImgCss": "img",
                    "PlayUrlType": 1,
                    "PlayUrl": "https://www.balecao.icu/${address}",
                    "PlayUrlInScript": true,
                    "PlayUrlInJson": true
                },
                {
                    "name": "色松鼠",
                    "goto": "toolList",
                    "img": "img/sss.png",
                    "baseUrl": "https://www.sesongshu.top/",
                    "url": [
                        {
                            "cateid": 20,
                            "catename": "国产精品"
                        },
                        {
                            "cateid": 21,
                            "catename": "精品三级"
                        },
                        {
                            "cateid": 22,
                            "catename": "主播大秀"
                        },
                        {
                            "cateid": 23,
                            "catename": "抖阴视频"
                        },
                        {
                            "cateid": 24,
                            "catename": "女神学生"
                        },
                        {
                            "cateid": 25,
                            "catename": "美熟少妇"
                        },
                        {
                            "cateid": 26,
                            "catename": "娇妻素人"
                        },
                        {
                            "cateid": 27,
                            "catename": "空姐模特"
                        },
                        {
                            "cateid": 28,
                            "catename": "国产乱伦"
                        },
                        {
                            "cateid": 29,
                            "catename": "自慰群交"
                        },
                        {
                            "cateid": 30,
                            "catename": "野合车震"
                        },
                        {
                            "cateid": 31,
                            "catename": "职场同事"
                        }
                    ],
                    "ListType": "bar",
                    "hrefCss": "cateid",
                    "textCss": "catename",
                    "ChildResultType": "text",
                    "ChildListUrl": "https://www.sesongshu.top//index.php/vod/type/id/${href}/page/${pageIndex}.html",
                    "ChildListCss": ".stui-vodlist li",
                    "ChildAddressCss": "a",
                    "ChildTitleCss": ".stui-vodlist__title a",
                    "ChildImgCss": "a",
                    "PlayUrlType": 1,
                    "PlayUrl": "https://www.sesongshu.top//${address}",
                    "PlayUrlInScript": true,
                    "PlayUrlInJson": true
                },
                {
                    "name": "无色",
                    "goto": "toolList",
                    "img": "img/ws.png",
                    "baseUrl": "https://www.wusefuli.xyz/",
                    "url": [
                        {
                            "cateid": 20,
                            "catename": "无码中文"
                        },
                        {
                            "cateid": 20,
                            "catename": "强奸中文"
                        },
                        {
                            "cateid": 20,
                            "catename": "巨乳中文"
                        },
                        {
                            "cateid": 20,
                            "catename": "乱伦中文"
                        },
                        {
                            "cateid": 20,
                            "catename": "制服中文"
                        },
                        {
                            "cateid": 20,
                            "catename": "人妻中文"
                        },
                        {
                            "cateid": 20,
                            "catename": "调教中文"
                        },
                        {
                            "cateid": 20,
                            "catename": "出轨中文"
                        },
                        {
                            "cateid": 20,
                            "catename": "三级伦理"
                        }
                    ],
                    "ListType": "bar",
                    "hrefCss": "cateid",
                    "textCss": "catename",
                    "ChildResultType": "text",
                    "ChildListUrl": "https://www.wusefuli.xyz/index.php/vod/type/id/${href}/page/${pageIndex}.html",
                    "ChildListCss": ".m-list li",
                    "ChildAddressCss": "a",
                    "ChildTitleCss": "h3 a",
                    "ChildImgCss": "img",
                    "PlayUrlType": 1,
                    "PlayUrl": "https://www.wusefuli.xyz/${address}",
                    "PlayUrlInScript": true,
                    "PlayUrlInJson": true
                }
            ]
        },
        {
            "name": "磁力",
			"children":[
				{
					"name": "搜索",
                    "goto": "searchCili",
                    "img": "img/search.svg",
                    "hidden": true
				}
			]
        },
        {
            "name": "小说",
			"children":[
				{
					"name": "搜索",
                    "goto": "searchBook",
                    "img": "img/search.svg",
                    "hidden": true
				}]
        },
        {
            "name": "图文"
        }
    ]
}