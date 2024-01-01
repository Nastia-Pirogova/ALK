const swiper3 = new Swiper('.swiper-technologies', {
    autoplay: {
        delay: 3000,
    },
    freeMode: true,
    breakpoints: {
        320: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 5,
        },
        1240: {
            slidesPerView: 7,
        },
        1920: {
            slidesPerView: null,
        }
    },

});

