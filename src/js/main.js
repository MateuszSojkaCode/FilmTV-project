const barsIco = document.querySelector('.nav__bars')
const arrowIco = document.querySelector('.nav__arrow')
const navSidebar = document.querySelector('.nav__sidebar')
const iconBox = document.querySelector('.nav__burger-icons')
const accountBox = document.querySelector('.nav__account-icons')
const navHeading = document.querySelector('.nav__heading')

const membershipList = document.querySelector('.nav__item--membership')
const sidebarList = document.querySelector('.show-sidebar')
const chevronIcon = document.querySelector('.nav__chevron')

const membershipContainer = document.querySelector('.nav__membership-container')
const navLink = document.querySelector('.show-membership')

const terms = document.querySelector('.header__terms-info')
const termsIcon = document.querySelector('.terms-chevron')

const overlay = document.querySelector('.overlay')

const showNav = () => {
    barsIco.classList.toggle('hide')
    arrowIco.classList.toggle('hide')
    navSidebar.classList.toggle('move-sidebar')
    iconBox.classList.toggle('move-icons')

    if(navSidebar.classList.contains('move-sidebar')){
        accountBox.style.display = 'none'
        navHeading.style.display = 'none'
        overlay.style.display = 'block'
    } else {
        accountBox.style.display = 'block'
        navHeading.style.display = 'block'
        overlay.style.display = 'none'
    }     
}

const showMembershipList = () => {
    membershipList.classList.toggle('hide')

    if (!membershipList.classList.contains('hide')){
        chevronIcon.style.transform = 'rotate(180deg) translateY(.2rem)'
    } else {
        chevronIcon.style.transform = 'rotate(0deg)'
    }
}

const showMembershipDesktop = () => {
    membershipContainer.classList.toggle('show-membership')   
}

const showTerms = () => {
    terms.classList.toggle('show-terms')
}

barsIco.addEventListener('click', showNav)
arrowIco.addEventListener('click', showNav)
sidebarList.addEventListener('click', showMembershipList)
navLink.addEventListener('click', showMembershipDesktop)
termsIcon.addEventListener('click', showTerms)
