const sum = require('../sum-of-numbers');
const {assert} = require('chai');
const {it} = require('mocha');

describe('test',() =>{
   it('should pass',() =>{
       let input = [1,2,3,4]
       assert.equal(sum(input),10);
   })
   
   it('should not pass',() =>{
    let input = [1,2,3,4]
    assert.notEqual(sum(input),9);
})
})