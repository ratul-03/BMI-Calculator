// Varriables
let height =  document.querySelector("#height");
let weight = document.querySelector("#weight");
let button = document.querySelector("#calculate");

let score = document.querySelector("#score");
let result = document.querySelector(".result");
let form = document.querySelector("#form");


// Dom Manupulation
button.addEventListener("click", () => {
    let newHeight = parseFloat(height.value);
    let newWeight = parseFloat(weight.value);
    newHeight = newHeight / 100;
    let squreHeight = newHeight * newHeight;
    let BMI = (newWeight / squreHeight);
    score.textContent = BMI.toFixed(2);
    result.style.display = 'Block';

    // Conditions
    if (score.textContent < 18.6) {
        score.style.background = '#ffeaa7';
    } else if (score.textContent < 24.9) {
        score.style.background = '#55efc4';
    } else {
        score.style.background = '#d63031';
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
});
