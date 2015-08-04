/**
 * Created by Administrator on 2015/5/11.
 */
function  change_nav(heath_center) {
    for (var i = 1; i <= 6; i++) {
        if (i == heath_center) {
            //保存点击的选项卡
            window.localStorage.setItem("change_navid",i);
            //修改选项卡属性
            document.getElementById("nav_item" + i).className = "nav_item";
            document.getElementById("nav_tab" + i).style.display = "";
            document.getElementById("p" + i).style.color = "#FFFFFF";
            document.getElementById("p" + i).style.background = "#05A0D7";
            document.getElementById("p" + i).style.borderRadius = "6px";
        }
        else {
            document.getElementById("nav_item" + i).className = "";
            document.getElementById("nav_tab" + i).style.display = "none";
            document.getElementById("p" + i).style.color = "";
            document.getElementById("p" + i).style.background = "";
            document.getElementById("p" + i).style.borderRadius = "";
        }
    }
}
//function a1(x) {
//    document.getElementsByClassName("ky-4")[x].style.backgroundImage = "url(image/comment_collect1_icon.png)";
//}
//function a2(x){
//    document.getElementsByClassName("ky-4")[x].style.backgroundImage= "";
//}
//function s1(x) {
//    document.getElementsByClassName("ky-5")[x].style.backgroundImage = "url(image/comment_comment1_icon.png)";
//}
//function s2(x){
//    document.getElementsByClassName("ky-5")[x].style.backgroundImage= "";
//}


/*
*知识平台ajax
*/
//标记知识平台选项卡是否被点击
var flag=false;
var kystart=0;
var kyend=10;
function getnews(type,func,kystart,kyend,bo){
            var session=window.sessionStorage.getItem("session");
            var url='http://101.204.236.5/fw?controller=com.xfsm.action.ArticleAction';
            if(flag==bo){
                $.ajax({
                   type:'get',
                   datatype:'json',
                   url:url,
                   data:{"m":"list","type":type,"order":"new","start":"1"},
                   success:function(data){
                       flag=true;
                       var json=eval("("+data+")");
                       if(json.result=="Y"){
                           var size=json.datas['size'];
                           var list=json.datas['listData'];
                           $.each(list,function(key){
                               var title=list[key]['article_title'];
                               var content=list[key]['content'];
                               var hitnum=list[key]['hitnum'];
                               var id=list[key]['id'];
                               var obj=JSON.stringify(list[key]);

                               if(hitnum==null){
                                   hitnum=0;
                               }
                               if(key>=kystart&&key<kyend){
                                  func(title,content,id);
                                  window.localStorage.setItem(id,obj);
                               }else if(key>kyend){
                                  //每次ajax数据加载完，添加一个加载更多按钮
                                  $("#nav_tab4").append("<div class='emore'><a href='javascript:void(0)' onclick='addkmore(this)' class='gray'>加载更多</a></div>");
                                  return false;
                               }

                              //func(title,title,id);
                           });
                       }else{
                           alert("获取新闻出现错误！");
                           window.location.href="denglu.html";
                       }
                   }
               })
            }

}

//function CreateKnowledge(title,content,id){
//    $("#nav_tab4").append("<div class='ky'><a href='javascript:ToKeyanXQ("+"\""+id+"\""+")'><div class='ky-1'><p>"+title+
//    "</p></div><div class='ky-2'><img src='image/knowledge_01.png'></div><div class='ky-3'><p>"+content+
//    "</p></div></a><div class='ky-4' onmousemove='a1(0)' onmouseout='a2(0)'><p>42354人</p></div><div class='ky-5' onmousemove='s1(0)' onmouseout='s2(0)'><p>42354人</p></div></div>");
//}

function addkmore(obj){
    kystart+=10;
    kyend+=10;
    //第五个参数为true,则表示跳过仅允许执行一次的控制，用于加载更多
    getnews("xf_article_h_know",CreateKnowledge,kystart,kyend,true);
    //移除加载更多标签
    $(obj).remove();
}

//跳转
function ToKeyanXQ(id){
    window.localStorage.setItem("keyanid",id);
    window.location.href="keyanXQ.html";
}
function ToSpzl(id){
     window.localStorage.setItem("shipid",id);
     window.location.href="shipinXQ.html";
}


var xstart=2;
function addmoreky(){
    getguifan("kywx","5",xstart,"");
    xstart++;
    $(".moreky").remove();
}
var ystart=2;
function addmoregf(){
    getguifan("bzgf","5",ystart,"");
    ystart++;
    $(".moregf").remove();
}



/***********规范************/
function getguifan(m,pagesize,start,kw){
    var url='http://101.204.236.5/fw?controller=com.xfsm.action.KnowAction&t=app&jl=';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"m":m,"pagesize":pagesize,"start":start,"kw":kw},
        success:function(data){
            var list=data.datas['listData'];
            $.each(list,function(key){

               //标题
               var title=list[key]['article_title'];
               //内容
                var content=list[key]['content'];

                //如果没有找到内容，设置为空
                if (typeof(content) == "undefined")
                {
                    cons="";
                }else{
                    //如果有内容，清除样式
                cons=content.replace(/<[^>]*>/gi,'');
                }


                /*
                * 视频资料
                *
                */
                if(m=="spzl"){
                    //封面
                    var cover="http://101.204.236.5/public/pub/upload/down.jsp?id="+list[key]['cover'];
                    //附件
                    var attachment=list[key]['attachment'];
                    //分类
                    var classify=list[key]['classify'];
                }


              //点击次数
              var hitnum=list[key]['hitnum'];
              //文章id
              var id=list[key]['id'];
              //文章的json字符串
              var obj=JSON.stringify(list[key]);
              window.localStorage.setItem(id,obj);

                if(m=="kywx"){
                    //科研文献
                    CreateGuiFan(m,title,cons,id,hitnum);
                    if(key==pagesize-1){
                        $("#nav_tab4").append("<div class='ky more'><a href=javascript:addmoreky() class='moreky'>加载更多</a></div>");
                    }
                }else if(m=="bzgf"){
                    //标准规范
                    CreateGuiFan(m,title,cons,id,hitnum);
                    if(key==pagesize-1){
                        $("#nav_tab5").append("<div class='ky more'><a href=javascript:addmoregf() class='moregf'>加载更多</a></div>");
                    }
                }else if(m=="spzl"){
                    //视频资料
                    CreateVideo(classify,title,cover,id);
                }
            });



        }
    });
}


//规范和标准
function CreateGuiFan(m,title,content,id,hitnum){
    var where;
    if(m=="kywx"){
        where="#nav_tab4";
    }else if(m=="bzgf"){
        where="#nav_tab5";
    }else if(m=="spzl"){
        where="#nav_tab6"
    }
    $(where).append("<div class='ky'><a href='javascript:ToKeyanXQ("+"\""+id+"\""+")'><div class='ky-1'><p>"+title+
    "</p></div><div class='ky-2'><img src='image/knowledge_02.png'></div><div class='ky-3'><p>"+content+
    "</p></div></a><div class='ky-5'><img src='image/icon_collect_l.png' id='div9' class='ky-4' onclick='change_pic(this)'><p>"+hitnum+"</p></div></div>");
}
//视频资料
function CreateVideo(classify,title,cover,id){
        if(classify=="jxsp"){
            $(".sp-4:eq(0) ul").append("<li><a href='javascript:ToSpzl("+"\""+id+"\""+")'><div class='sp-5'><img src='"+cover+"'></div><div class='sp-6'><p>"+title+"</p></div></a></li>");
        }else if(classify=="syyz"){
             $(".sp-4:eq(1) ul").append("<li><a href='javascript:ToSpzl("+"\""+id+"\""+")'><div class='sp-5'><img src='"+cover+"'></div><div class='sp-6'><p>"+title+"</p></div></a></li>");
        }

}