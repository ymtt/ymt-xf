function showexpert(){
    var clickexpert=window.localStorage.getItem("clickexpert");
    var strobj=window.localStorage.getItem(clickexpert);
    var obj=JSON.parse(strobj);
    //头像
    $(".div4").html("<img src='http://120.24.172.105:8000/"+obj.head_pic+"'>");
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

//关注专家
function focusexpert(){

    var session=window.sessionStorage.getItem("session");

    var clickexpert=window.localStorage.getItem("clickexpert");
    var strobj=window.localStorage.getItem(clickexpert);
    var obj=JSON.parse(strobj);

    var url='http://120.24.172.105:8000/fw?controller=com.xfsm.action.PersonalAction&method=queryExpertList';
    //alert(obj.fk_user_id+userid);

    if(""==session||null==session){
        alert("请登录");
        window.location.href="denglu.html";
    }else{
        $.ajax({
            type:'post',
            dataType:'json',
            url:url,
            data:{"sId":session,"expertID":obj.fk_user_id},
            success:function(data){
                alert(JSON.stringify(data));
            },error:function(error){
                alert(JSON.stringify(error));
            }
        });
    }
}