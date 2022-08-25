let lookupChar = require('../03.char-lookup');
let {assert} = require('chai');

describe('test lookupChar' , () =>{
    it('test typeof string', () =>{
        let string = 5;
        let index = 1;
        let actual = lookupChar(string,index);
        assert.equal(actual,undefined);
    })
    it('test typeof string', () =>{
        let string = 5;
        let index = '';
        let actual = lookupChar(string,index);
        assert.equal(actual,undefined);
    })
 
    it('test typeof number', () =>{
        let string = 'string';
        let index = 'hi';
        let actual = lookupChar(string,index);
        assert.equal(actual,undefined);
    })
    
    it('test incorrect index', () =>{
        let string = 'string';
        let index = -1;
        let actual = lookupChar(string,index);
        assert.equal(actual,'Incorrect index');
    })
    it('test incorrect index', () =>{
        let string = 'string';
        let index = 6;
        let actual = lookupChar(string,index);
        assert.equal(actual,'Incorrect index');
    })
  
    it('test incorrect index', () =>{
        let string = 'string';
        let index = 3.4;
        let actual = lookupChar(string,index);
        assert.equal(actual,undefined);
    })
    it('test incorrect index', () =>{
        let string = 'string';
        let index = '3';
        let actual = lookupChar(string,index);
        assert.equal(actual,undefined);
    })
    it('test should be correct', () =>{
        let string = 'string';
        let index = 0;
        let actual = lookupChar(string,index);
        assert.equal(actual,'s');
    })
    it('test should be correct', () =>{
        let string = 'hello';
        let index = 4;
        let actual = lookupChar(string,index);
        assert.equal(actual,'o');
        assert.equal(lookupChar(string,0),'h');
    })
})