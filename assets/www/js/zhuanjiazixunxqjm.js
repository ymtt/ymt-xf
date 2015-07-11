function showexpert(){
    var clickexpert=window.localStorage.getItem("clickexpert");
    var strobj=window.localStorage.getItem(clickexpert);
    var obj=JSON.parse(strobj);
    //头像
    $(".div4").html("<img src='http://120.24.172.105:8000/"+obj.head_pic+"'>");
    $(".div2 p").html(obj.user_name);
    //政治面貌
    $("#politics").html(obj.politics);
    //所在地区
    $("#addr").html(obj.addr);
    //职位职称
    $("#position_title").html(obj.position_title);
    //从事专业年限
    $("#pro_life").html(obj.pro_life);
    //从事专业类别
    $("#note").html(obj.note);
    //最高学历
    $("#education").html(obj.education);
    //最高学位
    $("#degree").html(obj.degree);
    //执业资格
    $("#qualification").html(obj.qualification);
    //所属行业
    $("#industry").html(obj.industry);
    //申报方式
    $("#reporting_methods").html(obj.reporting_methods);
    //单位电话
    $("#tel").html(obj.tel);
    //工作单位地址
    $("#work_addr").html(obj.work_addr);
    //邮编
    $("#work_zip_code").html(obj.work_zip_code);
    //毕业院校及专业
    $("#school").html(obj.school);
    //工作单位名称
    $("#work_name").html(obj.work_name);
    //工作经历
    $("#experience").html(obj.experience);
    //工作实践经历
    $("#work_experience").html(obj.work_experience);


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