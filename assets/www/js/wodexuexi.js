/**
 * Created by Administrator on 2015/7/27.
 */
function getMyExam(){
    var session=window.sessionStorage.getItem("session");
    var url='http://101.204.236.5/fw?t=app&controller=com.xfsm.action.ExamAction&m=my_exam';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"sId":session},
        success:function(data){
            var list=data.datas['listData'];
            $.each(list,function(key){
                //标题
                var title=list[key]['exam_title'];
                //总分
                var total_score=list[key]['total_score'];
                //总题
                var total_item=list[key]['total_item'];
                //考试时长
                var exam_time=list[key]['exam_time'];
                //试题id
                var fk_exam_id=list[key]['fk_exam_id'];
                CreateMyExam(title,total_score,total_item,exam_time,fk_exam_id);
                //alert(title);
            });
        },error:function(error){

        }
    });
}
/*
* 创建我的考试DOM
* */
function CreateMyExam(title,total_score,total_item,exam_time,fk_exam_id){
    $("#nav_tab1").append("<div class='KS'><a href='javascript:alert("+fk_exam_id+")'><div class='KS-1'><p>"+title+"</p></div><div class='KS-2'><p>总题： "+total_item+"题 考试时长："+exam_time+"分钟 总分："+total_score+"分</p></div></a></div>");
}
/*
*
* 我的下载
* */
function getMyDown(start){
    var url='http://101.204.236.5/fw?controller=com.xfsm.action.ExamAction&m=MyDown&order=new&kw=';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"start":start},
        success:function(data){
            alert(JSON.stringify(data));
        },error:function(error){
            alert(JSON.stringify(error));
        }
    });
}

function getMyCollet(start,pagesize){
    var session=window.sessionStorage.getItem("session");
    var url=' http://101.204.236.5/fw?t=app&controller=com.xfsm.action.CollectAction&m=edu';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"start":start,"pagesize":pagesize,"sId":session},
        success:function(data){
            alert("收藏提示："+JSON.stringify(data));
        },error:function(error){
            alert(JSON.stringify(error));
        }
    });
}

