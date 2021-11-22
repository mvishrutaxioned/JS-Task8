var tabContent = document.querySelectorAll('.tab-content li');
var tabs = document.querySelectorAll('.tabs li a');
var accordions = document.querySelectorAll('.accordion li');

var tabIndex = 1;
showTab(tabIndex)

tabs.forEach((tab, index) => {
    tab.addEventListener('click', e => changeTab(e, index+1))
})

function changeTab(e, n) {
    e.preventDefault();
    showTab(tabIndex = n)
}

function showTab(n) {

    tabContent.forEach(tab => tab.classList.remove('active'))
    tabs.forEach(tab => tab.classList.remove('active'))

    tabContent[tabIndex-1].classList.add('active');
    tabs[tabIndex-1].classList.add('active');
}

accordions.forEach((acc, index) => {
    acc.addEventListener('click', e => showAcc(index+1));
})

function showAcc(n) {
    if(accordions[n-1].classList.contains('show')) {
        accordions[n-1].classList.remove('show');
    } else {
        accordions[n-1].classList.add('show');
    }
}