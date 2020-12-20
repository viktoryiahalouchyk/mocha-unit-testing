const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('add', function() {
    let calculator, spy;

    beforeEach(() => {
        calculator = new Calculator();
        spy = chai.spy.on(calculator, 'add');
    });

    afterEach(() => {
        calculator = null;
    });

    it('should return 6 when called with number 4,2', function() {
        expect(calculator.add(4,2)).to.be.equal(6);
    });

    it('should return -36 when called with number -48, 12', function() {
        expect(calculator.add(-48,12)).to.be.equal(-36);
    });

    it('should return -60 when called with number -48, -12', function() {
        expect(calculator.add(-48,-12)).to.be.equal(-60);
    });


    it('should throw an error if provided with a not numeric parametrs', function() {
        let callWithError = () => calculator.add('f', 7);
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw(`parameters is not number!`);
    });

});