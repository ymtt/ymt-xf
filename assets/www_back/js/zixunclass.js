/*******咨询分类******/
//从index页跳转到子类列表页(gaoceng.html)
function TozixunClass(subclass){
    window.localStorage.setItem("zixunsubclass",subclass);
    window.location.href="gaoceng.html";
}

function getzixunlist(pagesize,start){
    var subclass=window.localStorage.getItem("zixunsubclass");
    var session=window.sessionStorage.getItem("session")
    var url='http://120.24.172.105/fw?controller=com.xfsm.action.ArticleAction&t=app&m=chat';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"pagesize":pagesize,"sid":session,"start":start,"jl":subclass},
        success:function(data){
            var list=data.datas['listData'];
            //设置标题
            setTitle(subclass);
            $.each(list,function(key){
                var article_title=(list[key]['article_title']).substring(0,20);
                //取出内容去除样式用作简介，正则表达式替换
                var describe=(list[key]['content']).replace(/<[^>]*>/gi,'');
                //文章id
                var id=list[key]['id'];
                //文章对象的字符串
                var objstr=JSON.stringify(list[key]);
                //将文章id和文章对象字符串对应保存
                window.localStorage.setItem(id,objstr);
                var com=list[key]['hitnum'];
                $("section").append("<div class='div4'><a href='javascript:ToGaocengxq("+"\""+id+"\""+")'><div class='div5'><p>"+article_title+"</p></div><div class='div6'><p>"+describe+"</p></div></a><div class='ky-5'><img src='image/icon_collect_l.png' id='div9' class='ky-4' onclick='change_pic(this)'><p>"+com+"</p></div></div>");
            });
            $("section").append("<a href='javascript:;'onclick='addMoreZixun(this);'>加载更多</a>");
        },
    });
}

//将所点击的id保存，跳转到高层详情
function ToGaocengxq(id){
    window.localStorage.setItem("clickid",id);
    window.location.href="gaocengxiangqing.html";
    //alert(id);
}

//详情页
function getxq(){
    var id=window.localStorage.getItem("clickid");
    var objstr=window.localStorage.getItem(id);
    var obj=JSON.parse(objstr);
    $(".div4 p").html(obj.article_title);
    $(".div5 p").html("答："+obj.content);
}

//加载更多
var start=1;
function addMoreZixun(obj){
    start+=1;
    getzixunlist(6,start);
    //移除加载更多按钮
    $(obj).remove();
}

function setTitle(subclass){
    var zixuntitle=new Map();
    zixuntitle.put("j1","高层");
    zixuntitle.put("j2","超高层");
    zixuntitle.put("j3","商业综合");
    zixuntitle.put("j4","文体");
    zixuntitle.put("j5","交通枢纽");
    zixuntitle.put("j6","轨道交通");
    zixuntitle.put("j7","地铁");
    zixuntitle.put("j8","仓储厂房");
    zixuntitle.put("j9","化工");
    zixuntitle.put("j10","隧道");
    zixuntitle.put("j11","古建筑");
    zixuntitle.put("j12","区域类");
    zixuntitle.put("j13","结构类");
    zixuntitle.put("j14","其他");

    zixuntitle.put("z1","建筑定性");
    zixuntitle.put("z2","防火分区");
    zixuntitle.put("z3","平面布置");
    zixuntitle.put("z4","疏散避难");
    zixuntitle.put("z5","建筑构造");
    zixuntitle.put("z6","救援");
    zixuntitle.put("z7","电梯");
    zixuntitle.put("z8","停机坪");
    zixuntitle.put("z9","灭火");
    zixuntitle.put("z10","报警");
    zixuntitle.put("z11","防排烟");
    zixuntitle.put("z12","暖通");
    zixuntitle.put("z13","电气");
    zixuntitle.put("z14","其他");

    zixuntitle.put("g1","防火分隔");
    zixuntitle.put("g2","防烟分区");
    zixuntitle.put("g3","疏散距离");
    zixuntitle.put("g4","疏散宽度");
    zixuntitle.put("g5","疏散楼梯");
    zixuntitle.put("g6","疏散平台");
    zixuntitle.put("g7","避难层");
    zixuntitle.put("g8","下层广场");
    zixuntitle.put("g9","高大中庭");
    zixuntitle.put("g10","儿童场所");
    zixuntitle.put("g11","影院");
    zixuntitle.put("g12","锅炉房");
    zixuntitle.put("g13","钢结构");
    zixuntitle.put("g14","其他");

    $(".div2 p").html(zixuntitle.get(subclass));
}

//Map的模拟实现
function Map() {

    var mapObj = {};

    this.put = function (key, value) {
        mapObj[key] = value;
    };

    this.remove = function (key) {
        if (mapObj.hasOwnProperty(key)) {
            delete mapObj[key];
        }
    };

    this.get = function (key) {
        if (mapObj.hasOwnProperty(key)) {
            return mapObj[key];
        }
        return null;
    };

    this.getKeys = function () {
        var keys = [];
        for(var k in mapObj){
            keys.push(k);
        }
        return keys;
    };

    // 遍历map
    this.each = function(fn){
        for(var key in mapObj){
            fn(key, mapObj[key]);
        }
    };

    this.toString = function () {
        var str = "{";
        for(var k in mapObj){
            str += "\""+ k+"\" : \""+mapObj[k]+"\",";
        }
        str = str.substring(0,str.length - 1) ;
        str += "}";
        return str;
    }

}