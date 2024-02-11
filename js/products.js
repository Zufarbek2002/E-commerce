const productBox = document.querySelector(".products");
const inp = document.querySelector("#input_search");

function proBox(products) {
    let str = '';
    products.forEach(data => {
        str += `
        <div class = "product__box">
            <div class="product__img">
                <img src = "${data.images[0]}"/>
            </div>

            <div class = "product__box_text res_box">
                <div class="price__part news__price">
                    <h3 class = "pro_data_name">${data.name}</h3>
                    <h3 class = "price__text--bold">Price: ${data.price} ₽</h3>
                </div>
                <p class = "product__info">${data.description}</p>
                <p class = "product__info">Rate: ${data.rating}</p>
                <a href="./category.html">
                    <button class="product__btn res__btn" onclick = "btn(${data.id})">Details</button>
                </a>

            </div>
        </div>
        `
    });
    productBox.innerHTML = str;
}
proBox(products);

inp.addEventListener('input', e => {
    let b = e.target.value.toLowerCase();
    let users = products;
    users = users.filter((user) => user.name.toLowerCase().includes(b))

    proBox(users);

})
const productLink = document.querySelector('.product__btn')

function btn(a) {
    products.forEach(data => {
        if(data.id == a)
            localStorage.setItem('data', JSON.stringify(data))

    })
}