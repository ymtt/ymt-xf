function getmonishiti(type,year){
    var jl=type+',bookdate_'+year;
    var url='http://120.24.172.105/fw?t=app&controller=com.xfsm.action.ExamAction&m=exams';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"jl":jl},
        success:function(data){
            alert(JSON.stringify(data));
        },error:function(error){
            alert(JSON.stringify(error));
        }
    });
}