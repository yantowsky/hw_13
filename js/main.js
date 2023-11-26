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
let enButton = document.getElementById("button-en");
let ruButton = document.getElementById("button-ru");

enButton.style.background = "#F0145A";

window.onclick = function (click) {
    if (click.target == uaButton) {
        uaButton.style.background = "#F0145A";
        enButton.style.background = "none";
        ruButton.style.background = "none";

        window.onmouseover = function (hoverOn) {
            if (hoverOn.target == ruButton) {
                ruButton.style.background = "rgba(255, 255, 255, 0.20)";
            } else if (hoverOn.target == enButton) {
                enButton.style.background = "rgba(255, 255, 255, 0.20)";
            }
        }
        window.onmouseout = function (hoverOff) {
            if (hoverOff.target == ruButton) {
                ruButton.style.background = "none";
            } else if (hoverOff.target == enButton) {
                enButton.style.background = "none";
            }
        }

    } else if (click.target == ruButton) {
        uaButton.style.background = "none";
        enButton.style.background = "none";
        ruButton.style.background = "#F0145A";

        window.onmouseover = function (hoverOn) {
            if (hoverOn.target == uaButton) {
                uaButton.style.background = "rgba(255, 255, 255, 0.20)";
            } else if (hoverOn.target == enButton) {
                enButton.style.background = "rgba(255, 255, 255, 0.20)";
            }
        }
        window.onmouseout = function (hoverOff) {
            if (hoverOff.target == uaButton) {
                uaButton.style.background = "none";
            } else if (hoverOff.target == enButton) {
                enButton.style.background = "none";
            }
        }

    } else if (click.target == enButton) {
        enButton.style.background = "#F0145A";
        uaButton.style.background = "none";
        ruButton.style.background = "none";

        window.onmouseover = function (hoverOn) {
            if (hoverOn.target == uaButton) {
                uaButton.style.background = "rgba(255, 255, 255, 0.20)";
            } else if (hoverOn.target == ruButton) {
                ruButton.style.background = "rgba(255, 255, 255, 0.20)";
            }
        }
        window.onmouseout = function (hoverOff) {
            if (hoverOff.target == uaButton) {
                uaButton.style.background = "none";
            } else if (hoverOff.target == ruButton) {
                ruButton.style.background = "none";
            }
        }
    }
}