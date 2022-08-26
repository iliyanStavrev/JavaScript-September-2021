let testNumbers = require('../testNumbers');
let {assert} = require('chai');

describe('testNumbers' ,() =>{
    it('sumNumbers', () =>{
        assert.equal(testNumbers.sumNumbers('1',1),undefined);
        assert.equal(testNumbers.sumNumbers(1,'1'),undefined);
        assert.equal(testNumbers.sumNumbers('1','1'),undefined);
        
    });
    it('sumNumbers', () =>{
        assert.equal(testNumbers.sumNumbers(1,1),2);
        assert.equal(testNumbers.sumNumbers(1,1.1),2.10);
        assert.equal(testNumbers.sumNumbers(1.12,1.12),2.24);
        
    });
    it('numberChecker',() =>{
        assert.throw(() =>{testNumbers.numberChecker('asd')},Error);
        assert.throw(() =>{testNumbers.numberChecker('asddsfsdffs')},Error);
     
    });
    it('numberChecker',() =>{
        assert.equal(testNumbers.numberChecker('1'),'The number is odd!');
        assert.equal(testNumbers.numberChecker('2'),'The number is even!');
        assert.equal(testNumbers.numberChecker('11'),'The number is odd!');
        assert.equal(testNumbers.numberChecker('22'),'The number is even!');
    });

      it('numberChecker',() =>{
        assert.equal(testNumbers.numberChecker('-1'),'The number is odd!');
        assert.equal(testNumbers.numberChecker('-2'),'The number is even!');
        assert.equal(testNumbers.numberChecker(11),'The number is odd!');
        assert.equal(testNumbers.numberChecker(22),'The number is even!');
    });
    
        it('averageSumArray',() =>{
      assert.equal(testNumbers.averageSumArray([1,2,3]),2);
      assert.equal(testNumbers.averageSumArray([10,20,30]),20);
      
        });

        it('averageSumArray',()=>{
            assert.equal(testNumbers.averageSumArray([1.2,3.2,4.9]),3.1);
            assert.equal(testNumbers.averageSumArray([-1,2,2,-2]),0.25);
            assert.equal(testNumbers.averageSumArray([0.9,2.1,1.5,1.5]),1.5);
            assert.isNaN(testNumbers.averageSumArray([]));
            
        })
        it('averageSumArray',() =>{
            assert.equal(testNumbers.averageSumArray([0,0,0]),0);
            assert.equal(testNumbers.averageSumArray([1,2,0]),1);
            
              });
})