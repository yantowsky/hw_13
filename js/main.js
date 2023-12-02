// Footer
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

    } else if (click.target == advTab_A) {
        advTab_A.style.background = "linear-gradient(90deg, #EF8080 0.84%, #F0145A 99.96%)";
        advTab_A.style.backgroundClip = "text";
        advTab_A.style.webkitBackgroundClip = "text";
        advTab_A.style.webkitTextFillColor = "transparent"
        advTab_B.style.background = "initial";
        advTab_B.style.webkitTextFillColor = "initial";
        advTab_C.style.background = "initial";
        advTab_C.style.webkitTextFillColor = "initial";
        advTab_D.style.background = "initial";
        advTab_D.style.webkitTextFillColor = "initial";
        advTab_B.style.color = "#B3B3BA";
        advTab_C.style.color = "#B3B3BA";
        advTab_D.style.color = "#B3B3BA";
        advBody_A.style.display = "flex";
        advBody_B.style.display = "none";
        advBody_C.style.display = "none";
        advBody_D.style.display = "none";
        advTab_A.style.cursor = "initial";
        advTab_B.style.cursor = "pointer";
        advTab_C.style.cursor = "pointer";
        advTab_D.style.cursor = "pointer";

        window.onmouseover = function (hoverOn) {
            if (hoverOn.target == advTab_B) {
                advTab_B.style.color = "#F0145A";
            } else if (hoverOn.target == advTab_C) {
                advTab_C.style.color = "#F0145A";
            } else if (hoverOn.target == advTab_D) {
                advTab_D.style.color = "#F0145A";
            }
        }
        window.onmouseout = function (hoverOff) {
            if (hoverOff.target == advTab_B) {
                advTab_B.style.color = "#B3B3BA";
            } else if (hoverOff.target == advTab_C) {
                advTab_C.style.color = "#B3B3BA";
            } else if (hoverOff.target == advTab_D) {
                advTab_D.style.color = "#B3B3BA";
            }
        }

    } else if (click.target == advTab_B) {
        advTab_B.style.background = "linear-gradient(90deg, #EF8080 0.84%, #F0145A 99.96%)";
        advTab_B.style.backgroundClip = "text";
        advTab_B.style.webkitBackgroundClip = "text";
        advTab_B.style.webkitTextFillColor = "transparent"
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
        advBody_B.style.display = "flex";
        advBody_C.style.display = "none";
        advBody_D.style.display = "none";
        advTab_A.style.cursor = "pointer";
        advTab_B.style.cursor = "initial";
        advTab_C.style.cursor = "pointer";
        advTab_D.style.cursor = "pointer";

        window.onmouseover = function (hoverOn) {
            if (hoverOn.target == advTab_A) {
                advTab_A.style.color = "#F0145A";
            } else if (hoverOn.target == advTab_C) {
                advTab_C.style.color = "#F0145A";
            } else if (hoverOn.target == advTab_D) {
                advTab_D.style.color = "#F0145A";
            }
        }
        window.onmouseout = function (hoverOff) {
            if (hoverOff.target == advTab_A) {
                advTab_A.style.color = "#B3B3BA";
            } else if (hoverOff.target == advTab_C) {
                advTab_C.style.color = "#B3B3BA";
            } else if (hoverOff.target == advTab_D) {
                advTab_D.style.color = "#B3B3BA";
            }
        }

    } else if (click.target == advTab_C) {
        advTab_C.style.background = "linear-gradient(90deg, #EF8080 0.84%, #F0145A 99.96%)";
        advTab_C.style.backgroundClip = "text";
        advTab_C.style.webkitBackgroundClip = "text";
        advTab_C.style.webkitTextFillColor = "transparent"
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
        advBody_C.style.display = "flex";
        advBody_D.style.display = "none";
        advTab_A.style.cursor = "pointer";
        advTab_B.style.cursor = "pointer";
        advTab_C.style.cursor = "initial";
        advTab_D.style.cursor = "pointer";

        window.onmouseover = function (hoverOn) {
            if (hoverOn.target == advTab_A) {
                advTab_A.style.color = "#F0145A";
            } else if (hoverOn.target == advTab_B) {
                advTab_B.style.color = "#F0145A";
            } else if (hoverOn.target == advTab_D) {
                advTab_D.style.color = "#F0145A";
            }
        }
        window.onmouseout = function (hoverOff) {
            if (hoverOff.target == advTab_A) {
                advTab_A.style.color = "#B3B3BA";
            } else if (hoverOff.target == advTab_B) {
                advTab_B.style.color = "#B3B3BA";
            } else if (hoverOff.target == advTab_D) {
                advTab_D.style.color = "#B3B3BA";
            }
        }

    } else if (click.target == advTab_D) {
        advTab_D.style.background = "linear-gradient(90deg, #EF8080 0.84%, #F0145A 99.96%)";
        advTab_D.style.backgroundClip = "text";
        advTab_D.style.webkitBackgroundClip = "text";
        advTab_D.style.webkitTextFillColor = "transparent"
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
        advBody_D.style.display = "flex";
        advTab_A.style.cursor = "pointer";
        advTab_B.style.cursor = "pointer";
        advTab_C.style.cursor = "pointer";
        advTab_D.style.cursor = "initial";

        window.onmouseover = function (hoverOn) {
            if (hoverOn.target == advTab_A) {
                advTab_A.style.color = "#F0145A";
            } else if (hoverOn.target == advTab_B) {
                advTab_B.style.color = "#F0145A";
            } else if (hoverOn.target == advTab_C) {
                advTab_C.style.color = "#F0145A";
            }
        }
        window.onmouseout = function (hoverOff) {
            if (hoverOff.target == advTab_A) {
                advTab_A.style.color = "#B3B3BA";
            } else if (hoverOff.target == advTab_B) {
                advTab_B.style.color = "#B3B3BA";
            } else if (hoverOff.target == advTab_C) {
                advTab_C.style.color = "#B3B3BA";
            }
        }
    }
}