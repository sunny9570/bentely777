
$(function () {

    $('.header .mbtn').on('click', function () {
        $(this).toggleClass('on');
        $('.header .gnb').toggleClass('on');
    });

    $('.main_visual_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        useTransform: false
    });

    $('.main_content_slide').slick({
        slidesToShow: 3,
        arrows: false,
        dots: true,

        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.main_content .arrows .prev').on('click', function () {
        $('.main_content_slide').slick('slickPrev')
    });
    $('.main_content .arrows .next').on('click', function () {
        $('.main_content_slide').slick('slickNext')
    });

});


$(function () {
    AOS.init();
})