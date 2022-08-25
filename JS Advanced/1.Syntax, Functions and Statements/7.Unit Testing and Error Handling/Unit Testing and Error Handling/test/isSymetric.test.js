
const {assert} = require('chai');
const { it } = require('mocha');
const isSymmetric = require('../isSymetric');

describe('Test symetric', () => {
   it('Should return true ' , () =>{
      let input = [1,2,3,2,1];
      let expected = true;

      assert.equal(isSymmetric(input),expected);
   });

   it('Should return false' , () =>{
    let input = [1,2,3,2,2];
    let expected = false;

    assert.equal(isSymmetric(input),expected);
 });
 it('Should fail when non arrgument is provided' , () =>{
    
    let expected = false;

    assert.equal(isSymmetric(),expected);
 });

 it('Should fail when non array is provided' , () =>{
   
    let expected = false;

    assert.equal(isSymmetric(null),expected);
    assert.equal(isSymmetric(''),expected);
    assert.equal(isSymmetric(undefined),expected);
    assert.equal(isSymmetric({}),expected);
    assert.equal(isSymmetric(3),expected);
    assert.equal(isSymmetric(true),expected);
    
 });
 
 it('Should fail when not correct type is provided' , () =>{
    
    let expected = false;

    assert.equal(isSymmetric(['1','2','3',2,1]),expected);
 });
})