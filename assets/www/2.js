/**
 * Created by Administrator on 2015/5/25.
 */
var iscroll2 = new iScroll($('#s_wrapper')[0], {
    bounce: false,
    snap: true,
    momentum: false,
    hScrollbar: false,
    vScrollbar: true,
    checkDOMChanges: true,
    onScrollEnd: function() {
        if (this.currPageX == 0) {
            self.$("#point1").prop("class", "active");
            self.$("#point2").prop("class", "");
        } else {
            self.$("#point2").prop("class", "active");
            self.$("#point1").prop("class", "");
        }
    }
});