/*图片新闻详情*/
function showxq(){
   var id=window.localStorage.getItem("picnewsid");
   //根据id取出对应的对象字符串
   var str=window.localStorage.getItem(id);
   //将对象字符串转换成对象
   var obj=JSON.parse(str);

   $(".div8 p").html(obj.article_title);
   $(".div6").html("<img src='http://101.204.236.5"+obj.pic+"'>");
   $.ajax({
        type:'get',
        dataType:'json',
        url:'http://101.204.236.5/fw?controller=com.xfsm.action.ArticleAction&m=show',
        data:{"id":id},
        success:function(data){
            var con=(data.centent).replace(/\/attached/g,"http://101.204.236.5/attached");
           $(".div10 p").html(con);
          // alert(data);
        },error:function(error){
            alert(JSON.stringify(error));
        }
   });
}

//图片资讯列表
function getpicinfo(){
       var url='http://101.204.236.5/fw?controller=com.xfsm.action.ArticleAction';
       //var srcs='http://g.hiphotos.baidu.com/image/pic/item/63d0f703918fa0ec56c59e0f249759ee3d6ddbb6.jpg';
       $.ajax({
           type:'get',
           dataType:'json',
           url:url,
           data:{"m":"list","type":"xf_article_h_news_photo","order":"new","start":"1"},
           success:function(data){
               //alert(data.datas['listData'][0]['id']);
               var list=data.datas['listData'];
               $.each(list,function(key){
               //每一个对象的id
               var id=list[key]['id'];
               //每一个对象的字符串
               var obj=JSON.stringify(list[key]);
               //保存成键值对
               var title=list[key]['article_title'];
                window.localStorage.setItem(id,obj);
               $("section").append("<div class='a' onclick='Totupian("+"\""+id+"\""+")'><span>"+title+"</span><p>"+title+"</p></div>");
               });
           },error:function(error){
               alert(JSON.stringify(error));
           }
        });
}

function Totupian(id){
    //保存点击的那一个新闻id
    window.localStorage.setItem("picnewsid",id);
    //跳转到tupianXQ.html
    window.location.href="tupianXQ.html";
    //alert(id);
}