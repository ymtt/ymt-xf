/*设置js*/
//退出登录
function exituser(){
    var sid=window.sessionStorage.getItem("session");
    var url='http://120.24.172.105/app_exit.jsp?sId=xx';
    $.ajax({
        type:'post',
        dataType:'json',
        url:url,
        data:{"sId":sid},
        success:function(data){
            window.sessionStorage.removeItem("session");
            window.localStorage.removeItem("user");
            window.localStorage.removeItem("userrole");
            window.localStorage.removeItem("userid");
            alert(JSON.stringify(data));
        },error:function(error){
            alert("请检查网络连接！");
        }
    });
}