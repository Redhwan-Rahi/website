/*===== SHOW MENU =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== CHANGE BACKGROUND HEADER =====*/ 
function scrollHeader(){
    const nav = document.getElementById('header');
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*===== SHOW SCROLL TOP=====*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop)

// const darkTheme = 'dark-theme'
// const iconTheme = 'uil-sun'
// const themeButton = document.getElementById('btn-toggle')
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// const btn = document.querySelector(".btn-toggle");
// const theme = document.querySelector("#theme-link");
// btn.addEventListener("click", function() {
//     if(theme.getAttribute("href") == "assets/css/styles.css") {
//         theme.href = "assets/css/dark.css";
        
//     }
//     else {
//         theme.href = "assets/css/styles.css";
//     }
// })
// DARK MODE

// const themeButton = document.getElementById('theme-button')
// const btn = document.querySelector(".btn-toggle");
// const theme = document.querySelector("#theme-link");
// const darkTheme = 'dark-theme'
// const iconTheme = 'uil-sun'


// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ?  'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ?  'uil-moon' : 'uil-sun'

// // if(selectedTheme) {
// //     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
// //     themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme) 
// // }



const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");
btn.addEventListener('click', () => {
    if(theme.getAttribute("href") == "assets/css/styles.css") {
                theme.href = "assets/css/dark.css";
                // document.body.classList.toggle(darkTheme)
                // themeButton.classList.toggle(iconTheme)
            }
            else {
                theme.href = "assets/css/styles.css";
            }
    // localStorage.setItem('selected-theme', getCurrentTheme)
    // localStorage.setItem('selected-icon', getCurrentIcon)
})






/*===== MIXITUP FILTER PORTFOLIO =====*/ 
var mixer = mixitup(".portfolio__container", {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
});

/* Link active portfolio */ 
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l=> l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(l=> l.addEventListener('click', activePortfolio))

/*===== SWIPER CAROUSEL =====*/ 
const mySwiper = new Swiper('.testimonial__container', {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
})



gsap.from('.home__img', {opacity: 0, duration: 2, delay: .5, x: 60})

gsap.from('.home__data', {opacity: 0, duration: 2, delay: .8, y: 25})
gsap.from('.home__greeting, .home__name, .home__profession, .home__button', {opacity: 0, duration: 2, delay: 1, y: 25, ease:'expo.out', stagger: .2})

gsap.from('.nav__logo, .nav__toggle', {opacity:0, duration: 2, delay: 1.5, y: 25, ease:'expo.out', stagger: .2});
gsap.from('.nav__item', {opacity:0, duration: 2, delay: 1.8, y: 25, ease:'expo.out', stagger: .2});
gsap.from('.home__social-icon', {opacity: 0, duration: 2.5, delay: 2.3, y: 25, ease:'expo.out', stagger: .2})