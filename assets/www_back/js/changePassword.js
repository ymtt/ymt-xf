/*修改登录密码*/
function resetpwd(pwd,newpwd){
    var username=window.localStorage.getItem("user");
    var url='http://120.24.172.105:8000/fw?t=app&controller=com.xfsm.action.PwdAction';
    $.ajax({
        type:'post',
        dataType:'json',
        url:url,
        data:{"loginname":username,"old_pwd":pwd,"new_pwd":newpwd},
        success:function(data){
            alert(JSON.stringify(data));
        },
    });
    //alert(username);
}