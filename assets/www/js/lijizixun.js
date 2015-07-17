function clickconsultation(title,content,points,expert){
        var session=window.sessionStorage.getItem("session");
        var url='http://120.24.172.105/fw?controller=com.xfsm.action.ChatAction&t=app&m=startChat';
           if(session==null){
                alert("session="+session);
           }else{
                $.ajax({
                    type:'post',
                    dataType:'json',
                    url:url,
                    data:{"SESSIONID":session,"title":title,"content":content,"points":points,"expert":expert},
                    success:function(data){
                        //alert(JSON.stringify(result));
                        //var json = eval("(" +data+ ")");
                        //data为对象类型
                        //alert("qq_id"+data.qq_id);
                            window.localStorage.setItem("qq_id",data.qq_id);
                            window.location.href="huihuaXQ.html";
                    },error:function(error){
                        alert("ajax失败");
                        var last=JSON.stringify(error);
                        alert(last);
                    }
                });
                //alert("session不为空"+session);
         }
};

 function showdiv() {
            document.getElementById("bg").style.display ="block";
            document.getElementById("show").style.display ="block";
 }
function hidediv() {
            document.getElementById("bg").style.display ='none';
            document.getElementById("show").style.display ='none';
}

function getsubclass(pid){
     var url='http://120.24.172.105/fw?controller=com.xfsm.action.TypeAction&t=app&m=st&type=PUB_XXF_ZXFL&bt=tree';
        $.ajax({
            type:'get',
            dataType:'json',
            url:url,
            success:function(data){
            var list=data.listData;
            $.each(list,function(key){
                if(list[key].pid==pid){
                   //alert(list[key].code);
                   $("#show1").append("<div class='div12' id="+"\""+list[key].id+"\""+"  onclick='opt1("+"\""+"two"+"\""+",this)'><p value='"+list[key].id+"'>"+list[key].code+"</p></div>");
                }
            })
            },
      });
}

function getfaclass(){
    var url='http://120.24.172.105/fw?controller=com.xfsm.action.TypeAction&t=app&m=st&type=PUB_XXF_ZXFL&bt=tree';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        success:function(data){
        var list=data.listData;
        $.each(list,function(key){
            if(list[key].pid=="-1"){
               //alert(list[key].code);
               $("#show").append("<div class='div12' id="+"\""+list[key].id+"\""+"  onclick='opt("+"\""+"div5"+"\""+",this)'><p value='"+list[key].id+"'>"+list[key].code+"</p></div>");
            }
        })
        }
    });
}

//获取专家
function expertlist(pagesize,start){
    var url='http://120.24.172.105/fw?controller=com.xfsm.action.ExpertAction&t=app&m=list';
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
                 var head_pic='http://120.24.172.105/'+list[key]['head_pic'];
                //级别
                 var level=list[key]['level'];

                 if(level=="level1"){
                    levelname="普通专家";
                 }else if(level=="level2"){
                    levelname="资深专家";
                 }else if(level=="level3"){
                    levelname="国家级";
                 }
                 var expertid=list[key]['fk_user_id'];
                 var objstr=JSON.stringify(list[key]);
                 window.localStorage.setItem(expertid,objstr);
                 SelectedExpert(expertid,name,levelname,"0","0");
            });
        },
    });
}

function SelectedExpert(id,name,expertlevel,consultnum,waitnum){
    $("#show2").append("<div class='div13' onclick='selectedexpert("+"\""+id+"\""+","+"\""+name+"\""+")'><div class='div14'><p>"+name+"</p></div><div class='div15'><p>["+expertlevel+"]</p></div><div class='div16'><p>咨询人数<label>"+consultnum+"</label>人</p></div><div class='div17'><p>等待人数<label>"+waitnum+"</label>人</p></div></div>");
}