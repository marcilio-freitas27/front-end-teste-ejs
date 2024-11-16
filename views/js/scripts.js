const quantityInput = document.querySelector('#quantity');
const itemList = document.querySelector('#item-list');

quantityInput.addEventListener('input', () => {
    const quantity = parseInt(quantityInput.value, 10) || 0;
    itemList.innerHTML = '';

    for (let i = 1; i <= quantity; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.textContent = "Item"

        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.textContent = `${i}`;

        item.appendChild(circle);
        itemList.appendChild(item);
    }
});