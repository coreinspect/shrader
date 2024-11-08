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

const carouselItems = [
  {
    imgSrc: "./assets/images/teams/chris.png",
    urlSrc: "#",
    alt: "Chris",
    title: "Chris",
    position: "Project Manager",
    description:
      "I have always been a leader in team-building. One of my jobs as an AI researcher at Georgia Tech was to get isolated AI research groups collaborating together; then I did it again for IBM's Qistkit community. This was harder than it sounds, but I was good at it. I grew up reading Asimov, Herbert, Verne, Dick, Wells, and Shirow and watching Star Trek TNG. Inspired by characters like Data and Wesley, I never forgot my passion for AI and never gave up on the idea that my dreams were possible.",
  },
  {
    imgSrc: "./assets/images/teams/raoul.png",
    urlSrc: "#",
    alt: "Raoul",
    title: "Raoul",
    position: "DevOps",
    description:
      "With over a decade of experience in IT service, I am a seasoned Server Support Engineer specializing in data center network issues and server support. My background includes 3 years as a software specialist at Lexmark, where I honed my troubleshooting skills on network-connected devices. Currently, I work at Shrader technologies. I hold a Bachelor’s in Electronics and Communications Engineering from the University of Cebu.",
  },
  {
    imgSrc: "./assets/images/teams/ardy.png",
    urlSrc: "#",
    alt: "Ardy",
    title: "Ardy",
    position: "Backend Developer",
    description:
      "As a backend development enthusiast with a background in Python, machine learning, and data science, I’m passionate about building efficient and scalable systems. I enjoy exploring new tech in AI and backend development, always bringing a solutions-driven approach to my work.",
  },
  {
    imgSrc: "./assets/images/teams/jury1.jpg",
    urlSrc: "#",
    alt: "Jury",
    title: "Jury",
    position: "Frontend Developer",
    description:
      "Hi there! I'm a passionate Frontend Developer with a knack for crafting seamless and user-centric web applications. I'm dedicated to creating innovative solutions that blend creativity and functionality. Let's collaborate to bring your digital vision to life!",
  },
  {
    imgSrc: "./assets/images/teams/christine.png",
    urlSrc: "#",
    alt: "Christine",
    title: "Christine",
    position: "Graphic Designer",
    description:
      "My experience as an artist producing acrylic on canvas abstracts and portraits gives me a real-world take on color theory. I am also a content creator with channels on YouTube and TikTok where I teach and sell art, I am thrilled to bring my skills in art to the team!",
  },
  {
    imgSrc: "./assets/images/teams/kent.png",
    urlSrc: "#",
    alt: "Kent",
    title: "Kent",
    position: "Mobile Developer",
    description:
      "I’m Kent Arintok, a mobile developer with 4 years of experience working on various projects, including IoT, GPS-based time tracking, and emergency assistance apps. I’ve had the opportunity to lead small teams, ensuring tasks are completed and projects delivered on time. I was also involved in building a startup, which taught me a lot about project execution and the challenges of securing clients. I’m passionate about creating impactful solutions and excited to bring that expertise to this team.",
  },
  {
    imgSrc: "./assets/images/teams/nash.png",
    urlSrc: "#",
    alt: "Nash",
    title: "Nash",
    position: "Mobile Developer",
    description:
      "I’m Kent Arintok, a mobile developer with 4 years of experience working on various projects, including IoT, GPS-based time tracking, and emergency assistance apps. I’ve had the opportunity to lead small teams, ensuring tasks are completed and projects delivered on time. I was also involved in building a startup, which taught me a lot about project execution and the challenges of securing clients. I’m passionate about creating impactful solutions and excited to bring that expertise to this team.",
  },
];

// Get the carousel container
const carouselContainer = document.getElementById("carouselContainer");

// Generate the carousel items
carouselItems.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("cards-carousel");

  listItem.innerHTML = `
   <div class="img">
      <img src="${item.imgSrc}" draggable="false" alt="${item.alt}" />
    <div class="card-carouselItem">
    <h2>${item.title}</h2>
    <div class="links btn">
      <a href="${item.urlSrc}" target="_blank" rel="noopener">${item.position}</a>
    </div>
    </div>
     <div class="overlay">
            <h2>${item.title}</h2>
            <p>
             ${item.description}
            </p>
    </div>

  `;

  carouselContainer.appendChild(listItem);
});

const wrapper = document.querySelector(".wrapper-custom-slider");
const carouselJS = document.querySelector(".unique-carousel");
const arrowBtns = document.querySelectorAll(".wrapper-custom-slider i");
const firstCardWidth = carouselJS.querySelector(".cards-carousel").offsetWidth;
const carouselChildren = [...carouselJS.children];
let cards = document.querySelectorAll(".cards-carousel"); // Use querySelectorAll to get all cards

let isDragging = false,
  startX,
  startScrollLeft,
  timeoutId;

let cardPerView = Math.round(carouselJS.offsetWidth / firstCardWidth);

carouselChildren
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carouselJS.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

carouselChildren.slice(0, cardPerView).forEach((card) => {
  carouselJS.insertAdjacentHTML("beforeend", card.outerHTML);
});

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carouselJS.scrollLeft +=
      btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});

// Function to handle the start of dragging
const dragStart = (e) => {
  isDragging = true;
  carouselJS.classList.add("dragging");
  startX = e.pageX || e.touches[0].pageX; // Get starting X position (mouse or touch)
  startScrollLeft = carouselJS.scrollLeft; // Store the initial scroll position of the carouselJS
};

// Function to handle the dragging movement
const dragging = (e) => {
  if (!isDragging) return;
  e.preventDefault();

  const x = e.pageX || e.touches[0].pageX;
  const scrollDistance = x - startX;

  carouselJS.scrollLeft = startScrollLeft - scrollDistance;
};

// Function to stop dragging
const dragStop = () => {
  isDragging = false;
  carouselJS.classList.remove("dragging");
};

const autoPlay = () => {
  if (window.innerWidth < 400) return;
  timeoutId = setTimeout(() => {
    carouselJS.scrollLeft += firstCardWidth;
  }, 3500);
};

autoPlay();

// Function to apply the hover effect (circle on hover) on each card
const applyHoverEffect = () => {
  cards.forEach((card) => {
    // Mouse move event for desktop
    card.addEventListener("mousemove", (event) => {
      let rect = card.getBoundingClientRect();
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });

    // Touch start event for mobile
    card.addEventListener("touchstart", (event) => {
      let rect = card.getBoundingClientRect();
      let x = event.touches[0].clientX - rect.left;
      let y = event.touches[0].clientY - rect.top;
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
      card.classList.add("hover"); // Add a class to trigger any additional hover styles if necessary
    });

    // Touch end event to remove hover styles
    card.addEventListener("touchend", () => {
      card.classList.remove("hover");
    });
  });
};

applyHoverEffect();

const infiniteScroll = () => {
  if (carouselJS.scrollLeft <= 0) {
    carouselJS.classList.add("no-transition");
    carouselJS.scrollLeft = carouselJS.scrollWidth - 2 * carouselJS.offsetWidth;
    carouselJS.classList.remove("no-transition");
  } else if (
    Math.ceil(carouselJS.scrollLeft + carouselJS.offsetWidth) >=
    carouselJS.scrollWidth
  ) {
    carouselJS.classList.add("no-transition");
    carouselJS.scrollLeft = carouselJS.offsetWidth;
    carouselJS.classList.remove("no-transition");
  }

  clearTimeout(timeoutId);

  if (!wrapper.matches(":hover")) {
    autoPlay();
  }
};

// Add event listeners for drag functionality
carouselJS.addEventListener("mousedown", dragStart);
carouselJS.addEventListener("mousemove", dragging);
carouselJS.addEventListener("mouseup", dragStop);
carouselJS.addEventListener("mouseleave", dragStop);
carouselJS.addEventListener("scroll", infiniteScroll);

wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

// Add event listeners for touch interactions
carouselJS.addEventListener("touchstart", dragStart);
carouselJS.addEventListener("touchmove", dragging);
carouselJS.addEventListener("touchend", dragStop);

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// EmailJS initialization
(function () {
  emailjs.init({
    publicKey: "CqOt_i2a7x9ig0tV6",
  });
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // Validate fields are not empty (additional layer to HTML required)
      const inputs = document.querySelectorAll("#contact-form .input");
      let isValid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add("input-error"); // Add error styling (optional)
        } else {
          input.classList.remove("input-error");
        }
      });

      if (!isValid) return;

      emailjs.sendForm("service_fzlkhuh", "template_qynz1rw", this).then(
        () => {
          const successMessage = document.getElementById("success-message");
          successMessage.style.display = "block"; // Show success message
          this.reset(); // Clear form

          // Hide success message after 3 seconds
          setTimeout(() => {
            successMessage.style.display = "none";
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    });
};
