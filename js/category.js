const indicator = document.querySelector('.second_img');
const show = document.querySelector('.main_img img');
const showImg = document.querySelector('.main_img');
const cart = document.querySelector('.card');
const textBox = document.querySelector('.carusel__text_box')
const dataTitle = document.querySelector('.carusel__title')
const link = document.querySelector('.category_link')
const link2 = document.querySelector('.category_link2')
let div = document.createElement('div')
let data = JSON.parse(localStorage.getItem('data'))


div.className = 'img_box';
data.images.map(image=>{
    let img = document.createElement('img');
    img.src = image;
    div.appendChild(img);
})

show.src = data.images[0];

indicator.append(div);

indicator.addEventListener('click', e => {
    let imgUrl = e.target.src;
    imgUrl && (show.src = imgUrl);
})

link.append(data.category)
link2.append(data.description)
dataTitle.append(data.description)
textBox.innerHTML = `
<div class="carusel__price_card">
    <div class="price__box">
        <h3>${data.price} ₽</h3>
        <p>Обычная цена</p>
    </div>
    <div class="price__box">
        <h3>${data.price} ₽</h3>
        <p>С картой Северяночки</p>
    </div>
</div>

<button class="carusel__btn" onclick="btnCart(${data.id})">
    <i
    class="fa-solid fa-cart-shopping fa-lg"
    style="color: #fff"
    ></i>
    <h2 class="carusel__btn_text">В корзину</h2>
</button>

<div class="data_info">
    <p class = "data__p">Name:</p>
    <h3>${data.name}</h3>
</div>
<div class="data_info">
    <p class = "data__p">Rating:</p>
    <h3>${data.rating}</h3>
</div>
`

let dataAll = JSON.parse(localStorage.getItem("dataCart")) ?  JSON.parse(localStorage.getItem("dataCart")) : [];
function btnCart(a) {
    const checkData = dataAll.find(pr => pr.id == a)
    products.forEach(data => {
        if(data.id == a && !checkData){
            dataAll = [...dataAll, {
                ...data,
                count: 1
            }]
        }
    })


    localStorage.setItem('dataCart', JSON.stringify(dataAll))
}