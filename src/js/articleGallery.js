import { Swiper, Navigation, Pagination } from 'swiper';
import gsap from 'gsap';

Swiper.use([Navigation, Pagination]);

export default function articleGallery() {
    const elements = Array.from(document.querySelectorAll('.js-article-gallery-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');
        const progressBullets = Array.from(element.querySelectorAll('.article__text-content-gallery-slider-pagination-bullet'));

        let activeIndex = 0;

        const sliderInstance = new Swiper(container, {
            slidesPerView: 1,
            spaceBetween: 0,
            watchOverflow: true,
            speed: 1000,
            preventInteractionOnTransition: false,
            loop: true,
            navigation: {
                nextEl: element.querySelector('.article__text-content-gallery-slider-arrow--next'),
                prevEl: element.querySelector('.article__text-content-gallery-slider-arrow--prev')
            },
           
            init: false,
            on: {
                slideChange: swiper => {
                    autoplay(swiper.realIndex);
                    activeIndex = swiper.realIndex;
                },
                init: swiper => {
                    gsap.fromTo(
                        progressBullets[swiper.realIndex],
                        { '--slider-progress': 0 },
                        {
                            '--slider-progress': 1,
                            duration: 10,
                            ease: 'none',
                            onComplete: () => {
                                sliderInstance.slideNext();
                            }
                        }
                    );
                }
            }
        });

        sliderInstance.init();

        function autoplay(startIndex) {
            if (startIndex > activeIndex) {
                // console.log('Index greater than previous');

                const tl = gsap.timeline({
                    onComplete: () => {
                        sliderInstance.slideNext();
                    }
                });

                progressBullets.forEach((bullet, bulletIndex) => {
                    gsap.killTweensOf(bullet);
                    if (bulletIndex < startIndex) {
                        if (gsap.getProperty(bullet, '--slider-progress') !== 1) {
                            tl.to(bullet, {
                                '--slider-progress': 1,
                                duration: 0.3,
                                ease: 'none'
                            });
                        }
                    }
                });

                tl.fromTo(
                    progressBullets[startIndex],
                    { '--slider-progress': 0 },
                    {
                        '--slider-progress': 1,
                        duration: 10,
                        ease: 'none'
                    }
                );
            } else if (startIndex === activeIndex) {
                // console.log('Index equal to previous');
                return;
            } else {
                // console.log('Index less than previous');

                const tl = gsap.timeline({
                    onComplete: () => {
                        sliderInstance.slideNext();
                    }
                });

                let bulletsToReset = [];

                progressBullets.forEach((bullet, bulletIndex) => {
                    gsap.killTweensOf(bullet);

                    if (bulletIndex > startIndex) {
                        if (gsap.getProperty(bullet, '--slider-progress') !== 0) {
                            bulletsToReset.push(bullet);
                        }
                    }
                });

                bulletsToReset.reverse();

                bulletsToReset.forEach(bullet => {
                    tl.to(bullet, {
                        '--slider-progress': 0,
                        duration: 0.3,
                        ease: 'none'
                    });
                });

                tl.to(progressBullets[startIndex], {
                    '--slider-progress': 0,
                    duration: 0.3,
                    ease: 'none'
                });

                tl.to(progressBullets[startIndex], {
                    '--slider-progress': 1,
                    duration: 10,
                    ease: 'none'
                });
            }
        }
    });
}
