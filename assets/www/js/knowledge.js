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
                                if(0<key<10){
                                   func(title,title,id);
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

function CreateKnowledge(){

}