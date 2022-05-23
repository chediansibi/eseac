(function ($, Drupal) {
  "use strict";
  /*----------------------carousel formations------------------------*/
  $(document).ready(function ($) {
    $(".filter-container").slick({
      arrows: false,
      centerMode: false,
      focusOnSelect: true,
      slidesToShow: 4,
      variableWidth: false,
      slidesToScroll: 1,
      swipe: false,
      speed: 1500,
      cssEase: "cubic-bezier(.5, 0, 0, 1)",
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      pauseOnFocus: false,
      infinite: true,
    });
    $(".filter-container").on("afterChange", function (slick, currentSlide) {
      setTimeout(() => {
        let text = $(".slick-current.slick-active a").text();
        let category = $(".slick-current.slick-active span").text();
        let link = $(".slick-current.slick-active a").attr("href");
        $(".formations-home .formations-home-content-btn").attr("href", link);
        $(".formations-home .btn-formation-detail").attr("href", link);
        $(".formations-home .formations-home-content h3").text(text);
        $(".formations-home .formations-home-content span").text(category);
        $(
          ".formations-home .formations-home-content h3,.formations-home .formations-home-content span,.formations-home .formations-home-content .formations-home-content-btn"
        ).fadeIn();
      }, 100);
    });
    $(".filter-container").on("beforeChange", function (slick, currentSlide) {
      $(
        ".formations-home-content h3,.formations-home-content span,.formations-home-content .formations-home-content-btn"
      ).fadeOut();
    });
    $(".formation-slide-navigation .arrow").on("click", function () {
      if ($(this).data("direction") === "prev") {
        $(".filter-container").slick("slickPrev");
      } else {
        $(".filter-container").slick("slickNext");
      }
    });
    if ($(".mix ").length > 1) {
      $(".formation-slide-navigation").addClass("active");
    } else {
      $(".formation-slide-navigation").removeClass("active");
    }
    $(".control.btn").on("click", function () {
      $(".mix").fadeOut();
      $(
        ".formations-home-content h3,.formations-home-content span,.formations-home-content .formations-home-content-btn"
      ).fadeOut();
      setTimeout(() => {
        let filtred = $(this).data("filter");
        $(".control.btn").removeClass("active");
        $(".filter-container").slick("slickUnfilter");
        if (filtred == "all") {
          $(".filter-container").slick("slickUnfilter");
        } else {
          $(".filter-container").slick("slickFilter", filtred);
        }
        $(this).addClass("active");
        let text = $(".slick-current.slick-active a").text();
        let category = $(".slick-current.slick-active span").text();
        let link = $(".slick-current.slick-active a").attr("href");
        $(".formations-home .formations-home-content-btn").attr("href", link);
        $(".formations-home .btn-formation-detail").attr("href", link);
        $(".formations-home .formations-home-content h3").text(text);
        $(".formations-home .formations-home-content span").text(category);
        $(".mix").fadeIn();
        $(
          ".formations-home .formations-home-content h3,.formations-home .formations-home-content span,.formations-home .formations-home-content .formations-home-content-btn"
        ).fadeIn();
      }, 1000);
    });
    $(".owl-carousel-partenaires").owlCarousel({
      loop: true,
      margin: 60,
      nav: true,
      dots: false,
      responsiveClass: true,
      stagePadding: 30,
      navText: [
        '<i class="ri-arrow-left-s-fill"></i>',
        '<i class="ri-arrow-right-s-fill"></i>',
      ],
      responsive: {
        0: {
          items: 2,
        },
        400: {
          items: 3,
        },
        600: {
          items: 4,
        },
        1000: {
          items: 6,
        },
      },
    });
    $(".carousel-vie-etudiante-responsive").owlCarousel({
      loop: false,
      margin: 15,
      nav: false,
      dots: false,
      autoWidth: true,
      mouseDrag: true,
    });
    $(".slider-homepage__eseac").slick({
      autoplay:true,
      autoplaySpeed:10000,
      speed:600,
      slidesToShow:1,
      slidesToScroll:1,
      pauseOnHover:false,
      dots:true,
      pauseOnDotsHover:true,
      cssEase:'linear',
      infinite: false,
      draggable:false,
      prevArrow:'<button class="PrevArrow"></button>',
      nextArrow:'<button class="NextArrow"></button>', 
    });
   
      //Check to see if the window is top if not then display button
      $(window).scroll(function(){
          if ($(this).scrollTop() > 100) {
              $('.scrollToTop').fadeIn();
          } else {
              $('.scrollToTop').fadeOut();
          }
      });
      
      //Click event to scroll to top
      $('.scrollToTop').click(function(){
          $('html, body').animate({scrollTop : 0},800);
          return false;
      });

  
  });
})(jQuery, Drupal);
