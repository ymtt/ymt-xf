/**
 * Created by Administrator on 2015/7/17.
 */
function getzhentiall(start){
    //试题的级别
    var level=window.localStorage.getItem("zhentiall");
    var url='http://120.24.172.105/fw?controller=com.xfsm.action.ExamAction';
    var jl='hisdate_,type_'+level+',subject_';
    $.ajax({
        type:'post',
        dataType:'json',
        url:url,
        data:{"jl":jl,"m":"histroy","order":"new","start":start,"kw":"","pagesize":"200"},
        success:function(data){

            var list=data.datas['listData'];

            $.each(list,function(key){
                //试题的id
                var id=list[key]['id'];
                //试题的标题
                var article_title=list[key]['article_title'];
                //试题的文件id
                var file=list[key]['files'];
                var hitnum=list[key]['hitnum'];

                var obj=JSON.stringify(list[key]);
                window.localStorage.setItem(id,obj);
                CreateZhenTiAll(id,article_title,file,hitnum);
            });

        },error:function(error){
            $("section").html(JSON.stringify(error));
        }
    });
}

function CreateZhenTiAll(id,title,files,hitnum){
    var file=downpdf(files);
    /*$("#"+div).append("<li><a href=javascript:downloadfile(\'"+file+"\')><div class='div9'><img src='image/icon_l_1.png'></div><div class='div10'><p>"+title+"</p></div></a></li>");*/
    $("section").append(" <div class='div4'><a href=javascript:downloadfile(\'"+file+"\')><div class='div4-1'><div class='div5'><img src='image/icon_l_1.png'></div><div class='div6'><p>"+title+"</p></div></div></a><div class='div9'><img src='image/icon_collect_l.png' id='div8' class='div8' onclick='change_pic(this)'><p>"+hitnum+"</p></div></div>");
}