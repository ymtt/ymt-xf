function getInfo(){
    var id=window.localStorage.getItem("ziliaoid");
    var str=window.localStorage.getItem(id);
    var obj=JSON.parse(str);
    $(".div2 p").html(obj.article_title);
    $(".div5 p").html(obj.content);
}