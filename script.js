const toggleThemeBtn = document.querySelector('.header__theme-btn');

document.onload = setInitialTheme(localStorage.getItem('theme'));
function setInitialTheme(themeKey) {
    if (themeKey === 'dark') {
        console.log("dark");
        document.documentElement.classList.add('darkTheme');
    } else {
        console.log("light")
        document.documentElement.classList.remove('darkTheme');
    }
    
}

toggleThemeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('darkTheme');

    if (document.documentElement.classList.contains('darkTheme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}
)