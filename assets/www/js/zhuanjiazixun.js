/*****专家咨询******/

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
                 //履历
                 var resume=(list[key]['resume']).substring(0,13);
                 if(key=="0"){
                    CreateExpertzxleft(name,resume);
                 }else if(key=="1"){
                    CreateExpertzxright(name,resume);
                 }

            });
        },
    });
}
//专家咨询页面专家
function CreateExpertzxleft(name,resume){
    $(".div11").append("<div class='div11-left'><div class='div16'><a href='zhuanjiazixunxqjm.html'><div class='div13'><img src='image/25.png'></div><div class='div14'><p>姓名："+name+
                                       "</p></div><div class='div15'><p>"+resume+"</p></div></a></div></div>");
}
function CreateExpertzxright(name,resume){
    $(".div11").append("<div class='div11-right'><div class='div16-1'><a href='zhuanjiazixunxqjm.html'><div class='div13'><img src='image/25.png'></div><div class='div14'><p>姓名："+name+
                                       "</p></div><div class='div15'><p>"+resume+"</p></div></a></div></div>");
}