function getkyobj(){
    var kyid=window.localStorage.getItem("keyanid");
    var kystr=window.localStorage.getItem(kyid);
    var kyobj=JSON.parse(kystr);

    $(".div2 p").html((kyobj.article_title).substring(0,12));

    if(kyobj.article_title.length>12){
        $(".div2 p").append("......");
    }
    var content=kyobj.content;
    var newcontent=content.replace(/\/attached/g, "http://120.24.172.105/attached");
    $(".div5 p").html(newcontent);
}

function downpdf(){
    var kyid=window.localStorage.getItem("keyanid");
    var kystr=window.localStorage.getItem(kyid);
    var kyobj=JSON.parse(kystr);
    if(typeof (kyobj.files)=="undefined"){
        return null;
    }else{
        var downloadurl='http://120.24.172.105/public/pub/upload/down.jsp?ai='+kyobj.id+'&id='+kyobj.files;
        return downloadurl;
    }
}

function downloadfile(file){
    var fileTransfer = new FileTransfer();
    var uri = encodeURI(file);
    var fileURL = fullPath + httpheaderinfo(file);

    fileTransfer.download(
        uri,
        fileURL,
        function(entry) {
            console.log("download complete: " + entry.toURL());
        },
        function(error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("upload error code" + error.code);
        },
        false,
        {
            headers: {
                "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
            }
        }
    );

    fileTransfer.onprogress(
        
    );

}

//获取httpheader信息
function httpheaderinfo(url){
    var result;
    $.ajax({
        type: 'HEAD', // 获取头信息，type=HEAD即可
        url : url,
        async:false,
        complete: function( xhr,data ){
           var lmname=xhr.getResponseHeader('Content-Disposition');
           unds=lmname.substring(20,lmname.length);
           result=unds;
        }
    });
    return result;
}