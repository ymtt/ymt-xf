function getThreadContent(){
             var tid=window.localStorage.getItem("tid");
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
                         $.each(list,function(key){
                            var author=list[key]['author'];
                            var message=list[key]['message'];
                            if(key=="0"){
                                CreateContentDom(author,message);
                            }else{
                                CreateReplyDom(author,message);
                            }

                            //alert(list[key]['message']);
                         });

                     },error:function(error){
                            var error=eval("("+error+")");
                            alert(error);
                     }
                 })
           }
 };


 function CreateContentDom(author,message){
    $("section").append("<div class='div3'><img src='image/16.png'></div><div class='div4'><p>"+author+"</p></div><div class='div5'><p>"+message+"</p></div><div class='div6'><img src='image/08.png'></div><div class='div7'></div><div class='div11'></div>");
    $(".div7").html("dddd");
 }

 function CreateReplyDom(author,message){
    $(".div11").append("<p><a href=''>"+author+"：</a>"+message+"</p>");
 }

 function ReplyPost(msg){
    var tid=window.localStorage.getItem("tid");
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
             },error:function(error){
                    //var error=eval("("+error+")");
                    var errors=error['responseText'];
                    window.localStorage.setItem("errormsg",errors);
                    alert("帖子页提示"+errors);
                    window.location.href="error.html";
             }
         })
    }
 }