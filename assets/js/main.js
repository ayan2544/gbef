jQuery(function ($) {
    'use strict';

        // Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.navbar-area').addClass("is-sticky");
            }
            else{
                $('.navbar-area').removeClass("is-sticky");
            }
        });
		
		// Mean Menu
		jQuery('.mean-menu').meanmenu({
			meanScreenWidth: "991"
        });

        // Sidebar Modal
        $(".burger-menu").on('click',  function() {
			$('.sidebar-modal').toggleClass('active');
		});
        $(".sidebar-modal-close-btn").on('click',  function() {
			$('.sidebar-modal').removeClass('active');
        });

            $(document).on('click', 'ul li', function(){
        $(this).addClass('active').siblings().removeClass('active')
    })

        // Home Sliders
		$('.home-sliders').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			mouseDrag: true,
			items:1,
			autoHeight:true,
			dots: true,
                 animateOut: 'fadeOut',
			autoplay: false,
			smartSpeed: 500,
			autoplayHoverPause: true,
			navText: [
				"<i class='flaticon-left'></i>",
				"<i class='flaticon-right-1'></i>",
			],
		});

		//Slider Text Animation
		$(".home-sliders").on("translate.owl.carousel", function(){
            $(".main-banner-content b, .main-banner-content h1, .main-banner-content .typewrite").removeClass("animate__animated animate__fadeInLeft").css("opacity", "0");
            $(".main-banner-content p").removeClass("animate__animated animate__fadeInDown").css("opacity", "0");
            $(".main-banner-content a").removeClass("animate__animated animate__fadeInDown").css("opacity", "0");
            $(".banner-right-image").removeClass("animate__animated animate__slideInUp").css("opacity", "0");
        });
        
        $(".home-sliders").on("translated.owl.carousel", function(){
            $(".main-banner-content b, .main-banner-content h1, .main-banner-content .typewrite").addClass("animate__animated animate__fadeInLeft").css("opacity", "1");
            $(".main-banner-content p").addClass("animate__animated animate__fadeInDown").css("opacity", "1");
            $(".main-banner-content a").addClass("animate__animated animate__fadeInDown").css("opacity", "1");
            $(".banner-right-image").addClass("animate__animated animate__slideInUp").css("opacity", "1");
		});
		
       
       
        // Features Slider
		$('.sponsor-slider').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			autoplayHoverPause: true,
            autoplay: true,
            smartSpeed: 1000,
            margin: 30,
            navText: [
                "<i class='flaticon-left'></i>",
                "<i class='flaticon-right'></i>"
            ],
            responsive: {
				0: {
					items: 1
				},
				576: {
					items: 2
				},
				768: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		});
$('.cyber-slider').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            autoplay: false,
            smartSpeed: 1000,
            margin: 30,
            navText: [
                "<i class='flaticon-left'></i>",
                "<i class='flaticon-right'></i>"
            ],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items:1
                },
                1200: {
                    items: 1
                }
            }
        });
$('.past-event-slider').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            autoplayHoverPause: true,
            autoplay: false,
            smartSpeed: 1000,
            margin: 30,
            navText: [
                "<i class='flaticon-left'></i>",
                "<i class='flaticon-right'></i>"
            ],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items:2
                },
                1200: {
                    items: 2
                }
            }
        });
        // Tabs
        (function ($) {
            $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
            $('.tab ul.tabs li a').on('click', function (g) {
                var tab = $(this).closest('.tab'), 
                index = $(this).closest('li').index();
                tab.find('ul.tabs > li').removeClass('current');
                $(this).closest('li').addClass('current');
                tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
                tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
                g.preventDefault();
            });
		})(jQuery);
		

		// Go to Top
        $(function(){
            // Scroll Event
            $(window).on('scroll', function(){
                var scrolled = $(window).scrollTop();
                if (scrolled > 600) $('.go-top').addClass('active');
                if (scrolled < 600) $('.go-top').removeClass('active');
            });  
            // Click Event
            $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
		});
    
 
       

		
		// Count Time 
        function makeTimer() {
            var endTime = new Date("april  30, 2028 17:00:00 PDT");			
            var endTime = (Date.parse(endTime)) / 1000;
            var now = new Date();
            var now = (Date.parse(now) / 1000);
            var timeLeft = endTime - now;
            var days = Math.floor(timeLeft / 86400); 
            var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
            var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }
            $("#days").html(days + "<span>Days</span>");
            $("#hour").html(hours + "<span>Hours</span>");
            $("#minu").html(minutes + "<span>minutes</span>");
            $("#seco").html(seconds + "<span>seconds</span>");
        }
		setInterval(function() { makeTimer(); }, 300);
	});
    
	// WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW({
            boxClass:     'wow',      // animate__animated animate__element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       20,          // distance to the element when triggering the animation (default is 0)
            mobile:       true, // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }



   AOS.init({
              once: true,

      });
    // Preloader
    jQuery(window).on('load', function () {
        $('.preloader').fadeOut()
    })

	

	
	
}(jQuery));

