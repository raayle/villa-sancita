$( document ).ready(function() {

  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $("header").addClass("active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $("header").removeClass("active");
      }
  });

});

$( document ).ready(function() {
   $(".dropdown-nav").click(function(){
     $(this).children(".dropdown-content").slideToggle();
   });
});