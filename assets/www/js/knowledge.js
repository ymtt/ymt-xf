/**
 * Created by Administrator on 2015/5/11.
 */
function  change_nav(heath_center) {
    for (var i = 1; i <= 6; i++) {
        if (i == heath_center) {
            document.getElementById("nav_item" + i).className = "nav_item";
            document.getElementById("nav_tab" + i).style.display = "";
            document.getElementById("p" + i).style.color = "#FFFFFF";
            document.getElementById("p" + i).style.background = "#05A0D7";
            document.getElementById("p" + i).style.borderRadius = "6px";
        }
        else {
            document.getElementById("nav_item" + i).className = "";
            document.getElementById("nav_tab" + i).style.display = "none";
            document.getElementById("p" + i).style.color = "";
            document.getElementById("p" + i).style.background = "";
            document.getElementById("p" + i).style.borderRadius = "";
        }
    }
}
function a1(x) {
    document.getElementsByClassName("ky-4")[x].style.backgroundImage = "url(image/comment_collect1_icon.png)";
}
function a2(x){
    document.getElementsByClassName("ky-4")[x].style.backgroundImage= "";
}
function s1(x) {
    document.getElementsByClassName("ky-5")[x].style.backgroundImage = "url(image/comment_comment1_icon.png)";
}
function s2(x){
    document.getElementsByClassName("ky-5")[x].style.backgroundImage= "";
}