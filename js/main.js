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

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

var settings = {
  color: '#d02f31',
  trailColor: '#e8bfbc',
  trailWidth: 1,
  duration: 1400,
  easing: 'bounce',
  strokeWidth: 6,
  from: {color: '#d02f31', a:0},
  to: {color: '#e6a827', a:1},
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.setText("$" + Math.round(circle.value()* 61) + "k");
  }
}

let settings2 = Object.assign({}, settings);
settings2.duration = 1800;
// settings2.step = function(state, circle) {
//     circle.path.setAttribute('stroke', state.color);
//     circle.setText(Math.round(circle.value()* 51100));
//   }

let bar = new ProgressBar.Circle(containerCircle, settings);
let bar2 = new ProgressBar.Circle(containerCircle1, settings2);


let fill = 1;
let fill2 = 0.841;

bar.animate(fill);
bar2.animate(fill2);

let interval = setInterval(() => {
  if (fill === 1) {
    fill = 0;
    fill2 = 0;
  } else {
    fill = 1;
    fill2 = 0.841;
  }

  bar.animate(fill);
  bar2.animate(fill2);
}, 4000);

bar.text.style.fontFamily = '"Josefin Sans", sans-serif';
bar.text.style.fontSize = '2rem';

bar2.text.style.fontFamily = '"Josefin Sans", sans-serif';
bar2.text.style.fontSize = '2rem';













