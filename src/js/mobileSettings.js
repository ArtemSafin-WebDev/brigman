export default function mobileSettings() {
    const mobileSettings = document.querySelector('.page-header__mobile-settings');
    if (!mobileSettings) return;

    const btn = mobileSettings.querySelector('.page-header__mobile-settings-btn');

    btn.addEventListener('click', event => {
        event.preventDefault();
        mobileSettings.classList.toggle('open');
    });

    mobileSettings.addEventListener('mouseenter', () => {
        mobileSettings.classList.add('open');
    })
    mobileSettings.addEventListener('mouseleave', () => {
        mobileSettings.classList.remove('open');
    })

    document.addEventListener('click', event => {
        if (event.target.matches('.page-header__mobile-settings') || event.target.closest('.page-header__mobile-settings')) return;
        mobileSettings.classList.remove('open');
    });
}
