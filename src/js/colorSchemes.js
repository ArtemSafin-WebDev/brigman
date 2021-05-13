export default function colorSchemes() {
    const logo = document.querySelector('.page-header__logo');

    if (!logo) return;

    const colorSchemes = ['blue', 'red', 'green', 'orange'];
    let schemeIndex = 0;
    let schemeSelected = false;
    const toasty = document.querySelector('.toasty')

    logo.addEventListener('mouseenter', () => {
        if (!schemeSelected) {
            if (colorSchemes[schemeIndex]) {
                document.body.classList.add(`color-theme-${colorSchemes[schemeIndex]}`);
                schemeSelected = true;
            } else {
                console.error('Color scheme not found');
                return;
            }
        } else {
            document.body.classList.remove(`color-theme-${colorSchemes[schemeIndex]}`);
            if (colorSchemes[schemeIndex + 1]) {
                document.body.classList.add(`color-theme-${colorSchemes[schemeIndex + 1]}`);
                schemeIndex = schemeIndex + 1;
            } else {
                if (toasty) {
                    toasty.classList.add('active');
                    setTimeout(() => {
                        toasty.classList.remove('active');
                    }, 2000)
                }
                schemeSelected = false;
                schemeIndex = 0;
            }
        }
    })
}