
const  navBoxElement = document.getElementById("nav-box")

window.addEventListener("scroll", function() {
    (window.pageYOffset > 10)
    ? navBoxElement.classList.add("screen-leave-top")
    : navBoxElement.classList.remove("screen-leave-top")
});