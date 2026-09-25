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

const burgerMenuButton = document.getElementById('burger-menu')
const burgerMenuContent = document.getElementById('burger-menu-content')

burgerMenuButton.addEventListener('click', () => {
    burgerMenuButton.classList.toggle('coffee-burger-menu-close');
    burgerMenuContent.classList.toggle('burger-menu-active');
    body.classList.toggle('body-scroll-disable');
})

burgerMenuContent.addEventListener('click', (event) => {
    console.log(event.target.tagName)
    if (event.target.tagName === 'A') closeBurgerMenu();
})

function closeBurgerMenu () {
    burgerMenuButton.classList.remove('coffee-burger-menu-close');
    burgerMenuContent.classList.remove('burger-menu-active');
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