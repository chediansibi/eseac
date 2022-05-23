(function ($, Drupal) {
  "use strict";
  /*----------------------Menu------------------------*/
  $(window).on("load scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      if (!$(".ihe-navbar").hasClass("sticky")) {
        $(".ihe-navbar").addClass("sticky");
      }
    } else {
      $(".ihe-navbar").removeClass("sticky");
    }
  });
  const navSlide = () => {
    const burger = document.querySelector(".btn-menu");
    const nav = document.querySelector(".menu-right");
    const cross = document.querySelector(".ri-add-line");
    const navLinks = document.querySelectorAll(".menu-items-right li");

    cross.addEventListener("click", () => {
      //Toggle Nav
      document
        .getElementsByClassName("menu-bg")[0]
        .classList.remove("change-bg");
      nav.classList.remove("nav-active");
    });

    burger.addEventListener("click", () => {
      document
        .getElementsByClassName("menu-bg")[0]
        .classList.toggle("change-bg");
      //Toggle Nav
      nav.classList.add("nav-active");
    });
  };

  $(".responsive-menu .btn-menu").click(function () {
    $(".menu-right-responsive").toggleClass("toggle-menu-responsive");
  });

  if ($(document).width() < 1199) {
    $(".menu").metisMenu({
      toggle: true,

      preventDefault: true,
      activeClass: "active",
      triggerElement: "span",
      parentTrigger: "li",
    });

    $(".spec-responsive .search").click(function () {
      $(
        ".responsive-menu .search-block-form-spec .js-form-type-search"
      ).toggleClass("toggclass");
    });
    $(
      ".responsive-menu .search-block-form-spec .js-form-type-search .ri-close-fill"
    ).click(function () {
      $(
        ".responsive-menu .search-block-form-spec .js-form-type-search"
      ).removeClass("toggclass");
    });
  }

  $(".responsive-menu .ri-add-line").click(function () {
    $(".menu-right-responsive").toggleClass("toggle-menu-responsive");
  });

  $(".part-right .search").click(function () {
    $(".desctop-menu  .js-form-type-search").toggleClass("toggclass");
    $(".desctop-menu .wrapper-nav").css("display", "none");
  });
  $(".desctop-menu  .js-form-type-search .ri-close-fill").click(function () {
    $(".desctop-menu  .js-form-type-search").removeClass("toggclass");
    $(".desctop-menu .wrapper-nav").css("display", "flex");
  });

  navSlide();
})(jQuery, Drupal);
