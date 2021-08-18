const menu = document.querySelector('.menuMobile')
const itemsMenu = document.querySelector('.menu nav ul')

function openNav() {
    menu.addEventListener('click', () => {
        itemsMenu.classList.toggle('displayNone')
    })
}
openNav()