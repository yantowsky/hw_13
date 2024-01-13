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

let newsSwitch = document.getElementById("news");
console.log(newsSwitch);
let articlesSwitch = document.getElementById("articles");
console.log(articlesSwitch);
let publicationsBlock = document.querySelector(".publications__body");
console.log(publicationsBlock);

newsSwitch.style.background = "#FFF";
newsSwitch.style.cursor = "default";
articlesSwitch.style.cursor = "pointer";

function getClickSwitch(on) {
    on.onclick = function () {
        on.style.background = "#FFF";
        on.style.cursor = "default";
        if (on == newsSwitch) {
            articlesSwitch.style.background = "none";
            articlesSwitch.style.cursor = "pointer";
            publicationsBlock.style.WebkitFlexDirection = "column";
            (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1024) ? publicationsBlock.style.gridTemplateAreas = '"A B" "C D" "E F"' : publicationsBlock.style.gridTemplateAreas = '"A B C" "D E F"';
        } else if (on == articlesSwitch) {
            newsSwitch.style.background = "none";
            newsSwitch.style.cursor = "pointer";
            publicationsBlock.style.WebkitFlexDirection = "column-reverse";
            (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1024) ? publicationsBlock.style.gridTemplateAreas = '"F E" "D C" "B A"' : publicationsBlock.style.gridTemplateAreas = '"F E D" "C B A"';
        }
    }
    on.onmouseover = function () {
        (on.style.cursor == "default" || on.style.background == "#FFF") ? on.style.background = "#FFF" : on.style.background = "#F5F5FA";
    }
    on.onmouseout = function () {
        (on.style.cursor == "default" || on.style.background == "#FFF") ? on.style.background == "#FFF" : on.style.background = "none";
    }
}

getClickSwitch(newsSwitch);
getClickSwitch(articlesSwitch);

window.addEventListener("resize", function () {
    if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1024 && newsSwitch.style.background !== "none" && articlesSwitch.style.background !== "#FFF") {
        publicationsBlock.style.gridTemplateAreas = '"A B" "C D" "E F"';
    } else if (document.documentElement.clientWidth >= 1024 && newsSwitch.style.background !== "none" && articlesSwitch.style.background !== "#FFF") {
        publicationsBlock.style.gridTemplateAreas = '"A B C" "D E F"';
    } else if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1024 && newsSwitch.style.background !== "#FFF" && articlesSwitch.style.background !== "none") {
        publicationsBlock.style.gridTemplateAreas = '"F E" "D C" "B A"';
    } else if (document.documentElement.clientWidth >= 1024 && newsSwitch.style.background !== "#FFF" && articlesSwitch.style.background !== "none") {
        publicationsBlock.style.gridTemplateAreas = '"F E D" "C B A"';
    }
});