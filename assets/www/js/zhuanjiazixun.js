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
                 //专家di
                 var expertid=list[key]['fk_user_id'];
                 //头像
                var head_pic='http://120.24.172.105:8000/public/pub/upload/down.jsp?id='+list[key]['head_pic'];
                 if(key=="0"){
                    CreateExpertzxleft(expertid,name,resume,head_pic);
                 }else if(key=="1"){
                    CreateExpertzxright(expertid,name,resume,head_pic);
                 }

            });
        },
    });
}
//专家咨询页面专家
function CreateExpertzxleft(id,name,resume,head_pic){
    $(".div11").append("<div class='div11-left'><div class='div16'><a href='javascript:ToExpertXq("+"\""+id+"\""+")'><div class='div13'><img src='"+head_pic+"'></div><div class='div14'><p>姓名："+name+
                                       "</p></div><div class='div15'><p>"+resume+"</p></div></a></div></div>");
}
function CreateExpertzxright(id,name,resume,head_pic){
    $(".div11").append("<div class='div11-right'><div class='div16-1'><a href='javascript:ToExpertXq("+"\""+id+"\""+")'><div class='div13'><img src='"+head_pic+"'></div><div class='div14'><p>姓名："+name+
                                       "</p></div><div class='div15'><p>"+resume+"</p></div></a></div></div>");
}

/*****跳转到专家详情界面*****/
function ToExpertXq(id){
    window.localStorage.setItem("clickexpert",id);
    window.location.href="zhuanjiazixunxqjm.html";
}

/********热点咨询和最近咨询**********/
function gethhotandnew(m,pagesize,start){
    var url='http://120.24.172.105:8000/fw?controller=com.xfsm.action.ArticleAction&t=app';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"start":start,"pagesize":pagesize,"m":m},
        success:function(data){
            var list=data.datas['listData'];
            $.each(list,function(key){
                var article_title=list[key]['article_title'];
                var content=((list[key]['content']).replace(/<[^>]*>/gi,'')).substring(0,40);
                if(m=="lastest"){
                     CreateZuijin(article_title,content);
                }else if(m="hot"){
                     CreateHot(article_title,content);
                }

                //alert(JSON.stringify(data));
            });
        },
    });
}

function CreateZuijin(article_title,content){
    $(".div18:eq(0)").html("<a href='zuijinzixun.html'><div class='div20'><p>"+article_title+
    "</p></div><div class='div21'><p>"+content+"....</p></div></a>");
}
function CreateHot(article_title,content){
    $(".div18:eq(1)").html("<a href='redianzixun.html'><div class='div20'><p>"+article_title+
    "</p></div><div class='div21'><p>"+content+"....</p></div></a>");
}

/********************/