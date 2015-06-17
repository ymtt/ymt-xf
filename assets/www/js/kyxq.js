function getkyobj(){
    var kyid=window.localStorage.getItem("keyanid");
    var kystr=window.localStorage.getItem(kyid);
    var kyobj=JSON.parse(kystr);
    $(".div2 p").html((kyobj.article_title).substring(0,12));
    if(kyobj.article_title.length>12){
        $(".div2 p").append("......");
    }
    $(".div5 p").html(kyobj.content);
}