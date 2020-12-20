const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('multiply', function() {
    let calculator, spy;

    beforeEach(() => {
        calculator = new Calculator();
        spy = chai.spy.on(calculator, 'multiply');
    });

    afterEach(() => {
        calculator = null;
    });

    it('should return 50 when called with number 10,5', function() {
        expect(calculator.multiply(10,5)).to.be.equal(50);
    });


    it('should throw an error if provided with a not numeric first parametrs', function() {
        let callWithError = () => calculator.multiply('f', 5);
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw(`parameters is not number!`);
    });

    
    it('should throw an error if provided with a not numeric second parametrs', function() {
        let callWithError = () => calculator.add(10, "q");
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw(`parameters is not number!`);
    });

    it('should return 0 when called with number 0,5', function() {
        expect(calculator.multiply(0,5)).to.be.equal(0);
    });

    it('should return negative number when called with number one negative number', function() {
        expect(calculator.multiply(-1,5)).to.be.equal(-5);
    });

    it('should return positive number when called with number two negative numbers', function() {
        expect(calculator.multiply(-1,-5)).to.be.equal(5);
    });

});