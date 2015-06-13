function getkyobj(){
    var kyid=window.localStorage.getItem("keyanid");
    var kystr=window.localStorage.getItem(kyid);
    var kyobj=JSON.parse(kystr);
    $(".div2 p").html((kyobj.article_title).substring(0,4)+".....");
    $(".div5 p").html(kyobj.content);
}