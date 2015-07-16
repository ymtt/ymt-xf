/*历年真题详情*/
function getExamInfo(){
    var id=window.localStorage.getItem("ztid");
    var str=window.localStorage.getItem(id);
    var obj=JSON.parse(str);
    //alert(obj.content);
    $(".container").html(obj.content);
}