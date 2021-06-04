import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function scrollUp() {
    const scrollUpBtns = Array.from(document.querySelectorAll('.js-scroll-up'));

    scrollUpBtns.forEach(btn => {
        btn.addEventListener('click', event => {
            event.preventDefault();
            gsap.to(window, {
                duration: 2,
                scrollTo: {
                    y: 0,
                    ease: 'easeOut',
                    autoKill: true
                }
            });
        });
    });
}
