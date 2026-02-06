$(".toggle-menu").click(function () {
  var menuTitle = $(this).attr("data-title");
  var menuId = "#" + menuTitle;
  var $menu = $(menuId);

  if ($menu.hasClass("show-mega-menu")) {
    $menu.removeClass("show-mega-menu");
  } else {
    $(".desktop-header").find(".show-mega-menu").removeClass("show-mega-menu");
    $menu.addClass("show-mega-menu");
  }
});

$(".close-mega-menu").click(function () {
  $(this)
    .closest(".mega-menu-wrapper")
    .find(".show-mega-menu")
    .removeClass("show-mega-menu");
});

$(document).ready(function () {
  $(".custom-toggle-icon").click(function () {
    var togglerIcon = $(this).find("span.fa");

    const $menu = $(this).closest(".mobile-header").next(".mobile-header-list");

    if (!$menu.hasClass("mobile-menu-show")) {
      togglerIcon.addClass("fa-close").removeClass("fa-bars");

      $menu.css("display", "block");
      setTimeout(() => {
        $menu.addClass("mobile-menu-show");
      }, 10);
    } else {
      togglerIcon.removeClass("fa-close").addClass("fa-bars");

      $menu.removeClass("mobile-menu-show");
      $menu.one("transitionend", function () {
        $menu.css("display", "none");
      });
    }
  });

  var closeIcon = $(".custom-toggle-icon").find("img.close-icon");

  $(closeIcon).click(function () {
    $(this).closest(".mobile-header-list").removeClass("mobile-menu-show");
    $(".drodown-box").find(".show-mobile-menu").removeClass("show-mobile-menu");
  });

  $(".custom-close-icon").click(function () {
    $(this).closest(".mobile-header-list").removeClass("mobile-menu-show");
    $(this)
      .closest(".drodown-box")
      .find(".show-mobile-menu")
      .removeClass("show-mobile-menu");
  });
});

$(document).ready(function () {
  $(".company-dropdown").click(function () {
    $(".desktop-right-dropdown").toggleClass("show-company-dropdown");
  });
});

$(".toggle-mobile-menu").on("click", function () {
  var menuTitle = $(this).attr("data-title");
  var $menu = $("#" + menuTitle);

  if (!$menu.hasClass("show-mobile-menu")) {
    $menu.css("display", "block");
    setTimeout(() => {
      $menu.addClass("show-mobile-menu");
    }, 10);
  } else {
    $menu.removeClass("show-mobile-menu");
    $menu.one("transitionend", function () {
      $menu.css("display", "none");
    });
  }
});

$(".footer-accordion-header").click(function () {
  $(this).toggleClass("active");
  $(this).next(".footer-accordion-content").slideToggle(200);

  $(this).find(".arrow-icon").toggleClass("rotate");
});

$(".accordion-tab").on("click", function () {
  var e = "#" + $(this).attr("title");

  if ($(window).width() > 991) {
    $(".service-accordion-content .accordion-content-show").removeClass(
      "accordion-content-show",
    );
    $(e).addClass("accordion-content-show");
  } else {
    $(this).next(".accordion-content").not(e).slideUp();
    $(this).after($(e).stop(true, true).slideToggle());
    $(this).find("span.fa").toggleClass("rotate90");
  }
});

$(".arrival-slider").owlCarousel({
  loop: true,
  margin: 10,
  center: true,
  nav: true,
  dots: false,
  navText: [
    '<img src="./assets/images/icons/prev.svg" alt="Prev" class="nav-arrow">',
    '<img src="./assets/images/icons/next.svg" alt="Next" class="nav-arrow">',
  ],
  responsive: {
    0: {
      items: 1.7,
    },
    767: {
      items: 2.7,
    },
    1200: {
      items: 3.7,
    },
  },
});

$(".adaptive-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  dots: true,
  items: 1,
  autoplay: false,
  autoplayTimeout: 5000,
  animateOut: "fadeOut",
  navText: [
    '<img src="./assets/images/home/arrow-left.svg" alt="Prev" class="nav-arrow">',
    '<img src="./assets/images/home/arrow-right.svg" alt="Next" class="nav-arrow">',
  ],
});

$(".featured-inventory-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 4000,
  center: true,
  autoWidth: true,
  responsive: {
    0: {
      items: 1,
      center: false,
    },
    768: {
      items: 2,
      center: false,
    },
    1200: {
      items: 4,
    },
  },
});

$(".awards-carousel").owlCarousel({
  loop: true,
  margin: 8,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 4000,
  responsive: {
    0: {
      items: 1,
    },
    576: {
        items: 2,
    },
    992:{
        items: 2,
    },
    1200: {
      items: 2.7,
    },
  },
});

// locaiton dropdown toggle

$(document).ready(function () {
  $(".toggle-location-dropdown").on("click", function (e) {
    e.preventDefault();

    const $dropdown = $(this).siblings(".location-dropdown-list");
    $dropdown.slideToggle(200);
  });

  $(".location-dropdown-list a").on("click", function (e) {
    e.preventDefault();

    const location = $(this).data("location");
    const phone = $(this).data("phone");

    const $parent = $(this).closest(".location-dropdown");
    $parent.find(".location-text").text(location);
    $parent.find(".phone-text").text(phone);

    $parent.find(".location-dropdown-list").slideUp(200);
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".location-dropdown").length) {
      $(".location-dropdown-list").slideUp(200);
    }
  });

  // Service Tabs Functionality
  $(".service-tab-item").on("click", function () {
    const target = $(this).data("target");

    // Update active tab
    $(".service-tab-item").removeClass("active");
    $(this).addClass("active");

    // Update active content
    $(".service-tab-content").removeClass("active");
    $("#" + target).addClass("active");
  });
});
