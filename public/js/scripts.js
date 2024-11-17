const quantityInput = document.querySelector('#quantity');
const itemList = document.querySelector('#item-list');
const firstItem = document.querySelector('#first-item');
const lastItem = document.querySelector('#last-item');
firstItem.innerText = `OBJ${0}`;
lastItem.innerText = `OBJ${0}`;

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

        if(quantity > 0){
            firstItem.innerText = `OBJ${1}`;
            lastItem.innerText = `OBJ${quantity}`;    
        }
    }

    if(quantity < 1){
        firstItem.innerText = `OBJ${0}`;
        lastItem.innerText = `OBJ${0}`;
    }
});