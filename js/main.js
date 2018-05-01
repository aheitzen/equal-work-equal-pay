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



$(document).ready(function (){
  $("#home-link").click(function (){
    closeNav();
      $('section').animate({
          scrollLeft: $("#title").offset().left
        }, 1000);
    });
  $("#history-link").click(function (){
      closeNav();
      $('section').animate({
          scrollLeft: $("#history").offset().left
        }, 1000);
    });
  $("#stats-link").click(function (){
      closeNav();
      $('section').animate({
          scrollLeft: $("#radial-graphs").offset().left
        }, 1000);
    });
  $("#leaders-link").click(function (){
      closeNav();
      $('section').animate({
          scrollLeft: $("#contemporary-leaders-section").offset().left
        }, 1000);
    });
  $("#solutions-link").click(function (){
      closeNav();
      $('section').animate({
          scrollLeft: $("#solutions").offset().left
        }, 1000);
    });
  $("#resources-link").click(function (){
      closeNav();
      $('section').animate({
          scrollLeft: $("#resources").offset().left
        }, 1000);
    });
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


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

let settings3 = JSON.parse(JSON.stringify(settings));
settings3.duration = 1400;
settings3.color = '#ffffff';
settings3.from.color = "#2C60A5";
settings3.to.color = "#152E46";
settings3.step = function(state, circle) {
  circle.path.setAttribute('stroke', state.color);
  circle.setText("$" + Math.round(circle.value()* 2343));
}


let settings4 = JSON.parse(JSON.stringify(settings));
settings4.duration = 1800;
settings4.color = '#ffffff';
settings4.step = function(state, circle) {
  circle.path.setAttribute('stroke', state.color);
  circle.setText("$" + Math.round(circle.value()* 2343));
}

let settings5 = JSON.parse(JSON.stringify(settings));
settings5.duration = 1400;
settings5.color = '#ffffff';
settings5.step = function(state, circle) {
  circle.path.setAttribute('stroke', state.color);
  circle.setText("$" + Math.round(circle.value()* 1745));
}

let settings6 = JSON.parse(JSON.stringify(settings));
settings6.duration = 1800;
settings6.color = '#ffffff';
settings6.step = function(state, circle) {
  circle.path.setAttribute('stroke', state.color);
  circle.setText("$" + Math.round(circle.value()* 1745));
}

let settings7 = JSON.parse(JSON.stringify(settings));
settings7.duration = 1400;
settings7.color = '#ffffff';
settings7.from.color = "#F0C6C5";
settings7.to.color = "#152E46";
settings7.step = function(state, circle) {
  circle.path.setAttribute('stroke', state.color);
  circle.setText("$" + Math.round(circle.value()* 1670));
}

let settings8 = JSON.parse(JSON.stringify(settings));
settings8.duration = 1800;
settings8.color = '#ffffff';
settings8.step = function(state, circle) {
  circle.path.setAttribute('stroke', state.color);
  circle.setText("$" + Math.round(circle.value()* 1670));
}

let settings9 = JSON.parse(JSON.stringify(settings));
settings9.duration = 1400;
settings9.color = '#ffffff';
settings9.step = function(state, circle) {
  circle.path.setAttribute('stroke', state.color);
  circle.setText("$" + Math.round(circle.value()* 1331));
}

let settings10 = JSON.parse(JSON.stringify(settings));
settings10.duration = 1800;
settings10.color = '#ffffff';
settings10.step = function(state, circle) {
  circle.path.setAttribute('stroke', state.color);
  circle.setText("$" + Math.round(circle.value()* 1331));
}

let bar6 = new ProgressBar.Circle(containerCircle, settings);
let bar7 = new ProgressBar.Circle(containerCircle1, settings2);
let bar8 = new ProgressBar.SemiCircle(containerCircle3, settings3);
let bar9 = new ProgressBar.SemiCircle(containerCircle4, settings4);
let bar10 = new ProgressBar.SemiCircle(containerCircle5, settings5);
let bar11 = new ProgressBar.SemiCircle(containerCircle6, settings6);
let bar12 = new ProgressBar.SemiCircle(containerCircle7, settings7);
let bar13 = new ProgressBar.SemiCircle(containerCircle8, settings8);
let bar14 = new ProgressBar.SemiCircle(containerCircle9, settings9);
let bar15 = new ProgressBar.SemiCircle(containerCircle10, settings10);


let fill6 = 1;
let fill7 = 0.841;

let fill8 = 1;
let fill9 = 0.63;

let fill10 = 1;
let fill11 = .66;

let fill12 = 1;
let fill13 = .69;

let fill14 = 1;
let fill15 = .70;

bar6.animate(fill6);
bar7.animate(fill7);
bar8.animate(fill8);
bar9.animate(fill9);
bar10.animate(fill10);
bar11.animate(fill11);
bar12.animate(fill12);
bar13.animate(fill13);
bar14.animate(fill14);
bar15.animate(fill15);

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
    fill9 = 0.63;
  }
  bar8.animate(fill8);
  bar9.animate(fill9);
}, 4000);

let interval5 = setInterval(() => {
  if (fill10 === 1) {
    fill10 = 0;
    fill11 = 0;
  } else {
    fill10 = 1;
    fill11 = 0.66;
  }
  bar10.animate(fill10);
  bar11.animate(fill11);
}, 4000);

let interval6 = setInterval(() => {
  if (fill12 === 1) {
    fill12 = 0;
    fill13 = 0;
  } else {
    fill12 = 1;
    fill13 = 0.69;
  }
  bar12.animate(fill12);
  bar13.animate(fill13);
}, 4000);

let interval7 = setInterval(() => {
  if (fill14 === 1) {
    fill14 = 0;
    fill15 = 0;
  } else {
    fill14 = 1;
    fill15 = 0.70;
  }
  bar14.animate(fill14);
  bar15.animate(fill15);
}, 4000);

bar6.text.style.fontFamily = '"Josefin Sans", sans-serif';
bar6.text.style.fontSize = '2rem';

bar7.text.style.fontFamily = '"Josefin Sans", sans-serif';
bar7.text.style.fontSize = '2rem';

bar8.text.style.fontFamily = '"Josefin Sans", sans-serif';
bar8.text.style.fontSize = '2rem';

bar9.text.style.fontFamily = '"Josefin Sans", sans-serif';
bar9.text.style.fontSize = '2rem';

bar10.text.style.fontFamily = '"Josefin Sans", sans-serif';
bar10.text.style.fontSize = '2rem';

bar11.text.style.fontFamily = '"Josefin Sans", sans-serif';
bar11.text.style.fontSize = '2rem';

bar12.text.style.fontFamily = '"Josefin Sans", sans-serif';
bar12.text.style.fontSize = '2rem';

bar13.text.style.fontFamily = '"Josefin Sans", sans-serif';
bar13.text.style.fontSize = '2rem';

bar14.text.style.fontFamily = '"Josefin Sans", sans-serif';
bar14.text.style.fontSize = '2rem';

bar15.text.style.fontFamily = '"Josefin Sans", sans-serif';
bar15.text.style.fontSize = '2rem';

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

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Recreation", "Desingers", "Biologist"],
        datasets: [{
            label: 'Before female dominated',
            // data: [53 + "k", 84 + "k", 67 + "k"],
            data: [53, 84, 67],
            backgroundColor: [
                'rgba(21, 46, 70, 0.7)',
                'rgba(21, 46, 70, 0.7)',
                'rgba(21, 46, 70, 0.7)'
                
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgb(21, 46, 70)',
                'rgb(21, 46, 70)',
                'rgb(21, 46, 70)'
                // 'rgba(255,99,132,1)',
                // 'rgba(255,99,132,1)'
            ],
            borderWidth: 2
        },{
            label: 'After female dominated',
            data: [24, 56, 55],
            backgroundColor: [
                'rgba(44, 96, 165, 0.7)',
                'rgba(44, 96, 165, 0.7)',
                'rgba(44, 96, 165, 0.7)'
            ],
            borderColor: [
                'rgb(44, 96, 165)',
                'rgb(44, 96, 165)',
                'rgb(44, 96, 165)'
            ],
            borderWidth: 2
        }]
    },
    options: {
      tooltips: {

      }
        // scales: {
        //     yAxes: [{
        //         ticks: {
        //             beginAtZero:true
        //         }
        //     }]
        // }
    }
});

var election = new Datamap({
  scope: 'usa',
  element: document.getElementById('map_election'),
  geographyConfig: {
    highlightBorderColor: 'white',
   popupTemplate: function(geography, data) {
      // return '<div class="hoverinfo">' + geography.properties.name + ' ' + 'National Rank:' +  data.electoralVotes + '<p> cents: ' + data.cents + '</p></div>'
      return [
        '<div class="hoverinfo">',
        geography.properties.name,
        ' National Rank:',
        data.electoralVotes,
        '<p> cents: ',
        data.cents,
        '</p></div>'
      ].join('')
    },
    highlightBorderWidth: 3
  },

  fills: {
  'lowest': '#132c43', //dark blue
  'middlelow': '#e8bfbc', //pink 
  'middlehigh': '#2C60A5', //main blue
  'highest': '#d73038', //red
  defaultFill: 'white'
},
data:{
  "AZ": {
      "fillKey": "highest",
      "electoralVotes": 100,
      "cents": 90
  },
  "CO": {
      "fillKey": "highest",
      "electoralVotes": 5
  },
  "DE": {
      "fillKey": "middlehigh",
      "electoralVotes": 32
  },
  "FL": {
      "fillKey": "highest",
      "electoralVotes": 29
  },
  "GA": {
      "fillKey": "highest",
      "electoralVotes": 32
  },
  "HI": {
      "fillKey": "middlehigh",
      "electoralVotes": 32
  },
  "ID": {
      "fillKey": "middlehigh",
      "electoralVotes": 32
  },
  "IL": {
      "fillKey": "middlelow",
      "electoralVotes": 32
  },
  "IN": {
      "fillKey": "middlehigh",
      "electoralVotes": 11
  },
  "IA": {
      "fillKey": "middlehigh",
      "electoralVotes": 11
  },
  "KS": {
      "fillKey": "middlelow",
      "electoralVotes": 32
  },
  "KY": {
      "fillKey": "middlelow",
      "electoralVotes": 32
  },
  "LA": {
      "fillKey": "lowest",
      "electoralVotes": 32
  },
  "MD": {
      "fillKey": "highest",
      "electoralVotes": 32
  },
  "ME": {
      "fillKey": "middlehigh",
      "electoralVotes": 32
  },
  "MA": {
      "fillKey": "highest",
      "electoralVotes": 32
  },
  "MN": {
      "fillKey": "highest",
      "electoralVotes": 32
  },
  "MI": {
      "fillKey": "middlelow",
      "electoralVotes": 32
  },
  "MS": {
      "fillKey": "middlelow",
      "electoralVotes": 32
  },
  "MO": {
      "fillKey": "middlehigh",
      "electoralVotes": 13
  },
  "MT": {
      "fillKey": "middlehigh",
      "electoralVotes": 32
  },
  "NC": {
      "fillKey": "highest",
      "electoralVotes": 32
  },
  "NE": {
      "fillKey": "middlehigh",
      "electoralVotes": 32
  },
  "NV": {
      "fillKey": "highest",
      "electoralVotes": 32
  },
  "NH": {
      "fillKey": "highest",
      "electoralVotes": 32
  },
  "NJ": {
      "fillKey": "highest",
      "electoralVotes": 32
  },
  "NY": {
      "fillKey": "highest",
      "electoralVotes": 32
  },
  "ND": {
      "fillKey": "middlehigh",
      "electoralVotes": 32
  },
  "NM": {
      "fillKey": "highest",
      "electoralVotes": 32
  },
  "OH": {
      "fillKey": "middlelow",
      "electoralVotes": 32
  },
  "OK": {
      "fillKey": "middlehigh",
      "electoralVotes": 32
  },
  "OR": {
      "fillKey": "middlelow",
      "electoralVotes": 32
  },
  "PA": {
      "fillKey": "middlelow",
      "electoralVotes": 32
  },
  "RI": {
      "fillKey": "middlehigh",
      "electoralVotes": 32
  },
  "SC": {
      "fillKey": "middlelow",
      "electoralVotes": 32
  },
  "SD": {
      "fillKey": "middlelow",
      "electoralVotes": 32
  },
  "TN": {
      "fillKey": "highest",
      "electoralVotes": 32
  },
  "TX": {
      "fillKey": "middlelow",
      "electoralVotes": 32
  },
  "UT": {
      "fillKey": "middlehigh",
      "electoralVotes": 32
  },
  "WI": {
      "fillKey": "middlelow",
      "electoralVotes": 32
  },
  "VA": {
      "fillKey": "highest",
      "electoralVotes": 32
  },
  "VT": {
      "fillKey": "highest",
      "electoralVotes": 32
  },
  "WA": {
      "fillKey": "middlehigh",
      "electoralVotes": 32
  },
  "WV": {
      "fillKey": "middlehigh",
      "electoralVotes": 32
  },
  "WY": {
      "fillKey": "middlehigh",
      "electoralVotes": 32
  },
  "CA": {
      "fillKey": "highest",
      "electoralVotes": 100
  },
  "CT": {
      "fillKey": "middlelow",
      "electoralVotes": 32
  },
  "AK": {
      "fillKey": "highest",
      "electoralVotes": 32
  },
  "AR": {
      "fillKey": "middlelow",
      "electoralVotes": 32
  },
  "AL": {
      "fillKey": "middlehigh",
      "electoralVotes": 32
  }
}
});
election.labels();


          




