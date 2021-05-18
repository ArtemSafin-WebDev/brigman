export default function selectTheme() {
    const toggles = document.querySelector('.page-header__theme-toggles');

    if (!toggles) return;

    const lightThemeBtn = toggles.querySelector('.page-header__theme-toggle-btn--light');
    const darkThemeBtn = toggles.querySelector('.page-header__theme-toggle-btn--dark');
    const tumbler = toggles.querySelector('.page-header__theme-tumbler');

    const mobileDarkThemeBtn = document.querySelector('.page-header__mobile-settings-color-theme-btn--dark');
    const mobileLightThemeBtn = document.querySelector('.page-header__mobile-settings-color-theme-btn--light');

    let currentTheme = '';

    const setLightTheme = () => {
        darkThemeBtn.classList.remove('active');
        lightThemeBtn.classList.add('active');
        mobileDarkThemeBtn.classList.remove('active');
        mobileLightThemeBtn.classList.add('active');
        document.body.classList.add('light-theme');
        currentTheme = 'light';
    };
    const setDarkTheme = () => {
        darkThemeBtn.classList.add('active');
        lightThemeBtn.classList.remove('active');
        mobileDarkThemeBtn.classList.add('active');
        mobileLightThemeBtn.classList.remove('active');
        document.body.classList.remove('light-theme');
        currentTheme = 'dark';
    };

    lightThemeBtn.addEventListener('click', event => {
        event.preventDefault();
        setLightTheme();

        sessionStorage.setItem('theme', 'light');
    });

    darkThemeBtn.addEventListener('click', event => {
        event.preventDefault();
        setDarkTheme();

        sessionStorage.setItem('theme', 'dark');
    });

    if (mobileDarkThemeBtn) {
        mobileDarkThemeBtn.addEventListener('click', event => {
            event.preventDefault();
            setDarkTheme();
            sessionStorage.setItem('theme', 'dark');
        });
    }

    if (mobileLightThemeBtn) {
        mobileLightThemeBtn.addEventListener('click', event => {
            event.preventDefault();
            setLightTheme();
    
            sessionStorage.setItem('theme', 'light');
        });
    }

    tumbler.addEventListener('click', event => {
        event.preventDefault();
        if (currentTheme === 'dark') {
            setLightTheme();

            sessionStorage.setItem('theme', 'light');
        } else {
            setDarkTheme();

            sessionStorage.setItem('theme', 'dark');
        }
    });

    setDarkTheme();

    if (sessionStorage.getItem('theme') === 'dark') {
        setDarkTheme();
    }
    if (sessionStorage.getItem('theme') === 'light') {
        setLightTheme();
    }
}
