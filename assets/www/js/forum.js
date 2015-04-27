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
