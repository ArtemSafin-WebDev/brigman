import gsap from 'gsap';
import { primaryInput } from 'detect-it';

export default function orb() {
    const orbElement = document.createElement('div');

    orbElement.classList.add('orb');

    orbElement.innerHTML = `
        <div class="orb__inner"></div>
    `;

    document.body.prepend(orbElement);

    const orbToggle = document.querySelector('.page-header__cursor-toggle');

    if (orbToggle) {
        orbToggle.addEventListener('click', event => {
            event.preventDefault();
            orbToggle.classList.toggle('active');
            document.body.classList.toggle('orb-hidden');

            if (window.localStorage.getItem('cursor') === 'on') {
                window.localStorage.setItem('cursor', 'off');
            } else {
                window.localStorage.setItem('cursor', 'on');
            }
        });

        if (window.localStorage.getItem('cursor') === 'on') {
            orbToggle.classList.add('active');
            document.body.classList.add('orb-hidden');
        }
    }

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
