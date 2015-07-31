function getMy_post(user){
    var url='http://101.204.236.5/bbs/bbs/%20getThreadListByUserName.do';
    $.ajax({
        type:'get',
        dataType:'json',
        data:{"user":user},
        url:url,
        success:function(data){
            var list=data.data;
            $.each(list,function(key){
                //主题id
                var tid=list[key]['tid'];
                //作者
                var author=list[key]['author'];
                //标题
                var subject=list[key]['threadSubject'];
                /*//时间
                var time=TimestampConversion(list[key]['dateline']);*/
                var dateline=list[key]['lastpost'];

                //评论
                var comment=list[key]['replies'];

                //Createlaest_Reply(tid,author,comment,dateline,subject);
                CreateMyPost(tid,comment,dateline,subject);
            })
        }
    });
}

function CreateMyPost(tid,comment,dateline,subject){
    $("#nav_tab1").append("<a href=javascript:alert('11111')><div class='tiezhi'><div class='div9'><p>"+subject+"</p></div><div class='div10'><p>"+comment+"</p><img src='image/icon_comments.png'></div><div class='div11'><p>"+dateline+"</p></div></div></a>");
}
