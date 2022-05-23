(function ($, Drupal) {
  "use strict";
  /*---------------- Ipada ---------------*/
  var mobileHover = function () {
    $("*")
      .on("touchstart", function () {
        $(this).trigger("hover");
      })
      .on("touchend", function () {
        $(this).trigger("hover");
      });
  };
  mobileHover();

  /*------------------chiffre clÃ© avec annimation-------------------------------*/
  var counter = function () {
    $(".timer").each(function () {
      $(".timer").countTo();
    });
  };
  var counterWayPoint = function () {
    if ($(".key-figures").length > 0) {
      $(".key-figures").waypoint(
        function (direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(counter, 400);
            $(this.element).addClass("animated");
          }
        },
        {
          offset: "95%",
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
  $(document).on("mouseenter", '[data-toggle="tab"]', function () {
    $(this).tab("show");
    $(this).toggleClass("hover");
  });

  $(window).on("load", function () {
    $(".se-pre-con").delay(700).fadeOut("slow");
  });

  $(window).on("load", function () {
    var image = document.getElementsByClassName("thumbnail");
    new simpleParallax(image, {
      delay: 0.6,
      transition: "cubic-bezier(0,0,0,1)",
    });

    $(".my-paroller").paroller();

    /*-----------------------------------------------------*/
  });

  // CUSTOM JS : SCALABILITY PAGE
  const __collapseContent = document.querySelectorAll(
    ".scalability-section .collapse__arrow .collapse__content"
  );
  __collapseContent.forEach((_content) => {
    // EVENT CLICK :: POINTER CONTENT COLLAPSE
    $(_content).click(function () {
      __collapseContent.forEach((_internalContent) => {
        _internalContent.classList.contains("active__collapse")
          ? _internalContent.classList.remove("active__collapse")
          : "";
        _content.classList.add("active__collapse");
      });
      //  TOGGLE ACTIVE CALSS
      setTimeout(() => {
        const collapsedContent = document.querySelectorAll(
          ".scalability-section .collapse__arrow .collapse__content.collapsed"
        );
        if (collapsedContent) {
          collapsedContent.forEach((collpsedElement) => {
            collpsedElement.classList.contains("active__collapse")
              ? collpsedElement.classList.remove("active__collapse")
              : "";
          });
        }
      }, 0.2);
    });

    $(".scalability-section .crc-close1.close").click(function () {
      $(".scalability-section .collapse__arrow .collapse__content").removeClass(
        "active__collapse"
      );
    });
  });
})(jQuery, Drupal);
