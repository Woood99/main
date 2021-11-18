$(function () {
	$(".header__slider").slick({

		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		speed: 500,
		fade: true,
		cssEase: "linear",
	});
	$("#rating-1").barrating({
		theme: 'fontawesome-stars',
		initialRating: 4,
		readonly: true,

	});
	$("#rating-2").barrating({
		theme: 'fontawesome-stars',
		initialRating: 3,
		readonly: true,
	});
	$("#rating-3").barrating({
		theme: 'fontawesome-stars',
		initialRating: 5,
		readonly: true,
	});


	$(".rating__items").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="rating__slider-btn rating-btnprev"><img src="images/svg/rating__slider-prev.svg" alt=""></button>',
		nextArrow: '<button class="rating__slider-btn rating-btnnext"><img src="images/svg/rating__slider-next.svg" alt=""></button>',

	});

	$('.burger').on('click', function () {
		$('.nav__list').toggleClass('nav__list--mobile')
	});
	$('.burger').on('click', function () {
		$('.burger').toggleClass('burger--mobile')
	});

	var mixer = mixitup('.works__work-items');
});



AOS.init({
	// Global settings:
	disable: function () {
        var maxWidth = 768;
        return window.innerWidth < maxWidth;
    },
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});