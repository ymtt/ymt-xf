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
window.setInterval(
    function(){
        var date=getNextExamTime();
        ShowCountDown(date[0],date[1],date[2],'divdown1');
    },
    interval);

/*获取下次考试时间*/
var getNextExamTime=function(){
    var result;
    var url='http://120.24.172.105:/fw?controller=com.xfsm.action.TypeAction&t=app&m=param&p=%E6%95%99%E8%82%B2%E5%B9%B3%E5%8F%B0%E6%9C%80%E6%96%B0%E8%80%83%E8%AF%95%E5%90%8D%E7%A7%B0,%E6%95%99%E8%82%B2%E5%B9%B3%E5%8F%B0%E6%9C%80%E6%96%B0%E8%80%83%E8%AF%95%E6%97%B6%E9%97%B4';
    $.ajax({
        type:'get',
        dataType:'json',
        async:false,
        url:url,
        success:function(data){
            var time=data.data;
            $(".div6 p").html(time[0].val);
            //获得日期
            var date=(time[1].val).replace(/\"/g,"");
            //str=((JSON.stringify(time[1].val)).split("-")).replace(/\"/g,"");
            result=date.split("-");
        },error:function(error){
            alert("error"+JSON.stringify(error));
            result=null;
        }
    });
    return result;
}
