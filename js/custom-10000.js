$(document).ready(function () {
    $('.navigation > ul').slicknav({
        closedSymbol: '+',
        openedSymbol: '-',
    });
    var h = $(window).height();
    var heh = $(".header").height();
    if (h > 655) {
        h = 655;
    }
    //
   var ar = [1,2,55,9,7,5]
    var arr = [51,9,7,6,36,2,5]
    var con = ar.concat(arr);
    var fil = con.filter(e => e % 2 == 0);

   // fil.ushift(3)
    console.log(fil);
    $(window).load(function () {
        $('.loader').fadeOut();
        $('.loader-up').delay(350).fadeOut('slow');
    })
    $(".banner").height(h);
    $(".banner .item-video").height(h);
    $(window).scroll(function () {
        var sticky = $('.header'),
            scroll = $(window).scrollTop();

        if (scroll >= 30) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
    $(window).load(function () {
        var sticky = $('.header'),
            scroll = $(window).scrollTop();

        if (scroll >= 30) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
    //

    $(".search-header").click(function () {
        $(".search").toggle()
    })
    //

    $(".arc a.explore").click(function () {
        $(this).next("ul").slideToggle();
    })


    //
    $(".respo-more").click(function () {
        $(this).prev(".respon-rest").slideToggle();
        $(this).text(function (index, text) {
            return (text == 'Read More' ? 'Read Less' : 'Read More');
        });
    })
    new WOW().init();
    $(document).on("click", ".for-pass", function () {
        $(".forget-pass").show();
        $(".login-div").hide();
    });
    $(document).on("click", ".back-login", function () {
        $(".forget-pass").hide();
        $(".login-div").show();
    })

    $(document).on("click", ".create-account", function () {
        $(".signup-wrap").show();
        $(".login-wrap").hide();
    });
    $(document).on("click", ".back-log", function () {
        $(".signup-wrap").hide();
        $(".login-wrap").show();
    })
    $(document).on("click", ".popup-inside-close", function () {
        $(".popup").fadeOut();
    })
    $(document).on("click", ".download-form", function () {
        $(".popup").fadeIn();
    })
    $(document).on("click", ".note span", function () {
        $(".popup").fadeIn();
    })


    //
    var banner = $(".banner-slider");
    banner.owlCarousel({
        items: 1,
        margin: 0,
        nav: true,
        loop: true,
        video: true,
        dots: false,
        autoplay: true,
        animateOut: 'fadeOut',
        onInitialized: autoplyVideo,
        onTranslated: autoplyVideo,
        responsive: {
            // breakpoint from 0 up
            0: {

            },
            // breakpoint from 480 up
            480: {

            },
            // breakpoint from 768 up
            768: {

            },
        }
    });
    function autoplyVideo() {
        $('.active .owl-video-play-icon').trigger('click');
    }

    $(".gc-slider").owlCarousel({
        items: 4,
        margin: 30,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 480 up
            500: {
                items: 2
            },
            // breakpoint from 768 up
            800: {
                items: 3,
                margin: 10,
            },
        }
    })

    $(".suc-story-slider").owlCarousel({
        items: 1,
        margin: 0,
        nav: true,
        loop: true,
        dots: false,
        autoplay: 500,
        autoplayTimeout: 6000
        // autoplayHoverPause: true
    })

    var $owl = $('.mas-lead-slider');

    $owl.children().each(function (index) {
        $(this).attr('data-position', index); // NB: .attr() instead of .data()
    });

    $owl.owlCarousel({
        items: 3,
        autoplay: true,
        stagePadding: 0,
        smartSpeed: 2000,
        dots: false,
        nav: true,
        center: true,
        loop: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 480 up
            500: {
                items: 2,
            },
            // breakpoint from 768 up
            800: {
                // margin: 10,
            },
        }
    });

    $(document).on('click', '.owl-item>div', function () {
        $owl.trigger('to.owl.carousel', $(this).data('position'));
    });
    $(".promoting-logos ul").owlCarousel({
        items: 5,
        autoplay: false,
        stagePadding: 0,
        smartSpeed: 2000,
        dots: false,
        nav: true,
        // center: true,
        loop: false,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2,
                margin: 5,
            },
            // breakpoint from 480 up
            480: {
                items: 3,
                margin: 5,
            },
            // breakpoint from 768 up
            800: {
                items: 4,
            },
        }
    })
    $(".sup-slider").owlCarousel({
        items: 5,
        autoplay: true,
        stagePadding: 0,
        smartSpeed: 2000,
        dots: false,
        nav: true,
        margin: 10,
        loop: true,
        mouseDrag: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2,
                margin: 5,
            },
            // breakpoint from 480 up
            480: {
                items: 3,
                margin: 5,
            },
            // breakpoint from 768 up
            800: {
                items: 5,
            },
        }
    })
    //
    $(".footer-menu-icon").click(function () {
        $(".footer .container").slideToggle();
    })
    //
    $(".event-more-detail").click(function () {
        $(this).toggleClass('active').prev('.cal-show-det').slideToggle('fast');
        this.innerText = (this.innerText == "More Details") ? "Less Details" : "More Details";
    })
    //

    $('#tpdatas').loadMoreResults({
        tag: {
            name: 'li',
            'class': 'viw'
        },
        displayedItems: 25,
        showItems: 25,
    });

    //

    $('.gc-member ul li').each(function (i) {
        var newClass = '';
        if (i % 5 == 3) newClass = 'fourth';
        $('.gc-member ul li:nth-child(5n)').addClass(newClass);
        $(this).addClass(newClass);
    });

    //
    $(".datepicker").datepicker();

    $("p.pres-arch").click(function () {
        $(".current-press-release").hide();
        $(".archive-press-release").show();
        $(".current-archiev-pressrelease-tab p").removeClass("active");
        $("p.pres-arch").addClass("active");
    })

    $("p.pres-cur").click(function () {
        $(".current-press-release").show();
        $(".archive-press-release").hide();
        $(".current-archiev-pressrelease-tab p").removeClass("active");
        $("p.pres-cur").addClass("active");
    })

    $(".video-home .video-youtube-data li img").click(function () {
        var src = $(this).attr("data");
        $(".video-youtube iframe").attr("src", src);
    })

    $(".navigation ul li li").has("ul").addClass("submenu");


    $(".faq-right ul li h3").click(function () {

        if ($(this).hasClass("active")) {
            $(this).next(".faq-text").slideUp();
            $(".faq-text").slideUp(500);
            $(".faq-right ul li h3").removeClass('active');
            $(this).removeClass('active');
        }
        else {
            $(".faq-text").slideUp(500);
            $(".faq-right ul li h3").removeClass("active");
            $(this).next(".faq-text").slideDown(500);
            $(this).addClass("active");
        }
    })
    //
    $(".various").fancybox({
        maxWidth: 800,
        maxHeight: 600,
        fitToView: false,
        width: '70%',
        height: '70%',
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none'
    });
    $(".fancybox").fancybox({
        type: "iframe",
        // other API options
    })
    $(".various-photo , .fancybox").fancybox();

    //expand data
    $(document).on('click', '.tra-up', function () {
        //$('.re-header').not(this).removeClass('isOpen').next().slideUp('fast');
        $(this).toggleClass('isOpen').next().slideToggle('fast');
    });
    //
    $('.more-filters a').click(function () {
        $(this).toggleClass('active').parent().prev('.more-filters-box').slideToggle('fast');
        this.text = (this.text == "More Filters") ? "Less Filters" : "More Filters";
    });
    //
    $(".pop-wrap").click(function () {
        //alert();
        $(this).next(".popup-data").fadeIn();
    })
    $(".popup-data-inside-close").click(function () {
        $(".popup-data").fadeOut();
    })


    //Back to Top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 450) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });

    /*about page accordian  */
    $('.tab .tab-label').on("click", function () {
        // alert();
        $('.tab').removeClass('active');
        $('.tab-content').removeClass('active').slideUp();
        $(this).siblings('.tab-content').addClass('active').slideDown();
        $(this).parents('.tab').addClass('active');
    });
    //

    $(document).on('click', '.auto-tab .tab-li li', function () {
        $(".tab-c .con").eq(1).show();
        $('.auto-tab .tab-li li').removeClass('active');
        $(this).addClass('active');
        $(".tab-c .con").hide();       
        $(".tab-c .con").eq($(this).index()).show();
    })

    $(".tab-container .wrap-accdian").eq(0).show();
    $('.auto-tab .main-ul li').eq(0).addClass('active');
    $(document).on('click', '.auto-tab .main-ul li', function () {
      
        $('.auto-tab .main-ul li').removeClass('active');
        $(this).addClass('active');
        $(".tab-container .wrap-accdian").hide();       
        $(".tab-container .wrap-accdian").eq($(this).index()).show();
    })

    $(document).on('click', '.wrap-accdian h2', function () {
        if ($(this).hasClass('active')) {
            $('.content').slideUp();
            $(this).next('.content').slideUp();
            $(this).removeClass('active');
            $('.wrap-accdian h2').removeClass('active');
        }
        else {
            $('.content').slideUp();
            $('.wrap-accdian h2').removeClass('active');
            $(this).next('.content').slideDown();
            $(this).addClass('active');
        }
    })
    $(document).on('click', '.auto-accordian h3', function () {
        if ($(this).hasClass('active')) {
            $('.accr-txt').slideUp();
            $(this).next('.accr-txt').slideUp();
            $(this).removeClass('active');
            $('.auto-accordian h3').removeClass('active');
        }
        else {
            $('.accr-txt').slideUp();
            $('.auto-accordian h3').removeClass('active');
            $(this).next('.accr-txt').slideDown();
            $(this).addClass('active');
        }
    })
});

