(function ($, Drupal) {
  "use strict";

  /*----------------------------------------------------*/
  /*  Magnific Pop up js (Youtube Video)
    /*----------------------------------------------------*/
  if ($(".video-play-button").length) {
    $(".video-play-button").magnificPopup({
      type: "iframe",
      iframe: {
        markup:
          '<div class="mfp-iframe-scaler">' +
          '<div class="mfp-close"></div>' +
          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
          "</div>",
        patterns: {
          youtube: {
            index: "youtube.com/",
            id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1",
          },
        },
        srcAction: "iframe_src",
      },
    });
  }

  $(document).ready(function () {
    var testsrc = $(".video-container iframe")[0].src;
    $(".video-container iframe").src = "";
    $(".video-container iframe").attr("src", "");
    $(".box-video").click(function () {
      $("iframe", this)[0].src = testsrc + "?autoplay=1";
      $(this).addClass("open");
    });
  });
})(jQuery, Drupal);
