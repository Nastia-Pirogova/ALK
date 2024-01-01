document.addEventListener('DOMContentLoaded', function () {
    const swiper1 = new Swiper('.swiper-advantages', {
         slidesPerView: 'auto',
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
        },
        freeMode: true,
        // breakpoints: {
        //     320: {
        //         slidesPerView: 'auto',
        //         spaceBetween: 30,
        //     },
        //     768: {
        //         slidesPerView: 2,
        //     },
        //     1240: {
        //         slidesPerView: 2,
        //     },
        //     1440: {
        //         slidesPerView: 2,
        //     },
        //     1920: {
        //         slidesPerView: 2,
        //     },
        // }
    });


    const swiper2 = new Swiper('.swiper-reviews', {
        spaceBetween: 30,
        slidesPerView: 'auto',
        autoplay: {
            delay: 3000,
        },
       freeMode: true,
        // breakpoints: {
        //     320: {
        //         slidesPerView: null,
        //     },
        //     768: {
        //         slidesPerView: 2,
        //     },
        //     1240: {
        //         slidesPerView: 2,
        //     },
        //     1440: {
        //         slidesPerView: 2,
        //     },
        //     1920: {
        //         slidesPerView: 2,
        //     },
        // }
    });

})