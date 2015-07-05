/*设置js*/
//退出登录
function exituser(){
    var sid=window.sessionStorage.getItem("session");
    var url='http://120.24.172.105:8000/exit.jsp?';
    /*$.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"sId":sid},
        success:function(data){
            alert(JSON.stringify(data));
        },
    });*/
    alert(sid);
}