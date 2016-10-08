$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

$(window).scroll(function() {
  if( $(this).scrollTop() > 144) {
    $(".nav").addClass("nav-fixed");
    $(".navigation").addClass("navigation-fixed");
    $(".contact").addClass("contact-fixed");
    $(".logo").addClass("logo-fixed");
  } else {
    $(".nav").removeClass("nav-fixed");
    $(".navigation").removeClass("navigation-fixed");
    $(".contact").removeClass("contact-fixed");
    $(".logo").removeClass("logo-fixed");
  }
});

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('#overlay').removeClass('open');
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 50
        }, 1000);
    }
});
