let createCalculator = require('../add-subtract');
let {assert} = require('chai');


    describe('test createCalculator', () =>{
        
        it('test everything',() =>{
            let object = createCalculator();
            object.add(10);
            object.add('5');
            object.subtract(5);
            object.subtract('5');
            let actual = object.get();
            assert.equal(actual,5);
        })
    })
