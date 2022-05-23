(function ($, Drupal) {
  "use strict";
  /*----------------------carousel infrastructure------------------------*/

  $("#carousel-infrastructure").owlCarousel({
    loop: false,
    margin: 15,
    nav: true,
    autoplay: false,
    dots: false,
    responsiveClass: true,
    navText: [
      '<i class="ri-arrow-left-s-fill"></i>',
      '<i class="ri-arrow-right-s-fill"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        autoplay: true,
      },
      678: {
        items: 1,
      },
    },
  });
})(jQuery, Drupal);
