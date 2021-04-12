export default function colorSchemes() {
    const logo = document.querySelector('.page-header__logo');

    if (!logo) return;

    const colorSchemes = ['blue', 'red'];
    let schemeIndex = 0;
    let schemeSelected = false;

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
                schemeSelected = false;
                schemeIndex = 0;
            }
        }
    })
}