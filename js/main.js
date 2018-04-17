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
    $( ".showText" ).css( "display", "block" );
  }, function() {
    $( "#political-sub-head-hover" ).css( "display", "block" );
    $( ".showText" ).css( "display", "none" );
  }
);
});




