/*注册js*/
/*验证*/
//用户名
function check_username(id){
    var tips="";
    var username=$("#"+id).val();
    if(username.length<6||username.length>18){
        tips="请输入大于6小于18的用户名，允许包括字母数字下划线";
    }else{
        tips="ok";
    }

    return tips;
}
//密码验证
    function check_pass(passid){
        //提示
        var tips="";
        //获取对象值
        var pwd=$("#"+passid).val();
        if(pwd.length<6||pwd.length>18){
            tips="请输入大于6且小于18位的密码";
        }else{
            tips="ok";
        }
        return tips;
    }
//重复密码验证
    function check_repass(passid,repassid){
        var tips="";
        //获取密码
        var pwd=$("#"+passid).val();
        //获取重复密码
        var repwd=$("#"+repassid).val();
        if(pwd!=repwd){
            tips="密码和重复密码不匹配"
        }else{
            tips="ok";
        }
        return tips;
    }


 //手机号码验证
function check_phone(phoneid){
    var regu=/^0?(13[0-9]|15[012356789]|18[0236789]|14[57]|17[0])[0-9]{8}$/;
    var re = new RegExp(regu);
    var val=phoneid.value;
    if(re.test(val)){
        bphone=true;
        return bphone;
    }else{
        alert("请输入正确的手机号码");
        bphone=false;
        phoneid.focus();
        return bphone;
    }
}




function checkalert(){
    //是否验证通过的布尔值
    var utips=check_username("loginname");
    var ptips=check_pass("pwd");
    var rptips=check_repass("pwd","repwd");
    var arr=new Array();

    //如果全部都是ok，验证才得以通过
    if(utips=="ok"&&ptips=="ok"&&rptips=="ok"){
        return true;
    }else{
        //如果提示不是ok,则表示有错误，将错误提示添加进数组
        if(utips!="ok"){
            arr.push(utips);
        }
        if(ptips!="ok"){
            arr.push(ptips);
        }
        if(rptips!="ok"){
            arr.push(rptips);
        }
        return arr;
    }


}
