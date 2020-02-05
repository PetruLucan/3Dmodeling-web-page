const getContentElement = document.getElementById('contentWrapper');
const menu = document.getElementById('meniu');
menu.addEventListener('click', onMenuClick);



const ServiceMenuTrigger = document.getElementById('serviceTrigger');
const ServiceMenuPanel = document.getElementById('servicePanel');
ServiceMenuTrigger.addEventListener('click', onServiceMenuClick);
const LoginMenuTrigger = document.getElementById('loginTrigger');
const LoginMenuPanel = document.getElementById('loginPanel');
LoginMenuTrigger.addEventListener('click', onLoginMenuClick);


function onMenuClick(e) {

    if (e.target.tagName === 'LI') {

        // am dat click pe un element de tip <li>
        const allLiElements = menu.querySelectorAll('li');

        for (let i = 0; i < allLiElements.length; i++) {

            // scoatem clasa de pe celelalte
            allLiElements[i].classList.remove('active');
        }
        e.target.classList.add('active'); // o punem pe cel nou selectat
    }
}




function toggle(target) {

    const Content = document.getElementsByClassName('content');
    const targ = document.getElementById(target);

    // hide all content
    for (let i = 0; i < Content.length; i++) {
        Content[i].style.display = 'none';
    }
    // display current content
    targ.style.display = 'flex';

    return false;
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 9 + 0.5}s`;
            }
        });
        //Burger animation
        burger.classList.toggle('toggle');
    });
}
navSlide();




//header Service/Login Menus toggle
function onServiceMenuClick() {
    LoginMenuPanel.classList.remove('menu-active');
    ServiceMenuPanel.classList.toggle('menu-active');
}
function onLoginMenuClick() {
    ServiceMenuPanel.classList.remove('menu-active')
    LoginMenuPanel.classList.toggle('menu-active');
}

// dropdown-cancel when click anywhre on page

document.addEventListener('click', onDocClick);

function onDocClick(e) {

    if (!e.target.matches('BUTTON[data-menu]')) {
        const DROPDOWNS = document.getElementsByClassName('menuDropdown')

        for (let i = 0; i < DROPDOWNS.length; i++) {
            let openDropdown = DROPDOWNS[i];
            if (openDropdown.classList.contains('menu-active'));
            openDropdown.classList.remove('menu-active')
        }
    }
}


//header sticky
window.onscroll = function () { whenScroll() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
var headerImg = document.getElementById('headerImg')
function whenScroll() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        header.classList.remove("hidden");
        
    } else {
        header.classList.remove("sticky");
        headerImg.classList.add('hidden')
    }
}







