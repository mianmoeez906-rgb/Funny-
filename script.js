/* =================================
   CHANGE NAME HERE
================================= */

const name = "ABDULLAH ";


/* =================================
   GET ELEMENTS
================================= */

const openBtn =
    document.getElementById("openBtn");

const firstScreen =
    document.getElementById("firstScreen");

const secondScreen =
    document.getElementById("secondScreen");

const personName =
    document.getElementById("personName");

const music =
    document.getElementById("music");


/* =================================
   SET NAME
================================= */

personName.textContent = name;


/* =================================
   OPEN BUTTON
================================= */

openBtn.addEventListener(
    "click",
    async function () {

        /* Show second screen */

        firstScreen.classList.add("hidden");

        secondScreen.classList.remove("hidden");


        /* Set name */

        personName.textContent = name;


        /* =================================
           START MUSIC
        ================================== */

        try {

            music.currentTime = 0;

            music.volume = 1;

            await music.play();

            console.log(
                "GopGop music started successfully!"
            );

        }

        catch (error) {

            console.log(
                "Music could not start:",
                error
            );

        }

    }
);
