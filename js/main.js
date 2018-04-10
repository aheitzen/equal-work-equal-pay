console.log("I work");

new WOW().init();

// $("#card").flip();

$(document).ready(function() {
	$(".card").flip({
  	axis: 'y',
  	trigger: 'hover'
	});
});

$(".card").flip({
  axis: 'x',
  trigger: 'hover'
});






// $('section').horizon(
// 	{
//     scrollTimeout: null,
//     scrollEndDelay: 250,
//     scrollDuration: 400,
//     i: 0,
//     limit: 0,
//     docWidth: 0,
//     sections: null,
//     swipe: true,
//     fnCallback: function (i) {}
// });


// $.jInvertScroll(['.scroll']);