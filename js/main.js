new WOW({
  scrollContainer: 'section'
}).init();

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

$(document).ready(function (){
  $("#home-link").click(function (){
      $('html, body').animate({
          scrollLeft: $("#title").offset().left
        }, 1000);
    });
  $("a#history-link").click(function (){
      $('html, body').animate({
          scrollLeft: $("#history").offset().left()
        }, 1000);
    });
    // $("#movie").click(function (){
    //   $('html, body').animate({
    //       scrollLeft: $("#movie-section").offset().top
    //     }, 1000);
    // });
    // $("#contact").click(function (){
    //   $('html, body').animate({
    //       scrollLeft: $("#footer").offset().top
    //     }, 1000);
    // });
    // $("#pricing").click(function (){
    //   $('html, body').animate({
    //       scrollLeft: $("#pricing-header").offset().top
    //     }, 1000);
    // });
});

var settings = {
  color: '#d02f31',
  trailColor: 'white',
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

let settings3 = Object.assign({}, settings);
settings3.duration = 1400;
settings3.color = '#ffffff';
settings3.from.color = "#2C60A5";
settings3.to.color = "#152E46";
settings3.step = function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.setText("$" + Math.round(circle.value()* 2343));
  }


let settings4 = Object.assign({}, settings);
settings4.duration = 1800;
settings4.color = '#ffffff';
settings4.step = function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.setText("$" + Math.round(circle.value()* 2343));
  }

let bar6 = new ProgressBar.Circle(containerCircle, settings);
let bar7 = new ProgressBar.Circle(containerCircle1, settings2);
let bar8 = new ProgressBar.Circle(containerCircle3, settings3);
let bar9 = new ProgressBar.Circle(containerCircle4, settings4);

let fill6 = 1;
let fill7 = 0.841;

let fill8 = 1;
let fill9 = 0.60;

bar6.animate(fill6);
bar7.animate(fill7);
bar8.animate(fill8);
bar9.animate(fill9);

let interval = setInterval(() => {
  if (fill6 === 1) {
    fill6 = 0;
    fill7 = 0;
  } else {
    fill6 = 1;
    fill7 = 0.841;
  }
  bar6.animate(fill6);
  bar7.animate(fill7);
}, 4000);

let interval2 = setInterval(() => {
  if (fill8 === 1) {
    fill8 = 0;
    fill9 = 0;
  } else {
    fill8 = 1;
    fill9 = 0.60;
  }
  bar8.animate(fill8);
  bar9.animate(fill9);
}, 4000);

bar6.text.style.fontFamily = '"Josefin Sans", sans-serif';
bar6.text.style.fontSize = '2rem';

bar7.text.style.fontFamily = '"Josefin Sans", sans-serif';
bar7.text.style.fontSize = '2rem';

bar8.text.style.fontFamily = '"Josefin Sans", sans-serif';
bar8.text.style.fontSize = '2rem';

bar9.text.style.fontFamily = '"Josefin Sans", sans-serif';
bar9.text.style.fontSize = '2rem';

var ctx = document.getElementById("myChart"); 



// HILARY JS

var bar = new ProgressBar.Line(raceStat, {
  strokeWidth: 20,
  easing: 'easeInOut',
  duration: 1400,
  color: '#132c43',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: 'white',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#132c43'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

let fill = 1;
bar.animate(1.0);  


//bar 2//
var bar2 = new ProgressBar.Line(raceStat2, {
  strokeWidth: 20,
  easing: 'easeInOut',
  duration: 1400,
  color: '#132c43',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: 'white',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#132c43'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
let fill2=.56;
bar2.animate (fill2); 

let interval3 = setInterval(() => {
  if (fill === 1) {
    fill = 0;
    fill2 = 0;
  } else {
    fill = 1;
    fill2 = 0.56;
  }
  bar.animate(fill);
  bar2.animate(fill2);
}, 4000);

//bar 3//
var bar3 = new ProgressBar.Line(raceStat3, {
  strokeWidth: 20,
  easing: 'easeInOut',
  duration: 1400,
  color: '#132c43',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: 'white',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#132c43'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
fill3 = 1;
bar3.animate (1.0);  // Number from 0.0 to 1.0
//bar 4//
var bar4 = new ProgressBar.Line(raceStat4, {
  strokeWidth: 20,
  easing: 'easeInOut',
  duration: 1400,
  color: '#132c43',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: 'white',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#132c43'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});
let fill4 = .64;
bar4.animate (fill4);  // Number from 0.0 to 1.0

let interval4 = setInterval(() => {
  if (fill3 === 1) {
    fill3 = 0;
    fill4 = 0;
  } else {
    fill3 = 1;
    fill4 = 0.64;
  }
  bar3.animate(fill3);
  bar4.animate(fill4);
}, 4000);

