
var getContentElement = document.getElementById('contentWrapper');
var menu = document.getElementById('meniu');
menu.addEventListener('click', onMenuClick);

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
   
    // let datasetContent = e.target.dataset.content;
    // let useThis = document.getElementById('datasetContent')
    // useThis.classList.remove('hidden')
}


function toggle(target) {

    var artz = document.getElementsByClassName('content');
    var targ = document.getElementById(target);

    // hide all content
    for (var i = 0; i < artz.length; i++) {
        artz[i].style.display = 'none';
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
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 9 +0.5}s`;
            }
        });
        //Burger animation
        burger.classList.toggle('toggle');
    });

}

navSlide();






