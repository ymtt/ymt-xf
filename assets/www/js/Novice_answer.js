//ajax请求
function getThreadContent(){
    var tid=window.localStorage.getItem("newreplytid");
    var forumname=window.localStorage.getItem("forumbar");
    var url='http://120.24.172.105:8000/xxfintf/bbs/getPostListByTid?';
    if(tid==null){
        alert("未正常获取fid");
    }else{
        $.ajax({
            type:'get',
            datatype:'json',
            url:url,
            data:{"tid":tid},
            success:function(data){
                var json=eval("("+data+")");
                var list=json.data;
                $(".div2 p").html(forumname);
                $.each(list,function(key){
                    //作者
                    var author=list[key]['author'];
                    //标题
                    var subject=list[key]['subject'];
                    //时间
                    var time=TimestampConversion(list[key]['dateline']);
                    //内容
                    var message=list[key]['message'];
                    //评论
                    var comment=list[key]['comment'];
                    /*if(key=="0"){
                        CreateContentDom(author,message);
                    }else{
                        CreateReplyDom(author,message,TimestampConversion(dateline));
                    }*/
                    //alert(list[key]['message']);
                    if(key=="0"){
                        CreateContent(subject,author,time,message,comment);
                    }
                });

            },error:function(error){
                var error=eval("("+error+")");
                alert(error);
            }
        })
    }
};

function CreateContent(subject,author,time,message,comment){
    $(".div4 p").html(subject);
    $(".div5 a").html(author);
    $(".p1").html(time);
    $(".div6 p").html(message);
    $("#comment").html(comment);
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


//回帖
function ReplyPost(msg){
    var tid=window.localStorage.getItem("tid");
    var user=window.localStorage.getItem("user");
    var url='http://120.24.172.105:8000/xxfintf/bbs/wirtePost?';
    if(tid==null){
        alert("未正常获取fid");
    }else{
        $.ajax({
            type:'post',
            datatype:'json',
            url:url,
            data:{"tid":tid,"msg":msg,"user":"admin"},
            success:function(data){
                var json=eval("("+data+")");
                var list=json.data;
                alert("成功"+data);
                //重新加载当前文档
                window.location.reload();
            },error:function(error){
                //var error=eval("("+error+")");
                var errors=error['responseText'];
                window.localStorage.setItem("errormsg",errors);
                alert("回复失败提示"+errors);
                //进入错误页
                window.location.href="error.html";
            }
        })
    }
}
/*发帖*/
function ReplyThread(title,content){
    //title:帖子标题
    //content 帖子内容
    var fid=window.localStorage.getItem("fid");
    var user=window.localStorage.getItem("user");
    var url='http://120.24.172.105:8000/xxfintf//bbs/wirteSubject?';
    $.ajax({
        type:'post',
        datatype:'json',
        url:url,
        data:{"subject":title,"msg":content,"user":"admin","fid":fid},
        success:function(data){
            var json=eval("("+data+")");
            var list=json.data;
            alert("成功"+data);
            window.location.href="forumlist.html";
        },error:function(error){
            //var error=eval("("+error+")");
            var errors=error['responseText'];
            window.localStorage.setItem("errormsg",errors);
            alert("发帖失败提示"+errors);
            //进入错误页
            window.location.href="error.html";
        }
    })

}