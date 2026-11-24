const KEY = 'pixel-playground-theme';
let theme = localStorage.getItem(KEY) || 'light';

function setTheme() {
    document.documentElement.setAttribute('data-theme', theme);

    const button = document.getElementById('theme-toggle');
    if (button) {
        button.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

setTheme();

document.addEventListener('DOMContentLoaded', () => {
    setTheme();

    const button = document.getElementById('theme-toggle');
    if (button) {
        button.addEventListener('click', () => {
            theme = theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem(KEY, theme);
            setTheme();
        });
    }
});
