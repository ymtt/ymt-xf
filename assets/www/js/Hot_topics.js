/**
 * Created by Administrator on 2015/7/23.
 */
function getHot_topics(){
    var url='http://120.24.172.105/bbs/bbs/getLastSubject.do';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        success:function(data){
            var list=data.data;
            $.each(list,function(key){
                //主题id
                var tid=list[key]['tid'];
                //作者
                var author=list[key]['author'];
                //标题
                var subject=list[key]['threadSubject'];
                /*//时间
                 var time=TimestampConversion(list[key]['dateline']);*/
                var dateline=list[key]['lastpost'];

                //评论
                var comment=list[key]['replies'];

                CreateHot_topics(tid,author,comment,dateline,subject);
                //alert(tid+"/"+author+"/"+subject+"/"+dateline+"/"+comment);
            })
        }
    });
}
function CreateHot_topics(tid,author,comment,time,subject){
    $("section").append("<a href='Novice_answer.html'><div class='div4'><div class='div6'><p>"+author+"</p></div><div class='div7'><p>"+time+"</p></div><div class='div4-1'><p>"+subject+"</p></div><div class='div8'><p>"+comment+"</p><img src='image/icon_comments.png'></div></div></a>");
}

function ToForumThread(tid){
    window.localStorage.setItem("tid",tid);
    window.location.href="Novice_answer.html";
}