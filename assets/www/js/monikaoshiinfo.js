function getExam(){
    var id=window.localStorage.getItem("examid");
    var session=window.sessionStorage.getItem("session");
    var url='http://120.24.172.105/fw?t=app&controller=com.xfsm.action.ExamAction&m=goExam';
    $.ajax({
        type:'get',
        dataType:'json',
        url:url,
        data:{"id":id,"sId":session},
        success:function(data){
            if(data.result=="Y"){
                //单选
                var singles=data.exam_info['singles'];
                //多选
                var mutils=data.exam_info['mutils'];
                //填空
                var fills=data.exam_info['fills'];
                //判断
                var judgments=data.exam_info['judgments'];
                //问答
                var subjectives=data.exam_info['subjectives'];

                window.localStorage.setItem("singles",JSON.stringify(singles));
                window.localStorage.setItem("mutils",JSON.stringify(mutils));
                window.localStorage.setItem("fills",JSON.stringify(fills));
                window.localStorage.setItem("judgments",JSON.stringify(judgments));
                window.localStorage.setItem("subjectives",JSON.stringify(subjectives));
            }
            //alert(JSON.stringify(data));
        },error:function(error){
            alert(JSON.stringify(error));
        }
    });
}

function findTest(type){
    var type=window.localStorage.getItem(type);
    var obj=JSON.parse(type);
    return obj;
}
//单选题
function CreateSingles(id,title,contentA,contentB,contentC,contentD){
    $("#singles").html("<div class='div4'><div class='div6'><p value=\'"+id+"\'>单选题</p></div><div class='div7'><p>"+title+"</p></div></div><div class='div5'><ul><li><input type='radio' name='h1' value='"+contentA+"'><p>"+contentA+"</p></li><li><input type='radio' name='h1' value='"+contentB+"'><p>"+contentB+"</p></li><li ><input type='radio' name='h1' value='"+contentC+"'><p>"+contentC+"</p></li><li ><input type='radio' name='h1' value='"+contentD+"'><p>"+contentD+"</p></li><li></li></div>");
}
//多选题
function CreateMutils(id,title,contentA,contentB,contentC,contentD){
    $("#singles").html("<div class='div4'><div class='div6'><p value=\'"+id+"\'>多选题</p></div><div class='div7'><p>"+title+"</p></div></div><div class='div5'><ul><li><input type='checkbox' name='h2' value='"+contentA+"'><p>"+contentA+"</p></li><li><input type='checkbox' name='h2' value='"+contentB+"'><p>"+contentB+"</p></li><li ><input type='checkbox' name='h2' value='"+contentC+"'><p>"+contentC+"</p></li><li ><input type='checkbox' name='h2' value='"+contentD+"'><p>"+contentD+"</p></li><li></li></div>");
}
//判断题
function Createjudgments(id,title,contentA,contentB){
    $("#singles").html("<div class='div4'><div class='div6'><p value=\'"+id+"\'>判断题</p></div><div class='div7'><p>"+title+"</p></div></div><div class='div5'><ul><li><input type='radio' name='h3' value='"+contentA+"'><img src='image/icon_a.png'><p>"+contentA+"</p></li><li><input type='radio' name='h3' value='"+contentB+"'><img src='image/icon_b.png'><p>"+contentB+"</p></li></ul></div>");
}
//填空
function Createfills(id,title){
    $("#singles").html("<div class='div4'><div class='div6'><p value=\'"+id+"\'>填空题</p></div><div class='div7'<p>"+title+"</p></div><div class='div8'><p>回答：</p><input type='text' placeholder='请填空' id='h4'></div></div><div class='div5'></div>");
}
//问答
function Createsubjectives(id,title){
    $("#singles").html("<div class='div4'><div class='div6'><p value=\'"+id+"\'>问答题</p></div><div class='div7'><p>"+title+"</p></div><div class='div8'><p>回答：</p><textarea placeholder='请简答' id='h5'></textarea></div></div><div class='div5'></div>");
}

//提交答案
function doAnswer(examId,answer_id,val){
    var url='http://120.24.172.105/fw?controller=com.xfsm.action.UserExamAction';
    $.ajax({
        type:'post',
        dataType:'json',
        url:url,
        data:{"ignoreConn":"Y","method":"doAnswer","examId":examId,"answer_id":answer_id,"val":val},
        success:function(data){
            alert(JSON.stringify(data));
        },error:function(error){
            alert(JSON.stringify(error));
        }
    });
}

function submitExam(exam_id){
    var url='http://120.24.172.105/fw?controller=com.xfsm.action.UserExamAction';
    $.ajax({
        type:'post',
        dataType:'json',
        url:url,
        data:{"method":"submitExam","exam_id":exam_id},
        success:function(data){
            //alert(JSON.stringify(data));
            var str=JSON.stringify(data.html);
            $("#singles").html(str.substring(1,str.length-1));
        },error:function(error){
            alert(JSON.stringify(error));
        }
    });
}

//单选下一题
var i=1;
function NextQue(){
    //单选
    var singles=findTest('singles');
    //多选
    var mutils=findTest('mutils');
    //填空
    var fills=findTest('fills');
    //判断
    var judgments=findTest('judgments');
    //问答
    var subjectives=findTest('subjectives');

    if(i==singles.length||i>singles.length){
        //如果到了单选最后一题，跳转到多选
        NextQue2();
    }else{
        CreateSingles(singles[i]['fk_que_id'],singles[i]['content'],singles[i]['ops'][0]['content'],singles[i]['ops'][1]['content'],singles[i]['ops'][2]['content'],singles[i]['ops'][3]['content']);
    }
     i++;
}

//多选下一题
var j=97;
function NextQue2(){
    //多选
    var mutils=findTest('mutils');


    if(j==mutils.length||j>mutils.length){
        //如果到了单选最后一题，跳转到多选
        NextQue3();
    }else{
        CreateMutils(mutils[j]['fk_que_id'],mutils[j]['content'],mutils[j]['ops'][0]['content'],mutils[j]['ops'][1]['content'],mutils[j]['ops'][2]['content'],mutils[j]['ops'][3]['content']);
    }


    j++;
}
//判断下一题
var k=18;
function NextQue3(){
    //判断
    var judgments=findTest('judgments');
    if(k==judgments.length||k>judgments.length){
        NextQue4();
    }else{
        Createjudgments(judgments[k]['fk_que_id'],judgments[k]['content'],judgments[k]['ops'][0]['content'],judgments[k]['ops'][1]['content']);
    }


    k++;
}

//填空下一题
var l=18;
function NextQue4(){
    //填空
    var fills=findTest('fills');
    if(l==fills.length||l>fills.length){
        NextQue5();
    }else{
        Createfills(fills[l]['fk_que_id'],fills[l]['content']);
    }
    l++;
}

var o=98;
function NextQue5(){
    //问答
    var subjectives=findTest('subjectives');
    if(o==subjectives.length||o>subjectives.length){
        submitExam(subjectives[0]['fk_exam_id']);
    }else{
        Createsubjectives(subjectives[o]['fk_que_id'],subjectives[o]['content']);
    }
    o++;
}