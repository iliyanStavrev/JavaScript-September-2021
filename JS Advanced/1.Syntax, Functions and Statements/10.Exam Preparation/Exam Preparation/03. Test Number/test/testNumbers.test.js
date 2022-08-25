let testNumbers = require('../testNumbers');
let {assert} = require('chai');

describe('testNumbers', () =>{
    it('sumNumbers', () =>{
        assert.equal(testNumbers.sumNumbers('12',12),undefined);
        assert.equal(testNumbers.sumNumbers(12,'12'),undefined);
        assert.equal(testNumbers.sumNumbers('12','12'),undefined);
        assert.equal(testNumbers.sumNumbers('asd',1),undefined);
        assert.equal(testNumbers.sumNumbers('12','asdf'),undefined);
        assert.equal(testNumbers.sumNumbers('as','tis'),undefined);
    });
    it('sumNumbers', () =>{
        assert.equal(testNumbers.sumNumbers(12,12),24.00);
        assert.equal(testNumbers.sumNumbers(12,12.12),24.12);
        assert.equal(testNumbers.sumNumbers(-12,12),0.00);
        assert.equal(testNumbers.sumNumbers(1.5,1),2.50);
        assert.equal(testNumbers.sumNumbers(1.2,1.2),2.40);
        assert.equal(testNumbers.sumNumbers(-12,-1.5),-13.50);
    });
    it('numberChecker',() =>{
        assert.throw( () => {testNumbers.numberChecker('asd')},Error);
        assert.throw( () => {testNumbers.numberChecker('asdasdad')},Error);
        assert.throw( () => {testNumbers.numberChecker(Nan)},Error);
        assert.throw( () => {testNumbers.numberChecker('asdasdad')},Error);
    });
    it('numberChecker',() =>{
        assert.equal(testNumbers.numberChecker('123'),'The number is odd!');
        assert.equal(testNumbers.numberChecker('122'),'The number is even!');
        assert.equal(testNumbers.numberChecker('-123'),'The number is odd!');
        assert.equal(testNumbers.numberChecker('12.3'),'The number is odd!');
        assert.equal(testNumbers.numberChecker('12.2'),'The number is odd!');
        assert.equal(testNumbers.numberChecker('0'),'The number is even!');
        assert.equal(testNumbers.numberChecker(2),'The number is even!');
        assert.equal(testNumbers.numberChecker(3),'The number is odd!');
    });
    it('averageSumArray' , () =>{
        assert.equal(testNumbers.averageSumArray([1,2,3]),2);
        assert.equal(testNumbers.averageSumArray([1.1,2.1,3.1]),2.1);
        assert.equal(testNumbers.averageSumArray([-1,2,-4]),-1);
        assert.equal(testNumbers.averageSumArray([0,0,3]),1);
        assert.equal(testNumbers.averageSumArray([0,0,0]),0);
        assert.isNaN(testNumbers.averageSumArray([]));
    });
})