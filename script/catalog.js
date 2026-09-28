const coffeeSelector = document.getElementById('coffee-selector');
const teaSelector = document.getElementById('tea-selector');
const dessertSelector = document.getElementById('dessert-selector');
const menuList = document.getElementById('menu-list');
const allCardsButton = document.getElementById('button-all-cards');

let filter = 'coffee';
let numCardsForRender = 8;
if (window.innerWidth <= 768) {
    numCardsForRender = 4;
    allCardsButton.classList.remove('disable');
}

allCardsButton.addEventListener('click', () => {
    allCardsButton.classList.add('disable');
    numCardsForRender = 8;
    renderCards(filter, numCardsForRender);
})


async function renderCards (filter, count) {
    try {
        const response = await fetch('../products.json');
        const data = await response.json();

        menuList.innerHTML = data.filter(item => item.category === filter ).map ((item, index) => {
            if (index > count - 1) return '';
            return `<div class="grid-preview">
                        <div class="preview-box">
                            <img src="./images/${item.category}-${index+1}.png" alt="coffee-1">
                        </div>
                        <div class="preview-description">
                            <div class="description-title">
                                <h2 class="color-text-primary">${item.name}</h2>
                                <p class="color-text-primary text-body-medium">${item.description}</p>
                            </div>
                            <h2 class="color-text-primary">$${item.price}</h2>
                        </div>
                    </div>`;
        }).join('')
    } catch (error) {
        console.log('Load data error', error);
    }
}
renderCards(filter, numCardsForRender);

coffeeSelector.addEventListener('click', () => {
    coffeeSelector.classList.add('tab-item-active');
    teaSelector.classList.remove('tab-item-active')
    dessertSelector.classList.remove('tab-item-active')
    filter = 'coffee';
    renderCards(filter, numCardsForRender);
})
teaSelector.addEventListener('click', () => {
    coffeeSelector.classList.remove('tab-item-active');
    teaSelector.classList.add('tab-item-active')
    dessertSelector.classList.remove('tab-item-active')
    filter = 'tea';
    renderCards(filter, numCardsForRender);
})
dessertSelector.addEventListener('click', () => {
    coffeeSelector.classList.remove('tab-item-active');
    teaSelector.classList.remove('tab-item-active')
    dessertSelector.classList.add('tab-item-active')
    filter = 'dessert'
    renderCards(filter, numCardsForRender);
})

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        allCardsButton.classList.remove('disable');
        numCardsForRender = 4;
        renderCards(filter, numCardsForRender);;
    }
    if (window.innerWidth > 768) {
        allCardsButton.classList.add('disable');
        numCardsForRender = 8;
        renderCards(filter, numCardsForRender);;
    }
})





