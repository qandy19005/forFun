const stuckBox = document.getElementById('stickBox');
let stickyHeight = 0 // record top to div distance

window.addEventListener("scroll", () => {
    const stickyDivOffsetTop = stuckBox.offsetTop;
    if (stickyHeight !== 0) {
        if (window.pageYOffset <= stickyHeight) {
            stuckBox.classList.remove('stick-top');
            stickyHeight = 0;
        }
    }
    else if (window.pageYOffset >= stickyDivOffsetTop) {
        stuckBox.classList.add('stick-top');
        if(stickyDivOffsetTop !== 0) {
            stickyHeight = stickyDivOffsetTop;
        }
    } 
});
