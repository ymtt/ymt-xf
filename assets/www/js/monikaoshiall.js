/**
 * Created by Administrator on 2015/7/30.
 * 模拟考试查看全部
 */
  // 加载更多
var index=2;
function addmore(){
    getallexam("2015",index,5);
    index++;
    $(".moreexam").remove();
}

function getallexam(year,start,pagesize){
    var type=window.localStorage.getItem("monikaoshiall");
    var jl=type+',bookdate_'+year;
    var url='http://101.204.236.5/fw?t=app&controller=com.xfsm.action.ExamAction&m=exams';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"jl":jl,"pagesize":pagesize,"start":start},
        success:function(data){
            var list=data.datas['listData'];
            $(".divZ1 p").html(type);
            $.each(list,function(key){
                var id=list[key]['id'];
                var total_item=list[key]['total_item'];
                var total_score=list[key]['total_score'];
                var title=list[key]['exam_title'];
                var exam_time=list[key]['exam_time'];
                CreateExamDom(id,title,total_item,exam_time,total_score);
                if(key==pagesize-1){
                    $("section").append("<div class='moreexam'><a href='javascript:addmore()'>加载更多</a></div>");
                }
            });

        },error:function(error){
            alert(JSON.stringify(error));
        }
    });
}

function CreateExamDom(id,title,total_item,exam_time,total_score){
    $("section").append("<div class='div4'><a href=javascript:GoExamInfo(\'"+id+"\')><div class='div4-1'><div class='div5'><img src='image/icon_l_1.png'></div><div class='div6'><p>"+title+"</p></div><div class='div7'><p>总题："+total_item+"题 &nbsp;考试时长："+exam_time+"分钟 &nbsp; 总分："+total_score+"分</p></div></div></a></div>");
}
function GoExamInfo(id){
    window.localStorage.setItem("examid",id);
    window.location.href="monikaoshiXQ.html";
}
