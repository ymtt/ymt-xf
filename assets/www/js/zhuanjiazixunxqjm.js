function showexpert(){
    var clickexpert=window.localStorage.getItem("clickexpert");
    var strobj=window.localStorage.getItem(clickexpert);
    var obj=JSON.parse(strobj);
    //头像
    $(".div4").html("<img src='http://120.24.172.105:8000/public/pub/upload/down.jsp?id="+obj.head_pic+"'>");
    //名字
    $(".div2 p").html(obj.user_name);
    $(".div5 p").html(obj.user_name);
    //个人经历
    $(".div8 p").html(obj.experience);
    //擅长领域
     $("#sc").html(obj.note);
     //工作简历
     $("#resume").html(obj.resume);
     //期间
    $("#work_time").html(obj.work_time);
     //社会兼职
     $("#social_part_time").html(obj.social_part_time);
     //主要作品
     $("#major_works").html(obj.major_works);
}