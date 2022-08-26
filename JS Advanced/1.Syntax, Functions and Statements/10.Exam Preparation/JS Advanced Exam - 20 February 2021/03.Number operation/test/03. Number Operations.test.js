let numberOperations = require('../03. Number Operations');
let {assert} = require('chai');

describe('test numberOperations',() =>{
    it('test powNumber',() =>{
        assert.equal(numberOperations.powNumber(2),4);
        assert.equal(numberOperations.powNumber(5),25);
    })
    it('test numberChecker',() => {
        assert.throw(() => {numberOperations.numberChecker('asd')},Error);
        assert.throw(() => {numberOperations.numberChecker('Axc')},Error);
    })
    it('test numberChecker',() =>{
        assert.equal(numberOperations.numberChecker(100),'The number is greater or equal to 100!');
        assert.equal(numberOperations.numberChecker(1023),'The number is greater or equal to 100!'); 
        assert.equal(numberOperations.numberChecker('1023'),'The number is greater or equal to 100!'); 
    })
    it('test numberChecker',() =>{
        assert.equal(numberOperations.numberChecker(99),'The number is lower than 100!');
        assert.equal(numberOperations.numberChecker(-123),'The number is lower than 100!'); 
        assert.equal(numberOperations.numberChecker('-123'),'The number is lower than 100!'); 
        assert.equal(numberOperations.numberChecker('12'),'The number is lower than 100!'); 
    })

    it('test sumArrays',() =>{
        assert.deepEqual(numberOperations.sumArrays([1,2,3],[2,3,4]),[ 3,5,7 ]);
       assert.deepEqual(numberOperations.sumArrays([-1,-2,-3],[2,-3,4]),[ 1,-5,1 ]);
       assert.deepEqual(numberOperations.sumArrays(['1','2','3'],['2','3','4']),[ '12','23','34' ]);
       assert.deepEqual(numberOperations.sumArrays(['a','a','a'],['c','c','c']),[ 'ac','ac','ac' ]);
       assert.deepEqual(numberOperations.sumArrays([1.1,2.2,3],[2.2,3,4]),[ 1.1 + 2.2,5.2,7 ]);
        
    })
    it('test sumArrays',() =>{
        assert.deepEqual(numberOperations.sumArrays([1,2,3,4],[2,3,4]),[ 3,5,7,4 ]);
       assert.deepEqual(numberOperations.sumArrays([-1,-2,-3],[2,-3,4,-12]),[ 1,-5,1,-12 ]);
       assert.deepEqual(numberOperations.sumArrays(['1','2','3',2],['2','3','4',2]),[ '12','23','34',4 ]);
       assert.deepEqual(numberOperations.sumArrays(['a','a','a','a'],['c','c','c']),[ 'ac','ac','ac','a' ]);
       assert.deepEqual(numberOperations.sumArrays([1.1,2.2,3,'a','b'],[2.2,3,4,'a']),[ 1.1 + 2.2,5.2,7,'aa','b' ]);
       assert.deepEqual(numberOperations.sumArrays([1,2,3,4],[]),[ 1,2,3,4 ]);
       assert.deepEqual(numberOperations.sumArrays([],[1,2,3,4]),[ 1,2,3,4 ]);
    })
})