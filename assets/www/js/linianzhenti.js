/*历年真题*/
function getlinianzhenti(year,level){
    var url='http://101.204.236.5/fw?controller=com.xfsm.action.ExamAction';
    var jl='hisdate_'+year+',type_'+level+',subject_';
    $.ajax({
        type:'post',
        dataType:'json',
        url:url,
        data:{"jl":jl,"m":"histroy","order":"new","start":"1","kw":"","pagesize":"200"},
        success:function(data){
            /*$("section").html(JSON.stringify(data));*/
            var list=data.datas['listData'];
            /*var maxzhenti1=1;
            var maxzhenti2=1;*/
            $.each(list,function(key){
                /*//试题的级别
                var level=list[key]['level'];*/
                //试题的id
                var id=list[key]['id'];
                //试题的标题
                var article_title=list[key]['article_title'];
                //试题的文件id
                var file=list[key]['files'];

                var obj=JSON.stringify(list[key]);
                window.localStorage.setItem(id,obj);

                if(level=="level001"){
                        CreateZhenTi(id,article_title,"xf_001",file);
                }else if(level=="level002"){
                        CreateZhenTi(id,article_title,"xf_002",file);
                }
            });

        },error:function(error){
            $("section").html(JSON.stringify(error));
        }
    });
}

function CreateZhenTi(id,title,div,files){
    var file=downpdf(files);
    $("#"+div).append("<li><a href=javascript:downloadfile(\'"+file+"\')><div class='div9'><img src='image/icon_l_1.png'></div><div class='div10'><p>"+title+"</p></div></a></li>");
}

function ToExamInfo(id){
    window.localStorage.setItem("ztid",id);
    window.location.href="linianzhentiXQ.html";
}

/*显示全部*/
function ToAll(val,url){
    window.localStorage.setItem("zhentiall",val);
    window.location.href=url;
}

