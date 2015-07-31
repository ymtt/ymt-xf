function GetMyConversation(){
    var session=window.sessionStorage.getItem("session");
    var url='http://101.204.236.5/fw?controller=com.xfsm.action.ChatAction&m=getMyQQs';
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
                //头像
                var head_pic="http://101.204.236.5/images/header.png";
                var uname="流的滑";
                var count=list[key]['count'];

                var msg_title=list[key]['msg_title'];

                var id=list[key]['id'];

                var obj=JSON.stringify(list[key]);

                window.localStorage.setItem(id,obj);

                /*if(null!=list||list!=""||typeof (fk_pro_id)!=undefined){
                 CreateExpertsList(id,fk_pro_id,msg_title);
                 }*/
                if(typeof (id)=="undefined"){

                }else{
                    CreateMyconsulting(id,head_pic,uname,count,msg_title);
                    //alert(id);
                }
            });

        },error:function(error){
            var json=JSON.stringify(error);
            alert("获取失败"+json);
        }
    })
}
/*添加我的咨询列表*/
 function CreateMyconsulting(id,head_pic,uname,count,msg){

    $("#demo2").append("<div class='hh1'><a href='javascript:tohuihuazj("+"\""+id+"\""+")'><div class='hh2'><img src='"+head_pic+"'></div><div class='hh3'><p>"+uname+"</p></div><div class='hh4'><p>"+count+"</p></div><div class='hh5'><p>"+msg+"</p></div></a></div>");

 }
//跳转到专家会话界面
function tohuihuazj(id){
    window.localStorage.setItem("qq_id",id);
    window.location.href="huihuaZJ.html";
}