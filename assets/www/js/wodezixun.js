/**
 * Created by Administrator on 2015/5/6.
 */

function  change_nav(heath_center) {

        if (1 == heath_center) {
            document.getElementById("nav_item" + 1).className = "nav_item";
            document.getElementById("nav_tab" + 1).style.display = "";
            document.getElementById("p" + 1).style.color = "#05A0D7";
            document.getElementById("img"+1).style.backgroundImage = "url(image/z_session1_icon.png)";
        }
        else {
            document.getElementById("nav_item" + 1).className = "";
            document.getElementById("nav_tab" + 1).style.display = "none";
            document.getElementById("p" + 1).style.color = "";
            document.getElementById("img"+1).style.backgroundImage = "url(image/z_session_icon-.png)";
        }
    if (2 == heath_center) {
        document.getElementById("nav_item" + 2).className = "nav_item";
        document.getElementById("nav_tab" + 2).style.display = "";
        document.getElementById("p" + 2).style.color = "#05A0D7";
        document.getElementById("img"+2).style.backgroundImage = "url(image/z_contacts1_icon.png)";
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
     var session=window.localStorage.getItem("session");
     var url='http://120.24.172.105:8000/fw?controller=com.xfsm.action.ChatAction&m=getMyQQs';
     $.ajax({
         type:'get',
         dataType:'json',
         url:url,
         data:{"SESSIONID":session},
         success:function(result){
             //var json = eval("(" +result+ ")");
             //alert("咨询列表获取成功"+result);
             var list=result.datas['listData'];
             $.each(list,function(key){
                var fk_pro_id=list[key]['fk_pro_id'];
                var msg_title=list[key]['msg_title'];
                var id=list[key]['id'];

                CreateExpertsList(id,fk_pro_id,msg_title);

             });

         },error:function(error){
             var json=JSON.stringify(error);
             alert("获取失败"+json);
         }
     })
 }
//添加列表到wodezixun.html页面
function CreateExpertsList(id,fk_pro_id,msg_title){
    $("#nav_tab1").append("<div class='hh1'><a href='javascript:tohuihua("+"\""+id+"\""+")'><div class='hh2'><img src='image/25.png'></div><div class='hh3'><p>"+fk_pro_id+"</p></div><div class='hh4'><p>4</p></div><div class='hh5'><p>"+msg_title+"</p></div></a></div>");
}

//设置会话id,点击之后执行跳转
function tohuihua(id){
    window.localStorage.setItem("qq_id",id);
    window.location.href="huihuaXQ.html";
}
