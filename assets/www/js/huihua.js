//取出保存的session
var session=window.localStorage.getItem("session");
//获取qq_id，会话标识
 var qq_id=window.localStorage.getItem("qq_id");



//获取某一条QQ消息的所有内容
function getmsg(){
    //得到某一条QQ消息的所有内容
    var url='http://120.24.172.105:8000/fw?controller=com.xfsm.action.ChatAction&m=getQQAllMsg';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"session":session,"qq_id":qq_id},
        success:function(data){
            //ajax成功
            alert("结果为"+data.result+"qq_id为："+qq_id);
        },error:function(error){
            //ajax失败
            alert(JSON.stringify(error));
        }
    });
}



//发送消息
function sendmsgs(content){
    //得到某一条QQ消息的所有内容
    var url='http://120.24.172.105:8000/fw?controller=com.xfsm.action.ChatAction&t=app&m=sendMsg';
    $.ajax({
        type:'post',
        dataType:'json',
        url:url,
        data:{"session":session,"qq_id":qq_id,"content":content},
        success:function(data){
            //ajax成功
            alert("发送成功："+JSON.stringify(data));
        },error:function(error){
            //ajax失败
            alert("发送失败："+JSON.stringify(error));
        }
    });
}


//获得某条QQ的所有未读消息
function getQQUnreadmsg(){
    //得到某一条QQ消息的所有内容
    var url='http://120.24.172.105:8000/fw?controller=com.xfsm.action.ChatAction&m=getQQUnreadMsg';
    $.ajax({
        type:'post',
        dataType:'json',
        url:url,
        data:{"session":session,"qq_id":qq_id},
        success:function(data){
            //ajax成功
            alert("获得消息成功："+JSON.stringify(data));
        },error:function(error){
            //ajax失败
            alert("获得消息失败："+JSON.stringify(error));
        }
    });
}