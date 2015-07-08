/**
 * Created by Administrator on 2015/4/23.
 */


function getForumList(){
        var url='http://120.24.172.105:8000/xxfintf/bbs/getForumList';
         $.ajax({
                type:'get',
                datatype:'json',
                url:url,
                success:function(data){
                    var json=eval("("+data+")");
                    var list=json.data;
                    $.each(list,function(key){
                        var fid=list[key]['fid'];
                        var fup=list[key]['fup'];
                        var name=list[key]['name'];
                        var type=list[key]['type'];
                        var time=subTimes(list[key]['lastpost'],2);
                        CreateForumDom(fid,fup,name,type,time);
                    });
                }
         })
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

function setfid(fid){
    window.localStorage.setItem("fid",fid);
    window.location.href="forumlist.html";
}

//时间戳转换成时间
function getDate(tm){
    return new Date(parseInt(tm) * 1000).toLocaleString().replace(/年|月/g,"-").replace(/日/g,"");
}

function CreateForumDom(fid,fup,name,type,data){
    if(fup==0){
         $("section").append("<div class='div4'><div class='div5'><p class='title'>"+name+
         "</p></div><div class='div6'><ul id='title"+fid+"'></ul></div></div>");
    }
    //如果是子论坛
    if(type=="forum"){
         $("<li><a href='javascript:setfid("+"\""+fid+"\""+")'><span>"+name+"<p>"+data+"</p></span></a></li>").appendTo($("#title"+fup));
        //alert(name+fup);
    }
}


function a()
{

    var oBtn = document.getElementById("btn1");
    var oDemo = document.getElementById("demo1");

    if (oDemo.style.display == "none") {
        oBtn.style.background = "url(image/the-arrow_icon1.png)no-repeat 80% 50%"
        oDemo.style.display = "block";
    }
    else {
        oBtn.style.background = "url(image/the-arrow_icon_right2.png)no-repeat 80% 50%"
        oDemo.style.display = "none";
    }


}
function b()
{

    var oBtn1 = document.getElementById("btn2");
    var oDemo1 = document.getElementById("demo2");

    if (oDemo1.style.display == "block") {
        oBtn1.style.background = "url(image/the-arrow_icon_right2.png)no-repeat 80% 50%"
        oDemo1.style.display = "none";
    }
    else {
        oBtn1.style.background = "url(image/the-arrow_icon1.png)no-repeat 80% 50%"
        oDemo1.style.display = "block";
    }

}
function c()
{

    var oBtn2 = document.getElementById("btn3");
    var oDemo2 = document.getElementById("demo3");

    if (oDemo2.style.display == "block") {
        oBtn2.style.background = "url(image/the-arrow_icon_right2.png)no-repeat 80% 50%"
        oDemo2.style.display = "none";
    }
    else {
        oBtn2.style.background = "url(image/the-arrow_icon1.png)no-repeat 80% 50%"
        oDemo2.style.display = "block";
    }

}
function f()
{

    var oBtn3 = document.getElementById("btn4");
    var oDemo3 = document.getElementById("demo4");

    if (oDemo3.style.display == "block") {
        oBtn3.style.background = "url(image/the-arrow_icon_right2.png)no-repeat 80% 50%"
        oDemo3.style.display = "none";
    }
    else {
        oBtn3.style.background = "url(image/the-arrow_icon1.png)no-repeat 80% 50%"
        oDemo3.style.display = "block";
    }

}
function o()
{

    var oBtn3 = document.getElementById("btn5");
    var oDemo3 = document.getElementById("demo5");

    if (oDemo3.style.display == "block") {
        oBtn3.style.background = "url(image/the-arrow_icon_right2.png)no-repeat 80% 50%"
        oDemo3.style.display = "none";
    }
    else {
        oBtn3.style.background = "url(image/the-arrow_icon1.png)no-repeat 80% 50%"
        oDemo3.style.display = "block";
    }

}
function k()
{

    var oBtn3 = document.getElementById("btn6");
    var oDemo3 = document.getElementById("demo6");

    if (oDemo3.style.display == "block") {
        oBtn3.style.background = "url(image/the-arrow_icon_right2.png)no-repeat 80% 50%"
        oDemo3.style.display = "none";
    }
    else {
        oBtn3.style.background = "url(image/the-arrow_icon1.png)no-repeat 80% 50%"
        oDemo3.style.display = "block";
    }

}
function j()
{

    var oBtn3 = document.getElementById("btn7");
    var oDemo3 = document.getElementById("demo7");

    if (oDemo3.style.display == "block") {
        oBtn3.style.background = "url(image/the-arrow_icon_right2.png)no-repeat 80% 50%"
        oDemo3.style.display = "none";
    }
    else {
        oBtn3.style.background = "url(image/the-arrow_icon1.png)no-repeat 80% 50%"
        oDemo3.style.display = "block";
    }

}
