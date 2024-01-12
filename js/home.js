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

let advTab_A = document.getElementById("adventages-tab-A");
console.log(advTab_A);
let advTab_B = document.getElementById("adventages-tab-B");
console.log(advTab_B);
let advTab_C = document.getElementById("adventages-tab-C");
console.log(advTab_C);
let advTab_D = document.getElementById("adventages-tab-D");
console.log(advTab_D);
let advBody_A = document.getElementById("adventages-body-A");
console.log(advBody_A);
let advBody_B = document.getElementById("adventages-body-B");
console.log(advBody_B);
let advBody_C = document.getElementById("adventages-body-C");
console.log(advBody_C);
let advBody_D = document.getElementById("adventages-body-D");
console.log(advBody_D);

advTab_A.style.cursor = "initial";

function getClickTab(tab, body) {
    tab.onclick = function () {
        tab.style.background = "linear-gradient(90deg, #EF8080 0.84%, #F0145A 99.96%)";
        tab.style.backgroundClip = "text";
        tab.style.webkitBackgroundClip = "text";
        tab.style.webkitTextFillColor = "transparent";
        tab.style.cursor = "initial";
        body.style.display = "flex";
        if (tab == advTab_A && body == advBody_A) {
            advTab_B.style.background = "initial";
            advTab_B.style.webkitTextFillColor = "initial";
            advTab_C.style.background = "initial";
            advTab_C.style.webkitTextFillColor = "initial";
            advTab_D.style.background = "initial";
            advTab_D.style.webkitTextFillColor = "initial";
            advTab_B.style.color = "#B3B3BA";
            advTab_C.style.color = "#B3B3BA";
            advTab_D.style.color = "#B3B3BA";
            advBody_B.style.display = "none";
            advBody_C.style.display = "none";
            advBody_D.style.display = "none";
            advTab_B.style.cursor = "pointer";
            advTab_C.style.cursor = "pointer";
            advTab_D.style.cursor = "pointer";
        } else if (tab == advTab_B && body == advBody_B) {
            advTab_A.style.background = "initial";
            advTab_A.style.webkitTextFillColor = "initial";
            advTab_C.style.background = "initial";
            advTab_C.style.webkitTextFillColor = "initial";
            advTab_D.style.background = "initial";
            advTab_D.style.webkitTextFillColor = "initial";
            advTab_A.style.color = "#B3B3BA";
            advTab_C.style.color = "#B3B3BA";
            advTab_D.style.color = "#B3B3BA";
            advBody_A.style.display = "none";
            advBody_C.style.display = "none";
            advBody_D.style.display = "none";
            advTab_A.style.cursor = "pointer";
            advTab_C.style.cursor = "pointer";
            advTab_D.style.cursor = "pointer";
        } else if (tab == advTab_C && body == advBody_C) {
            advTab_A.style.background = "initial";
            advTab_A.style.webkitTextFillColor = "initial";
            advTab_B.style.background = "initial";
            advTab_B.style.webkitTextFillColor = "initial";
            advTab_D.style.background = "initial";
            advTab_D.style.webkitTextFillColor = "initial";
            advTab_A.style.color = "#B3B3BA";
            advTab_B.style.color = "#B3B3BA";
            advTab_D.style.color = "#B3B3BA";
            advBody_A.style.display = "none";
            advBody_B.style.display = "none";
            advBody_D.style.display = "none";
            advTab_A.style.cursor = "pointer";
            advTab_B.style.cursor = "pointer";
            advTab_D.style.cursor = "pointer";
        } else if (tab == advTab_D && body == advBody_D) {
            advTab_A.style.background = "initial";
            advTab_A.style.webkitTextFillColor = "initial";
            advTab_B.style.background = "initial";
            advTab_B.style.webkitTextFillColor = "initial";
            advTab_C.style.background = "initial";
            advTab_C.style.webkitTextFillColor = "initial";
            advTab_A.style.color = "#B3B3BA";
            advTab_B.style.color = "#B3B3BA";
            advTab_C.style.color = "#B3B3BA";
            advBody_A.style.display = "none";
            advBody_B.style.display = "none";
            advBody_C.style.display = "none";
            advTab_A.style.cursor = "pointer";
            advTab_C.style.cursor = "pointer";
            advTab_B.style.cursor = "pointer";
        }
    }
    tab.onmouseover = function () {
        (tab.style.cursor == "initial" && body.style.display == "flex") ? (
            tab.style.background = "linear-gradient(90deg, #EF8080 0.84%, #F0145A 99.96%)",
            tab.style.backgroundClip = "text",
            tab.style.webkitBackgroundClip = "text",
            tab.style.webkitTextFillColor = "transparent"
        ) : tab.style.color = "#F0145A"
    }
    tab.onmouseout = function () {
        (tab.style.cursor == "initial" && body.style.display == "flex") ? (
            tab.style.background = "linear-gradient(90deg, #EF8080 0.84%, #F0145A 99.96%)",
            tab.style.backgroundClip = "text",
            tab.style.webkitBackgroundClip = "text",
            tab.style.webkitTextFillColor = "transparent"
        ) : tab.style.color = "#B3B3BA"
    }
}

getClickTab(advTab_A, advBody_A);
getClickTab(advTab_B, advBody_B);
getClickTab(advTab_C, advBody_C);
getClickTab(advTab_D, advBody_D);

let uaButton = document.getElementById("button-ua");
console.log(uaButton);
let enButton = document.getElementById("button-en");
console.log(enButton);
let ruButton = document.getElementById("button-ru");
console.log(ruButton);

enButton.style.background = "#F0145A";
enButton.style.cursor = "default"

function getClickLang(lang) {
    lang.onclick = function () {
        lang.style.background = "#F0145A";
        lang.style.cursor = "default";
        if (lang == uaButton) {
            enButton.style.background = "none";
            ruButton.style.background = "none";
            enButton.style.cursor = "pointer";
            ruButton.style.cursor = "pointer";
        } else if (lang == enButton) {
            uaButton.style.background = "none";
            ruButton.style.background = "none";
            uaButton.style.cursor = "pointer";
            ruButton.style.cursor = "pointer";
        } else if (lang == ruButton) {
            uaButton.style.background = "none";
            enButton.style.background = "none";
            uaButton.style.cursor = "pointer";
            enButton.style.cursor = "pointer";
        }
    }
    lang.onmouseover = function () {
        (lang.style.cursor == "default" || lang.style.background == "#F0145A") ? lang.style.background = "#F0145A" : lang.style.background = "rgba(255, 255, 255, 0.20)";
    }
    lang.onmouseout = function () {
        (lang.style.cursor == "default" || lang.style.background == "#F0145A") ? lang.style.background == "#F0145A" : lang.style.background = "none";
    }
}

getClickLang(uaButton);
getClickLang(enButton);
getClickLang(ruButton);

let oneDot = document.getElementById("switch-dot-one");
console.log(oneDot);
let twoDot = document.getElementById("switch-dot-two");
console.log(twoDot);
let threeDot = document.getElementById("switch-dot-three");
console.log(threeDot);

let oneTeam = document.getElementById("team-card-one");
console.log(oneTeam);
let twoTeam = document.getElementById("team-card-two");
console.log(twoTeam);
let threeTeam = document.getElementById("team-card-three");
console.log(threeTeam);

oneDot.style.opacity = 1;
oneDot.style.cursor = "default";

function getClickDot(dot, team) {
    dot.onclick = function () {
        dot.style.opacity = 1;
        dot.style.cursor = "default";
        team.style.display = "flex"
        if (dot == oneDot && team == oneTeam) {
            twoTeam.style.display = "none";
            threeTeam.style.display = "none";
            twoDot.style.opacity = 0.2;
            threeDot.style.opacity = 0.2;
        } else if (dot == twoDot && team == twoTeam) {
            oneTeam.style.display = "none";
            threeTeam.style.display = "none";
            oneDot.style.opacity = 0.2;
            threeDot.style.opacity = 0.2;
        } else if (dot == threeDot && team == threeTeam) {
            oneTeam.style.display = "none";
            twoTeam.style.display = "none";
            oneDot.style.opacity = 0.2;
            twoDot.style.opacity = 0.2;
        }
    }
    dot.onmouseover = function () {
        (team.style.display == "flex" || dot.style.opacity == 1) ? dot.style.opacity = 1 : (
            dot.style.opacity = 0.6,
            dot.style.cursor = "pointer"
        );
    }
    dot.onmouseout = function () {
        (team.style.display == "flex" || dot.style.opacity == 1) ? dot.style.opacity = 1 : dot.style.opacity = 0.2;
    }
}

getClickDot(oneDot, oneTeam);
getClickDot(twoDot, twoTeam);
getClickDot(threeDot, threeTeam);

let headerElement = document.getElementById("header");
console.log(headerElement);
let footerElement = document.getElementById("footer");
console.log(footerElement);
let scrollDown = document.querySelector(".button-scroll");
console.log(scrollDown);
let scrollUp = document.querySelector(".policy__text");
console.log(scrollUp);

function getScrollAnchor() {
    headerElement.scrollIntoView({ block: "center", behavior: "smooth" });
    footerElement.scrollIntoView({ block: "center", behavior: "smooth" });
}

scrollDown.addEventListener("click", getScrollAnchor);
scrollUp.addEventListener("click", getScrollAnchor);