/* ==============================================
    Fixed Navbar
   =============================================== */
jQuery(window).bind('scroll', function (){
  if (jQuery(window).scrollTop() >=0){
    jQuery('.header').addClass('fixed-nav');
  } else {
    jQuery('.header').removeClass('fixed-nav');
  }
});
/* ==============================================
    Preloader
   =============================================== */

$(window).load(function() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).css({'overflow':'visible'});
});



/* ==============================================
    jQuery Instafeed
   =============================================== */

/* ====================================
     Google Map
   ==================================== */
 $('#map').gMap({
  address: " Řetězová 222/3, 110 00 Staré Město, Česko",
  zoom: 18,
  markers:[
    {
      latitude: 50.0854551,
      longitude: 14.4169679,
      html: "_latlng"
    }
  ]
});
 
$( document ).ready(function() {
  'use strict';
      $('.grid').masonry({
        // options
      });
    });

$( document ).ready(function() {
    $('#index-cover-img').width($('#index-cover-div').width());
});

window.addEventListener('resize', function (){
    $('#index-cover-img').width($('#index-cover-div').width())
});


/* ======================================
     Full Screen Header
   ====================================== */
    function SetResizeContent() {
        var minheight = $(window).height();
        $(".full-screen").css('min-height', minheight);
    }
    SetResizeContent();
    //Navigation Visible On Scroll


    var IS_IPAD = navigator.userAgent.match(/iPad/i) != null;
    var IS_IPHONE = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);


    if (IS_IPAD == true || IS_IPHONE == true) {

    }
    else
    {
        $('li.content-scroll figure').removeAttr('class');

        try {
            $(".content-scroll").mCustomScrollbar({
                autoHideScrollbar: true,
                theme: "minimal-dark"
            });
        }
        catch (err) {
        }


    }
  
