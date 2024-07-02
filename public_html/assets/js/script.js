function toggleMenu() {
    var menuIcon = document.querySelector(".menu-icon");
    var navLinks = document.querySelector(".nav-links");
    menuIcon.classList.toggle("open");
    navLinks.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            document.querySelector('.nav-links').classList.remove('open');
            document.querySelector('.menu-icon').classList.remove('open');
        });
    });
});
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});