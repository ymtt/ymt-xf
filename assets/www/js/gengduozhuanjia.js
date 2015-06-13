/***********更多专家**********/
function expertlist(pagesize,start){
    var url='http://120.24.172.105:8000/fw?controller=com.xfsm.action.ExpertAction&t=app&m=list';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"pagesize":pagesize,"start":start,"jl":"","kw":""},
        success:function(data){
            var list=data.datas['listData'];
            $.each(list,function(key){
                //姓名
                 var name=list[key]['user_name'];
                 //头像
                 var head_pic='http://120.24.172.105:8000/public/pub/upload/down.jsp?id='+list[key]['head_pic'];
                //级别
                 var level=list[key]['level'];

                 if(level=="1"){
                    levelname="普通专家";
                 }else if(level=="2"){
                    levelname="资深专家";
                 }else if(level=="3"){
                    levelname="国家级";
                 }
                 var expertid=list[key]['fk_user_id'];
                 var objstr=JSON.stringify(list[key]);
                 window.localStorage.setItem(expertid,objstr);
                 CreateMoreExpert(expertid,head_pic,name,levelname,"0","0");
            });
        },
    });
}
//添加专家列表
function CreateMoreExpert(id,head_pic,name,expertlevel,consultnum,waitnum){
    $(".div5 ul").append("<li><a href='javascript:ToExpertXq("+"\""+id+"\""+")'><div class='div6'><img src='"+head_pic+"'></div><div class='div7'><p>"+name+
    "</p></div><div class='div8'><p>"+expertlevel+"</p></div><div class='div9'><p>咨询人数:</p></div><div class='div10'><p>"+consultnum+
    "人</p></div><div class='div11'><p>等待人数:</p></div><div class='div10'><p>"+waitnum+
    "人</p></div></a></li>");
}
/********专家搜索************/
function serachexpertlist(pagesize,start,kw){
    var url='http://120.24.172.105:8000/fw?controller=com.xfsm.action.ExpertAction&t=app&m=list';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"pagesize":pagesize,"start":start,"jl":"","kw":kw},
        success:function(data){
            $(".div5 ul").html("");
            var list=data.datas['listData'];
            $.each(list,function(key){
                //姓名
                 var name=list[key]['user_name'];
                 //头像
                 var head_pic='http://120.24.172.105:8000/public/pub/upload/down.jsp?id='+list[key]['head_pic'];
                //级别
                 var level=list[key]['level'];

                 if(level=="1"){
                    levelname="普通专家";
                 }else if(level=="2"){
                    levelname="资深专家";
                 }else if(level=="3"){
                    levelname="国家级";
                 }
                 CreateMoreExpert(head_pic,name,levelname,"0","0");
            });
        },
    });
}
/*****跳转到专家详情界面*****/
function ToExpertXq(id){
    window.localStorage.setItem("clickexpert",id);
    window.location.href="zhuanjiazixunxqjm.html";
}