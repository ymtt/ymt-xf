/**
 * Created by Administrator on 2015/5/7.
 */

var interval = 1000;
function ShowCountDown(year,month,day,divname)
{
    var now = new Date();
    var endDate = new Date(year, month-1, day);
    var leftTime=endDate.getTime()-now.getTime();
    var leftsecond = parseInt(leftTime/1000);
//var day1=parseInt(leftsecond/(24*60*60*6));
    var day1=Math.floor(leftsecond/(60*60*24));
    var hour=Math.floor((leftsecond-day1*24*60*60)/3600);
    var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60);
    var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60);
    var cc = document.getElementById(divname);
    cc.innerHTML =
    "<p class='red'>"+day1+"</p><p class='s1'>天</p>"+
    "<p class='red'>"+hour+"</p><p class='s1'>小时</p>"+
    "<p class='red'>"+minute+"</p><p class='s1'>分</p>"+
    "<p class='red'>"+second+"</p><p class='s1'>秒</p>";
    }
window.setInterval(function(){ShowCountDown(2015,7,20,'divdown1');}, interval);
