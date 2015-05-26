/*根据板块id获取板块主题*/
function getSubjectList(){
             var fid=window.localStorage.getItem("fid");
             var url='http://120.24.172.105:8000/xxfintf/bbs/getSubjectListByFid?';
             if(fid==null){
                 alert("未正常获取fid");
             }else{
                $.ajax({
                     type:'get',
                     datatype:'json',
                     url:url,
                     data:{"fid":fid},
                     success:function(data){
                         var json=eval("("+data+")");
                         var list=json.data;
                         $.each(list,function(key){
                            var subject=list[key]['threadSubject'];
                            var threadTid=list[key]['threadTid'];
                            CreateForumList(subject,threadTid);
                         });
                     },error:function(error){
                            var error=eval("("+error+")");
                            alert(error);
                     }
                 })
           }
 };

 function threadTid(threadTid){
    window.localStorage.setItem("tid",threadTid);
    window.location.href="forumcontent.html";
 }

 /*向页面插入数据*/
 function CreateForumList(subject,threadTid){
   $("#list").append("<li><a href='javascript:threadTid("+"\""+threadTid+"\""+")'><p>"+subject+"</p></a></li>");
 }