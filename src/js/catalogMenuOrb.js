import gsap from 'gsap';
import { primaryInput } from 'detect-it';

export default function catalogMenuOrb() {
    const orbElement = document.querySelector('.catalog__intro-modal-orb');
    if (!orbElement) return;
  

    if (primaryInput === 'touch') return;
    document.addEventListener('mousemove', e => {
        gsap.to(orbElement, {
            duration: 0.3,
            left: e.clientX || e.pageX,
            top: e.clientY || e.pageY - pageYOffset,
            overwrite: true
        });
    });
}
