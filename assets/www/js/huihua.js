//获取一次数据并保存
function Getexpert(){
    var session=window.sessionStorage.getItem("session");
    var url='http://120.24.172.105/fw?controller=com.xfsm.action.ChatAction&m=getMyQQs';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"SESSIONID":session},
        success:function(result){
            var list=result.datas['listData'];
            $.each(list,function(key){

                var id=list[key]['id'];

                var obj=JSON.stringify(list[key]);

                window.localStorage.setItem(id,obj);
            });

        },error:function(error){
            var json=JSON.stringify(error);
            alert("获取失败"+json);
        }
    })
}



//获取QQ消息的所有内容,msgtype为QQUnreadMsg，，所有未读内容，msgtype为getQQAllMsg，，为所有消息内容
function getallmsg(){
    //取出保存的session
    var session=window.sessionStorage.getItem("session");

    //获取qq_id，会话标识
    var qq_id=window.localStorage.getItem("qq_id");

    //用户id
   var userId=window.localStorage.getItem("userid");
   //时间
   var time=currentdatetotimestamp();
    //得到某一条QQ消息的所有内容


    //默认头像
    var head_pic='http://120.24.172.105/images/header.png';

    var url='http://120.24.172.105/fw?controller=com.xfsm.action.ChatAction';
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
                 var role=window.localStorage.getItem("userrole");

                $("section").html("");
                $(".div2 p").html(obj.msg_title);
                $.each(list,function(key){
                    //消息的角色
                    var reply_role=list[key]['reply_role'];
                    //消息内容
                    var content=list[key]['content'];

                    if(reply_role==role){
                        /*如果是本人的消息，放在右边*/
                        $("section").prepend("<div class='div4'><div class='div7'><img src='"+head_pic+"'></div><div class='div8'><p>"+content+"</p></div></div>");
                    }else if(typeof (reply_role)=="undefined"){
                        /*如果不知道是谁的消息*/

                    }else{
                        /*其余人的消息，放在左边*/
                        $("section").prepend("<div class='div4'><div class='div5'><img src='"+head_pic+"'></div><div class='div6'><p>"+content+"</p></div></div>");
                    }
                });
           //保存已经读到的消息的索引为数组
            window.localStorage.setItem("readindex",list[0].id);
        }
    });
}



//发送消息
function sendmsgs(content){
    //默认头像
    var head_pic='http://120.24.172.105:8000/images/header.png';
    //取出保存的session
    var session=window.sessionStorage.getItem("session");
    //获取qq_id，会话标识
    var qq_id=window.localStorage.getItem("qq_id");
    //得到某一条QQ消息的所有内容
    var url='http://120.24.172.105/fw?controller=com.xfsm.action.ChatAction&t=app&m=sendMsg';
    $.ajax({
        type:'post',
        dataType:'json',
        url:url,
        data:{"SESSIONID":session,"qq_id":qq_id,"content":content},
        success:function(data){
            //ajax成功
           if(data.result=="Y"){
            alert("发送成功");
           }else{
           alert("发送失败");
           }
           
            //$("section").append("<div class='div4'><div class='div7'><img src='"+head_pic+"'></div><div class='div8'><p>"+content+"</p></div></div>");
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

//轮询获取未读消息

function getunreadmsg(data){
        //取出保存的session
        var session=window.sessionStorage.getItem("session");
        //获取qq_id，会话标识
        var qq_id=window.localStorage.getItem("qq_id");
        //用户id
       var userId=window.localStorage.getItem("user");
       //时间
        //默认头像
        var head_pic='http://120.24.172.105/images/header.png';


       var url='http://120.24.172.105/fw?controller=com.xfsm.action.ChatAction';

       //alert(JSON.stringify(data));
       if(data.result=="Y"){
            var list=data.datas['listData'];
            $.each(list,function(key){
                var html=list[key]['html'].replace(/<[^>]*>/gi,'');
               //alert(html);
               var arr=new Array();

               arr=html.split(":");

                  var result=arr[3].substring(2,arr[3].length);


            $("section").append("<div class='div4'><div class='div5'><img src='"+head_pic+"'></div><div class='div6'><p>"+result+"</p></div></div>");
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

//使用所有消息接口获取未读消息
function getunreadmsgbyall(){
    //取出保存的session
    var session=window.sessionStorage.getItem("session");

    //获取qq_id，会话标识
    var qq_id=window.localStorage.getItem("qq_id");

    //用户id
    var userId=window.localStorage.getItem("userid");
    //时间
    var time=currentdatetotimestamp();
    //得到某一条QQ消息的所有内容

    //默认头像
    var head_pic='http://120.24.172.105/images/header.png';
    var role=window.localStorage.getItem("userrole");

    var url='http://120.24.172.105/fw?controller=com.xfsm.action.ChatAction';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"SESSIONID":session,"qq_id":qq_id,"m":"getQQAllMsg","userId":userId,"time":time},
        success:function(data){
            var list=data.datas['listData'];
            //读取已保存的索引
            var readindex=window.localStorage.getItem("readindex");

            //设置新的消息索引
            window.localStorage.setItem("readindex",list[0].id);

            $.each(list,function(key){
               var id=list[key]['id'];
                //消息的角色
                var reply_role=list[key]['reply_role'];
                //消息内容
                var content=list[key]['content'];

                //如果最新的一条消息已经是之前阅读过的消息，则跳出each循环
                if(readindex==id){
                    return false;
                }

                if(reply_role==role){
                    /*如果是本人的消息，放在右边*/
                    $("section").append("<div class='div4'><div class='div7'><img src='"+head_pic+"'></div><div class='div8'><p>"+content+"</p></div></div>");
                }else if(typeof (reply_role)=="undefined"){
                    /*如果不知道是谁的消息*/

                }else{
                    /*其余人的消息，放在左边*/
                    $("section").append("<div class='div4'><div class='div5'><img src='"+head_pic+"'></div><div class='div6'><p>"+content+"</p></div></div>");
                }
            });
        }
    });
}




