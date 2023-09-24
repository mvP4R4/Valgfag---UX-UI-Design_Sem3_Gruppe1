// Enable strict mode
"use strict";

// Strict mode hjælper med at opdage fejl i koden og er best practice

// vælger header elementet med classen "header-bot"
const headerBot = document.querySelector(".header-bot");

function scrollListener() {
  // Finder den lodrette scroll position af vinduet
  const scrollY = window.scrollY;
  // tjekker om scroll positionen er større end eller lig med 96 pixels (højden på headeren)
  if (scrollY >= 96) {
    // hvis der scrolles ned, skal navigationsbaren blive i toppen mens der scrolles
    headerBot.style.position = "fixed";
    headerBot.style.top = "0";
  } else {
    // hvis der er scrollet til toppen, skal navigationsbaren nulstilles og være som før scrolling
    headerBot.style.position = "static";
  }
}
// tilføjer en event listener til at kalde scroll funktionen når der forekommer scrolling
window.addEventListener("scroll", scrollListener);

// Scroll Progress Bar ---------------------------- START
// referer til progressbaren med id'elementet "progress-scroll"
const progressBar = document.getElementById("progress-scroll");

// Funktion, der benyttes til at opdatere progressbaren alt efter dens scroll position
function updateProgressBar() {
  // Finder den aktuelle lodrette scroll postition af vinduet
  const scrollY = window.scrollY;

  // Finder den maksimale scroll højde af siden
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  // Beregner scroll progress med procentdel
  const scrollProgress = (scrollY / scrollHeight) * 100;

  // opdaterer value attributten af progress baren til at vise scroll processen
  progressBar.value = scrollProgress;
}

// Tilføjer en scroll event listener til at kalde "updateProgressBar" funktionen når der scrolles
window.addEventListener("scroll", updateProgressBar);

// Scroll Progress Bar ---------------------------- SLUT

// Burgermenu ------------------------------------- START

const bgOverlay = document.querySelector(".bgOverlay");
const burgerLines = document.querySelector(".burger-lines");
const burgerLine = document.querySelector(".burger-line");
const lineOne = document.querySelector(".line-one");
const lineTwo = document.querySelector(".line-two");
const lineThree = document.querySelector(".line-three");
const burgerMenu = document.querySelector(".burgerMenu");

burgerLines.addEventListener("click", () => {
  bgOverlay.classList.toggle("xTransOverlay");
  burgerMenu.classList.toggle("burger-menu-height");
  lineOne.classList.toggle("line-one-activate");
  lineTwo.classList.toggle("line-two-activate");
  lineThree.classList.toggle("line-three-activate");
  lineOne.classList.toggle("burger-line-colour-on");
  lineTwo.classList.toggle("burger-line-colour-on");
  lineThree.classList.toggle("burger-line-colour-on");
  header.classList.toggle("header-z-active");
});

document.addEventListener("click", (event) => {
  const burgerMenu = document.querySelector(".burgerMenu");
  const isClickInside = burgerMenu.contains(event.target);
  if (!isClickInside) {
    // hvis der klikkes udenfor burgermenuen sker nedenstående, hvor burgermenuen svinder ind og linjerne skifter fra kryds til burger menu streger
    bgOverlay.classList.remove("xTransOverlay");
    lineOne.classList.remove("line-one-activate");
    lineTwo.classList.remove("line-two-activate");
    lineThree.classList.remove("line-three-activate");
    lineOne.classList.remove("burger-line-colour-on");
    lineTwo.classList.remove("burger-line-colour-on");
    lineThree.classList.remove("burger-line-colour-on");
    header.classList.remove("header-z-active");
    ophold.classList.remove("block-display");
    adoption.classList.remove("block-display");
    traening.classList.remove("block-display");
  }
});
// DD Burger menu query selectors
const adoption = document.querySelector(".adoption-dd");
const ophold = document.querySelector(".ophold-dd");
const traening = document.querySelector(".traening-dd");
// Toggle query selectors
const adoptionTog = document.querySelector(".adoption-dd-toggle");
const opholdTog = document.querySelector(".ophold-dd-toggle");
const traeningTog = document.querySelector(".traening-dd-toggle");

// Ved klik på drop down element, tilføjes class block-display og fjerner samme class, fra andre drop down elementer, således menuen kun har 1 åbent element af gangen
adoptionTog.addEventListener("click", () => {
  adoption.classList.toggle("block-display");
  ophold.classList.remove("block-display");
  traening.classList.remove("block-display");
});
opholdTog.addEventListener("click", () => {
  ophold.classList.toggle("block-display");
  traening.classList.remove("block-display");
  adoption.classList.remove("block-display");
});
traeningTog.addEventListener("click", () => {
  traening.classList.toggle("block-display");
  ophold.classList.remove("block-display");
  adoption.classList.remove("block-display");
});

// Burgermenu -------------------------------- SLUT
