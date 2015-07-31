/*邀请专家*/
//获取专家列表
function getExpertList(pagesize,start){
    var url='http://101.204.236.5/fw?controller=com.xfsm.action.ExpertAction&t=app&m=list';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"pagesize":pagesize,"start":start,"jl":"","kw":""},
        success:function(data){
            var list=data.datas['listData'];
            var exarr=["普通专家","资深专家","国家级"];
            $.each(list,function(key){
                //姓名
                var name=list[key]['user_name'];
                //头像
                var head_pic='http://120.24.172.105:8000/'+list[key]['head_pic'];
                //级别
                var level=list[key]['level'];

                var count=list[key]['count'];

                if(level=="level1"){
                    levelname=exarr[0];
                }else if(level=="level2"){
                    levelname=exarr[1];
                }else if(level=="level3"){
                    levelname=exarr[2];
                }else{
                    levelname="未知";
                }
                var expertid=list[key]['fk_user_id'];
                var objstr=JSON.stringify(list[key]);
                window.localStorage.setItem(expertid,objstr);
                CreateExpertDom(expertid,name,levelname,count,count);
                //alert(head_pic);
            });
        }
    });
}
function CreateExpertDom(expertid,name,levelname,concount,waitcount){
    $("section").append("<div class='div7' onclick=Inviteexperts(\'"+expertid+"\')><div class='div8'><p>"+name+"</p></div><div class='div9'><p>["+levelname+"]</p></div><div class='div10'><p>咨询人数<label>"+concount+"</label>人</p></div><div class='div11'><p>等待人数<label>"+waitcount+"</label>人</p></div></div>");
}

//邀请专家
function  Inviteexperts(userId){
    var qq_id=window.localStorage.getItem("qq_id");
    var url='http://101.204.236.5/index/consult/chat_partial/addExportUser.jsp';
    $.ajax({
        type:'post',
        dataType:'json',
        url:url,
        data:{"curChatId":qq_id,"userId":userId},
        success:function(data){
            alert(JSON.stringify(data));
        },error:function(error){
            alert(JSON.stringify(error));
        }
    });
}