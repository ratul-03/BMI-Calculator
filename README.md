# BMI Calculator

This project is a simple BMI (Body Mass Index) calculator created using HTML, CSS, and JavaScript. It allows users to input their height and weight to calculate and display their BMI score.

## Features

- Input fields for height (in cm) and weight (in kg)
- Calculates and displays the BMI score
- Provides a color-coded BMI weight guide

## Requirements

- Modern web browser (Chrome, Firefox, Safari, etc.)

## Installation

1. Clone this repository or download the `index.html`, `style.css`, and `script.js` files.
2. Place the files in the same directory.
3. Open `index.html` in your web browser.

## Usage

1. Enter your height in centimeters in the `Height` field.
2. Enter your weight in kilograms in the `Weight` field.
3. Click the `Calculate` button.
4. Your BMI score will be displayed, along with a color-coded indication of your weight category (Underweight, Normal, Overweight).

## Code Explanation

### HTML (`index.html`)

The HTML file sets up the structure of the BMI calculator:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <title>BMI Calculator</title>
</head>
<body>
    <div id="main">
        <h1>BMI Calculator</h1>
        <form action="" id="form">
            <label for="height">Height</label>
            <input type="number" name="" id="height" placeholder="In CM">
            <label for="weight">Weight</label>
            <input type="number" id="weight" placeholder="In KG">
            <button id="calculate">Calculate</button>
        </form>
        <div class="result">
            <h4>Your BMI Score</h4>
            <h2 id="score">50.66</h2>
        </div>
        <div class="info">
            <h4>BMI Weight Guide</h4>
            <p>Under Weight = Less than 18.6</p>
            <p>Normal Range = 18.6 and 24.9</p>
            <p>OverWeight = Greater than 24.9</p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
## CSS (style.css)
```css
*, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Montserrat", sans-serif;
    background: #ffe5ec;
    font-weight: 300;
}

::placeholder {
    color: #fff;
    opacity: 1;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin: 0 0 15px;
}

#main {
    background: linear-gradient(#ff0248, #ff6d83);
    width: 90%;
    padding: 30px 25px 25px;
    margin: 25px auto 0;
    border-radius: 20px;
    box-shadow: 0 0 10px #000;
}

#main h1 {
    color: #fff;
    font-size: 25px;
    margin-bottom: 20px;
    font-weight: 900;
}

#main h2 {
    background: #ddd;
    color: #262626;
    display: inline-block;
    font-size: 50px;
    margin-bottom: 0px;
    font-weight: 900;
    padding: 10px 15px;
    border-radius: 5px;
}

#main form {
    margin: 15px 0;
}

#main label {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    display: block;
}

#main input {
    background: linear-gradient(#ff4a69, #ff7060);
    border: 0px;
    border-radius: 5px;
    color: #fff;
    font-size: 15px;
    width: 100%;
    padding: 10px 15px;
    margin: 10px 0;
    outline: none;
}

#main button {
    background: #fff;
    color: #262626;
    border: 0;
    padding: 10px 25px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 5px;
    font-weight: 600;
    transition: 0.5s;
}

#main button:hover {
    background: #ddd;
}

.result, .info {
    background: #fff;
    padding: 20px 15px;
    border-radius: 5px;
}

.info {
    margin-top: 20px;
}

.result {
    display: none;
}
```

## JavaScript (script.js)
```javascript
// Variables
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let button = document.querySelector("#calculate");
let score = document.querySelector("#score");
let result = document.querySelector(".result");
let form = document.querySelector("#form");

// DOM Manipulation
button.addEventListener("click", () => {
    let newHeight = parseFloat(height.value);
    let newWeight = parseFloat(weight.value);
    newHeight = newHeight / 100;
    let squareHeight = newHeight * newHeight;
    let BMI = (newWeight / squareHeight);
    score.textContent = BMI.toFixed(2);
    result.style.display = 'block';

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
```
## Contributing
Feel free to fork this repository and contribute by submitting a pull request. Any improvements or new features are welcome!

## License
This project is licensed under the MIT License.
