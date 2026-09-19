const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('currentTheme') === 'dark') body.classList.add('dark');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        localStorage.setItem('currentTheme', 'dark');
    } else {
        localStorage.setItem('currentTheme', 'light');
    }
})