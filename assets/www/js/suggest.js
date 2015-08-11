/*提交建议*/
function submitsuggest(title,content,phonenumber){
    var sid=window.sessionStorage.getItem("session");
    var url='http://101.204.236.5/fw?controller=com.xfsm.action.AdviceAPIAction&m=advice';
    $.ajax({
        type:'post',
        dataType:'json',
        url:url,
        data:{"sId":sid,"title":title,"content":content,"phonenumber":phonenumber},
        success:function(data){
            if(data.result!="Y"){
                alert(data.result);
            }else{
                $("#title").val("");
                $("#phone").val("");
                $("#con").val("");
            }

        },error:function(error){
            alert(JSON.stringify(error));
        }
    });
}