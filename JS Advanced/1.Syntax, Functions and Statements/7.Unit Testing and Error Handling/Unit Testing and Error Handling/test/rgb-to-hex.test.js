let rgbToHexColor = require('../rgb-to-hex');
let {assert} = require('chai');
//let {it} = require('mocha');

describe('test rgb',() =>{
    it('test red color', () =>{
        let actual = rgbToHexColor(-1,34,145);
        assert.equal(actual,undefined);
    })
  
    it('test red color', () =>{
        let actual = rgbToHexColor(255,0,0);
        assert.equal(actual,'#FF0000');
    })

    it('test green color', () =>{
        let actual = rgbToHexColor(11,340,145);
        assert.equal(actual,undefined);
    })
    it('test green color', () =>{
        let actual = rgbToHexColor(11,'34',145);
        assert.equal(actual,undefined);
    })

    it('test green color', () =>{
        let actual = rgbToHexColor(0,255,0);
        assert.equal(actual,'#00FF00');
    })
    it('test blue color', () =>{
        let actual = rgbToHexColor(12,34,1234);
        assert.equal(actual,undefined);
    })
    it('test blue color', () =>{
        let actual = rgbToHexColor(12,34,'123');
        assert.equal(actual,undefined);
    })
    it('test blue color', () =>{
        let actual = rgbToHexColor(0,0,255);
        assert.equal(actual,'#0000FF');
    })
   
   it('test all color', () =>{
    let actual = rgbToHexColor(12,12,12);
    assert.equal(actual,'#0C0C0C');
})
it('test input is of an invalit type ', () =>{
    let actual = rgbToHexColor('12','34','123');
    assert.equal(actual,undefined);
})
})