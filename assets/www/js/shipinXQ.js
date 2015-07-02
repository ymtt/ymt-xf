/**
 * Created by Administrator on 2015/6/2.
 */

    function  change_nav(heath_center) {
        for (var i = 1; i <= 4; i++) {
        if (i == heath_center) {
        document.getElementById("nav_item" + i).className = "nav_item";
        document.getElementById("nav_tab" + i).style.display = "";
        document.getElementById("nav_item" + i).style.background= "#FFFFFF";
        document.getElementById("p" + i).style.color = "#05A0D7";

        }
        else {
        document.getElementById("nav_item" + i).className = "";
        document.getElementById("nav_tab" + i).style.display = "none";
        document.getElementById("nav_item" + i).style.background= "";
        document.getElementById("p" + i).style.color = "";

        }
        }
        }
    function showdiv() {
        document.getElementById("bg").style.display ="block";
        document.getElementById("show").style.display ="block";
        }
    function hidediv() {
        document.getElementById("bg").style.display ='none';
        document.getElementById("show").style.display ='none';
        }
var timeOutEvent=0;//定时器
//开始按
function gtouchstart(i){
    timeOutEvent = setTimeout("longPress()",500);//这里设置定时器，定义长按500毫秒触发长按事件，时间可以自己改，个人感觉500毫秒非常合适
    if(i!=0) {
        document.getElementById("h"+i).style.backgroundColor = "#EDEDED";
    }
    return false;

}
//手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
function gtouchend(i){
    clearTimeout(timeOutEvent);//清除定时器
    if(timeOutEvent!=0){
        //这里写要执行的内容（尤如onclick事件）
        if(i!=0) {
            document.getElementById("h"+i).style.backgroundColor = "#FFFFFF";
        }
    }
    return false;
};
//如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
function gtouchmove(i){
    clearTimeout(timeOutEvent);//清除定时器
    timeOutEvent = 0;
    if(i!=0) {
        document.getElementById("h"+i).style.backgroundColor = "#FFFFFF";
    }
};

//真正长按后应该执行的内容
function longPress(){
    timeOutEvent = 0;
    document.getElementById("bg1").style.display ="block";
    document.getElementById("show1").style.display ="block";
    document.getElementById("h1").style.backgroundColor = "#FFFFFF";
    document.getElementById("h2").style.backgroundColor = "#FFFFFF";
    document.getElementById("h3").style.backgroundColor = "#FFFFFF";
}
function a(){
    document.getElementById("bg1").style.display="none";
    document.getElementById("show1").style.display ="none";

}


//获取保存在localStorage的视频信息
function getspobj(){
    var spid=window.localStorage.getItem("shipid");
    var spstr=window.localStorage.getItem(spid);
    var spobj=JSON.parse(spstr);
    $(".jianj-3 p").html((spobj.content));
    alert(spobj.id);
 }