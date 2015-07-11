function expertslist(){
    var session=window.sessionStorage.getItem("session");
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

                var obj=JSON.stringify(list[key]);

                window.localStorage.setItem(id,obj);

                /*if(null!=list||list!=""||typeof (fk_pro_id)!=undefined){
                 CreateExpertsList(id,fk_pro_id,msg_title);
                 }*/
                if(typeof (fk_pro_id)=="undefined"){

                }else{
                    CreateExpertsList(id,fk_pro_id,msg_title);
                }
            });

        },error:function(error){
            var json=JSON.stringify(error);
            alert("获取失败"+json);
        }
    })
}
/*添加我的咨询*/
 function CreateMyconsulting(){

 }