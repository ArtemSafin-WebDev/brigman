import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default function homeTopSlider() {
    const elements = Array.from(document.querySelectorAll('.js-home-top-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 0,
            watchOverflow: true,
            speed: 500
        })
    })
}