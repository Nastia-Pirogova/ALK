const swiper = new Swiper('.swiper', {
    // slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
        320: {
            slidesPerView: 'auto',
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 1.5,
        },
        1240: {
            slidesPerView: 2.5,
        },
        1440: {
            slidesPerView: 'auto',
        },
        1920: {
            slidesPerView: 3,
        },
    }
});

