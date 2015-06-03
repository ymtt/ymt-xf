function getnewsContent(){
    var ob=window.localStorage.getItem("newsobj");
    var obj=JSON.parse(ob);
    //alert("obj.id"+obj.id);
    //alert("obj['id']"+obj['id']);
    $(".div6 p").html(obj.article_title);
    $(".div7 p").html(obj.source+"  "+obj.create_time);
    $(".div10 p").html(obj.content);
}

function test4(){
    //取出点击之后存储的id
     var id=window.localStorage.getItem("wenziid");
     //根据id取出对应的对象字符串
     var str=window.localStorage.getItem(id);
     //将对象字符串转换成对象
     var obj=JSON.parse(str);
     $(".div6 p").html(obj.article_title);
     $(".div7 p").html(obj.source+"  "+obj.create_time);
     $(".div10 p").html(obj.content);
}