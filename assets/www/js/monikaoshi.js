function getmonishiti(type,year){
    var jl=type+',bookdate_'+year;
    var url='http://120.24.172.105/fw?t=app&controller=com.xfsm.action.ExamAction&m=exams';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"jl":jl},
        success:function(data){
            var list=data.datas['listData'];
            $.each(list,function(key){
                var id=list[key]['id'];
                var total_item=list[key]['total_item'];
                var total_score=list[key]['total_score'];
                var title=list[key]['exam_title'];
                var exam_time=list[key]['exam_time'];
                CreateList(id,title,total_item,exam_time,total_score);
            });
        },error:function(error){
            alert(JSON.stringify(error));
        }
    });
}
/*
* id:试题id
* title 试题标题
* total_item 总题数
* exam_time 考试时间
* total_score 总分数
* */
function CreateList(id,title,total_item,exam_time,total_score){
    $("#yiji").append("<a href=javascript:GoExamInfo(\'"+id+"\')><li><div class='div9'><img src='image/icon_l_1.png'></div><div class='div10'><p>"+title+"</p></div><div class='div11'><p>总题："+total_item+"题 &nbsp;考试时长："+exam_time+"分钟 &nbsp; 总分："+total_score+"分</p></div></li></a>");
}
function GoExamInfo(id){
    window.localStorage.setItem("examid",id);
    window.location.href="monikaoshiXQ.html";
}