const mobileSection = document.querySelector(".mobileSection")
const allPage = document.querySelector("body")

function showMobileMenu() {
    mobileSection.classList.toggle("open")
    allPage.classList.toggle("bgBody")
    
    if (mobileSection.classList.contains("open")) {
        document.querySelector(".mobileMenu").src = "files/images/icon-close-menu.svg"
    } else {
        document.querySelector(".mobileMenu").src = "files/images/icon-menu.svg"
    }
}