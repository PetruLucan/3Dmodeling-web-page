var getHomeContentEl = document.getElementById('homeContent');
var getPreviewContentEl = document.getElementById('previewContent');
var getProjectsContentEl = document.getElementById('projectsContent');
var getContactsContentEl = document.getElementById('contactsContent');
var allLiElements = document.getElementById('meniu').children;
var getContentEl = document.getElementById('contentWrapper').children;
var test = document.getElementById('test');
// var testContent = document.getElementById('testContent');






function onMenuClick(el) {

    for (let i = 0; i < allLiElements.length; i++) {
        allLiElements[i].className = "inactive";

    }
    el.className = "active";

    onClick()

}
function onClick() {
    for (let j = 0; j < getContentEl; j++) {
        getContentEl[i].className = 'hidden';

    }
    getContentEl.className = "content";
    // testContent.classList.add('content')

}
