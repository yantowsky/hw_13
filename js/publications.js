let buttonBurger = document.getElementById("button-burger");
console.log(buttonBurger);
let popupNav = document.getElementById("popup-nav");
console.log(popupNav);
let popupClose = document.getElementById("popup-close");
console.log(popupClose);
let menuHeader = document.getElementById("menu-header");
console.log(menuHeader);

popupClose.addEventListener("click", function () {
    popupNav.style.display = "none";
})

buttonBurger.addEventListener("click", function () {
    popupNav.style.display = "flex";
})

window.addEventListener("resize", function () {
    if (document.documentElement.clientWidth >= 768) {
        popupNav.style.display = "flex";
    }
    else {
        popupNav.style.display = "none";
    }
});

let uaButton = document.getElementById("button-ua");
console.log(uaButton);
let enButton = document.getElementById("button-en");
console.log(enButton);
let ruButton = document.getElementById("button-ru");
console.log(ruButton);

enButton.style.background = "#F0145A";
uaButton.style.color = "#B3B3BA"
ruButton.style.color = "#B3B3BA"
enButton.style.cursor = "default"

function getClickLang(lang) {
    lang.onclick = function () {
        lang.style.background = "#F0145A";
        lang.style.color = "#FFFFFF";
        lang.style.cursor = "default";
        if (lang == uaButton) {
            enButton.style.color = "#B3B3BA";
            ruButton.style.color = "#B3B3BA";
            enButton.style.background = "none";
            ruButton.style.background = "none";
            enButton.style.cursor = "pointer";
            ruButton.style.cursor = "pointer";
        } else if (lang == enButton) {
            uaButton.style.color = "#B3B3BA";
            ruButton.style.color = "#B3B3BA";
            uaButton.style.background = "none";
            ruButton.style.background = "none";
            uaButton.style.cursor = "pointer";
            ruButton.style.cursor = "pointer";
        } else if (lang == ruButton) {
            uaButton.style.color = "#B3B3BA";
            enButton.style.color = "#B3B3BA";
            uaButton.style.background = "none";
            enButton.style.background = "none";
            uaButton.style.cursor = "pointer";
            enButton.style.cursor = "pointer";
        }
    }
    lang.onmouseover = function () {
        (lang.style.cursor == "default" || lang.style.background == "#F0145A") ? lang.style.background = "#F0145A" : lang.style.background = "#F5F5FA";
    }
    lang.onmouseout = function () {
        (lang.style.cursor == "default" || lang.style.background == "#F0145A") ? lang.style.background == "#F0145A" : lang.style.background = "none";
    }
}

getClickLang(uaButton);
getClickLang(enButton);
getClickLang(ruButton);


let headerElement = document.getElementById("header");
console.log(headerElement);
let footerElement = document.getElementById("footer");
console.log(footerElement);
let scrollDown = document.querySelector(".section-menu__text");
console.log(scrollDown);
let scrollUp = document.querySelector(".policy__text");
console.log(scrollUp);

function getScrollAnchor() {
    headerElement.scrollIntoView({ block: "center", behavior: "smooth" });
    footerElement.scrollIntoView({ block: "center", behavior: "smooth" });
}

scrollDown.addEventListener("click", getScrollAnchor);
scrollUp.addEventListener("click", getScrollAnchor);