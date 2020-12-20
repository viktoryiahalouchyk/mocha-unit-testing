class Calculator {
    constructor() {

    }

    add(firstNumber, secondNumber) {
        const typeOfFirstNumber = typeof firstNumber;
        const typeOfSecondNumber = typeof secondNumber;
        if (typeOfFirstNumber !== 'number' || typeOfSecondNumber !== 'number') {
            throw new Error('parameters is not number!')
        } else {
            return firstNumber + secondNumber
        }
    }  

    multiply (firstNumber, secondNumber) {
        const typeOfFirstNumber = typeof firstNumber;
        const typeOfSecondNumber = typeof secondNumber;
        if (typeOfFirstNumber !== 'number' || typeOfSecondNumber !== 'number') {
            throw new Error('parameters is not number!')
        } else {
            return firstNumber * secondNumber
        }
    }  


}

module.exports = Calculator;