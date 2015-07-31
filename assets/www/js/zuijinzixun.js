function gethhotandnew(m,pagesize,start){
    var url='http://101.204.236.5/fw?controller=com.xfsm.action.ArticleAction&t=app';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"start":start,"pagesize":pagesize,"m":m},
        success:function(data){
            var list=data.datas['listData'];
            $.each(list,function(key){
                var id=list[key]['id'];
                var strobj=JSON.stringify(list[key]);
                var article_title=(list[key]['article_title']).substring(0,22);
                var content=((list[key]['content']).replace(/<[^>]*>/gi,'')).substring(0,50);
                window.localStorage.setItem(id,strobj);
                if(m=="lastest"){
                     CreateZuijin(id,article_title,content);
                }else if(m="hot"){
                     CreateHot(id,article_title,content);
                }
                //alert(JSON.stringify(data));
            });
        },
    });
}
/**最近咨询**/
function CreateZuijin(id,article_title,content){
    $("section").append("<div class='div8'><a href='javascript:ToZuixinXq("+"\""+id+"\""+")'><div class='div4'><p>"+article_title+
    "</p></div><div class='div9'><p>"+content+"...</p></div></a></div>");
}
//跳转最近咨询
function ToZuixinXq(id){
    window.localStorage.setItem("zuijinxqid",id);
    window.location.href="zuijinzixunXQ.html";
}
function showzuijinxq(){
    var id=window.localStorage.getItem('zuijinxqid')
    var strobj=window.localStorage.getItem(id);
    var obj=JSON.parse(strobj);
    $(".div2 p").html(obj.article_title);
    $(".div3 p").html(obj.content);
}
/***热点咨询***/
function CreateHot(id,article_title,content){
    $("section").append("<div class='div8'><a href='javascript:ToHotXq("+"\""+id+"\""+")'><div class='div4'><p>"+article_title+
    "</p></div><div class='div9'><p>"+content+"...</p></div></a></div>");
}
function ToHotXq(id){
    window.localStorage.setItem("hotid",id);
    window.location.href="redianzixunXQ.html";
}
function showredian(){
    var id=window.localStorage.getItem('hotid')
    var strobj=window.localStorage.getItem(id);
    var obj=JSON.parse(strobj);
    $(".div2 p").html(obj.article_title);
    $(".div4 p").html(obj.content);
}