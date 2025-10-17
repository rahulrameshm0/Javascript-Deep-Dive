const modal =  document.querySelector('.modal');
const close = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelectorAll('.window-1');
console.log(btn) 

const open_modal = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const close_modal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for (let i = 0; i < btn.length; i++) btn[i].addEventListener('click', open_modal);

close.addEventListener('click', close_modal);

overlay.addEventListener('click', close_modal);