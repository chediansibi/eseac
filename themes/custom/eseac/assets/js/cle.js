(function ($, Drupal) {
  "use strict";
  /*------------------chiffre clÃƒÂ© avec annimation-------------------------------*/
  var counter = function () {
    $(".timer").each(function () {
      $(".timer").countTo();
    });
  };
  var counterWayPoint = function () {
    if ($(".chiffre-cles").length > 0) {
      $(".chiffre-cles").waypoint(
        function (direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(counter, 400);
            $(this.element).addClass("animated");
          }
        },
        {
          offset: "85%",
        }
      );
    }
  };
  counterWayPoint();
  var contentWayPoint = function () {
    var i = 0;
    if ($(".animate-box").length > 0) {
      $(".animate-box").waypoint(
        function (direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            i++;
            $(this.element).addClass("item-animate");
            setTimeout(function () {
              $("body .animate-box.item-animate").each(function (k) {
                var el = $(this);
                setTimeout(
                  function () {
                    el.addClass("fadeInUp animated");
                    el.removeClass("item-animate");
                  },
                  k * 200,
                  "easeInOutExpo"
                );
              });
            }, 100);
          }
        },
        {
          offset: "80%",
        }
      );
    }
  };
  contentWayPoint();
})(jQuery, Drupal);
