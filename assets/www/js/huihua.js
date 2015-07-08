
//获取QQ消息的所有内容,msgtype为QQUnreadMsg，，所有未读内容，msgtype为getQQAllMsg，，为所有消息内容
function getallmsg(){
    //取出保存的session
    var session=window.localStorage.getItem("session");

    //获取qq_id，会话标识
    var qq_id=window.localStorage.getItem("qq_id");

    //用户id
   var userId=window.localStorage.getItem("userid");
   //时间
   var time=currentdatetotimestamp();
    //得到某一条QQ消息的所有内容


    var url='http://120.24.172.105:8000/fw?controller=com.xfsm.action.ChatAction';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"SESSIONID":session,"qq_id":qq_id,"m":"getQQAllMsg","userId":userId,"time":time},
        success:function(data){
            //ajax成功
             //alert("读取所有消息结果为"+JSON.stringify(data)+"qq_id为："+qq_id);
                var list=data.datas['listData'];

                var str=window.localStorage.getItem(qq_id);
                 //将对象字符串转换成对象
                 var obj=JSON.parse(str);
                $("section").html("");
                $(".div2 p").html(obj.msg_title);

                $.each(list,function(key){
                    var reply_role=list[key]['reply_role'];
                    var content=list[key]['content'];
                    if(reply_role=="002"){
                        $("section").prepend("<div class='div4'><div class='div7'><img src='image/16.png'></div><div class='div8'><p>"+content+"</p></div></div>");
                    }else{
                        $("section").prepend("<div class='div4'><div class='div5'><img src='image/16.png'></div><div class='div6'><p>"+content+"</p></div></div>");
                    }

                });
        }
    });
}



//发送消息
function sendmsgs(content){
    //取出保存的session
    var session=window.localStorage.getItem("session");
    //获取qq_id，会话标识
    var qq_id=window.localStorage.getItem("qq_id");
    //得到某一条QQ消息的所有内容
    var url='http://120.24.172.105:8000/fw?controller=com.xfsm.action.ChatAction&t=app&m=sendMsg';
    $.ajax({
        type:'post',
        dataType:'json',
        url:url,
        data:{"SESSIONID":session,"qq_id":qq_id,"content":content},
        success:function(data){
            //ajax成功
            alert("发送成功："+JSON.stringify(data));
            $("section").append("<div class='div4'><div class='div7'><img src='image/16.png'></div><div class='div8'><p>"+content+"</p></div></div>");
        },error:function(error){
            //ajax失败
            alert("发送失败："+JSON.stringify(error)+session+"/"+qq_id+"/"+content);
        }
    });
}






function currentdatetotimestamp(){
   var MyDate=new Date();
   var time=MyDate.getTime().toString();
   return time.substring(0,10);
}

var time=currentdatetotimestamp();

//长轮询获取未读消息

function getunreadmsg(data){
        //取出保存的session
        var session=window.sessionStorage.getItem("session");
        //获取qq_id，会话标识
        var qq_id=window.localStorage.getItem("qq_id");
        //用户id
       var userId=window.localStorage.getItem("user");
       //时间


       var url='http://120.24.172.105:8000/fw?controller=com.xfsm.action.ChatAction';

       //alert(JSON.stringify(data));
       if(data.result=="Y"){
            var list=data.datas['listData'];
            $.each(list,function(key){
                var html=list[key]['html'].replace(/<[^>]*>/gi,'');
               //alert(html);
               var arr=new Array();

               arr=html.split(":");

                  var result=arr[3].substring(2,arr[3].length);

               //alert(html);
            $("section").append("<div class='div4'><div class='div5'><img src='image/16.png'></div><div class='div6'><p>"+result+"</p></div></div>");
            });
       }

       $.ajax({
            type:'get',
            dataType:'json',
            url:url,
            data:{"SESSIONID":session,"qq_id":qq_id,"m":"getQQUnreadMsg","userId":userId,"time":time},
            success:function(result){
                getunreadmsg(result);
                //alert("SESSIONID:"+session+"\nqq_id:"+qq_id+"\nuserId:"+userId+"\ntime:"+time);
            }
       });

}

//邀请专家
function  Inviteexperts(curChatId,userId){
    var url='120.24.172.105:8000/index/consult/chat_partial/addExportUser.jsp';
    $.ajax({
        type:'post',
        dataType:'json',
        url:url,
        data:{"curChatId":curChatId,"userId":userId},
        success:function(data){
            alert(JSON.stringify(data));
        },error:function(error){
            alert(JSON.stringify(error))
        }
    });
}


