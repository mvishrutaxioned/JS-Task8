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
    acc.addEventListener('click', e => showAcc(acc, index+1));
})

function showAcc(acc, n) {

    var panel = acc.querySelector('div');

    if(panel.style.height) {
        acc.querySelector('h2').classList.remove('show')
        panel.style.height = null;
    } else {
        accordions.forEach(item => item.querySelector('h2').classList.remove('show'))
        accordions.forEach(item => item.querySelector('div').style.height = null)
        acc.querySelector('h2').classList.add('show')
        panel.style.height = panel.scrollHeight + 'px';
    }
}