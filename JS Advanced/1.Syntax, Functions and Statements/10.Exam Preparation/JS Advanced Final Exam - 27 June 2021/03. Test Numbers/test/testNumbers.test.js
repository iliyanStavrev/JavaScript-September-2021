let testNumbers = require('../testNumbers');
let {assert} = require('chai');

describe('testNumbers',() =>{
    it('sumNumbers',()=>{
        assert.equal(testNumbers.sumNumbers('1',2),undefined);
        assert.equal(testNumbers.sumNumbers(1,'2'),undefined);
        assert.equal(testNumbers.sumNumbers('asd',2));
        assert.equal(testNumbers.sumNumbers(3,'asd'));
    })
    it('sumNumbers',()=>{
        assert.equal(testNumbers.sumNumbers(1.112,2),3.11);
        assert.equal(testNumbers.sumNumbers(1,-2),-1);
        assert.equal(testNumbers.sumNumbers(1.112,2.2222),3.33);
    })
    it('sumNumbers',()=>{
        assert.equal(testNumbers.sumNumbers(1.112,'2'),undefined);
        assert.equal(testNumbers.sumNumbers(1,'-2'),undefined);
        
    })
    it('numberChecker',()=>{
        assert.equal(testNumbers.numberChecker(1.112),'The number is odd!');
        assert.equal(testNumbers.numberChecker('2'),'The number is even!');
        assert.equal(testNumbers.numberChecker(-13),'The number is odd!');
        assert.equal(testNumbers.numberChecker('-13'),'The number is odd!');
        assert.equal(testNumbers.numberChecker(12),'The number is even!');
    })
    it('numberChecker',()=>{
        assert.throw(() => {testNumbers.numberChecker('asd')},Error);
       
    })

    it('averageSumArray',()=>{
        assert.equal(testNumbers.averageSumArray([1,2,3,4,5]),3);
        assert.equal(testNumbers.averageSumArray([-1,2,2,-2]),0.25);
        assert.equal(testNumbers.averageSumArray([-1,1,0,0]),0);
        assert.isNaN(testNumbers.averageSumArray([]));
        
    })
    it('averageSumArray',()=>{
        assert.equal(testNumbers.averageSumArray([1.2,3.2,4.9]),3.1);
        assert.equal(testNumbers.averageSumArray([-1,2,2,-2]),0.25);
        assert.equal(testNumbers.averageSumArray([0.9,2.1,1.5,1.5]),1.5);
        assert.isNaN(testNumbers.averageSumArray([]));
        
    })

    
})
