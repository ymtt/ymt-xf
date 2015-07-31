/*学习资料*/
function getxuexiziliao(){
    var url='http://101.204.236.5/fw?controller=com.xfsm.action.ExamAction&order=new&start=1&kw=';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"m":"book"},
        success:function(data){
         var list=data.datas['listData'];
            $.each(list,function(key){
                var id=list[key]['id'];
                var str=JSON.stringify(list[key]);

                var article_title=list[key]['article_title'];
                var content=list[key]['content'];

                window.localStorage.setItem(id,str);

                CreateZLList(id,article_title,content);
            });
        },error:function(error){
          alert(JSON.stringify(data));
        }
    });
}
function gets(){
    alert("s");
}
function CreateZLList(id,title,content){
    $("section").append("<div class='div3'><a href=javascript:ToXueXiZLXQ(\'"+id+"\')><div class='div4'><p>"+title+"</p></div><div class='div5'><img src='image/knowledge_02.png'></div><div class='div6'><p>"+content+"</p></div></a></div>");
}
function ToXueXiZLXQ(id){
    window.localStorage.setItem("ziliaoid",id);
    window.location.href="xuexiziliaoXQ.html";
}