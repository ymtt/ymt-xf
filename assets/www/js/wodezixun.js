/**
 * Created by Administrator on 2015/5/6.
 */
function  change_nav(heath_center) {

        if (1 == heath_center) {
            document.getElementById("nav_item" + 1).className = "nav_item";
            document.getElementById("nav_tab" + 1).style.display = "";
            document.getElementById("p" + 1).style.color = "#05A0D7";
            document.getElementById("img"+1).style.backgroundImage = "url(image/z_session1_icon.png)";
        }
        else {
            document.getElementById("nav_item" + 1).className = "";
            document.getElementById("nav_tab" + 1).style.display = "none";
            document.getElementById("p" + 1).style.color = "";
            document.getElementById("img"+1).style.backgroundImage = "url(image/z_session_icon-.png)";
        }
    if (2 == heath_center) {
        document.getElementById("nav_item" + 2).className = "nav_item";
        document.getElementById("nav_tab" + 2).style.display = "";
        document.getElementById("p" + 2).style.color = "#05A0D7";
        document.getElementById("img"+2).style.backgroundImage = "url(image/z_contacts1_icon.png)";
    }
    else {
        document.getElementById("nav_item" + 2).className = "";
        document.getElementById("nav_tab" + 2).style.display = "none";
        document.getElementById("p" + 2).style.color = "";
        document.getElementById("img"+2).style.backgroundImage = "";
    }
    if (3 == heath_center) {
        document.getElementById("nav_item" + 3).className = "nav_item";
        document.getElementById("nav_tab" + 3).style.display = "";
        document.getElementById("p" + 3).style.color = "#05A0D7";
        document.getElementById("img"+3).style.backgroundImage = "url(image/z_precontract1_icon.png)";
    }
    else {
        document.getElementById("nav_item" + 3).className = "";
        document.getElementById("nav_tab" + 3).style.display = "none";
        document.getElementById("p" + 3).style.color = "";
        document.getElementById("img"+3).style.backgroundImage = "";
    }
}

function a()
{

    var oBtn = document.getElementById("btn1");
    var oDemo = document.getElementById("demo1");

    if (oDemo.style.display == "block") {
        oBtn.style.background = "url(image/the-triangle1_icon.png)no-repeat 10% 50%"
        oDemo.style.display = "none";
    }
    else {
        oBtn.style.background = "url(image/the-triangle_icon.png)no-repeat 10% 50%"
        oDemo.style.display = "block";
    }


}
function b()
{

    var oBtn1 = document.getElementById("btn2");
    var oDemo1 = document.getElementById("demo2");

    if (oDemo1.style.display == "block") {
        oBtn1.style.background = "url(image/the-triangle1_icon.png)no-repeat 10% 50%"
        oDemo1.style.display = "none";
    }
    else {
        oBtn1.style.background = "url(image/the-triangle_icon.png)no-repeat 10% 50%"
        oDemo1.style.display = "block";
    }

}