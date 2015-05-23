/**
 * Created by Administrator on 2015/4/23.
 */

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
