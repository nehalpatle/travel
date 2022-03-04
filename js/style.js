jQuery( document ).ready(function() {
    jQuery('.experiences-landing').owlCarousel({
        margin: 20,
        loop: true,
        items: 2,
        center:true,
        nav:false,
        autoplay:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            991:{
                items:2,
                nav:true,
                loop:true,
                center:false,
            },
            1199:{
                center:true,
            }
        }
    })
    
    jQuery(".main-banner").owlCarousel({ 
        loop:true,
        margin:10,
        items: 1,
        nav:false,
        dots:true,
        autoplay:false,
    })
    jQuery(".press-says-slider").owlCarousel({ 
        loop:true,
        margin:10,
        items: 1,
        nav:false,
        dots:true,
    })
    jQuery('.testimonial').owlCarousel({
        margin: 20,
        loop: true,
        items: 3,
        center:true,
        autoplay:true,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
                loop:true
            }
        }
    })
    jQuery('.investor-owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText:["<div class='prev-inv'><img src='images/icons/prev.svg'></div>","<div class='next-inv'><img src='images/icons/next.svg'></div>"],
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                dots:true,
                nav:false,
            },
            600:{
                items:3,
                dots:false,
                nav:true,
            },
            1000:{
                items:4,
                dots:false,
                nav:true,
            }
        }
    })
    jQuery('.deals_slider-owl').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText:["<div class='prev-inv'><img src='images/icons/prev.svg'></div>","<div class='next-inv'><img src='images/icons/next.svg'></div>"],
        dots:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:true,
            },
            600:{
                items:2,
                nav:true,
                dots:false,
            },
            1000:{
                items:3,
                nav:true,
                dots:false,
            },
            1400:{
                items:4,
                nav:true,
                dots:false,
            }
        }
    })
    jQuery('.groups-owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        navText:["<div class='prev-inv'><img src='images/icons/prev.svg'></div>","<div class='next-inv'><img src='images/icons/next.svg'></div>"],
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:true,
            },
            600:{
                items:1,
                nav:true,
                dots:false,
            },
            1000:{
                items:1,
                nav:true,
                dots:false,
            }
        }
    })
    jQuery('.whatto-owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        navText:["<div class='prev-inv'><img src='images/icons/prev.svg'></div>","<div class='next-inv'><img src='images/icons/next.svg'></div>"],
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:true,
            },
            600:{
                items:2,
                nav:true,
                dots:false,
            },
            1000:{
                items:3,
                nav:true,
                dots:false,
            }
        }
    })
    jQuery('.founder-owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        navText:["<div class='prev-inv'><img src='images/icons/prev.svg'></div>","<div class='next-inv'><img src='images/icons/next.svg'></div>"],
        dots:false,
        autoplay:false,
        items:1,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:true,
            },
            600:{
                items:1,
                nav:true,
                dots:false,
            },
            1000:{
                items:1,
                nav:true,
                dots:false,
            }
        }
    })
    jQuery(".scroll_down a[href^='#']").click(function(e) {
        e.preventDefault();
        var position = jQuery(jQuery(this).attr("href")).offset().top - 200;
        jQuery("body, html").animate({
            scrollTop: position
        },900 );
    });
    
    jQuery(".fixes_bar a[href^='#']").click(function(e) {
        e.preventDefault();
        var position = jQuery(jQuery(this).attr("href")).offset().top - 150;
        jQuery("body, html").animate({
            scrollTop: position
        });
        jQuery(".fixes_bar a.active").removeClass("active");
        jQuery(this).addClass("active");
    });
    
    
    var headr = jQuery(".navbar");
    jQuery(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos >= 50) {
			headr.addClass("stick");
		} else {
			headr.removeClass("stick");	
		}
	});
    //jQuery(".nav_panel_item:first").addClass("is_active")
    jQuery(".nav_panel_item").hover(function () {
        jQuery(this).toggleClass("is_active");
    });
    jQuery(".nav_megha").hover(function () {
        jQuery(this).toggleClass("is_active");
    });
    // 
    

  var windowWidth = jQuery(window).width();
    if(windowWidth <= 991){
        
        jQuery(".mobile_menu .megha_drop" ).wrap( "<span class='parent-wrap'></span>" );
        jQuery(".mobile_menu .parent-wrap").append("<span class='drop-arrow'></span>");
        jQuery(".mobile_menu .nav_panel_item > a" ).wrap( "<span class='parent-wrap'></span>" );
        jQuery(".mobile_menu .nav_panel_item .parent-wrap").append("<span class='drop-arrow'></span>");
        
        
        jQuery(".nav_megha .megha_drop").next(".drop-arrow").click(function(){
            jQuery(".nav_megha  .nav_panel_mobile").addClass("show")
        });
        jQuery(".nab_back").click(function(){
            jQuery(this).parent().parent().removeClass("is_active");
        });
        jQuery(".desti_back").click(function(){
            jQuery(this).parent().removeClass("show");
        });
    }
    // 
    jQuery(".hamburger").click(function(){
        jQuery(this).toggleClass("is-active");
      });
    jQuery(".navbar-toggler").click(function(){
        jQuery(".mobile_menu").toggleClass("active");
    });
    
    jQuery(".close_mobile").click(function(){
        jQuery(".mobile_menu").removeClass("active");
        jQuery(".hamburger").removeClass("is-active");
    });

    jQuery(".filter_toggle").click(function(){
        jQuery(".filter_body").toggleClass("show");
    });
});

