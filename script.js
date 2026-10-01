const openBtn = document.getElementById("openBtn");

const firstScreen =
    document.getElementById("firstScreen");

const secondScreen =
    document.getElementById("secondScreen");

const personName =
    document.getElementById("personName");


// =========================
// NAME
// =========================

const name = "MOMINA";


// =========================
// OPEN BUTTON
// =========================

openBtn.addEventListener("click", function () {

    // First screen hide
    firstScreen.classList.add("hidden");

    // Second screen show
    secondScreen.classList.remove("hidden");

    // Name change
    personName.textContent = name;

});