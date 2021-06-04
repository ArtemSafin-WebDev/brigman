import { Swiper, Navigation, Pagination, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);

export default function homeTopSlider() {
    const elements = Array.from(document.querySelectorAll('.js-home-top-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        const options = {
            slidesPerView: 'auto',
            spaceBetween: 0,
            watchOverflow: true,
            speed: 500,
            loop: false,
            loopedSlides: 7,
            loopAdditionalSlides: 7,
            centeredSlides: false,
            pagination: {
                el: element.querySelector('.home__top-slider-progress'),
                type: 'progressbar'
            }
        };

        new Swiper(container, options);
    });
}
