
// ***************** Form Script ****************** //

$(document).ready(function() {
    // Initialize carousel for screenshots and Google rating
    $("#googlerating_slider").owlCarousel({
      loop: true,
      responsiveClass: true,
      nav: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 4000,
      smartSpeed: 400,
      navText: [
        "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />", 
        "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />"
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 2 },
        1024: { items: 2 },
        1200: { items: 3 }
      }
    });
        $("#belive_in_ther_slider").owlCarousel({
      loop: true,
      responsiveClass: true,
      nav: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 4000,
      smartSpeed: 400,
      navText: [
        "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />", 
        "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />"
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 1 },
        1024: { items: 1 },
        1200: { items: 1 }
      }
    });
    $(".owl-nav .owl-prev").attr("role", "button");
    $(".owl-nav .owl-next").attr("role", "button");

    // Initialize carousel for testimonials
    $("#testimonilas_slider").owlCarousel({
      loop: false,
      responsiveClass: true,
      nav: true,
      margin: 20,
      autoplay: false,
      autoplayTimeout: 4000,
      smartSpeed: 400,
      navText: [
        "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />", 
        "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />"
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 },
        1200: { items: 3 }
      }
    });
  $(document).ready(function () {
  // Check if the screen width is less than or equal to 768px (or your desired breakpoint)
  if ($(window).width() <= 1024) {
    $("#blue_box_slider").owlCarousel({
      loop: true,
      responsiveClass: true,
      nav: true,
      margin: 20,
      autoplay: false,
      autoplayTimeout: 4000,
      smartSpeed: 400,
      navText: [
        "<img src='images/previmage.webp' alt='Previous Slide' width='50' height='50' />",
        "<img src='images/nextimage.webp' alt='Next Slide' width='50' height='50' />"
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 }
      }
    });
  } else {
    // Destroy the carousel for desktop
    if ($("#blue_box_slider").hasClass("owl-loaded")) {
      $("#blue_box_slider").trigger("destroy.owl.carousel");
    }
  }
});

    // Video item click handler
    $(".vid-item").each(function(e) {
      $(this).on("click", function() {
        var t = e + 1;
        $(".vid-item .thumb").removeClass("active");
        $(".vid-item:nth-child(" + t + ") .thumb").addClass("active");
      });
    });

    // Read more/read less functionality
    function e() {
      var e = 200,
          t = " ...read more",
          s = " read less";
      $(".add-read-more").each(function() {
        if(!$(this).find(".first-section").length) {
          var i = $(this).text();
          if(i.length > e) {
            var a = i.substring(0, e),
                o = i.substring(e, i.length),
                n = a + "<span class='second-section'>" + o + "</span><span class='read-more' title='Click to Show More'>" + t + "</span><span class='read-less' title='Click to Show Less'>" + s + "</span>";
            $(this).html(n);
          }
        }
      });
      $(document).on("click", ".read-more,.read-less", function() {
        $(this).closest(".add-read-more").toggleClass("show-less-content show-more-content");
      });
    }
    e();
  });

