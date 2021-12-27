const button = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]


button.addEventListener('click', DarkELight)

function DarkELight() {
    changeClasses()
    changeText()
}

function changeClasses() {
    button.classList.toggle('dark-mode')
    h1.classList.toggle('dark-mode')
    body.classList.toggle('dark-mode')
    footer.classList.toggle('dark-mode')
}
function changeText() {
    const lightMode = 'Light Mode'
    const darkmode = 'Dark Mode'

    if (button.classList.contains('dark-mode')) {
        button.innerHTML = lightMode
        h1.innerHTML = dark-mode + ' On'
        return;
    }
    button.innerHTML = darkmode
    h1.innerHTML = lightMode+' ON'
}