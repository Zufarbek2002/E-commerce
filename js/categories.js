const btnBox = document.querySelector('.btn__boxes');
const btn = document.querySelector('.btn');
const boxes = document.querySelector('.cate_hero__boxes')
const iconX = document.querySelector('.close_icon');
const iconBar = document.querySelector('.open_icon');

btn.addEventListener('click', e => {
    btnBox.classList.toggle('open');
    iconX.classList.toggle('openX');
    iconBar.classList.toggle('closeBur')
})

function products(categories) {
    let str = '';
    categories.forEach((data) => {
        str += `
        <div class = "data_box">
            <img src="${data.image}" alt="advertising img" class = "data_img" />
            <p class = "data_name">${data.name}</p>
        </div>
        `
    });

    boxes.innerHTML = str;
}
products(categories);
