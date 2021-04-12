import gsap from 'gsap';
import { primaryInput } from 'detect-it';

export default function orb() {
    const orbElement = document.createElement('div');

    orbElement.classList.add('orb');

    orbElement.innerHTML = `
        <div class="orb__inner"></div>
    `;

    document.body.prepend(orbElement);

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
