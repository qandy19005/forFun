const ADD_CLASS_TYPE = "add"
const UNDER_LINE_ANIMATION = "under-line-animation"

const underlineAnimation = (element, type) => {
    if (type === ADD_CLASS_TYPE) {
        element.target.classList.add(UNDER_LINE_ANIMATION)
    } else {
        element.target.classList.remove(UNDER_LINE_ANIMATION)
    }
}