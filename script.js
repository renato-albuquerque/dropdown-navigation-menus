// VARIABLES

const mobileSection = document.querySelector(".mobileSection")
const allPage = document.querySelector("body")
const mobileDropdownFeatures = document.querySelector(".features")
const mobileDropdownCompany = document.querySelector(".company")
const featuresSubItems = document.querySelector(".ms-dropdownFeatures")
const companySubItems = document.querySelector(".ms-dropdownCompany")
const arrowFeatures = document.querySelector(".arrowFeatures")
const arrowCompany = document.querySelector(".arrowCompany")

// FUNCTIONS

function showMobileMenu() {
    mobileSection.classList.toggle("open")
    allPage.classList.toggle("bgBody")
    
    if (mobileSection.classList.contains("open")) {
        document.querySelector(".mobileMenu").src = "files/images/icon-close-menu.svg"
    } else {
        document.querySelector(".mobileMenu").src = "files/images/icon-menu.svg"
    }
}

// EVENTS

mobileDropdownFeatures.addEventListener("click", () => {
    featuresSubItems.classList.toggle("hide")
    arrowFeatures.classList.toggle("arrow")
})

mobileDropdownCompany.addEventListener("click", () => {
    companySubItems.classList.toggle("hide")
    arrowCompany.classList.toggle("arrow")
})
