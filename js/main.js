new WOW().init();


// $(document).ready(function() {
// 	particlesJS.load('particles-js', 'assets/particles.json', function() {
// 	  console.log('callback - particles.js config loaded');
// 	});
// });

	let horizontal = true;
			let offset = 25;
			$(document).ready(function () {
				function changeToVertical(container, element) {
					$(container).css('white-space', 'normal')
					$(container).css('display', 'block')
					$(container).scrollTop($(element).offset().top);
					horizontal = false
				}
				function changeToHorizontal(container, element) {
					$(container).css('white-space', 'nowrap')
					$(container).css('display', '-webkit-box')
					$(container).scrollLeft($(element).offset().left);
					horizontal = true
				}
				$(function () {
					$(".container-chocobo").mousewheel(function(event, delta) {
						let change1 = $("#changeToVertical1");
						let change2 = $("#changeToHorizontal1");

						if (delta < 0) {
							if (change1.visible(true) && change1.offset().left <= offset && horizontal) {
								changeToVertical(this, change1);
							}

							if (change2.visible(true) && change2.offset().top <= offset && !horizontal) {
								changeToHorizontal(this, change2);
							}
						} else {
							if (change1.visible(true) && change1.offset().top <= offset && !horizontal) {
								changeToHorizontal(this, change1);
							}

							if (change2.visible(true) && change2.offset().left <= offset && horizontal) {
								changeToVertical(this, change2);
							}
						}

						if (horizontal) {
							this.scrollLeft -= (delta * 2);
							event.preventDefault();
						}
					});
				});
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