          var index;
          function back(){
            index=window.localStorage.getItem("Index");
            $("#back").attr("href",index);
            document.addEventListener("deviceready", onDeviceReady, false);
          }
         function onDeviceReady() {
                 //按钮事件
                document.addEventListener("backbutton", eventBackButton, false); //返回键
                document.addEventListener("menubutton", eventMenuButton, false); //菜单键
          }

          function eventBackButton(){
                window.location.href=index;
          }