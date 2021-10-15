var menu = document.querySelector('#menu-bars');
var header = document.querySelector('header');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

