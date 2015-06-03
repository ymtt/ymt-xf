//公告详情，教育资讯的ajax
function getnews(type,func,start,end,wh){
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
                                var content=list[key]['content'];
                                var hitnum=list[key]['hitnum'];
                                var id=list[key]['id'];


                                if(hitnum==null){
                                    hitnum=0;
                                }


                                if(key>=start&&key<end){
                                    func(title,title,id);
                                }else if(key>=end){
                                    switch(wh){
                                        case "notice":
                                             CreateNoticeMore();
                                        break;
                                        case "edu":
                                            CreateEduMore();
                                        break;
                                    }
                                    return false;
                                }
                                if(start>size){
                                    alert("没有更多了");
                                    return false;
                                }

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

//加载更多公告
 function CreateNoticeMore(){
    $("#nav_tab2").append("<div class='gg'><a href='javascript:addn()' class='nmore'>点击加载更多</a></div>");
 }
 //加载更多教育新闻
  function CreateEduMore(){
     $("#nav_tab3").append("<div class='gg'><a href='javascript:adde()' class='emore'>点击加载更多</a></div>");
  }

 function CreateEduDom(title,content,id){
        $("#nav_tab3").append("<div class='zx'><a href='javascript:Toinfo("+"\""+id+"\""+")'><div class='zx-1'><img src='image/08.png'></div><div class='intro'><span>"+title+
            "</span><p>"+content+
            "</p></div></a></div>"
  );
 }

 //热点资讯,zixuntype:new表示最新资讯，read表示热点资讯
 function hotzixun(type,zixuntype){
         var session=window.sessionStorage.getItem("session");
         var url='http://120.24.172.105:8000/fw?controller=com.xfsm.action.ArticleAction';
         if(session==null){
            alert("登录后进行查看");
         }else{
            $.ajax({
                type:'get',
                dataType:'json',
                url:url,
                data:{"SESSIONID":session,"m":"list","type":type,"order":zixuntype,"start":"1","pagesize":"1"},
                success:function(data){
                    $(".loading").remove();
                    var list=data.datas['listData'];
                    $.each(list,function(key){
                        var title=list[key]['article_title'];
                        var content=list[key]['content'];
                        var pl=list[key]['hitnum'];
                        var id=list[key]['id'];
                        var obj=JSON.stringify(list[key]);
                        if(key==0){
                            if(zixuntype=="read"){
                                CreateHotZixun(title,content,id);
                                //将id和对象转换成的字符串对应，并存储到localstorage
                                window.localStorage.setItem(id,obj);
                            }else if(zixuntype=="new"){
                                CreateNewZixun(title,content,pl,id);
                                window.localStorage.setItem(id,obj);
                            }
                        }else{
                            return false;
                        }
                    });
                },error:function(error){
                    alert("错误！");
                }
            });
         }
 }
 function CreateHotZixun(title,content,id){
       $("#nav_tab1").append("<div class='div6'><div class='div7'><p>热点资讯</p></div><span class='span-1'><a href='shipinzixun.html'><p>更多</p></a></span></div><div class='div10'><a href='javascript:Towenzizixun("+"\""+id+"\""+",\"wenzizixunXQ.html\""+")'><div class='div11'><p>"+title+
       "</p></div><div class='div12'><p>"+content+"</p></div><div class='div13'></div></a></div>");
        //alert(title+content);
 }
 function CreateNewZixun(title,content,pl,id){
      $("#nav_tab1").append("<div class='div6'><div class='div7'><p>最新咨询</p></div><span class='span-1'><a href='wenzizixun.html'><p>更多</p></a></span></div><div class='div14'><a href='javascript:Towenzizixun("+"\""+id+"\""+",\"wenzizixunXQ.html\""+")'><div class='div15'><p>"+title+
      "</p></div><div class='div16'><p>"+content+
      "</p></div><div class='div17'><div class='div18'><p>"+pl+
      "</p></div><div class='div19'><img src='image/comment_comment_icon.png'/></div></div></a></div>");
 }

function Towenzizixun(id,url){
    //存储点击之后的id，在详情页取出并使用他来在localstorage根据id取出对象字符串
    window.localStorage.setItem("wenziid",id);
    window.location.href=url;
    //alert(JSON.stringify(o));
}