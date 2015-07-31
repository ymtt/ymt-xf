/*收藏*/
//添加收藏
/*
*@table
* 历年真题收藏：xf_article_e_history
* 首页咨询收藏 xf_article_consult
* 知识平台标准规范：xf_article_e_newadd
* 知识平台 科研文献 xf_article_e_kywx
* 知识平台 数据库 xf_article_db
* */
function addCollet(type,articleid){
    var url='http://101.204.236.5/fw?controller=com.mingsokj.action.XfCollectAction&method=collect';
    $.ajax({
        type:'post',
        dataType:'json',
        url:url,
        data:{"table":type,"fk_article_id":articleid},
        success:function(data){
            alert(JSON.stringify(data));
        },error:function(error){
            alert(JSON.stringify(error));
        }
    });
}

/*收藏列表*/
/*@m
*咨询分类 consult
* 知识 know
* 教育 edu
* */
function getColletList(start,pagesize,m){
    var url='http://101.204.236.5/fw?t=app&controller=com.xfsm.action.CollectAction&m=consult';
    $.ajax({
        type:'post',
        dataType:'json',
        url:url,
        data:{"start":start,"pagesize":pagesize,"m":m},
        success:function(data){
            alert(JSON.stringify(data));
        },error:function(error){
            alert(JSON.stringify(error));
        }
    });
}

function CreateColletList(m){

}
