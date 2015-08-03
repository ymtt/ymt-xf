//ajax请求
function getThreadContent(){
    var tid=window.localStorage.getItem("newreplytid");
    var forumname=window.localStorage.getItem("forumbar");
    var url='http://101.204.236.5/xxfintf/bbs/getPostListByTid?';
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

/*新论坛接口-获取帖子内容
*
* */
function getNThreadContent(index){
    var tid=window.localStorage.getItem("tid");
    var forumname=window.localStorage.getItem("forumbar");
    var url='http://101.204.236.5/bbs/bbs/getPostListByTid.do';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"tid":tid,"index":index},
        success:function(data){
           /*var str=data.replace(/\/\//g,"");
           var obj=JSON.parse(str);*/
            var list=data.data;
            $(".div2 p").html(forumname);
            //alert(obj.data[0]['message']);
            $.each(list,function(key){

                if(key=="1"){
                    return false;
                }

                var subject=list[key]['subject'];
                var author=list[key]['author'];
                var dateline=list[key]['dateline'];
                var message=list[key]['message'];
                var newmessage=message.replace(/\images\//g,"http://101.204.236.5/bbs/images/");
                var count=data.count;
                CreateContent(subject,author,dateline,newmessage,count);
            });
        }
    });
}



function CreateContent(subject,author,time,message,comment){
    //标题
    $(".div4 p").html(subject);
    //作者
    $(".div5 p").html("<a href='Personal_data.html'>"+author+"</a>");
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
    var url='http://101.204.236.5/bbs/bbs/wirtePost.do';
    if(tid==null){
        alert("未正常获取fid");
    }else{
        $.ajax({
            type:'post',
            datatype:'json',
            url:url,
            data:{"tid":tid,"msg":msg,"user":user,"reqType":"1"},
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

function HTMLDecode(text)
{
    var temp = document.createElement("div");
    temp.innerHTML = text;
    var output = temp.innerText || temp.textContent;
    temp = null;
    return output;
}