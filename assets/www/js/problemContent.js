function getprobleminfo(){
    var qq_id=window.localStorage.getItem("qq_id");
    var str=window.localStorage.getItem(qq_id);
    //将对象字符串转换成对象
    var obj=JSON.parse(str);

    $(".div3 p").html(obj.msg_title);
    $(".div4 p").html(obj.msg_content);
}