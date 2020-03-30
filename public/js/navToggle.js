document.querySelector('.header__navtoggle').addEventListener('click', () => {
    document.querySelector('.navigation').classList.add('show');
});

document.querySelector('.navigation__close-btn').addEventListener('click', () => {
    document.querySelector('.navigation').classList.remove('show');
});