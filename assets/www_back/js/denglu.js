//自动注册
/*
@title   标题
@content 内容
@points  分类
@expert  专家
*/
function Autoreg(){
    var regurl='http://120.24.172.105/fw?controller=com.xfsm.action.AutoRegAction&t=app';
    $.ajax({
        type:'post',
        dataType:'json',
        url:regurl,
        data:{},
        success:function(data){
            if(data.result=="Y"){
                var list=data.data['listData'];
                //alert(list[0].user_name+""+list[0].pwd);
                //Login(list);
                var username=list[0].user_name;
                var pwd=list[0].pwd;
                $("#autousername").html(username);
                $("#autopwd").html(pwd);

                Login(username,pwd);
                showdiv();
            }
        },error:function(error){
                alert("自动分配账号出错，请检查网络连接！");
        }
    });
}



//登录
function Login(username,pwd){
    var url='http://120.24.172.105/fw?controller=com.xfsm.action.LoginAction&t=app';
    $.ajax({
        type:'post',
        dataType:'json',
        url:url,
        data:{"loginname":username,"pwd":pwd},
        success:function(data){
             window.sessionStorage.setItem("session",json.sId);
        },
    });
}