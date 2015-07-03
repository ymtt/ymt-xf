function clickconsultation(title,content,points,expert){
        var session=window.sessionStorage.getItem("session");
        var url='http://120.24.172.105:8000/fw?controller=com.xfsm.action.ChatAction&t=app&m=startChat';
           if(session==null){
                alert("session="+session);
           }else{
                $.ajax({
                    type:'post',
                    dataType:'json',
                    url:url,
                    data:{"SESSIONID":session,"title":title,"content":content,"points":points,"expert":expert},
                    success:function(data){
                        //alert(JSON.stringify(result));
                        //var json = eval("(" +data+ ")");
                        //data为对象类型
                        //alert("qq_id"+data.qq_id);
                        window.localStorage.setItem("qq_id",data.qq_id);
                        window.location.href="huihuaXQ.html";
                    },error:function(error){
                        alert("ajax失败");
                        var last=JSON.stringify(error);
                        alert(last);
                    }
                });
                alert("session不为空"+session);
         }
};


//注册随机用户
function regsuiji(){
    var url='http://120.24.172.105:8000/fw?controller=com.xfsm.action.RegAction';
     $.ajax({
        type:'post',
        dataType:'html',
        url:ajaxURL,
        data:{"loginname":loginname,"pwd":pwd,"t":"002","phone":phone},
       //data:$("#regform").serialize();
        success:function(result){
            var json = eval("(" +result+ ")");
            if(json.result=="Y"){
                window.location.href="denglu.html";
             }else{
                alert("错误提示："+json.result);
             }
        },error:function(error){
            var last=JSON.stringify(error);
            alert("失败提示："+last);
        }
      });
}

function random(){
    var chars = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    		function generateMixed(n) {
    		var res1= "";
    		for(var i=0;i<n;i++) {
             var id = Math.ceil(Math.random()*35);
             res += chars[id];
    		}
    		return res;
    		}
}