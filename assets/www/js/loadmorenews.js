 /*加载更多公告*/
 function addn(){
    noticestart+=10;
    noticeend+=10;
    //点击之后加载从noticestart到noticeend之间的数据
    getnews("xf_article_h_notice",CreateNoticeDom,noticestart,noticeend,"notice");
    //点击之后移除按钮
    $(".nmore").remove();
 }
 /*加载更多教育资讯*/
 function adde(){
    edustart+=10;
    eduend+=10;
    getnews("xf_article_h_edu",CreateEduDom,edustart,eduend,"edu");
    $(".emore").remove();
 }