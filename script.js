/*  MOBILE MENU */

let menuBtn = document.getElementById("mobile-menu")
let fullNav = document.getElementById("full-nav")

menuBtn.addEventListener("click", function() {
    fullNav.className = fullNav.className === "mobile" ? "desktop" : "mobile"
})
