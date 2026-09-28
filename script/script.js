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

const burgerMenuButton = document.getElementById('burger-menu-button')
const burgerMenuContent = document.getElementById('burger-menu-content')

burgerMenuButton.addEventListener('click', () => {
    burgerMenuButton.classList.toggle('open');
    burgerMenuContent.classList.toggle('open');
    body.classList.toggle('body-scroll-disable');
})

burgerMenuContent.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') closeBurgerMenu();
})

function closeBurgerMenu () {
    burgerMenuButton.classList.remove('open');
    burgerMenuContent.classList.remove('open');
    body.classList.remove('body-scroll-disable')
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeBurgerMenu();
    }
})

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeBurgerMenu();
})