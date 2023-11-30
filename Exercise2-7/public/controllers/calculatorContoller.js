const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
}
const multiplyNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let product = number1 * number2
    console.log(product)
    res.status(200)
    res.json({result:product})}
const subtractNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let difference = number1 - number2
    console.log(difference)
    res.status(200)
    res.json({result:difference})}
const divideNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let fraction = number1 / number2
    console.log(fraction)
    res.status(200)
    res.json({result:fraction})}
module.exports = {
    addNumbers, multiplyNumbers, subtractNumbers, divideNumbers}

// http://localhost:3000/controllers/calculatorContoller.js:37

// document.addEventListener('DOMContentLoaded', function () {
//     const output = document.getElementById('ans');
//     const buttonsContainer = document.getElementById('buttons');
//
//     buttonsContainer.addEventListener('click', function (event) {
//         console.log('Button clicked');
//         const clickedButton = event.target;
//         if (clickedButton.tagName === 'BUTTON') {
//             handleButtonClick(clickedButton.dataset.value);
//         }
//     });
//
//     function handleButtonClick(value) {
//         console.log('Handling click with value:', value);
//         // Update the calculator display with the clicked value
//         output.value += value;
//     }
// });