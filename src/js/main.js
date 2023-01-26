const barsIco = document.querySelector('.nav__bars')
const arrowIco = document.querySelector('.nav__arrow')
const navSidebar = document.querySelector('.nav__sidebar')
const iconBox = document.querySelector('.nav__burger-icons')
const accountBox = document.querySelector('.nav__account-icons')
const navHeading = document.querySelector('.nav__heading')

const membershipList = document.querySelector('.nav__item--membership')
const chevronIcon = document.querySelector('.nav__chevron')

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

const showMembershipList = () => {
    membershipList.classList.toggle('hide')
    // membershipList.classList.toggle('move-membership-link')

    if (!membershipList.classList.contains('hide')){
        chevronIcon.style.transform = 'rotate(180deg)'
    } else {
        chevronIcon.style.transform = 'rotate(0deg)'
    }
}

barsIco.addEventListener('click', showNav)
arrowIco.addEventListener('click', showNav)
chevronIcon.addEventListener('click', showMembershipList)