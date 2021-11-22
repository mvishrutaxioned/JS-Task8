var tabContent = document.querySelectorAll('.tab-content li');
var tabs = document.querySelectorAll('.tabs li a');

var tabIndex = 1;

tabs.forEach((tab, index) => {
    tab.addEventListener('click', e => changeTab(e, index+1))
})

function changeTab(e, n) {
    e.preventDefault();
    showTab(tabIndex = n)
}

function showTab() {
    tabContent.forEach(tab => tab.classList.remove('active'))
    tabs.forEach(tab => tab.classList.remove('active'))

    tabContent[tabIndex-1].classList.add('active');
    tabs[tabIndex-1].classList.add('active');
}