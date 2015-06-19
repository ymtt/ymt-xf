var url;
function serachit(){
    if($("#jilu")!=null||$("#jilu")!=""){
        $("#jilu").remove();
    }
    if($("section")!=null||$("section")!=""){
        $(".div12").remove();
    }
    var serachtype=window.localStorage.getItem("serachtype");
    var keywords=$("#search-keyword").val();
    if(keywords=="输入关键词"){
        keywords="";
    }

    if(serachtype=="zsky"){
        //alert("科研"+$("#search-keyword").val());
        serachky("kywx","","1",keywords);
    }else if(serachtype=="zsbz"){
        //alert("标准");
        serachky("bzgf","","1",keywords);
    }else if(serachtype=="zssp"){
        //alert("视频");
        serachky("spzl","","1",keywords);
    }
}
//科研搜索
function serachky(m,pagesize,start,kw){
        var url='http://120.24.172.105:8000/fw?controller=com.xfsm.action.KnowAction&t=app&jl=';
        $.ajax({
            type:'get',
            dataType:'json',
            url:url,
            data:{"m":m,"pagesize":pagesize,"start":start,"kw":kw},
            success:function(data){
                //alert(JSON.stringify(data));
                var list=data.datas['listData'];
                $.each(list,function(key){
                   //标题
                   var reg=eval("/"+kw+"/gi");
                   var toreplace="<font color=red>"+kw+"</font>";
                   var title=list[key]['article_title'];
                   var t=title.replace(reg,toreplace);
                   //alert(t);
                   //内容
                   var content=list[key]['content'];
                   var time=list[key]['create_time'];
                   if (typeof(content) == "undefined")
                   {
                        cons="";
                   }else{
                        cons=content.replace(/<[^>]*>/gi,'');
                   }

                  var hitnum=list[key]['hitnum'];
                  //文章id
                  var id=list[key]['id'];
                  //文章的json字符串
                  var obj=JSON.stringify(list[key]);

                  window.localStorage.setItem(id,obj);

                  CreateGuiFan(id,t,cons,time);

                  //alert(title+time);
                });

            },
        });
}

function CreateGuiFan(id,title,content,time){
    $("section").append("<div class='div12'><span>"+title+
    "</span><div class='div13'><p>"+content+
    "</p></div><div class='div14'><p>"+time+
    "</p></div></div>");
   // $("section").append(title);
   $()
}