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
    }else if(serachtype=="all"){
        QueryAll("0","10",keywords);
    }
}
//科研搜索
function serachky(m,pagesize,start,kw){
        var url='http://101.204.236.5/fw?controller=com.xfsm.action.KnowAction&t=app&jl=';
        $.ajax({
            type:'get',
            dataType:'json',
            url:url,
            data:{"m":m,"pagesize":pagesize,"start":start,"kw":kw},
            success:function(data){
                //alert(JSON.stringify(data));
                var list=data.datas['listData'];
                $.each(list,function(key){

                   //关键词的正则表达式
                   var reg=eval("/"+kw+"/gi");
                   //替换为
                   var toreplace="<font color=red>"+kw+"</font>";
                   //标题原始内容
                   var title=list[key]['article_title'];
                   //关键词使用正则表达式加红
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

                  CreateGuiFan(id,t,cons,time,m);

                  //alert(title+time);
                });

            },
        });
}

function CreateGuiFan(id,title,content,time,m){
    $("section").append("<a href='javascript:ToInfo("+"\""+m+"\","+"\""+id+"\""+")'><div class='div12'><span>"+title+
    "</span><div class='div13'><p>"+content+
    "</p></div><div class='div14'><p>"+time+
    "</p></div></div><a>");
   // $("section").append(title);
}

function ToInfo(m,id){
       if(m=="kywx"){
           window.localStorage.setItem("keyanid",id);
           window.location.href="keyanXQ.html";
       }else if(m=="bzgf"){
           window.localStorage.setItem("keyanid",id);
           window.location.href="keyanXQ.html";
       }else if(m=="spzl"){
            window.localStorage.setItem("shipid",id);
            window.location.href="shipinXQ.html";
       }else if(m==""){
           alert("提示");
       }
}

/*
*
* 全文检索
*
* */



 function QueryAll(start,limit,queryInfo){
    var user=window.localStorage.getItem("user");
    var url='http://101.204.236.5/webintf/search/getFullQueryForKN';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"userId":user,"queryWay":"app","queryType":"","queryInfo":queryInfo,"start":start,"limit":limit},
        success:function(data){
            var list=data.response['docs'];
            $.each(list,function(key){
                //id
                var id=list[key]['id'];
                //标题
                var doc_title=list[key]['doc_title'];
                //文件类型
                var doc_type=list[key]['doc_type'];

                var doc_content=list[key]['doc_content'];
                if (typeof(doc_tencent) == "undefined")
                {
                    cons="";
                }else{
                    cons=doc_content.replace(/<[^>]*>/gi,'');
                }
                CreateGuiFan(id,doc_title,doc_content,"时间","");
                if(key==list.length-1){
                    $("section").append("<div class='more'><a href=javascript:addmore('10',\'"+queryInfo+"\') class='gray'>加载更多</a></div>");
                }
            });
        }
    });
}
var xstart=1;
function addmore(limit,queryinfo){
    QueryAll(xstart,limit,queryinfo);
    xstart++;
    $(".gray").remove();
}
