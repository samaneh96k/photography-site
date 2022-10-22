const navBarIconElm = document.querySelector(".menu-icon");
const navBarElm = document.querySelector(".bar-menu-items");
const navElm = document.querySelector(".navbar");
navBarIconElm.addEventListener('click', () => {
    navBarElm.classList.toggle('show');
})
window.onscroll = () => {

    if (document.body.scrollTop > 50|| document.documentElement.scrollTop > 50) {
        
        navElm.classList.add('active');
        
    } else {
        navElm.classList.remove('active');
    }

}