function getForumList(){
        var url='http://120.24.172.105:8000/xxfintf/bbs/getForumList';
         $.ajax({
                type:'get',
                datatype:'json',
                url:url,
                success:function(data){
                    var json=eval("("+data+")");
                    var list=json.data;
                    //定义主板块图标
                    var img=["image/icon_x.png","image/icon_x_1.png","image/icon_x_2.png","image/icon_x_3.png","image/icon_x_4.png","image/icon_g.png","image/icon_e.png"];
                   $.each(list,function(key){
                        var fid=list[key]['fid'];
                        var fup=list[key]['fup'];
                        var name=list[key]['name'];
                        var type=list[key]['type'];
                        var time=subTimes(list[key]['lastpost'],2);
                        var imgx=img[key];
                        CreateForumDom(fid,fup,name,type,time,imgx,key);
                    });
                }
         })
}
function CreateForumDom(fid,fup,name,type,date,img,x){
    /*if(fup==0){
        $(".div6 ul").append("<li><a href='javascript:setfid("+"\""+fid+"\""+")'><div class='div7'><img src='"+img+"'></div><p>"+name+"</p></a></li>");
    }*/

    if(fup==0){
             /*$("section").append("<div class='div4'><div class='div5'><p class='title'>"+name+
             "</p></div><div class='div6'><ul id='title"+fid+"'></ul></div></div>");*/
            $(".div6").append("<button class='btn' onclick='a(this,"+x+")' style='background: url(image/the-arrow_icon_right2.png)no-repeat 80% 50%' ><div class='div7'><img src='"+img+"'></div><p>"+name+"</p></button><div  class='demo1' style='display: none' id='title"+fid+"'><ul class='list'></ul></div>");

        }
        //如果是子论坛
        if(type=="forum"){
            /* $("<li><a href='javascript:setfid("+"\""+fid+"\""+")'><span>"+name+"<p>"+data+"</p></span></a></li>").appendTo($("#title"+fup));*/
            //alert(name+fup);
            $("#title"+fup).append("<li class='listx'><a href='javascript:setfid("+"\""+fid+"\""+")''><p>"+name+"</p></a></li>");
     }

}
//设置点击的板块的id,以及跳转
function setfid(fid){
    window.localStorage.setItem("fid",fid);
    window.location.href="forumlist.html";
}

//分割字符串
function subTimes(str,i){
    if(str)
        var trs= new Array(); //定义一数组
    trs=str.split("\t"); //字符分割
    var d = new Date(parseInt(trs[i])*1000);
    if(d>0){
        var res=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
        return res;
    }else{
        return "";
    }
}


function a(btn,demo)
{

   /* var oBtn = document.getElementById("btn1");
    var oDemo = document.getElementById("demo1");*/
    var oBtn=$(btn);
    var oDemo=$(".demo1:eq("+demo+")");

    if (oDemo.css("display")== "none") {
        //oBtn.style.background = "url(image/the-arrow_icon1.png)no-repeat 80% 50%"
        oBtn.css("background","url(image/the-arrow_icon1.png)no-repeat 80% 50%");
        //oDemo.style.display = "block";
        oDemo.css("display","block");
    }
    else {
        //oBtn.style.background = "url(image/the-arrow_icon_right2.png)no-repeat 80% 50%"
        oBtn.css("background","url(image/the-arrow_icon_right2.png)no-repeat 80% 50%");

        //oDemo.style.display = "none";
        oDemo.css("display","none");
    }


}