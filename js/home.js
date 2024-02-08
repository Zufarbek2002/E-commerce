const modalOpen = document.querySelector(".header__entry")
const modal = document.querySelector(".header__modal")
const modalCloseIcon = document.querySelector(".modal__close")
const modalCloseBtn = document.querySelector(".modal__btn")
const input = document.querySelector("#number")
const modalContent = document.querySelector(".modal_content")

modalOpen.addEventListener('click', e => {
    modal.classList.add('open_modal');
    document.body.style.overflow = 'hidden';
})

modalCloseIcon.addEventListener('click', e => {
    modal.classList.remove('open_modal');
    document.body.style.overflow = 'auto';
})

modalCloseBtn.addEventListener('click', e => {
    if (input.value != '') {
        modal.classList.remove('open_modal');
        document.body.style.overflow = 'auto';
    }
    e.preventDefault()
    input.value = "";
})

modalContent.addEventListener('click', e => {
    e.stopPropagation();
})

modal.addEventListener('click', e => {
    modal.classList.remove('open_modal');
    document.body.style.overflow = 'auto';
})