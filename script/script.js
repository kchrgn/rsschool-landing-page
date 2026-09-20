const toggleButton = document.getElementById('theme-toggle');
const primaryButton = document.getElementById('primary-button');
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

primaryButton.addEventListener('click', () => {
     location.href = 'catalog.html';
} )

