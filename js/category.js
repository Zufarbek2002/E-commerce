const indicator = document.querySelector('.second_img');
const show = document.querySelector('.main_img img');
const showImg = document.querySelector('.main_img');
let div = document.createElement('div')

div.className = 'img_box';
products[0].images.map(image=>{
    let img = document.createElement('img');
    img.src = image;
    div.appendChild(img);
})

show.src = products[0].images[0];

indicator.append(div);

indicator.addEventListener('click', e => {
    let imgUrl = e.target.src;
    imgUrl && (show.src = imgUrl);
})