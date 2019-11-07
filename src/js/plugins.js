import Swiper from 'swiper';

var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 55000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },

});
