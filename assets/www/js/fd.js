/**
 * Created by Administrator on 2015/6/8.
 */
function m(){
    document.getElementById("fd").style.display="none";
    document.getElementById("fd1").style.display="block";
    document.getElementById("fd2").style.display="block"
}
function n(){
    document.getElementById("fd").style.display="block";
    document.getElementById("fd1").style.display="none";
    document.getElementById("fd2").style.display="none"
}
function d() {
    $('#fd').drag({

    });
}
function r(){
    document.getElementById("fd").style.display="block";
    document.getElementById("fd1").style.display="none";
    document.getElementById("fd2").style.display="none"
}
function h(){
$("body").append("<div id='fd'><img src='image/float_logo_icon.png' onclick='m()'></div><div class='fd1' id='fd1' onclick='r()'></div><div class='fd2' id='fd2'><div class='fd3'><img src='image/float_logo_icon.png' onclick='n()'></div><div class='fd4'><a href='zixun.html'><img src='image/icon_information_platform.png'></a> </div><div class='fd5'><a href='gerenzhongxin.html'><img src='image/icon_float_Personal-center.png'> </a></div> <div class='fd6'><a href='education.html'><img src='image/icon_education_platform.png'></a></div><div class='fd7'><a href='zixunfenlei.html'><img src='image/icon_float_consulting_classification.png'></a></div><div class='fd8'><a href='knowledge.html'><img src='image/icon_knowledge_platform.png'></a></div><div class='fd9'><a href='forum.html'><img src='image/icon_forum.png'></a></div><div class='fd10'><a href='more.html'><img src='image/icon_more.png'></a></div><div class='fd11'><a href='zhuanjiazixun.html'><img src='image/icon_expert_consultation.png'></a></div></div>");}