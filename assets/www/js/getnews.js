function getnews(type,func){
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
                                var id=list[key]['id'];
                                if(hitnum==null){
                                    hitnum=0;
                                }
                                func(title,title,id);
                            });
                        }else{
                            alert("获取新闻出现错误！");
                            window.location.href="denglu.html";
                        }
                    }
                })
            }
}


//保存点击的公告的id
function Tonews(id){
    window.localStorage.setItem("noticeid",id);
    window.location.href="gonggaoXQ.html";
}
//保存点击的资讯的id
function Toinfo(id){
   window.localStorage.setItem("noticeid",id);
   window.location.href="jiaoyuXQ.html";
   //alert(id);
}

function CreateNoticeDom(title,content,id){
               $("#nav_tab2").append("<div class='gg'><a href='javascript:Tonews("+"\""+id+"\""+")'><div class='gg-1'><p>"+title+
               "</p></div><div class='gg-2'><p>"+content+"</p></div><span class='notice'></span></a></div>");
               $(".notice").html("<img src='image/07.png'>");
               $(".notice").append("<img src='image/08.png'>");
 }

 function CreateEduDom(title,content,id){
        $("#nav_tab3").append("<div class='zx'><a href='javascript:Toinfo("+"\""+id+"\""+")'><div class='zx-1'><img src='image/08.png'></div><div class='intro'><span>"+title+
            "</span><p>"+content+
            "</p></div></a></div>"
  );
 }