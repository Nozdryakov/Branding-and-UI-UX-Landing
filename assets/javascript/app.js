$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /* Slider */
   $("[data-slider]").slick({
	infinite: true,
	dots: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
	    {
	      breakpoint: 1000,
	      settings: {
	        slidesToShow: 1,
              centerMode: true,
              centerPadding: '100px',
              slidesToShow: 2

	      }
	    },
        {
	      breakpoint: 840,
	      settings: {
	        slidesToShow: 1,
              centerMode: true,
              slidesToShow: 2

	      }
	    },
        {
	      breakpoint: 750,
	      settings: {
	        slidesToShow: 1,
              centerMode: true,
              centerPadding: '100px',
              slidesToShow: 1

	      }
        },
        {
	      breakpoint: 540,
	      settings: {
	        slidesToShow: 1,
              slidesToShow: 1

	      }
        },
        
	    ]
    });
    });