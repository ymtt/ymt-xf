jQuery(document).ready(function () {

    var currentImage = "";
    var interfaceLock = false;
    var w = $(".img3").width();
    var cx =0, cy =0, cr =0;
    if(w==230){
        cx = 120;
        cy = -170;
        cr = 110;
    }
    if(w==270){
        cx = 147;
        cy = -190;
        cr = 110;
    }
	if(w==300){
        cx = 162;
        cy = -220;
        cr = 110;
    }
    jQuery("#roundrr_container").roundrrwheel({
        mode: 'pick', 
        autoplay: false,
        autoplayDirection: 'anticlockwise',
        autoplayDuration: 4000,
        centerClass: 'roundrr_center',
        listClass: 'list',
        itemClass: 'item',
        radius: cr,
        animSpeed: 400,
        centerX: cx,
        centerY: cy,
        animationEffect: 1, 
        selectEvent: "click",
        centerImageSrc: "images/placeholder2.png",
        onSelect: function ($selected) {
            showLargeImage($selected, 'noanim');
        },
        onNextBegin: function ($m) {

            interfaceLock = true;

        },
        onPrevBegin: function ($m) {

            interfaceLock = true;

        },
        onImageFocus: function ($item) {

            showLargeImage($item, 'none');


        },
        onImageBlur: function ($item) {

        },
        onAnimationComplete: function ($menu) {

            jQuery('.centerImage').attr('src', currentImage);
            jQuery('.centerImage').load(function () {

                interfaceLock = false;
            });


        },
        angleOffset: Math.PI,
        onShow: function ($menuitems) {
            $menuitems.each(function (i) {
                var $this = jQuery(this);
                $this.delay(i * 100).fadeIn(500);
            });


        }

    });





    jQuery("#roundrr_container").roundrrwheel("show");
    $('#next').bind('click', spinMenuRight);
    $('#prev').bind('click', spinMenuLeft);

    function showLargeImage($i, mode) {

        interfaceLock = true;
        var thisImage = $i.find('img');
        var focusedImage = thisImage.attr('src');
        var largerImage = focusedImage.replace('_bigger', '');
        var imageCaption = thisImage.attr('alt');
        var speechBubble = jQuery('.roundrr_speech');
        speechBubble.fadeIn();

        currentImage = largerImage;

        jQuery('#roundrr_caption').fadeIn();
        jQuery('#roundrr_caption').html(imageCaption);

        if (mode == 'noanim') {
            jQuery('.centerImage').attr('src', currentImage);
            jQuery('.centerImage').load(function () {
                interfaceLock = false;

            });
        }

    }



});