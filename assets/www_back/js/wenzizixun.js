function CreateXfnewsDom(title,content,hitnum,id){
                $("section").append("<div class='div3'><a href='javascript:Towenzizixun("+"\""+id+"\""+",\"wenzizixunXQ.html\""+")'><div class='div4'><p>"+title+
                    "</p></div><div class='div5'><p>"+content+
                    "</div>");
        }
function getnews(type){
var session=window.sessionStorage.getItem("session");
var url='http://120.24.172.105/fw?controller=com.xfsm.action.ArticleAction';
var order=window.localStorage.getItem("order");
    $.ajax({
        type:'get',
        datatype:'json',
        url:url,
        data:{"m":"list","type":type,"order":order,"start":"1"},
        success:function(data){
            var json=eval("("+data+")");
            if(json.result=="Y"){
                var size=json.datas['size'];
                var list=json.datas['listData'];
                $.each(list,function(key){
                    var title=list[key]['article_title'];
                    var content=(list[key]['content']).replace(/<[^>]*>/gi,'');
                    var subcons=content.substring(0,60);
                    var hitnum=list[key]['hitnum'];
                    var obj=JSON.stringify(list[key]);
                    var id=list[key]['id'];
                    if(hitnum==null){
                        hitnum=0;
                    }
                    CreateXfnewsDom(title,subcons,hitnum,id);
                    window.localStorage.setItem(id,obj);
                });
            }else{
                alert("获取新闻出现错误！");
                window.location.href="denglu.html";
            }
        }
        })
}

function Towenzizixun(id,url){
    window.localStorage.setItem("wenziid",id);
    window.location.href=url;
    //alert(JSON.stringify(o));
}

