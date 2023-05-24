const mobileSection = document.querySelector(".mobileSection")
const allPage = document.querySelector("body")

function showMobileMenu() {
    mobileSection.classList.toggle("open")
    allPage.classList.toggle("bgBody")
    document.querySelector(".mobileMenu").src = "files/images/icon-close-menu.svg"
}