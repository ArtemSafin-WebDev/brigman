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
        mobileColorSelects[schemeIndex + 1].classList.add('active')
    }

    const handleLogoClick = () => {
        mobileColorSelects.forEach(select => select.classList.remove('active'))
        if (!schemeSelected) {
            if (colorSchemes[schemeIndex]) {
                document.body.classList.add(`color-theme-${colorSchemes[schemeIndex]}`);
                sessionStorage.setItem('colorTheme', colorSchemes[schemeIndex])
                mobileColorSelects[schemeIndex + 1].classList.add('active');
                schemeSelected = true;
            } else {
                console.error('Color scheme not found');
                return;
            }
        } else {
            document.body.classList.remove(`color-theme-${colorSchemes[schemeIndex]}`);
            if (colorSchemes[schemeIndex + 1]) {
                document.body.classList.add(`color-theme-${colorSchemes[schemeIndex + 1]}`);
                sessionStorage.setItem('colorTheme', colorSchemes[schemeIndex + 1])
                schemeIndex = schemeIndex + 1;
               
                mobileColorSelects[schemeIndex + 1].classList.add('active');
            } else {
                if (toasty) {
                    toasty.classList.add('active');
                    setTimeout(() => {
                        toasty.classList.remove('active');
                    }, 2000);
                }
                schemeSelected = false;
                schemeIndex = 0;
                sessionStorage.setItem('colorTheme', '')
                mobileColorSelects[schemeIndex].classList.add('active');
            }
        }
    };

    if (!window.matchMedia('(max-width: 640px)').matches) {
        logo.addEventListener('mouseenter', handleLogoClick);
    } else {
        mobileColorSelects.forEach((select, selectIndex) => {
            select.addEventListener('click', () => {
                mobileColorSelects.forEach(select => select.classList.remove('active'));
                select.classList.add('active');
                document.body.classList.remove(`color-theme-${colorSchemes[schemeIndex]}`);
                sessionStorage.setItem('colorTheme', '')
                if (selectIndex === 0) {
                    schemeIndex = 0;
                    schemeSelected = false;
                } else {
                    schemeIndex = selectIndex - 1;
                    schemeSelected = true;
                    document.body.classList.add(`color-theme-${colorSchemes[schemeIndex]}`);
                    sessionStorage.setItem('colorTheme', colorSchemes[schemeIndex])
                }
            })
        })
    }
}
