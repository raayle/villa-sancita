$( document ).ready(function() {

  $(window).on("scroll", function() {
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
    autoplayTimeout: 5000,
    loop: true,
    dots: true
  });
});
