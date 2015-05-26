function getNotice(domid){
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
                         var content=json.centent;
                         CreateNoticeContent(domid,content);
                     },error:function(error){
                            var error=eval("("+error+")");
                            alert(error);
                     }
                 })
           }
           //alert(noticeid);
 };

 /*向页面插入数据*/
 function CreateNoticeContent(domid,content){
   $("#"+domid).html(content);
 }