import { lockScroll, unlockScroll } from "./scrollBlocker";

export default function catalogMenu() {
    const menu = document.querySelector('.catalog__intro-modal');
    const btn = document.querySelector('.catalog__intro-heading-link');
    const closeBtn = document.querySelector('.catalog__intro-modal-close')

    if (!menu || !btn || !closeBtn) return;

    let menuOpen = false;

    const openMenu = () => {
        if (menuOpen) return;
        document.body.classList.add('catalog-modal-open');
        menuOpen = true;
        lockScroll(menu);
    }
    const closeMenu = () => {
        if (!menuOpen) return;
        document.body.classList.remove('catalog-modal-open');
        menuOpen = false;
        unlockScroll();
    }

    btn.addEventListener('click', event => {
        event.preventDefault();
        openMenu();
    })

    closeBtn.addEventListener('click', event => {
        event.preventDefault();
        closeMenu();
    })
}