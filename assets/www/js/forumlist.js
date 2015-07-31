/*根据板块id获取板块主题*/
function getSubjectList(){
             var fid=window.localStorage.getItem("fid");
             var url='http://120.24.172.105/xxfintf/bbs/getSubjectListByFid?';
             if(fid==null){
                 alert("未正常获取fid");
             }else{
                $.ajax({
                     type:'get',
                     datatype:'json',
                     url:url,
                     data:{"fid":fid},
                     success:function(data){
                         var json=eval("("+data+")");
                         var list=json.data;
                         $.each(list,function(key){
                            var subject=(list[key]['threadSubject']).substring(0,12);
                            var threadTid=list[key]['threadTid'];
                            var forumname=list[0]['forumName'];
                            CreateForumList(subject,threadTid,forumname);
                         });
                     },error:function(error){
                            var error=eval("("+error+")");
                            alert(error);
                     }
                 })
           }
 };


/*新论坛接口-根据板块id获取板块主题*/
function getNSubjectList(){
    var fid=window.localStorage.getItem("fid");
    var url='http://120.24.172.105/bbs/bbs/getSubjectListByFid.do';
    if(fid==null){
        alert("未正常获取到板块id")
    }else{
        $.ajax({
            type:'get',
            datatype:'json',
            url:url,
            data:{"fid":fid},
            success:function(data){
                /*var str=data.replace(/[\\]/g,"");
                var strobj=str.substring(1,str.length-1);
                var obj=JSON.parse(strobj);*/
                var obj=JSON.parse(data);
                var list=obj.data;
                $.each(list,function(key){
                    //标题
                    var subject=(list[key]['threadSubject']).substring(0,12);
                    //帖子id
                    var threadTid=list[key]['threadTid'];
                    //论坛名称
                    var forumname=list[0]['forumName'];
                    //回复数
                    var replies=list[key]['replies'];
                    //时间
                    var dateline=list[key]['dateline'];
                    //作者
                    var author=list[key]['author'];
                    //帖子简述
                    var jianjie="";
                    CreateForumList(threadTid,author,dateline,subject,jianjie,replies,forumname);
                });
            },error:function(error){
                alert(JSON.stringify(error));
            }
        });
    }
}


 function threadTid(threadTid){
    window.localStorage.setItem("tid",threadTid);
    window.location.href="Novice_answer.html";
 }

 /*向页面插入数据*/
/* function CreateForumList(subject,threadTid,forumname){
   $("#list").append("<li><a href='javascript:threadTid("+"\""+threadTid+"\""+")'><p>"+subject+"</p></a></li>");
   $(".div2 p").html(forumname);
 }*/
/*
* threadTid:帖子id
* author:作者
* dateline：时间
* title：标题
* jianjie：简介
* pinglun：评论数
* */
function CreateForumList(threadTid,author,dateline,title,jianjie,pinglun,forumname){
    $("section").append(" <a href='javascript:threadTid("+"\""+threadTid+"\""+")'><div class='div3'><div class='div4'><p>"+author+"</p></div><div class='div5'><p>"+dateline+"</p></div><div class='div6'><p>"+title+"</p></div><div class='div8'><p>"+pinglun+"</p><img src='image/icon_comments.png'></div></div></a>");
    $(".div2 p").html(forumname);
}