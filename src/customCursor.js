let mouseCursor = document.querySelector(".cursor");

window.addEventListener('mousemove', cursor)
window.addEventListener('scroll', scrollcursor)

function cursor(e){
    mouseCursor.style.opacity = "100%"
    mouseCursor.style.top = e.pageY + "px"
    mouseCursor.style.left = e.pageX + "px"
}

function scrollcursor(e){
    mouseCursor.style.opacity = "0%"
}
