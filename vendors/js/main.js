
(function($){

	$(document).ready(function(){



	// var mixer = mixitup('.filtaring');
	var container = document.querySelector('.filtaring')
	var mixer = mixitup(container, {
		selectors:{
			control: '[habiba]'
		}
	});


	// owl-carousel
	$(".owl-carousel").owlCarousel({
		autoplay: true,
		autoplayTimeout: 2000,
		smartSpeed: 300,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});



	// Active Class Menu-bar
	$('.navbar-nav li').click(function(){
		// $(this).addClass('active').siblings().removeClass('active');
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	}); 

	$('.navbar-nav a[href^="#"]').click(function(sh){
		sh.preventDefault();

		var target = this.hash;

		$('html, body').animate({
			scrollTop: $(target).offset().top - 75
		}, 500);
	});



	// Our Custom Code Start
	$('.top').click(function(){
		$("html, body").animate({
			scrollTop: 0,
		},1000);
	});

	$('.top').hide();

	$(window).scroll(function(){
		var ourWindow = $(this).scrollTop();

		if(ourWindow<500) {
			$('.top').fadeOut();
		} else {
			$('.top').fadeIn();
		}

		// Menu Fixed
		if(ourWindow>100) {
			$('body').addClass('fixed');
		} else {
			$('body').removeClass('fixed');
		}
	});



	// WoW
	 new WOW().init();




	
	});

})(jQuery)