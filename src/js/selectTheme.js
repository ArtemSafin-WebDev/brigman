export default function selectTheme() {

    const toggles = document.querySelector('.page-header__theme-toggles');

    if (!toggles) return;

    const lightThemeBtn = toggles.querySelector('.page-header__theme-toggle-btn--light');
    const darkThemeBtn = toggles.querySelector('.page-header__theme-toggle-btn--dark');

    const setLightTheme = () => {
        darkThemeBtn.classList.remove('active');
        lightThemeBtn.classList.add('active');
        document.body.classList.add('light-theme');
    }
    const setDarkTheme = () => {
        darkThemeBtn.classList.add('active');
        lightThemeBtn.classList.remove('active');
        document.body.classList.remove('light-theme');
    }

    lightThemeBtn.addEventListener('click', event => {
        event.preventDefault();
        setLightTheme();

        sessionStorage.setItem('theme', 'light');
    });

    darkThemeBtn.addEventListener('click', event => {
        event.preventDefault();
        setDarkTheme();

        sessionStorage.setItem('theme', 'dark');
    })

    setLightTheme();

    let mql = window.matchMedia('(prefers-color-scheme: light)');

    const themeHandler = mq => {
        if (mq.matches) {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    }

    themeHandler(mql);

    mql.addListener(themeHandler);


    if (sessionStorage.getItem('theme') === 'dark') {
        setDarkTheme();
    }
    if (sessionStorage.getItem('theme') === 'light') {
        setLightTheme();
    }

   
}