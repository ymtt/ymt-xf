function getfaclass(){
    var url='http://120.24.172.105/bbs/bbs/getForumList.do';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        success:function(result){
            var list=result.data;
            $.each(list,function(key){
                if(list[key].fup=="0"){
                    //alert(list[key].code);

                    var name=list[key]['name'];
                    var fid=list[key]['fid'];

                    $("#show").append("<div class='div12' onclick='opt("+"\""+"div5"+"\""+",this)'><p value='"+fid+"'>"+name+"</p></div>");
                }
            })
        }
    });
}
function getsubclass(id){
    var url='http://120.24.172.105/bbs/bbs/getForumList.do';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        success:function(result){
            var list=result.data;

            $.each(list,function(key){
                //如果项目的上级栏目是所选栏目，则
                var name=list[key]['name'];
                var fid=list[key]['fid'];
                if(list[key].fup==id){
                    //alert(list[key].code);
                    $("#show1").append("<div class='div12' onclick='opt1("+"\""+"two"+"\""+",this)'><p value='"+fid+"'>"+name+"</p></div>");
                }
            })
        },
    });
}


 /*发帖*/
  function ReplyThread(title,content){
     //title:帖子标题
     //content 帖子内容
     var fid=window.localStorage.getItem("fid");
     var user=window.localStorage.getItem("user");
     var url='http://120.24.172.105/bbs/bbs/wirteSubject.do';
         $.ajax({
              type:'post',
              datatype:'json',
              url:url,
              data:{"subject":title,"msg":content,"user":user,"fid":fid,"reqType":"1"},
              success:function(data){
                  var json=eval("("+data+")");
                  var list=json.data;
                  alert("成功"+data);
                  window.location.href="Novice_area.html";
              },error:function(error){
                     //var error=eval("("+error+")");
                     var errors=error['responseText'];
                     window.localStorage.setItem("errormsg",errors);
                     alert("发帖失败提示"+errors);
                     //进入错误页
                     window.location.href="error.html";
              }
          })

  }


  //主板快选择点击事件
  function opt(id1,id2){
      //清空第二级显示面板
      $("#show1").html("");
      //清空第二级选中的值
      $("#two").html("<p style='color:#cccccc'>请选择分类<p>");
      $("#"+id1).html($(id2).html());
      //点击之后获得第二级菜单

      //获取选择的主板快的值，用以查询子版块并插入
      getsubclass($("#div5 p").attr("value"));

      hidediv('bg','show');
  }

  //子版块选择点击事件
  /*
  * @id1 赋值的目标窗口
  * @id2 赋值的源窗口
  * */
  function opt1(id1,id2){

      //点击之后将内容填充到显示区(其中包括了id)

      $("#"+id1).html($(id2).html());

      //alert($(id2).attr("id"));
      window.localStorage.setItem("fid",$("#two p").attr("value"));

      hidediv('bg1','show1');
  }

//提交发帖
  function subs(){
      //标题
      var tit=document.getElementById("title").value;
      //内容
      var content=document.getElementById("content").value;
      ReplyThread(tit,content);
  }