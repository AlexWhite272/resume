// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     // код для мобильных устройств
//     alert ("touch")
//   } else {
//     // код для обычных устройств
//     alert("pc")
// }

// var ua=navigator.userAgent;
// function isMobile(){
//         "use strict";
//         return !!(ua.match(/(iemobile|opera mini|iphone|ipad|ipod|blackberry|andriod)/i)||ua.search(/mobile/i)>0)
//     }
// if (isMobile.any == true){
//     document.body.classList.add ("_touch")
// }else {
//     document.body.classList.add ('_pc')
// }
$(document).ready(function(){
    $('.window__block').hide();
    $('.window__asq').click(function(){
        $(this).next().toggle()});
    });

//узнаем ширину экрана и устанавливаем фон блока
const widthWindow =  document.documentElement.clientWidth;
const widthSkillsLogo = widthWindow + "px";
const skillsLogo = document.querySelector(".skills__logo")
skillsLogo.style.width = widthSkillsLogo;

//меню бургер
const navMenu = document.querySelector('.nav__menu');
const navOpen = document.querySelector('.nav__open');
const navClosed = document.querySelector(".nav__closed")
const navTittle = document.querySelector('.nav__tittle')
navOpen.addEventListener('click', function () {
    navMenu.className = 'nav__menu_mob';
    
    navOpen.style.display = 'none';
    navClosed.style.display = 'block';
    navTittle.style.display = 'block';
});
navClosed.addEventListener('click', function(){
    navMenu.className = 'nav__menu'
    navOpen.style.display = 'block';
    navClosed.style.display = 'none';
    navTittle.style.display = 'none';
})

//Прокрутка для меню
const menuLink = document.querySelectorAll ('.nav__link[data-goto]');
if (menuLink.length > 0) {
    menuLink.forEach(menuLink => {
        menuLink.addEventListener ('click', (e)=>{
            const menuLinks = e.target;
            if (menuLinks.dataset.goto && document.querySelector(menuLinks.dataset.goto)){
                const gotoBlock = document.querySelector(menuLinks.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                });
            }
        })
    })
}




//запускаем анимацию по клику
const htmlAnim = document.querySelector(".skills__html-pol");
const cssAnim = document.querySelector(".skills__css-pol");
const jsAnim = document.querySelector(".skills__js-pol");
const reactlAnim = document.querySelector(".skills__react-pol");
const startAnim = document.querySelector(".skills__tittle")
startAnim.addEventListener('click', function () {
    htmlAnim.classList.remove('skills__html-pol');
    htmlAnim.classList.add('skills__html-pol_act');
    cssAnim.classList.remove('skills__css-pol');
    cssAnim.classList.add('skills__css-pol_act');
    jsAnim.classList.remove('skills__js-pol');
    jsAnim.classList.add('skills__js-pol_act');
    reactlAnim.classList.remove('skills__react-pol');
    reactlAnim.classList.add('skills__react-pol_act');

});

//появление подсказки при кликеХ


// windowAsq.addEventListener ('click', function(){
//     windowBlock.style.display = 'block';
// });

// document.addEventListener('click', function(){
//     windowBlock.style.display = 'none';
// });

