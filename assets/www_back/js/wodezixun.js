/**
 * Created by Administrator on 2015/5/6.
 */

function  change_nav(heath_center) {

        if (1 == heath_center) {
            document.getElementById("nav_item" + 1).className = "nav_item";
            document.getElementById("nav_tab" + 1).style.display = "";
            document.getElementById("p" + 1).style.color = "#05A0D7";
            document.getElementById("img"+1).style.backgroundImage = "url(image/icon_dialogue_click.png)";

        }
        else {
            document.getElementById("nav_item" + 1).className = "";
            document.getElementById("nav_tab" + 1).style.display = "none";
            document.getElementById("p" + 1).style.color = "";
            document.getElementById("img"+1).style.backgroundImage = "url(image/icon_dialogue.png)";
        }
    if (2 == heath_center) {
        document.getElementById("nav_item" + 2).className = "nav_item";
        document.getElementById("nav_tab" + 2).style.display = "";
        document.getElementById("p" + 2).style.color = "#05A0D7";
        document.getElementById("img"+2).style.backgroundImage = "url(image/icon_concern_click.png)";
    }
    else {
        document.getElementById("nav_item" + 2).className = "";
        document.getElementById("nav_tab" + 2).style.display = "none";
        document.getElementById("p" + 2).style.color = "";
        document.getElementById("img"+2).style.backgroundImage = "";
    }
//    if (3 == heath_center) {
//        document.getElementById("nav_item" + 3).className = "nav_item";
//        document.getElementById("nav_tab" + 3).style.display = "";
//        document.getElementById("p" + 3).style.color = "#05A0D7";
//        document.getElementById("img"+3).style.backgroundImage = "url(image/z_precontract1_icon.png)";
//    }
//    else {
//        document.getElementById("nav_item" + 3).className = "";
//        document.getElementById("nav_tab" + 3).style.display = "none";
//        document.getElementById("p" + 3).style.color = "";
//        document.getElementById("img"+3).style.backgroundImage = "";
//    }
}

//function a()
//{
//
//    var oBtn = document.getElementById("btn1");
//    var oDemo = document.getElementById("demo1");
//
//    if (oDemo.style.display == "block") {
//        oBtn.style.background = "url(image/the-triangle1_icon.png)no-repeat 10% 50%"
//        oDemo.style.display = "none";
//    }
//    else {
//        oBtn.style.background = "url(image/the-triangle_icon.png)no-repeat 10% 50%"
//        oDemo.style.display = "block";
//    }
//
//
//}
//function b()
//{
//
//    var oBtn1 = document.getElementById("btn2");
//    var oDemo1 = document.getElementById("demo2");
//
//    if (oDemo1.style.display == "block") {
//        oBtn1.style.background = "url(image/the-triangle1_icon.png)no-repeat 10% 50%"
//        oDemo1.style.display = "none";
//    }
//    else {
//        oBtn1.style.background = "url(image/the-triangle_icon.png)no-repeat 10% 50%"
//        oDemo1.style.display = "block";
//    }
//
//}

/**********我咨询的专家列表*********/
function expertslist(){
     var session=window.sessionStorage.getItem("session");
     var url='http://120.24.172.105/fw?controller=com.xfsm.action.ChatAction&m=getMyQQs';
     $.ajax({
         type:'get',
         dataType:'json',
         url:url,
         data:{"SESSIONID":session},
         success:function(result){
             //var json = eval("(" +result+ ")");
             //alert("咨询列表获取成功"+result);
             var list=result.datas['listData'];
             $("#nav_tab1").html("");
             $.each(list,function(key){
                //var fk_pro_id=list[key]['fk_pro_id'];
                //默认头像

                 var head_pic='http://120.24.172.105/images/header.png';

                var msg_title=(list[key]['msg_title']).substring(0,16);
                var count=list[key]['count'];
                var id=list[key]['id'];

                var obj=JSON.stringify(list[key]);

                window.localStorage.setItem(id,obj);

                /*if(null!=list||list!=""||typeof (fk_pro_id)!=undefined){
                    CreateExpertsList(id,fk_pro_id,msg_title);
                }*/
                 if(typeof (id)=="undefined"){

                 }else{
                     CreateExpertsList(id,"",msg_title,count,head_pic);
                 }
             });

         },error:function(error){
             var json=JSON.stringify(error);
             alert("获取失败"+json);
         }
     })
 }
//添加列表到wodezixun.html页面
function CreateExpertsList(id,fk_pro_id,msg_title,count,head_pic){
    $("#nav_tab1").append("<div class='hh1'><a href='javascript:tohuihua("+"\""+id+"\""+")'><div class='hh2'><img src='"+head_pic+"'></div><div class='hh3'><p>"+fk_pro_id+"</p></div><div class='hh4'><p>"+count+"</p></div><div class='hh5'><p>"+msg_title+"</p></div></a></div>");
}

//设置会话id,点击之后执行跳转
function tohuihua(id){
    window.localStorage.setItem("qq_id",id);
    window.location.href="huihuaXQ.html";
}
//获得我的关注
function getfocus(){
    var session=window.sessionStorage.getItem("session");
    var url='http://120.24.172.105/fw?t=app&controller=com.xfsm.action.ExpertAction&m=myFcous&start=1&pagesize=';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"sId":session},
        success:function(data){
            var list=data.datas['listData'];
            $("#nav_tab2").html("");
            $.each(list,function(key){
                //专家头像
                var head_pic='http://120.24.172.105/'+list[key]['expert_head_pic']
                //专家名字
                var expert_name=list[key]['expert_name'];
                //专家id
                var expert_id=list[key]['fk_expert_id'];

                CreateFocusList(head_pic,expert_name,expert_id);
                //alert(expert_name);
            });
            //alert(JSON.stringify(data));
        },
    });
}
//创建关注列表
function CreateFocusList(head_pic,name,expert_id){
   $("#nav_tab2").append("<div class='div4'><div class='div5'><img src='"+head_pic+"'></div><div class='div6'><p>"+name+"</p></div><div class='div7'><button  onclick=CancelFocus('"+expert_id+"')>取消关注</button></div></div>");
}

//取消关注
function CancelFocus(expert_id){
    var session=window.sessionStorage.getItem("session");
    var user_id=window.localStorage.getItem("userid");
    var url='http://120.24.172.105/fw?controller=com.xfsm.action.PersonalAction&method=cancel';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"sId":session,"expertID":expert_id,"user_id":user_id},
        success:function(data){
            //alert(JSON.stringify(data));
            //取消关注后重新加载当前网页
            window.location.reload();
            //加载后选中我的关注
            change_nav(2);
        },
    });
}