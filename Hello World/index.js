"use strict";
const lefties = ["🤜", "🤜🏻", "🤜🏼", "🤜🏽", "🤜🏾", "🤜🏿"];
const righties = ["🤛", "🤛🏻", "🤛🏼", "🤛🏽", "🤛🏾", "🤛🏿"];
const leftyEl = document.querySelector(".lefty");
const rightyEl = document.querySelector(".righty");
const logger = document.getElementById("logger");
const app = document.getElementById("app");
const decay = 10;
let iterator = 0;
const states = ["NORMAL", "SUPERSAIYAN", "SUPER"];
const tl = gsap
    .timeline()
    .set(".star", { opacity: 1, scale: 0 })
    .set(".container", { opacity: 1 })
    .fromTo(".lefty", { x: 0 }, { x: 284, rotate: 5, duration: 1, ease: "bounce" })
    .fromTo(".righty", { x: 0 }, { x: -284, rotate: -5, duration: 1, delay: -1, ease: "bounce" })
    .fromTo(".star", { scale: 0 }, {
    scale: 1,
    delay: -0.66,
    duration: 1,
    ease: "elastic",
    onStart: () => {
        iterator = 0;
    }
})
    .fromTo(".star", { opacity: 1 }, { opacity: 0, duration: 1, delay: -0.5 });
// .fromTo(".container", { opacity: 1 }, { opacity: 0, duration: 1 });
const ticker = () => {
    iterator = iterator - decay < 0 ? 0 : iterator - decay;
    if (iterator >= 200) {
        app.classList.add("super");
    }
    if (iterator >= 400) {
        app.classList.add("superduper");
    }
    if (iterator < 200) {
        app.classList.remove("super");
        app.classList.remove("superduper");
    }
    if (Number(logger.innerHTML) === iterator) {
    }
    else {
        logger.innerHTML = iterator;
    }
    requestAnimationFrame(ticker);
};
ticker();
const onClickHandler = (ev) => {
    iterator = iterator + 100;
    tl.play(0);
    leftyEl.querySelector(".handy").innerHTML =
        lefties[Math.floor(Math.random() * lefties.length)];
    rightyEl.querySelector(".handy").innerHTML =
        righties[Math.floor(Math.random() * righties.length)];
};
document.getElementById("puncher").addEventListener("click", onClickHandler);
