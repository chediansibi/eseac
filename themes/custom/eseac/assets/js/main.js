!function(e,t){"use strict";e("*").on("touchstart",function(){e(this).trigger("hover")}).on("touchend",function(){e(this).trigger("hover")});var a=function(){e(".timer").each(function(){e(".timer").countTo()})};e(".key-figures").length>0&&e(".key-figures").waypoint(function(t){"down"!==t||e(this.element).hasClass("animated")||(setTimeout(a,400),e(this.element).addClass("animated"))},{offset:"95%"});e(".animate-box").length>0&&e(".animate-box").waypoint(function(t){"down"!==t||e(this.element).hasClass("animated")||(e(this.element).addClass("item-animate"),setTimeout(function(){e("body .animate-box.item-animate").each(function(t){var a=e(this);setTimeout(function(){a.addClass("fadeInUp animated"),a.removeClass("item-animate")},200*t,"easeInOutExpo")})},100))},{offset:"80%"}),e(document).on("mouseenter",'[data-toggle="tab"]',function(){e(this).tab("show"),e(this).toggleClass("hover")}),e(window).on("load",function(){e(".se-pre-con").delay(700).fadeOut("slow")}),e(window).on("load",function(){var t=document.getElementsByClassName("thumbnail");new simpleParallax(t,{delay:.6,transition:"cubic-bezier(0,0,0,1)"}),e(".my-paroller").paroller()});const o=document.querySelectorAll(".scalability-section .collapse__arrow .collapse__content");o.forEach(t=>{e(t).click(function(){o.forEach(e=>{e.classList.contains("active__collapse")&&e.classList.remove("active__collapse"),t.classList.add("active__collapse")}),setTimeout(()=>{const e=document.querySelectorAll(".scalability-section .collapse__arrow .collapse__content.collapsed");e&&e.forEach(e=>{e.classList.contains("active__collapse")&&e.classList.remove("active__collapse")})},.2)}),e(".scalability-section .crc-close1.close").click(function(){e(".scalability-section .collapse__arrow .collapse__content").removeClass("active__collapse")})})}(jQuery,Drupal);