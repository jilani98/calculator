function generatePin() {
    const random = Math.round(Math.random() * 10000)
    return random;
}


function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;

    } else {
        console.log('pin not 3 digit found', pin);
        return getPin()

    }

}

document.getElementById('generate-pin').addEventListener('click', function() {

    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;

})


document.getElementById('calculator').addEventListener('click', function(event) {
    const number = event.target.innerText;


    const typedNumberField = document.getElementById('typed-numbers');

    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        } else if (number === '<') {

        }

    } else {

        const previousTypedNumber = typedNumberField.value;
        console.log(previousTypedNumber)
        const newTypeNumber = previousTypedNumber + number;
        console.log(newTypeNumber)

        typedNumberField.value = newTypeNumber;

    }


})