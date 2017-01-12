$( document ).ready(function() {

  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $("header").addClass("active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $("header").removeClass("active");
      }
  });
  $(".dropdown-nav").click(function(){
    $(this).children(".dropdown-content").slideToggle();
  });
  $(".owl-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    loop: true,
    // dots: true
  });
});
