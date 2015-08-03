function getReTie(){
    var url='http://101.204.236.5/bbs/bbs/getHotPostList.do';

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
                //时间
                //var time=TimestampConversion(list[key]['dateline']);
                var dateline=list[key]['dateline'];
                //内容
                //var message=list[key]['message'];
                var message="";
                //评论
                var comment=list[key]['replies'];

                CreateList(tid,author,dateline,subject,message,comment);

            })
        }
    });
}

function CreateList(tid,author,time,subject,message,comment){
    $("section").append("<a href=javascript:ToForumThread(\'"+tid+"\')><div class='div4'><div class='div6'><p>"+author+"</p></div><div class='div7'><p>"+time+"</p></div><div class='div4-1'><p>"+subject+"</p></div><div class='div8'><p>"+comment+"</p><img src='image/icon_comments.png'></div></div></a>");
}

function ToForumThread(tid){
    window.localStorage.setItem("tid",tid);
    window.location.href="Novice_answer.html";
}

//时间戳转换
function TimestampConversion(dateline){
    var t = new Date(parseInt(dateline)*1000);
    if(t!=null||t!=""){
        var Y=t.getFullYear()+"-";
        var M=(t.getMonth()+1 < 10 ? '0'+(t.getMonth()+1) : t.getMonth()+1) + '-';
        var D=(t.getDate() < 10 ? '0'+t.getDate() : t.getDate()) + '\t';
        var h=(t.getHours() < 10 ? '0'+t.getHours() : t.getHours()) + ':';
        var m=(t.getMinutes() < 10 ? '0'+t.getMinutes() : t.getMinutes()) + ':';
        var s=(t.getSeconds() < 10 ? '0'+t.getSeconds() : t.getSeconds());
        //var res=+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds();
        return Y+M+D+h+m+s;
    }else{
        return "";
    }
}