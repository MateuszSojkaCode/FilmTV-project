const barsIco = document.querySelector('.nav__bars')
const arrowIco = document.querySelector('.nav__arrow')
const navSidebar = document.querySelector('.nav__sidebar')
const iconBox = document.querySelector('.nav__burger-icons')
const accountBox = document.querySelector('.nav__account-icons')
const navHeading = document.querySelector('.nav__heading')

const showNav = () => {
    barsIco.classList.toggle('hide')
    arrowIco.classList.toggle('hide')
    navSidebar.classList.toggle('move-sidebar')
    iconBox.classList.toggle('move-icons')

    if(navSidebar.classList.contains('move-sidebar')){
        accountBox.style.display = 'none'
        navHeading.style.display = 'none'
    } else {
        accountBox.style.display = 'block'
        navHeading.style.display = 'block'
    }     
}

barsIco.addEventListener('click', showNav)
arrowIco.addEventListener('click', showNav)