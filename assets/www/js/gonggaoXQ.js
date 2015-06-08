function getNotice(){
             var noticeid=window.localStorage.getItem("noticeid");
             var url='http://120.24.172.105:8000/fw?controller=com.xfsm.action.ArticleAction';
             if(noticeid==null){
                 alert("未正常获取id");
             }else{
                $.ajax({
                     type:'get',
                     datatype:'json',
                     url:url,
                     data:{"id":noticeid,"m":"show"},
                     success:function(data){
                         var json=eval("("+data+")");
                         var title=json.article_title;
                         var content=json.content;
                         var source=json.source;
                         var create_time=json.create_time;
                         CreateNoticeContent(title,content,source,create_time);
                     },error:function(error){
                            var error=eval("("+error+")");
                            alert(error);
                     }
                 })
           }
           //alert(noticeid);
 };

//gonggaoXQ.html和jiaoyuXQ.html共用js,不再请求ajax,采用取出保存在localstorage里的数据，加载到页面
function getzs(){
            //取出点击之后存储的id
             var id=window.localStorage.getItem("noticeid");
             //根据id取出对应的对象字符串
             var str=window.localStorage.getItem(id);
             //将对象字符串转换成对象
             var obj=JSON.parse(str);
             $(".div6 p").html((obj.article_title).substring(0,18));
             $(".div7 p").html(obj.source+"  "+obj.create_time);
             $(".div10 p").html(obj.content);
}


 /*向页面插入数据*/
 function CreateNoticeContent(title,content,source,create_time){
       $(".div6 p").html(title);
       $(".div7 p").html(source+"  "+create_time);
       $(".div10 p").html(content);
 }