let openBtn = document.querySelector('.hamburger_menu');
let openMenu = document.querySelector('.open-menu');
let closeBtn = document.querySelector('.close-menu');

openBtn.addEventListener('click', () => {
    openMenu.classList.remove('hidden');
})

closeBtn.addEventListener('click', () => {
    openMenu.classList.add('hidden');
})