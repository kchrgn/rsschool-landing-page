const coffeeSelector = document.getElementById('coffee-selector');
const teaSelector = document.getElementById('tea-selector');
const dessertSelector = document.getElementById('dessert-selector');

const menuList = document.getElementById('menu-list');

async function renderCards (filter) {
    try {
        const response = await fetch('../data/products.json');
        const data = await response.json();

        menuList.innerHTML = data.filter(item => item.category === filter ).map ((item, index) => `
            <div class="grid-preview">
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
            </div>
    `).join('')
    } catch (error) {
        console.log('Load data error', error);
    }
}
renderCards('coffee');

coffeeSelector.addEventListener('click', () => {
    coffeeSelector.classList.add('tab-item-active');
    teaSelector.classList.remove('tab-item-active')
    dessertSelector.classList.remove('tab-item-active')
    renderCards('coffee');
})
teaSelector.addEventListener('click', () => {
    coffeeSelector.classList.remove('tab-item-active');
    teaSelector.classList.add('tab-item-active')
    dessertSelector.classList.remove('tab-item-active')
    renderCards('tea');
})
dessertSelector.addEventListener('click', () => {
    coffeeSelector.classList.remove('tab-item-active');
    teaSelector.classList.remove('tab-item-active')
    dessertSelector.classList.add('tab-item-active')
    renderCards('dessert');
})





