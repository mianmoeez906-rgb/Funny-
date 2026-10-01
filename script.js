/* =========================
   CHANGE NAME HERE
========================= */

const name = "MOMINA";


/* =========================
   GET ELEMENTS
========================= */

const openBtn = document.getElementById("openBtn");

const firstScreen = document.getElementById("firstScreen");

const secondScreen = document.getElementById("secondScreen");

const personName = document.getElementById("personName");

const music = document.getElementById("music");


/* =========================
   SET NAME
========================= */

personName.textContent = name;


/* =========================
   OPEN BUTTON
========================= */

openBtn.addEventListener("click", function () {

    // Name set
    personName.textContent = name;

    // First screen hide
    firstScreen.classList.add("hidden");

    // Second screen show
    secondScreen.classList.remove("hidden");

    // Start music
    music.currentTime = 0;

    music.play()
        .then(() => {
            console.log("Music started successfully.");
        })
        .catch((error) => {
            console.log("Music could not start:", error);
        });

});
