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
    autoplay: true,
    autoplayTimeout: 7000,
    loop: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      }
    }
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
  $("#about-villa-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    dots: true,
    loop: true
  });

  $("#open-living-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    dots: true,
    loop: true
  });
  $("#services-carousel-1").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    dots: true,
    loop: true
  });

  $("#services-carousel-2").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    dots: true,
    loop: true
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
  var $grid = $('.mason').masonry({
    // options
    itemSelector: '.mason-item',
    columnWidth: '.mason-sizer',
    gutter: '.gutter-sizer',
    percentPosition: true,
  });

  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });

  // *** Contact us form ***
  var $contactForm = $('#contact-form');
  $contactForm.submit(function(e) {
	e.preventDefault();
	var $submit = $('input:submit', $contactForm);
	var defaultSubmitText = $submit.val();

	$.ajax({
		url: '//formspree.io/nick.x.chin@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			//$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
			$submit.attr('disabled', true).val('Sending message…');
		},
		success: function(data) {
			//$contactForm.append('<div class="alert alert--success">Message sent!</div>');
			$submit.val('Message sent!').addClass('form-success');
			setTimeout(function() {
				//$('.alert--success').remove();
				$submit.attr('disabled', false).val(defaultSubmitText).removeClass('form-success');
			}, 10000);
		},
		error: function(err) {
			//$contactForm.find('.alert--loading').hide();
			//$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
			$submit.val('There was an error sending the message. Please try again.');
			setTimeout(function() {
				//$('.alert--error').remove();
				$submit.attr('disabled', false).val(defaultSubmitText);
			}, 8000);
		}
	});
});
});
