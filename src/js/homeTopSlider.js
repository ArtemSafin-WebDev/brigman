import { Swiper, Navigation, Pagination, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);

export default function homeTopSlider() {
    const elements = Array.from(document.querySelectorAll('.js-home-top-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');
        const swiperSlides = Array.from(element.querySelectorAll('.swiper-slide'));
        const containerWidth = document.querySelector('.container').offsetWidth;

        if (!window.matchMedia('(max-width: 640px)').matches && swiperSlides.length) {
            const slidesTotalLength = swiperSlides.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.offsetWidth;
            }, 0);

            const timesToDuplicate = Math.ceil(containerWidth / slidesTotalLength);

            if (timesToDuplicate > 1) {
                // console.log('Slides total length', slidesTotalLength);
                // console.log('Container width', containerWidth);
                // console.log('Times to duplicate', timesToDuplicate);
    
                for (let i = 0; i < timesToDuplicate; i++) {
                    // console.log('Running loop');
                    swiperSlides.forEach(slide => {
                        slide.parentElement.appendChild(slide.cloneNode(true));
                    });
                }
            } 
        }

        const options = {
            slidesPerView: 'auto',
            spaceBetween: 0,
            watchOverflow: true,
            speed: 500,
            loop: window.matchMedia('(max-width: 640px)').matches ? false : true,
            loopedSlides: 7,
            loopAdditionalSlides: 7,
            centeredSlides: window.matchMedia('(max-width: 640px)').matches ? false : true
        };

        if (!window.matchMedia('(max-width: 768px)').matches) {
            options.speed = 3500;
            options.autoplay = {
                delay: 0,
                disableOnInteraction: true
            };

            element.classList.add('slider-with-autoplay');
        }

        const slider = new Swiper(container, options);

        if (!window.matchMedia('(max-width: 768px)').matches) {
            element.addEventListener('mouseenter', () => {
                slider.autoplay.stop();
                console.log('Autoplay stopped');
            });
            element.addEventListener('mouseleave', () => {
                slider.autoplay.start();
                console.log('Autoplay started');
            });
        }
    });
}
