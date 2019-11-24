import Swiper from 'swiper';

var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },

});



var scroll = new SmoothScroll('a[href*="#"]');