$(function () {

	// Табы
	$('.tab').on('click', function (e) {
		e.preventDefault();

		$($(this).siblings()).removeClass('tab--active');
		$($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

		$(this).addClass('tab--active');
		$($(this).attr('href')).addClass('tabs-content--active');

		$('.product-slider').slick('setPosition');
	});

	// Клик
	$('.product-card__favorite').on('click', function () {
		$(this).toggleClass('product-card__favorite--active')
	});


	$('.product-page__favorite').on('click', function () {
		$(this).toggleClass('product-page__favorite--active')
	});






	$(".product-page__size-item").click(function (e) {
		e.preventDefault();
		$(".product-page__size-item").removeClass('active');
		$(this).addClass('active');
	})








	$(".flag-russian__wrapper").on("click", function () {
		$(".site-setup__flag-add").slideToggle();
	});





	$(".search-update__inner").on("click", function () {
		$(".search-update__click").toggleClass("active");
	});


	$('.category-products__items').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 850,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 815,
				settings: {
					slidesToShow: 1,
				}
			},
		]


	});


	$(".product-page__items").slick({
		dots: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		responsive: [{
			breakpoint: 450,
			settings: {
				arrows: false,
			}
		}, ]
	});


	$('.product-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 950,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 730,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
				}
			},
		]

	});


	$(".header__btn-menu").on("click", function () {
		$(".header__inner-btn").toggleClass("active");
	});











	$('.products__sorting-wrapper').on('click', function () {
		$(this).toggleClass('products__sorting-wrapper--active');
		$(this).next().slideToggle(400);
	});

	// 1- нажимаем
	// 2- появляется






	$('.tab').on('click', function (e) {
		e.preventDefault();

		$($(this).siblings()).removeClass('tab--active');
		$($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

		$(this).addClass('tab--active');
		$($(this).attr('href')).addClass('tabs-content--active');
	});



	$(function () {
		$(".product-page__stars").rateYo({
			ratedFill: "#FFAB49",
			spacing: '7px',
			normalFill: '#c4c4c4',
			readOnly: true,
			starWidth: "23px",
		});
	});
	$(function () {
		$(".all-rating__stars").rateYo({
			ratedFill: "#FFAB49",
			spacing: '8px',
			normalFill: '#c4c4c4',
			readOnly: true,
			starWidth: "32px",
		});
	});
	$(function () {
		$(".others-rating__right-stars").rateYo({
			ratedFill: "#FFAB49",
			spacing: '7px',
			normalFill: '#c4c4c4',
			readOnly: true,
			starWidth: "23px",
		});
	});






	var mixer = mixitup('.products__inner-box');







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