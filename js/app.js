function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinStrin = pin + '';
    if (pinStrin.length == 4) {
        return pin;
    }
    else {
        // console.log('get 3 digit and calling again', pin);
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
        if (number == '<') {
            const num = calcInput.value;
            const newNum = num.slice(0, -1);
            calcInput.value = newNum;
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newCalc = previousNumber + number;
        calcInput.value = newCalc;
    }
});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    if (pin == typedNumbers) {
        console.log('yayay');
    }
    else {
        console.log('sjsjdnjkjds');
    }
}