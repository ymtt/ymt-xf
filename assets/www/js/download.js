/*拼接链接*/
function downpdf(files){
        var downloadurl='http://101.204.236.5/public/pub/upload/down.jsp?id='+files;
        return downloadurl;
}

function downloadfile(file){
    var fileTransfer = new FileTransfer();
    var uri = encodeURI(file);
    var fileURL = fullPath + httpheaderinfo(file);
    if(file==null){
        alert("没有文件提供下载");
    }else{
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
    }


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