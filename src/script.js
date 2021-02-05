"use strict";

// Selecting Elements
const circle = document.querySelector(".circle");

// The speed the circle move when key pressed
let moveSpeed = 20;

// Initial posion of the Circle
window.addEventListener("load", function () {
    circle.style.position = "absolute";
    circle.style.top = 0;
    circle.style.left = 0;
});

// Function when one of the following key gets pressed
window.addEventListener("keydown", function (e) {
    const positionX = circle.style.left;
    const positionY = circle.style.top;
    switch (e.key) {
        case  "ArrowRight" : {
            circle.style.left = parseInt(positionX) + moveSpeed + "px";
            break;
        }
        case  "ArrowLeft" : {
            circle.style.left = parseInt(positionX) - moveSpeed + "px";
            break;
        }
        case  "ArrowUp" : {
            circle.style.top = parseInt(positionY) - moveSpeed + "px";
            break;
        }
        case  "ArrowDown" : {
            circle.style.top = parseInt(positionY) + moveSpeed + "px";
            break;
        }
    }
})