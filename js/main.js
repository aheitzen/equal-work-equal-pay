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

    $( "#family" ).hover(
  function() {
    $( "#family-sub-header-hover" ).css( "display", "none" );
    $(".showTextFamily").css({
      "display": "block",
      "animation": "fadein 1s"
    });
    $("#family-header-hover").css({
      "margin-bottom": "1vh",
      "transition": "ease-out .4s"
    });
    }, function() {
    $( "#family-sub-header-hover" ).css( "display", "block" );
    $( ".showTextFamily" ).css( "display", "none" );
    $("#family-header-hover").css({
      "margin-bottom": "0vh",
      "transition": "ease-out .4s"
    });
  }
);
  $( "#political" ).hover(
  function() {
    $( "#political-sub-head-hover" ).css( "display", "none" );
    $(".showText").css({
      "display": "block",
      "animation": "fadein 1s"
    });
    $("#political-header-hover").css({
      "margin-bottom": "2vh",
      "transition": "ease-out .4s"
    });
    }, function() {
    $( "#political-sub-head-hover" ).css( "display", "block" );
    $( ".showText" ).css( "display", "none" );
    $("#political-header-hover").css({
      "margin-bottom": "0vh",
      "transition": "ease-out .4s"
    });
  }
);
    $( "#financial" ).hover(
  function() {
    $( "#financial-sub-head-hover" ).css( "display", "none" );
    $(".showTextFinancial").css({
      "display": "block",
      "animation": "fadein 1s"
    });
    $("#financial-header-hover").css({
      "margin-bottom": "3vh",
      "transition": "ease-out .4s"
    });
    }, function() {
    $( "#financial-sub-head-hover" ).css( "display", "block" );
    $( ".showTextFinancial" ).css( "display", "none" );
    $("#financial-header-hover").css({
      "margin-bottom": "0vh",
      "transition": "ease-out .4s"
    });
  }
);
});




