const box = document.querySelector('.products_box')

let data = JSON.parse(localStorage.getItem('dataCart'))

function productsData(data) {
    let str = '';
    data.forEach(data => {
        str += `
        <div class = "product_cart">
            <img class = "product_img" src = "${data.images[0]}" alt = "${data.name}"/>
            <div class = "product_cart__desc">
                <h2 class = "product_cart__title">${data.name}</h2>
                <h4 class = "product_cart__text">${data.description}</h4>
                <p class = "product_cart__price">${data.price} ₽ <span>за шт.</span></p>
            </div>
            <div class = "product_cart__btn">
                <button class = "btn" onclick = "removeBtn(${data.id})">-</button>
                    ${data.count}
                <button class = "btn">+</button>
            </div>
            <h3>${data.price * data.count} ₽</h3>
        </div>
    `
    });
    box.innerHTML = str;
}

productsData(data);

function removeBtn(productId) {
    if (confirm("Sure, this order delete?")) {
        let data = JSON.parse(localStorage.getItem('dataCart'))
        let newData = data.filter((pr) => pr.id !== productId);
        localStorage.setItem('dataCart', JSON.stringify(newData));
        productsData(newData);
    }
}
