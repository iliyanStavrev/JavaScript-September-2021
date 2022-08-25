let isOddOrEven = require('../02.even-or-odd');
let {assert} = require('chai');

describe('test',() =>{
    it('test string when is undefined',() =>{
        let string = undefined;
        let actual = isOddOrEven(string);
        assert.equal(actual,undefined);
    })
    it('test string when is number',() =>{
        let string = 5;
        let actual = isOddOrEven(string);
        assert.equal(actual,undefined);
    })
    it('test string when is even length',() =>{
        let string = 'hi';
        let actual = isOddOrEven(string);
        assert.equal(actual,'even');
    })
    it('test string when is odd length',() =>{
        let string = 'hello';
        let actual = isOddOrEven(string);
        assert.equal(actual,'odd');
    })
    it('testing multiple strings',() =>{
        let string = 'hello there';
        let actual = isOddOrEven(string);
        assert.equal(actual,'odd');
        let string1 = 'how are you?';
        assert.equal(isOddOrEven(string1),'even');
    })
})