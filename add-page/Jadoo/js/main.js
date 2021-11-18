$(function () {
    $(".people__right").slick({
        vertical: true,
        slidesToShow: 1,
        infinite: false,
        responsive: [{
            breakpoint: 700,
            settings: {
                arrows: false,
                dots: true,
                vertical: false,
                infinite: true,
            },
        }, ],
    });

    $(".burger").on("click", function () {
        $(".nav__list").toggleClass("burger--mobile");
    });

    $(".burger").on("click", function () {
        $(".page-block").toggleClass("page-block--mobile");
    });

    $(".burger").on("click", function () {
        $("body").toggleClass("no-scroll");
    });





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
    offset: 75, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});