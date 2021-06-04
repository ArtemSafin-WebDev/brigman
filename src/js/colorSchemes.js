export default function colorSchemes() {
    const logo = document.querySelector('.page-header__logo');

    if (!logo) return;

    const colorSchemes = ['blue', 'red', 'green', 'orange'];
    let schemeIndex = 0;
    let schemeSelected = false;
    const toasty = document.querySelector('.toasty');
    const mobileColorSelects = Array.from(document.querySelectorAll('.page-header__mobile-settings-choose-color-btn'));

    if (sessionStorage.getItem('colorTheme') && colorSchemes.indexOf(sessionStorage.getItem('colorTheme')) !== -1) {
        schemeIndex = colorSchemes.indexOf(sessionStorage.getItem('colorTheme'));
        schemeSelected = true;
        document.body.classList.add(`color-theme-${colorSchemes[schemeIndex]}`);
        mobileColorSelects.forEach(select => select.classList.remove('active'));
        mobileColorSelects[schemeIndex + 1].classList.add('active');
    }


    let colorChangeTimer = null;
    let clicked = false;

    const showToasty = () => {
        if (toasty) {
            toasty.classList.add('active');
            setTimeout(() => {
                toasty.classList.remove('active');
            }, 2000);
        }
    };

    mobileColorSelects.forEach((select, selectIndex) => {
        select.addEventListener('click', () => {
            if (clicked) {
                showToasty();
                return;
            } else {
                clicked = true;
                clearTimeout(colorChangeTimer);
                colorChangeTimer = setTimeout(() => {
                    clicked = false;
                }, 300)
            }
            mobileColorSelects.forEach(select => select.classList.remove('active'));
            select.classList.add('active');
            document.body.classList.remove(`color-theme-${colorSchemes[schemeIndex]}`);
            sessionStorage.setItem('colorTheme', '');
            if (selectIndex === 0) {
                schemeIndex = 0;
                schemeSelected = false;
            } else {
                schemeIndex = selectIndex - 1;
                schemeSelected = true;
                document.body.classList.add(`color-theme-${colorSchemes[schemeIndex]}`);
                sessionStorage.setItem('colorTheme', colorSchemes[schemeIndex]);
            }

        
        });
    });
}
