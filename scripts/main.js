//mobile nav

const menuIcon = document.querySelector('#menu-icon');
const navBox = document.querySelector('nav');
let mql = window.matchMedia("(width <= 500px)");

menuIcon.addEventListener('click', () => {
    if (mql) {
        if (navBox.style.overflow != 'visible') {
            navBox.style.overflow = 'visible';
        } else {
            navBox.style.overflow = 'hidden';
        }
        

    }
});