/**
 * Created by Administrator on 2015/7/22.
 */
//加载更多
var index=2;
function addmore(){
    //getallexam("2015",index,5);
    getNThreadContent(index);
    index++;
    $(".wenzipl").remove();
}
function getNThreadContent(index){
    var tid=window.localStorage.getItem("tid");
    var url='http://101.204.236.5/bbs/bbs/getPostListByTid.do';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"tid":tid,"index":index},
        success:function(data){
            var list=data.data;
            $.each(list,function(key){

                if(key=="0"){
                    return true;
                }
                var subject=list[key]['subject'];
                var author=list[key]['author'];
                var dateline=list[key]['dateline'];
                var message=list[key]['message'];
                var newmessage=message.replace(/\images\//g,"http://120.24.172.105/bbs/images/");
                var count=data.count;
                //CreateContent(subject,author,dateline,newmessage,count);
                CreateComment(author,newmessage,dateline);
                //如果当前已经是最后一个元素，添加一个加载更多
                if(key==list.length-1){
                    $("section").append("<div class='wenzipl'><a href='javascript:addmore()'>加载更多</a></div>");
                }
            });
        }
    });
}

function CreateComment(author,dateline,message){
    $("section").append("<div class='div3'><div class='div4'><div class='div5'><div class='div7'><p>"+author+"</p></div><div class='div8'><p>"+dateline+"</p></div></div></div><div class='div12'><p>"+message+"</p></div></div>");
}
