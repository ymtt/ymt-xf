/**
 * Created by Administrator on 2015/5/11.
 */
function  change_nav(heath_center) {
    for (var i = 1; i <= 6; i++) {
        if (i == heath_center) {
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
function a1(x) {
    document.getElementsByClassName("ky-4")[x].style.backgroundImage = "url(image/comment_collect1_icon.png)";
}
function a2(x){
    document.getElementsByClassName("ky-4")[x].style.backgroundImage= "";
}
function s1(x) {
    document.getElementsByClassName("ky-5")[x].style.backgroundImage = "url(image/comment_comment1_icon.png)";
}
function s2(x){
    document.getElementsByClassName("ky-5")[x].style.backgroundImage= "";
}


/*
*知识平台ajax
*/
//标记知识平台选项卡是否被点击
var flag=false;
var kystart=0;
var kyend=10;
function getnews(type,func,kystart,kyend,bo){
            var session=window.sessionStorage.getItem("session");
            var url='http://120.24.172.105:8000/fw?controller=com.xfsm.action.ArticleAction';
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
                               var hitnum=list[key]['hitnum'];
                               var id=list[key]['id'];
                               if(hitnum==null){
                                   hitnum=0;
                               }
                               if(key>=kystart&&key<kyend){
                                  func(title,title,id);
                               }else if(key>kyend){
                                  //每次ajax数据加载完，添加一个加载更多按钮
                                  $("#nav_tab4").append("<a href='javascript:void(0)' onclick='addkmore(this)'>加载更多</a>");
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

function CreateKnowledge(title,content,id){
    $("#nav_tab4").append(title+"|"+content+"|"+id+"<br>");
}

function addkmore(obj){
    kystart+=10;
    kyend+=10;
    //第五个参数为true,则表示跳过仅允许执行一次的控制，用于加载更多
    getnews("xf_article_h_know",CreateKnowledge,kystart,kyend,true);
    //移除加载更多标签
    $(obj).remove();
}