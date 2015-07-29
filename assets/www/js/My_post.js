function getMy_post(){
    var url='http://120.24.172.105/bbs/bbs/%20getThreadListByUserName.do';
    $.ajax({
        type:'get',
        dataType:'json',
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

                Createlaest_Reply(tid,author,comment,dateline,subject);

            })
        }
    });
}