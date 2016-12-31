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
    $("#toggle").addClass("button-fixed");
  } else {
    $(".nav").removeClass("nav-fixed");
    $(".navigation").removeClass("navigation-fixed");
    $(".contact").removeClass("contact-fixed");
    $("#toggle").removeClass("button-fixed");
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

$(".close_menu").on('click', function(event) {
  $('#toggle').removeClass('active');
});

function testominial_next()  {
  var nextCount = data.number;
  renderTestimonial(nextCount);
};

function testominial_back()  {
  var backCount = data.number - 2;
  renderTestimonial(backCount);
};

function currentTestiVarFunction(x) {
  return x;
}

var allTestimonials = data.map(function(monials) {
  return monials;
});

var template = Handlebars.compile( $('#template').html() );

function renderTestimonial(count) {
  var testimonialCurrent = currentTestiVarFunction(count);
  data[count]["current"] = testimonialCurrent + 1;
  var testimonialTotal = allTestimonials.length;
  data[count]["total"] = testimonialTotal;
  data["number"] = allTestimonials[count].id
  var currentTemplate = template(allTestimonials[count]);

  $('#testimonial_template').fadeOut("slow").promise().done(function() {
    $('#testimonial_template').empty().append(currentTemplate).fadeIn('slow');
    if (testimonialCurrent == '0') {
      $('#test_left').addClass( "testimonial-hide" );
    } else {
      $('#test_left').removeClass( "testimonial-hide" );
    }
    if (testimonialCurrent +1 == testimonialTotal) {
      $('#test_right').addClass( "testimonial-hide" );
    } else {
      $('#test_right').removeClass( "testimonial-hide" );
    }
  });
};

(function() {
 renderTestimonial(0);
})();
