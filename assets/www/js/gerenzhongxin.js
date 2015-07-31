/*个人中心*/
function getUserInfo(id){
    var url='http://101.204.236.5/fw?controller=com.xfsm.action.UserInfoAction';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"uid":id},
        success:function(data){
            var user=data.data;
            //性别
            var sex=user.sex;
            //电话
            var tel=user.tel;
            //工作单位
            var work_unit=user.work_unit;
            //工作性质
            var working_property=user.working_property;
            //头像
            var head_pic="http://101.204.236.5/"+user.headPic;
            //用户类型
            var userType=user.userType;
            //用户类型描述
            var userTypeDesc=user.userTypeDesc;
            //用户id
            var id=user.id;
            //电子邮箱
            var email=user.email;
            //用户名
            var userName=user.userName;
            //关注数
            var attCount=user.attCount;
            //粉丝数
            var fansCount=user.fansCount;

            //插入头像
            $(".div5 img").attr("src",head_pic);
            //插入用户名
            $(".div6 p").html(userName);
            //插入粉丝关注
            $(".div7 p").html("关注 | "+attCount+"&nbsp;&nbsp;&nbsp;&nbsp; 粉丝  | "+fansCount);
            //插入昵称
           $("#nickname").append(userName);
           //插入性别
           $("#sex").append(sex);
            //插入年龄
           $("#age").append("18");
        },
    });
}