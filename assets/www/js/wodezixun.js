/**
 * Created by Administrator on 2015/5/6.
 */
function  change_nav(heath_center) {
    for (var i = 1; i <= 3; i++) {
        if (i == heath_center) {
            document.getElementById("nav_item" + i).className = "nav_item";
            document.getElementById("nav_tab" + i).style.display = "";
            document.getElementById("p" + i).style.color = "#05A0D7";
        }
        else {
            document.getElementById("nav_item" + i).className = "";
            document.getElementById("nav_tab" + i).style.display = "none";
            document.getElementById("p" + i).style.color = "";

        }
    }
}
function a1(){
        document.getElementById("img1").style.backgroundImage = "url(image/z_session1_icon.png)";
}
function a2(){
    document.getElementById("img1").style.backgroundImage = "";
}
function h1(){
    document.getElementById("img2").style.backgroundImage = "url(image/z_contacts1_icon.png)";
}
function h2(){
    document.getElementById("img2").style.backgroundImage = "";
}
function s1(){
    document.getElementById("img3").style.backgroundImage = "url(image/z_precontract1_icon.png)";
}
function s2(){
    document.getElementById("img3").style.backgroundImage = "";
}

function a()
{

    var oBtn = document.getElementById("btn1");
    var oDemo = document.getElementById("demo1");

    if (oDemo.style.display == "block") {
        oBtn.style.background = "url(image/the-triangle_icon.png)no-repeat 10% 50%"
        oDemo.style.display = "none";
    }
    else {
        oBtn.style.background = "url(image/the-triangle1_icon.png)no-repeat 10% 50%"
        oDemo.style.display = "block";
    }


}
function b()
{

    var oBtn1 = document.getElementById("btn2");
    var oDemo1 = document.getElementById("demo2");

    if (oDemo1.style.display == "block") {
        oBtn1.style.background = "url(image/the-triangle_icon.png)no-repeat 10% 50%"
        oDemo1.style.display = "none";
    }
    else {
        oBtn1.style.background = "url(image/the-triangle1_icon.png)no-repeat 10% 50%"
        oDemo1.style.display = "block";
    }

}