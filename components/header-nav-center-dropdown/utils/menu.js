const ACTIVE_MENU_ID = "menu"
const ACTIVE_MENU_CLASS = "active-drop-menu"
const MENU_BOX_ID = "#menu-box"

const toggleMenu = () => {
    const menuElement = document.getElementById(ACTIVE_MENU_ID)
    menuElement.classList.toggle(ACTIVE_MENU_CLASS)
    document.body.addEventListener("click", hideMenu)
}

const hideMenu = (event) => {
    const  menuElement = document.getElementById(ACTIVE_MENU_ID)
    const targetElement = event.target
    if(
        menuElement.classList.contains(ACTIVE_MENU_CLASS) &&
        !targetElement.closest(MENU_BOX_ID)
    ) {
        menuElement.classList.remove(ACTIVE_MENU_CLASS)
        document.body.removeEventListener("click", hideMenu)
    }
}
