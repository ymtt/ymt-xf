/*历年真题*/
function getlinianzhenti(){
    var url='http://120.24.172.105:8000/fw?controller=com.xfsm.action.ExamAction';
    $.ajax({
        type:'post',
        dataType:'json',
        url:url,
        data:{"jl":"hisdate_2015,type_,subject_","m":"histroy","order":"new","start":"1","kw":"","pagesize":"200"},
        success:function(data){
            /*$("section").html(JSON.stringify(data));*/
            var list=data.datas['listData'];
            var maxzhenti1=1;
            var maxzhenti2=1;
            $.each(list,function(key){
                //试题的级别
                var level=list[key]['level'];
                //试题的id
                var id=list[key]['id'];
                //试题的标题
                var article_title=list[key]['article_title'];

                var obj=JSON.stringify(list[key]);
                window.localStorage.setItem(id,obj);

                if(level=="level001"){
                    if(maxzhenti1<=5){
                        CreateZhenTi(id,article_title,"xf_001");
                        maxzhenti1++;
                    }
                }else if(level=="level002"){
                    if(maxzhenti2<=5){
                        CreateZhenTi(id,article_title,"xf_002");
                        maxzhenti2++;
                    }
                }
            });

        },error:function(error){
            $("section").html(JSON.stringify(error));
        }
    });
}

function CreateZhenTi(id,title,div){
    $("#"+div).append("<li><a href=javascript:ToExamInfo(\'"+id+"\')><div class='div9'><img src='image/icon_l_1.png'></div><div class='div10'><p>"+title+"</p></div></a></li>");
}

function ToExamInfo(id){
    window.localStorage.setItem("ztid",id);
    window.location.href="linianzhentiXQ.html";
}

/*模拟考试*/
function getmoni(){
    var url='http://120.24.172.105:8000/fw?t=app&controller=com.xfsm.action.ExamAction';
    $.ajax({
        type:'post',
        dataType:'json',
        url:url,
        data:{"m":"exams","jl":"二级消防工程师,bookdate_2015"},
        success:function(data){
            $("section").html(JSON.stringify(data));
        },error:function(error){
            $("section").html(JSON.stringify(error));
        }
    });
}

