/* =========================
   NAME
========================= */

const name = "MOMINA";


/* =========================
   ELEMENTS
========================= */

const openBtn = document.getElementById("openBtn");
const firstScreen = document.getElementById("firstScreen");
const secondScreen = document.getElementById("secondScreen");
const personName = document.getElementById("personName");
const music = document.getElementById("music");


/* =========================
   NAME
========================= */

personName.textContent = name;


/* =========================
   OPEN
========================= */

openBtn.addEventListener("click", async function () {

    // Screen change
    firstScreen.classList.add("hidden");
    secondScreen.classList.remove("hidden");

    // Name
    personName.textContent = name;

    // Music
    try {

        music.currentTime = 0;

        music.volume = 1;

        await music.play();

        console.log("Music started!");

    } catch (error) {

        console.log("Music error:", error);

    }

});
