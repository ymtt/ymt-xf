/*******咨询分类******/
//从index页跳转到子类列表页(gaoceng.html)
function TozixunClass(subclass){
    window.localStorage.setItem("zixunsubclass",subclass);
    window.location.href="gaoceng.html";
}

function getzixunlist(pagesize,start){
    var subclass=window.localStorage.getItem("zixunsubclass");
    var session=window.sessionStorage.getItem("session")
    var url='http://120.24.172.105:8000/fw?controller=com.xfsm.action.ArticleAction&t=app&m=chat';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"pagesize":pagesize,"sid":session,"start":start,"jl":subclass},
        success:function(data){
            var list=data.datas['listData'];
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
                $("section").append("<div class='div4'><a href='javascript:ToGaocengxq("+"\""+id+"\""+")'><div class='div5'><p>"+article_title+"</p></div><div class='div6'><p>"+describe+"</p></div></a></div>");
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