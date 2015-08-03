/**
 * Created by Administrator on 2015/5/21.
 */
function a()
{

    var oBtn = document.getElementById("btn1");
    var oDemo = document.getElementById("demo1");

    if (oDemo.style.display == "none") {
        oBtn.style.background = "url(image/the-arrow_icon.png)no-repeat 80% 50%"
        oDemo.style.display = "block";
    }
    else {
        oBtn.style.background = "url(image/the-arrow_icon_right.png)no-repeat 80% 50%"
        oDemo.style.display = "none";
    }


}
function b()
{

    var oBtn1 = document.getElementById("btn2");
    var oDemo1 = document.getElementById("demo2");

    if (oDemo1.style.display == "block") {
        oBtn1.style.background = "url(image/the-arrow_icon_right.png)no-repeat 80% 50%"
        oDemo1.style.display = "none";
    }
    else {
        oBtn1.style.background = "url(image/the-arrow_icon.png)no-repeat 80% 50%"
        oDemo1.style.display = "block";
    }

}
function c()
{

    var oBtn2 = document.getElementById("btn3");
    var oDemo2 = document.getElementById("demo3");

    if (oDemo2.style.display == "block") {
        oBtn2.style.background = "url(image/the-arrow_icon_right.png)no-repeat 80% 50%"
        oDemo2.style.display = "none";
    }
    else {
        oBtn2.style.background = "url(image/the-arrow_icon.png)no-repeat 80% 50%"
        oDemo2.style.display = "block";
    }

}
