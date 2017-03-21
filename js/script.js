$( document ).ready(function() {

  $(window).on("scroll", function() {
      /* Removed for now */
      if($(window).scrollTop() > 50) {
          $("header").addClass("active-nav");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $("header").removeClass("active-nav");
      }
  });
  $(".dropdown-nav").click(function(){
    $(this).children(".dropdown-content").slideToggle();
  });

  // *** Landing page ***
  $("#villa-pic-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true,
    dots: true
  });
  $("#tripadvisor-carousel").owlCarousel({
    items: 1,
    autoplay: false,
    dots: false,
    nav: true,
    navText: [
      "<div class='ta-nav-left'><img src='/images/tripadvisor/navigate-left.png'></div>",
      "<div class='ta-nav-left'><img src='/images/tripadvisor/navigate-right.png'></div>"
    ]
  });

  // *** Rates page ***
  $("#1-2-br").click(function() {
    openBedrooms(".1-2-br-rates");
    $(this).addClass("active");
  }).click();
  $("#3-br").click(function() {
    openBedrooms(".3-br-rates");
    $(this).addClass("active");
  });

  function openBedrooms(target) {
    $(".tab").removeClass("active");
    $(".tabcontent").css("display", "none");

    $(target).css("display", "block");
  }

  // *** Gallery ***
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    percentPosition: true,
  });
});
