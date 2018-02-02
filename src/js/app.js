$(document).foundation();

(function ($, undefined) { 
    "use strict";
    var win;
    var ww;
    var wh;

    $(document).ready(function () {
        var active_variation = 1;
        var prev_active_variation;
        
        $( ".variation-switcher li" ).each(function(index) {
            $(this).on("click", function(){
                prev_active_variation = active_variation;
                active_variation = $(this).data('id');

                // remove class from previous
                $(".variation-switcher").find("[data-id='" + prev_active_variation + "']").removeClass('active');
                $(this).addClass('active');

                // update body class
                $('body').removeClass('option-'+prev_active_variation);
                $('body').addClass('option-'+active_variation);
                return false;
            });
        });
        
        $('.content-box-wrapper').readmore({
          speed: 75,
          collapsedHeight: 740,
          moreLink: '<a href="#" class="read-more-button">Read more</a>',
          lessLink: '<a href="#" class="read-less-button">Read less</a>'
        });
        
        $(window).resize();
    });

    $(window).resize(function () {

        win = $(window);
        ww = win.width();
        wh = win.height();
    });

})(jQuery); 