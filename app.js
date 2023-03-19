const menuBtn = document.querySelector('#mobile-menu-btn')
const menuList = document.querySelector('.menu')
menuBtn.addEventListener('click',function(){
    menuBtn.classList.toggle('active')
    menuList.classList.toggle('active')
})