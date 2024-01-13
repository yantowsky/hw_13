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
let scrollTitle = document.querySelector(".team__title");
console.log(scrollTitle);
let btnScrollUp = document.querySelectorAll(".btn-scroll-up__img");
console.log(btnScrollUp);

function getScrollAnchor() {
    headerElement.scrollIntoView({ block: "center", behavior: "smooth" });
    footerElement.scrollIntoView({ block: "center", behavior: "smooth" });
}

scrollDown.addEventListener("click", getScrollAnchor);
scrollUp.addEventListener("click", getScrollAnchor);

function getScrollToTitle() {
    scrollTitle.scrollIntoView({ block: "center", behavior: "smooth" });
}

btnScrollUp.forEach(item => item.addEventListener("click", getScrollToTitle));

let teamMod = document.querySelector(".btn-scroll-up__img--mod");
console.log(teamMod);
let teamImprov = document.querySelector(".btn-scroll-up__img--improv");
console.log(teamImprov);
let teamAdd = document.querySelector(".btn-scroll-up__img--add");
console.log(teamAdd);
let teamChange = document.querySelector(".btn-scroll-up__img--change");
console.log(teamChange);
let teamSpec = document.querySelector(".btn-scroll-up__img--spec");
console.log(teamSpec);
let teamOption = document.querySelector(".btn-scroll-up__img--option");
console.log(teamOption);

let titleMod = document.querySelector(".team__quote--mod");
console.log(titleMod);
let titleImprov = document.querySelector(".team__quote--improv");
console.log(titleImprov);
let titleAdd = document.querySelector(".team__quote--add");
console.log(titleAdd);
let titleChange = document.querySelector(".team__quote--change");
console.log(titleChange);
let titleSpec = document.querySelector(".team__quote--spec");
console.log(titleSpec);
let titleOption = document.querySelector(".team__quote--option");
console.log(titleOption);

titleMod.style.display = "block";

teamMod.addEventListener("click", function () {
    titleMod.style.display = "block";
    titleImprov.style.display = "none";
    titleAdd.style.display = "none";
    titleChange.style.display = "none";
    titleSpec.style.display = "none";
    titleOption.style.display = "none";
});
teamImprov.addEventListener("click", function () {
    titleImprov.style.display = "block";
    titleMod.style.display = "none";
    titleAdd.style.display = "none";
    titleChange.style.display = "none";
    titleSpec.style.display = "none";
    titleOption.style.display = "none";
});
teamAdd.addEventListener("click", function () {
    titleAdd.style.display = "block";
    titleMod.style.display = "none";
    titleImprov.style.display = "none";
    titleChange.style.display = "none";
    titleSpec.style.display = "none";
    titleOption.style.display = "none";
});
teamChange.addEventListener("click", function () {
    titleChange.style.display = "block";
    titleMod.style.display = "none";
    titleImprov.style.display = "none";
    titleAdd.style.display = "none";
    titleSpec.style.display = "none";
    titleOption.style.display = "none";
});
teamSpec.addEventListener("click", function () {
    titleSpec.style.display = "block";
    titleMod.style.display = "none";
    titleImprov.style.display = "none";
    titleAdd.style.display = "none";
    titleChange.style.display = "none";
    titleOption.style.display = "none";
});
teamOption.addEventListener("click", function () {
    titleOption.style.display = "block";
    titleMod.style.display = "none";
    titleImprov.style.display = "none";
    titleAdd.style.display = "none";
    titleChange.style.display = "none";
    titleSpec.style.display = "none";
});