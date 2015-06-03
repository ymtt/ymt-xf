
//获取QQ消息的所有内容,msgtype为QQUnreadMsg，，所有未读内容，msgtype为getQQAllMsg，，为所有消息内容
function getmsg(msgtype){
    //取出保存的session
    var session=window.localStorage.getItem("session");
    //获取qq_id，会话标识
    var qq_id=window.localStorage.getItem("qq_id");
    //得到某一条QQ消息的所有内容
    var url='http://120.24.172.105:8000/fw?controller=com.xfsm.action.ChatAction';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"SESSIONID":session,"qq_id":qq_id,"m":msgtype},
        success:function(data){
            //ajax成功
            if(msgtype=="getQQUnreadMsg"){
                alert("读取未读消息结果为"+JSON.stringify(data)+"qq_id为："+qq_id);
            }else if(msgtype=="getQQAllMsg"){
                alert("读取所有消息结果为"+data.result+"qq_id为："+qq_id);
            }

        },error:function(error){
            //ajax失败
            alert(JSON.stringify(error));
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
        },error:function(error){
            //ajax失败
            alert("发送失败："+JSON.stringify(error));
        }
    });
}