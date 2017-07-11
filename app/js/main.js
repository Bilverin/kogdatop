$(document).ready(function() {
	$('.click-icon').click(function() {
		alert('Все получилось!');
		return false;
	});
	
	//lazyYT
	$('.js-lazyYT').lazyYT({
	  youtube_parameters: 'rel=0', // youtube URL parameters: https://developers.google.com/youtube/player_parameters#Parameters
	  display_title: false,
	  loading_text: 'Loading...', // displayed instead of video title while its loading
	  default_ratio: '16:9',
	  display_duration: false, // display video duration in bottom right
	  callback: function() {
	  	console.log(this);
	  },
	  
	  // Advanced settings
	  video_loaded_class: 'lazyYT-video-loaded', // adds this class after video loads into container
	  container_class: 'lazyYT-container' // default CSS depends on this class
	});

	//OWL_Carousel 
	$('.owl-carousel').owlCarousel({
		dots: false,
		loop:true,
		margin:10,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			400:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:6
			}
		}
	});

	$("i.indicator2").toggleClass("down");

	function toggleChevron(e) {
		$(e.target)
		.prev('.panel-heading')
		.find("i.indicator")
		.toggleClass("down");
	}
	$('#accordion').on('hidden.bs.collapse', toggleChevron);
	$('#accordion').on('shown.bs.collapse', toggleChevron);

	var $myGroup = $('#accordion');
	$myGroup.on('show.bs.collapse','.collapse', function() {
		$myGroup.find('.collapse.in').collapse('hide');
	});

	// slide navigation section
	$('.open-nav-list, .close-nav-list').click(function() {
		$('.open-nav-list').toggleClass('opened');
		$('.wr-navigation').slideToggle();
		return false;
	});

	// film list control
	$('.js-film-list-control li').click(function() {
		$('.js-film-list-control li').removeClass('active');
		var listClass = $(this).attr('class');
		$(this).addClass('active');
		$('.js-film-list-items').removeClass('tile list').addClass(listClass);
		return false;
	});

	// navigation dropdown
	$('.js-mobileDropdownNav').click(function() {
		$(this).toggleClass('active').next().slideToggle();
		return false;
	});
});