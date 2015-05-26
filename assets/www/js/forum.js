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

function  change_nav(heath_center){
    for(var i=1;i<=5;i++){
    if(i==heath_center){
    document.getElementById("nav_item"+i).className="nav_item";
    document.getElementById("nav_tab"+i).style.display="";
    document.getElementById("p"+i).style.color="#05A0D7";
    document.getElementById("p"+i).style.textDecoration="underline"
    }
    else{
    document.getElementById("nav_item"+i).className="";
    document.getElementById("nav_tab"+i).style.display="none";
     document.getElementById("p"+i).style.color="";
        document.getElementById("p"+i).style.textDecoration=""
    }
    }
    }

function h1(x) {
    document.getElementsByClassName("div8")[x].style.backgroundImage = "url(image/forwarding_Press-the_icon.png)";
}
function h2(x){
    document.getElementsByClassName("div8")[x].style.backgroundImage= "";
}
function a1(x) {
    document.getElementsByClassName("div9")[x].style.backgroundImage = "url(image/comment_collect1_icon.png)";
}
function a2(x){
    document.getElementsByClassName("div9")[x].style.backgroundImage= "";
}
function s1(x) {
    document.getElementsByClassName("div10")[x].style.backgroundImage = "url(image/comment_comment1_icon.png)";
}
function s2(x){
    document.getElementsByClassName("div10")[x].style.backgroundImage= "";
}
