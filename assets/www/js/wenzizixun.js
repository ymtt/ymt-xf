function CreateXfnewsDom(title,content,hitnum,id){
                $("section").append("<div class='div3'><a href='javascript:Towenzizixun("+"\""+id+"\""+",\"wenzizixunXQ.html\""+")'><div class='div4'><p>"+title+
                    "</p></div><div class='div5'><p>"+content+
                    "</p></div></a><div class='div6'><div class='div7'><p>"+hitnum+
                    "</p></div><div class='div8'><img src='image/comment_comment_icon.png'></div></div></div>");
        }
function getnews(type){
var session=window.sessionStorage.getItem("session");
var url='http://120.24.172.105:8000/fw?controller=com.xfsm.action.ArticleAction';
if(session==null){
    alert("请登录后进行查看");
}else{
   $.ajax({
        type:'get',
        datatype:'json',
        url:url,
        data:{"SESSIONID":session,"m":"list","type":type,"order":"new","start":"1"},
        success:function(data){
            var json=eval("("+data+")");
            if(json.result=="Y"){
                var size=json.datas['size'];
                var list=json.datas['listData'];
                $.each(list,function(key){
                    var title=list[key]['article_title'];
                    var hitnum=list[key]['hitnum'];
                    var obj=JSON.stringify(list[key]);
                    var id=list[key]['id'];
                    if(hitnum==null){
                        hitnum=0;
                    }
                    CreateXfnewsDom(title,title,hitnum,id);
                    window.localStorage.setItem(id,obj);
                });
            }else{
                alert("获取新闻出现错误！");
                window.location.href="denglu.html";
            }
        }
    })
}
}

function Towenzizixun(id,url){
    window.localStorage.setItem("wenziid",id);
    window.location.href=url;
    //alert(JSON.stringify(o));
}