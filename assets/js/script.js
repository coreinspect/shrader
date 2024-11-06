(function ($) {
  "use strict";

  // Window Resize Mobile Menu Fix
  mobileNav();

  // Scroll animation init (ensure ScrollReveal is imported correctly)
  if (typeof ScrollReveal !== "undefined") {
    window.sr = ScrollReveal();
  }

  // Menu Dropdown Toggle
  if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function () {
      $(this).toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    });
  }

  // Menu elevator animation
  $("a[href*='#']:not([href='#'])").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      let target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        if ($(window).width() < 991) {
          $(".menu-trigger").removeClass("active");
          $(".header-area .nav").slideUp(200);
        }
        $("html,body").animate({ scrollTop: target.offset().top - 130 }, 700);
        return false;
      }
    }
  });

  $(document).ready(function () {
    $(document).on("scroll", onScroll);

    // Smooth scroll
    $('a[href^="#"]').on("click", function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $("a").each(function () {
        $(this).removeClass("active");
      });
      $(this).addClass("active");

      const target = $(this.hash);
      $("html, body")
        .stop()
        .animate(
          { scrollTop: target.offset().top - 130 },
          500,
          "swing",
          function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
          }
        );
    });
  });

  function onScroll() {
    const scrollPos = $(document).scrollTop();
    $(".nav a").each(function () {
      const currLink = $(this);
      const refElement = $(currLink.attr("href"));
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $(".nav ul li a").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }

  // Home separator
  if ($(".home-seperator").length) {
    $(".home-seperator .left-item, .home-seperator .right-item").imgfix();
  }

  // Counter animation
  if ($(".count-item").length) {
    $(".count-item strong").counterUp({ delay: 10, time: 1000 });
  }

  // Page loading animation
  $(window).on("load", function () {
    if ($(".cover").length) {
      $(".cover").parallax({
        imageSrc: $(".cover").data("image"),
        zIndex: "1",
      });
    }

    $("#preloader").animate({ opacity: "0" }, 600, function () {
      setTimeout(function () {
        $("#preloader").css("visibility", "hidden").fadeOut();
      }, 300);
    });
  });

  // Mobile menu setup with resize fix
  $(window).on("resize", function () {
    mobileNav();
  });

  function mobileNav() {
    const width = $(window).width();
    $(".submenu")
      .off("click")
      .on("click", function () {
        if (width < 992) {
          $(".submenu ul").removeClass("active");
          $(this).find("ul").toggleClass("active");
        }
      });
  }
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  // Select both .sub-about-text and .about-right elements
  const elements = document.querySelectorAll(".sub-about-text, .about-right");

  function handleScroll() {
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        element.classList.add("active"); // Add active class to trigger animation
      }
    });
  }

  // Run the handleScroll function on scroll
  window.addEventListener("scroll", handleScroll);

  // Run the handleScroll function immediately to check if elements are already in view
  handleScroll();
});
