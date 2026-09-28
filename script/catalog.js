

const menuList = document.getElementById('menu-list');

async function renderCards (filter) {
    try {
        const response = await fetch('../data/products.json');
        const data = await response.json();

        menuList.innerHTML += data.filter(item => item.category === filter ).map ((item, index) => `
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

renderCards('dessert');