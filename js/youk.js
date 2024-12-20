var rule = {
    title: '优酷',
    host: 'https://www.%79%6f%75%6b%75.com',
    homeUrl: '',
    searchUrl: 'https://search.%79%6f%75%6b%75.com/api/search?pg=fypage&keyword=**',
    searchable: 2,
    quickSearch: 0,
    filterable: 1,
    multi: 1,
    url: '/category/data?optionRefresh=1&pageNo=fypage&params=fyfilter',
    filter_url: '{{fl}}',
    filter: { "电视剧":[
    { "key": "main_area", "name": "全部地区","value": [{ "n": "全部地区", "v": "" }, { "n": "内地剧", "v": "中国内地" }, { "n": "港剧", "v": "中国香港" }, { "n": "台剧", "v": "中国台湾" }, { "n": "韩剧", "v": "韩国" }, { "n": "美剧", "v": "美国" }, { "n": "英剧", "v": "英国" }, { "n": "日剧", "v": "日本" }, { "n": "泰剧", "v": "泰国" }] }, 
  { "key": "sort", "name": "综合排序", "value": [{ "n": "综合排序", "v": "" }, { "n": "热度最高", "v": "7" }, { "n": "最新上线", "v": "1" }, { "n": "最好评", "v": "3" }, { "n": "最多播放", "v": "2" }] }
    ], 
    
    "电影": [
        { "key": "main_area", "name": "全部地区", "value": [{ "n": "全部地区", "v": "" }, { "n": "内地", "v": "中国内地" }, { "n": "中国香港", "v": "中国香港" }, { "n": "中国台湾", "v": "中国台湾" }, { "n": "美国", "v": "美国" }, { "n": "印度", "v": "印度" }, { "n": "日韩", "v": "韩国,日本" }, { "n": "泰国", "v": "泰国" }, { "n": "欧洲", "v": "欧洲" }] }, 
        { "key": "tags", "name": "全部类型", "value": [{ "n": "全部类型", "v": "" }, { "n": "喜剧", "v": "喜剧,搞笑" }, { "n": "动作", "v": "动作" }, { "n": "怪兽", "v": "怪兽" }, { "n": "战争", "v": "战争" }, { "n": "爱情", "v": "爱情" }, { "n": "悬疑", "v": "悬疑" }, { "n": "武侠", "v": "武侠" }, { "n": "奇幻", "v": "奇幻" }, { "n": "科幻", "v": "科幻" }, { "n": "冒险", "v": "冒险" }, { "n": "警匪", "v": "警匪" }, { "n": "动画", "v": "动画" }, { "n": "惊悚", "v": "惊悚" }, { "n": "犯罪", "v": "犯罪" }, { "n": "恐怖", "v": "恐怖" }, { "n": "剧情", "v": "剧情" }, { "n": "历史", "v": "历史" }, { "n": "纪录片", "v": "纪录片" }, { "n": "传记", "v": "传记" }, { "n": "歌舞", "v": "歌舞" }, { "n": "短片", "v": "短片" }, { "n": "其他", "v": "其他" }] },
 ], 
        
        "综艺": [
        { "key": "main_area", "name": "全部地区", "value": [{ "n": "全部地区", "v": "" }, { "n": "内地", "v": "中国内地" }, { "n": "中国台湾", "v": "中国台湾" }, { "n": "美国", "v": "美国" }, { "n": "英国", "v": "英国" }] }, 
        { "key": "tags", "name": "全部类型", "value": [{ "n": "全部类型", "v": "" }, { "n": "偶像", "v": "偶像" }, { "n": "舞蹈", "v": "舞蹈" }, { "n": "音乐", "v": "音乐" }, { "n": "情感", "v": "情感" }, { "n": "喜剧", "v": "喜剧,搞笑" }, { "n": "体育", "v": "体育" }, { "n": "游戏", "v": "游戏" }, { "n": "相声", "v": "相声" }, { "n": "婚恋", "v": "婚恋" }, { "n": "时尚", "v": "时尚" }, { "n": "晚会", "v": "晚会" }, { "n": "明星访谈", "v": "明星访谈" }, { "n": "亲子", "v": "亲子" }, { "n": "生活", "v": "生活" }, { "n": "文化", "v": "文化" }, { "n": "美食", "v": "美食" }, { "n": "旅游", "v": "旅游" }, { "n": "益智", "v": "益智" }] }, 
        { "key": "year", "name": "全部年份", "value": [{ "n": "全部年份", "v": "" }, { 'n': '2023', 'v': '2023' }, { 'n': '2022', 'v': '2022' }, { "n": "2021", "v": "2021" }, { "n": "2020", "v": "2020" }, { "n": "2019", "v": "2019" }, { "n": "2018", "v": "2018" }, { "n": "2017", "v": "2017" }, { "n": "2016", "v": "2016" }, { "n": "2015", "v": "2015" }, { "n": "2014-2011", "v": "2011-2014" }, { "n": "更早", "v": "-2010" }] }, 
], 
        
        "动漫": [
        { "key": "sort", "name": "综合排序", "value": [{ "n": "综合排序", "v": "" }, { "n": "最多播放", "v": "2" }, { "n": "最好评", "v": "3" }, { "n": "最新上线", "v": "1" }] }, 
], 
        
        "少儿": [
        { "key": "main_area", "name": "全部地区", "value": [{ "n": "全部地区", "v": "" }, { "n": "中国", "v": "中国,香港,台湾" }, { "n": "美国", "v": "美国" }, { "n": "英国", "v": "英国" }, { "n": "其他国家", "v": "其他" }] }, 
        { "key": "show_label_type", "name": "全部类型", "value": [{ "n": "全部类型", "v": "" }, { "n": "动画", "v": "动画" }, { "n": "儿歌", "v": "儿歌" }, { "n": "玩具", "v": "玩具" }, { "n": "动画电影", "v": "电影" }, { "n": "绘本故事", "v": "绘本故事" }, { "n": "真人", "v": "真人" }, { "n": "少儿综艺", "v": "少儿综艺" }, { "n": "亲子", "v": "亲子" }, { "n": "探索纪实", "v": "探索纪实" }, { "n": "音频", "v": "音频" }] }, 
         { "key": "sort", "name": "综合排序", "value": [{ "n": "综合排序", "v": "" }, { "n": "最新上线", "v": "1" }, { "n": "最多播放", "v": "2" }, { "n": "最多评论", "v": "4" }, { "n": "最多收藏", "v": "5" }] }], 
       
        "纪录片": [
        { "key": "tags", "name": "全部类型", "value": [{ "n": "全部类型", "v": "" }, { "n": "美食", "v": "美食" }, { "n": "自然", "v": "自然" }, { "n": "历史", "v": "历史" }, { "n": "探险", "v": "探险" }, { "n": "军事", "v": "军事" }, { "n": "人物", "v": "人物" }, { "n": "宇宙", "v": "宇宙" }, { "n": "刑侦", "v": "刑侦" }, { "n": "社会", "v": "社会" }, { "n": "科技", "v": "科技" }, { "n": "旅游", "v": "旅游" }] }, 
        { "key": "sort", "name": "热度最高", "value": [{ "n": "热度最高", "v": "" }, { "n": "综合排序", "v": "0" }, { "n": "最新上线", "v": "1" }, { "n": "最好评", "v": "3" }, { "n": "最多收藏", "v": "5" }] }], 
        
        "文化": [
            { "key": "tags", "name": "全部类型", "value": [{ "n": "全部类型", "v": "" }, { "n": "谈话", "v": "谈话" }, { "n": "脱口秀", "v": "脱口秀" }, { "n": "访谈", "v": "访谈" }, { "n": "讲座论坛", "v": "讲座论坛" }, { "n": "戏曲曲艺", "v": "戏曲,曲艺" }, { "n": "舞台剧", "v": "舞台剧" }, { "n": "文学", "v": "文学" }, { "n": "国学", "v": "国学" }, { "n": "艺术", "v": "艺术" }, { "n": "培训课程", "v": "培训课程" }, { "n": "有声书", "v": "有声书" }] }, 
            { "key": "people", "name": "文化大咖", "value": [{ "n": "文化大咖", "v": "" }, { "n": "窦文涛", "v": "窦文涛" }, { "n": "马未都", "v": "马未都" }, { "n": "白岩松", "v": "白岩松" }, { "n": "梅毅", "v": "梅毅" }, { "n": "陈鲁豫", "v": "陈鲁豫" }, { "n": "樊登", "v": "樊登" }, { "n": "罗振宇", "v": "罗振宇" }, { "n": "蒋方舟", "v": "蒋方舟" }, { "n": "其他", "v": "其他" }] }, 
            { "key": "year", "name": "全部年份", "value": [{ "n": "全部年份", "v": "" }, { 'n': '2023', 'v': '2023' }, { 'n': '2022', 'v': '2022' }, { "n": "2021", "v": "2021" }, { "n": "2020", "v": "2020" }, { "n": "2019", "v": "2019" }, { "n": "2018", "v": "2018" }, { "n": "2017", "v": "2017" }, { "n": "2016", "v": "2016" }, { "n": "2015", "v": "2015" }, { "n": "2014-2011", "v": "2011-2014" }, { "n": "更早", "v": "-2010" }] }, 
            { "key": "sort", "name": "热度最高", "value": [{ "n": "热度最高", "v": "" }, { "n": "综合排序", "v": "0" }, { "n": "最新上线", "v": "1" }, { "n": "最好评", "v": "3" }, { "n": "最多收藏", "v": "5" }] }], 
            
            "亲子": [
            { "key": "qinzi_genre", "name": "全部类型", "value": [{ "n": "全部类型", "v": "" }, { "n": "孕产", "v": "孕产" }, { "n": "育儿知识", "v": "育儿知识,育儿达人,育儿专家,爸爸育儿,隔代育儿,育儿明星" }, { "n": "好物种草", "v": "母婴用品,测评,母婴用品种草" }, { "n": "美食", "v": "儿童美食,辅食,孕期饮食" }, { "n": "手工DIY", "v": "手工diy" }, { "n": "教育观念", "v": "教育观念" }, { "n": "亲子综艺", "v": "亲子综艺" }, { "n": "亲子互动", "v": "亲子旅游,亲子游戏,亲子阅读,玩具,早教,启蒙" }, { "n": "萌娃", "v": "萌娃" }, { "n": "搞笑", "v": "搞笑" }, { "n": "美妆", "v": "美妆" }] }, 
          { "key": "sort", "name": "热度最高", "value": [{ "n": "热度最高", "v": "" }, { "n": "综合排序", "v": "0" }, { "n": "最新上线", "v": "1" }, { "n": "最多播放", "v": "2" }, { "n": "最多评论", "v": "3" }, { "n": "最多收藏", "v": "5" }] }], 
            
            "教育": [
                { "key": "tags", "name": "全部类型", "value": [{ "n": "全部类型", "v": "" }, { "n": "公开课", "v": "公开课" }, { "n": "名人名嘴", "v": "名人名嘴" }, { "n": "文化", "v": "文化" }, { "n": "艺术", "v": "艺术" }, { "n": "伦理社会", "v": "伦理社会" }, { "n": "理工", "v": "理工" }, { "n": "历史", "v": "历史" }, { "n": "心理学", "v": "心理学" }, { "n": "经济", "v": "经济" }, { "n": "管理学", "v": "管理学" }, { "n": "外语", "v": "外语" }, { "n": "法律", "v": "法律" }, { "n": "计算机", "v": "计算机" }, { "n": "哲学", "v": "哲学" }, { "n": "职业培训", "v": "职业培训" }, { "n": "家庭教育", "v": "家庭教育" }] }, 
                { "key": "company", "name": "全部出品", "value": [{ "n": "全部出品", "v": "" }, { "n": "TED", "v": "ted" }, { "n": "耶鲁大学", "v": "耶鲁大学" }, { "n": "哈佛大学", "v": "哈佛大学" }, { "n": "斯坦福大学", "v": "斯坦福大学" }, { "n": "麻省理工学院", "v": "麻省理工学院" }] }, 
                { "key": "pay_type", "name": "全部节目", "value": [{ "n": "全部节目", "v": "" }, { "n": "免费", "v": "0" }, { "n": "付费", "v": "1" }, { "n": "VIP", "v": "2" }] }, 
                { "key": "sort", "name": "综合排序", "value": [{ "n": "综合排序", "v": "" }, { "n": "最多播放", "v": "2" }, { "n": "最多收藏", "v": "5" }, { "n": "最好评", "v": "3" }, { "n": "最新上线", "v": "1" }] }], 
                
                "搞笑": [
                { "key": "division", "name": "全部专区", "value": [{ "n": "全部专区", "v": "" }, { "n": "1080P", "v": "3" }, { "n": "独播", "v": "6" }, { "n": "免费", "v": "5" }] }, 
                { "key": "sort", "name": "综合排序", "value": [{ "n": "综合排序", "v": "" }, { "n": "最多播放", "v": "2" }, { "n": "最好评", "v": "3" }, { "n": "最新上线", "v": "1" }] }], 
                
                "生活": [
                { "key": "division", "name": "全部专区", "value": [{ "n": "全部专区", "v": "" }, { "n": "1080P", "v": "3" }, { "n": "独播", "v": "6" }, { "n": "VIP", "v": "4" }, { "n": "免费", "v": "5" }] }, 
                { "key": "sort", "name": "综合排序", "value": [{ "n": "综合排序", "v": "" }, { "n": "最多播放", "v": "2" }, { "n": "最好评", "v": "3" }, { "n": "最新上线", "v": "1" }] }], 
                
                "体育": [
                    { "key": "division", "name": "全部专区", "value": [{ "n": "全部专区", "v": "" }, { "n": "1080P", "v": "3" }, { "n": "独播", "v": "6" }, { "n": "VIP", "v": "4" }, { "n": "免费", "v": "5" }] }, 
                    { "key": "tags", "name": "全部类型", "value": [{ "n": "全部类型", "v": "" }, { "n": "篮球", "v": "篮球" }, { "n": "足球", "v": "足球" }, { "n": "台球", "v": "台球" }, { "n": "CBA", "v": "CBA" }, { "n": "钓鱼", "v": "钓鱼" }] }, 
                    { "key": "sort", "name": "综合排序", "value": [{ "n": "综合排序", "v": "" }, { "n": "最多播放", "v": "2" }, { "n": "最好评", "v": "3" }, { "n": "最新上线", "v": "1" }] }], 
                    
                    "音乐": [
                    { "key": "division", "name": "全部专区", "value": [{ "n": "全部专区", "v": "" }, { "n": "1080P", "v": "3" }, { "n": "独播", "v": "6" }, { "n": "免费", "v": "5" }] }, 
                    { "key": "main_area", "name": "全部地区", "value": [{ "n": "全部地区", "v": "" }, { "n": "中国", "v": "中国" }, { "n": "中国台湾", "v": "中国台湾" }, { "n": "中国香港", "v": "中国香港" }, { "n": "美国", "v": "美国" }, { "n": "其他", "v": "其他" }] }, 
                    { "key": "music_show_type", "name": "全部类型", "value": [{ "n": "全部类型", "v": "" }, { "n": "演唱会", "v": "演唱会" }, { "n": "live现场", "v": "live现场" }, { "n": "颁奖典礼", "v": "颁奖典礼" }, { "n": "舞蹈", "v": "舞蹈" }, { "n": "影视原声", "v": "影视原声" }, { "n": "音乐达人", "v": "音乐达人" }, { "n": "音乐教学", "v": "音乐教学" }, { "n": "音乐纪录片", "v": "音乐纪录片" }, { "n": "音乐mv", "v": "音乐mv" }, { "n": "音乐自制", "v": "音乐自制" }] }, 
                    { "key": "sort", "name": "综合排序", "value": [{ "n": "综合排序", "v": "" }, { "n": "最多播放", "v": "2" }, { "n": "最好评", "v": "3" }, { "n": "最新上线", "v": "1" }] }], 
                 
                 
                    "游戏": [
                        { "key": "division", "name": "全部专区", "value": [{ "n": "全部专区", "v": "" }, { "n": "1080P", "v": "3" }, { "n": "独播", "v": "6" }, { "n": "VIP", "v": "4" }, { "n": "免费", "v": "5" }] }, 
                   { "key": "sort", "name": "综合排序", "value": [{ "n": "综合排序", "v": "" }, { "n": "最多播放", "v": "2" }, { "n": "最好评", "v": "3" }, { "n": "最新上线", "v": "1" }] }] },

    headers:{
        'User-Agent':'PC_UA',
        'Cookie':'cna=VvNvGX3e0ywCAavVEXlnA2bg; __ysuid=1626676228345Rl1; __ayft=1652434048647; __arycid=dm-1-00; __arcms=dm-1-00; __ayvstp=85; __arpvid=1667204023100cWWdgM-1667204023112; __ayscnt=10; __aypstp=60; isg=BBwcqxvvk3BxkWQGugbLpUSf7TrOlcC_U7GAj_YdfYfvQbzLHqYGT4Hgp6m5TvgX; tfstk=c3JOByYUH20ilVucLOhh0pCtE40lZfGc-PjLHLLfuX7SWNyAiQvkeMBsIw7PWDC..; l=eBQguS-PjdJFGJT-BOfwourza77OSIRA_uPzaNbMiOCPOb1B5UxfW6yHp4T6C3GVhsGJR3rp2umHBeYBqQd-nxvOF8qmSVDmn',
    },
    timeout:5000,
    class_name:'电视剧&电影&综艺&动漫&少儿&纪录片&文化&亲子&教育&搞笑&生活&体育&音乐&游戏',
    class_url:'电视剧&电影&综艺&动漫&少儿&纪录片&文化&亲子&教育&搞笑&生活&体育&音乐&游戏',
    limit:20,
    play_parse:true,
    // 手动调用解析请求json的url,此lazy不方便
    // lazy:'js:print(input);fetch_params.headers["user-agent"]=MOBILE_UA;let html=request(input);let rurl=html.match(/window\\.open\\(\'(.*?)\',/)[1];rurl=urlDeal(rurl);input={parse:1,url:rurl};',
    lazy:'js:input={parse:1,jx:1,url:input};',
    // 推荐:'.list_item;img&&alt;img&&src;a&&Text;a&&data-float',
    // 一级:'json:data.filterData.listData;title;img;subTitle;videoLink;summary',
    一级:'',
    一级:'js:let d=[];MY_FL.type=MY_CATE;let fl=stringify(MY_FL);fl=encodeUrl(fl);input=input.split("{")[0]+fl;if(MY_PAGE>1){let old_session=getItem("yk_session_"+MY_CATE,"{}");if(MY_PAGE===2){input=input.replace("optionRefresh=1","session="+encodeUrl(old_session))}else{input=input.replace("optionRefresh=1","session="+encodeUrl(old_session))}}let html=fetch(input,fetch_params);try{html=JSON.parse(html);let lists=html.data.filterData.listData;let session=html.data.filterData.session;session=stringify(session);if(session!==getItem("yk_session_"+MY_CATE,"{}")){setItem("yk_session_"+MY_CATE,session)}lists.forEach(function(it){let vid;if(it.videoLink.includes("id_")){vid=it.videoLink.split("id_")[1].split(".html")[0]}else{vid="msearch:"}d.push({title:it.title,img:it.img,desc:it.summary,url:"https://search.youku.com/api/search?appScene=show_episode&showIds="+vid,content:it.subTitle})})}catch(e){log("一级列表解析发生错误:"+e.message)}setResult(d);',
    二级:'',
    二级:'js:var d=[];VOD={};let html=request(input);let json=JSON.parse(html);if(/keyword/.test(input)){input="https://search.youku.com/api/search?appScene=show_episode&showIds="+json.pageComponentList[0].commonData.showId;json=JSON.parse(fetch(MY_URL,fetch_params))}let video_lists=json.serisesList;var name=json.sourceName;if(/优酷/.test(name)&&video_lists.length>0){let ourl="https://v.youku.com/v_show/id_"+video_lists[0].videoId+".html";let _img=video_lists[0].thumbUrl;let html=fetch(ourl,{headers:{Referer:"https://v.youku.com/","User-Agent":PC_UA}});let json=/__INITIAL_DATA__/.test(html)?html.split("window.__INITIAL_DATA__ =")[1].split(";")[0]:"{}";if(json==="{}"){log("触发了优酷人机验证");VOD.vod_remarks=ourl;VOD.vod_pic=_img;VOD.vod_name=video_lists[0].title.replace(/(\\d+)/g,"");VOD.vod_content="触发了优酷人机验证,本次未获取详情,但不影响播放("+ourl+")"}else{try{json=JSON.parse(json);let data=json.data.data;let data_extra=data.data.extra;let img=data_extra.showImgV;let model=json.data.model;let m=model.detail.data.nodes[0].nodes[0].nodes[0].data;let _type=m.showGenre;let _desc=m.updateInfo||m.subtitle;let JJ=m.desc;let _title=m.introTitle;VOD.vod_pic=img;VOD.vod_name=_title;VOD.vod_type=_type;VOD.vod_remarks=_desc;VOD.vod_content=JJ}catch(e){log("海报渲染发生错误:"+e.message);print(json);VOD.vod_remarks=name}}}if(!/优酷/.test(name)){VOD.vod_content="非自家播放源,暂无视频简介及海报";VOD.vod_remarks=name}function adhead(url){return urlencode(url)}play_url=play_url.replace("&play_url=","&type=json&play_url=");video_lists.forEach(function(it){let url="https://v.youku.com/v_show/id_"+it.videoId+".html";if(it.thumbUrl){d.push({desc:it.showVideoStage?it.showVideoStage.replace("期","集"):it.displayName,pic_url:it.thumbUrl,title:it.title,url:play_url+adhead(url)})}else if(name!=="优酷"){d.push({title:it.displayName?it.displayName:it.title,url:play_url+adhead(it.url)})}});VOD.vod_play_from=name;VOD.vod_play_url=d.map(function(it){return it.title+"$"+it.url}).join("#");',
    搜索:'',
    搜索:'js:var d=[];let html=request(input);let json=JSON.parse(html);json.pageComponentList.forEach(function(it){if(it.hasOwnProperty("commonData")){it=it.commonData;d.push({title:it.titleDTO.displayName,img:it.posterDTO.vThumbUrl,desc:it.stripeBottom,content:it.updateNotice+" "+it.feature,url:"https://search.youku.com/api/search?appScene=show_episode&showIds="+it.showId+"&appCaller=h5"})}});setResult(d);',

}