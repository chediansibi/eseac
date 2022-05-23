(function ($, Drupal) {
    "use strict";

    $("#carousel-reference").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplay: false,
        margin: 60,
        responsiveClass: true,
        navText: [
            '<i class="ri-arrow-left-s-fill"></i>',
            '<i class="ri-arrow-right-s-fill"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 5,
            },
        },
    });
    $(".owl-carousel-formation").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        margin: 45,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            1000: {
                items: 2,
            },
        },
    });
})(jQuery, Drupal);
