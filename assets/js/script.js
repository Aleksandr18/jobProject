$(document).ready(function () {

    $('.owl-block').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout : 7000,
        margin: 24,
        nav: true,
        items: 1
    });

    $('.owl-img').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout : 7000,
        margin: 24,
        nav: true,
        items: 1
    });

        $(document).on("click", '.burger', function () {
        $('body').toggleClass('modal-open');



    });
});