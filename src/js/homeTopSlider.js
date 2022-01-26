import { Swiper, Navigation, Pagination, Autoplay, Mousewheel } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay, Mousewheel]);

import { primaryInput } from 'detect-it';

export default function homeTopSlider() {
    const elements = Array.from(document.querySelectorAll('.js-home-top-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        let options = {
            slidesPerView: 'auto',
            spaceBetween: 0,
            watchOverflow: true,
            speed: 300,
            loop: false,
            loopedSlides: 7,

            navigation: {
                nextEl: element.querySelector('.home__top-slider-arrow--next'),
                prevEl: element.querySelector('.home__top-slider-arrow--prev')
            },
            loopAdditionalSlides: 7,
            centeredSlides: false,
            pagination: {
                el: element.querySelector('.home__top-slider-progress'),
                type: 'progressbar'
            }
        };
        if (!(primaryInput === 'touch')) {
            options = {
                ...options,
                mousewheel: {
                    invert: false,
                    releaseOnEdges: true
                }
            };
        }

        new Swiper(container, options);
    });
}
