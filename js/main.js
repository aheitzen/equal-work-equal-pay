new WOW().init();


$(document).ready(function() {
  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });


  $(function () {
    $("section").mousewheel(function(event, delta) {
   
      this.scrollLeft -= (delta * 2);
      event.preventDefault();

    });
  });

  $( "#political" ).hover(
  function() {
    $( "#political-sub-head-hover" ).css( "display", "none" );
    // $( ".showText" ).css( "display", "block" );
    $(".showText").css({
      "display": "block",
      "animation": "fadein 1s"
    });
    $("#political-header-hover").css({
      "margin-bottom": "3vh",
      "transition": "ease-out .5s"
    });
    }, function() {
    $( "#political-sub-head-hover" ).css( "display", "block" );
    $( ".showText" ).css( "display", "none" );
    $("#political-header-hover").css({
      "margin-bottom": "0vh",
      "transition": "ease-out .5s"
    });
  }
);
});




