$(document).ready(function() {
    /*topbannerturn*/
    $('.banner_out').slick({ dots: false, infinite: true, slidesToShow: 1, autoplay: true, autoplaySpeed: 6000 });
    $('.newsrun').slick({ dots: false, infinite: true, slidesToShow: 1, autoplay: true, autoplaySpeed: 0 ,speed:5000});
    /*niceScroll*/
    //$("html").niceScroll({ cursorwidth: "5px", cursorcolor: "#195d8d", cursorborder: "0px solid #fff", zindex: 999, mousescrollstep: 50, scrollspeed: 50 });
    //$("html").niceScroll({ styler: "fb", cursorcolor: "#6f1602", autohidemode: false, cursorborder: "0px solid #fff", cursorwidth: "8px", zindex: 999 });
    /*endniceScroll*/

    /*allheight*/
    var domminheight = $(window).height() - 35;
    $("body").css("min-height", domminheight);
    /*endallheight*/

    /*animatetop*/
    $(".top").click(function() {
        $('html,body').animate({ scrollTop: 0 }, 300);
    });
    /*endanimatetop*/

    /*clicklink*/
    $(".gf-gift").click(function() { window.open(""); });
    /*endclicklink*/

    /*linkhashanimate*/
    $(function() {

        $(".awardlistbtn a").click(function() {
            var target = $(this.hash);
            $("html,body").animate({
                scrollTop: target.offset().top
            }, 500);
            return false;
        });
    });
    /*endlinkhashanimate*/

});
