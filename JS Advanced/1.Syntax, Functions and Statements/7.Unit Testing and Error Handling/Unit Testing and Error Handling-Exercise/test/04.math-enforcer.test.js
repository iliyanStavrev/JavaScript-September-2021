let mathEnforcer = require('../04.math-enforcer');
let {assert} = require('chai');

describe('mathEnforcer',() =>{
    it('test  addFive',() =>{
        let num = 'not a number';
       assert.equal(mathEnforcer.addFive(num),undefined);
       let num1 = -1;
       assert.equal(mathEnforcer.addFive(num1),4);
         let num2 = 1.5;
       assert.closeTo(mathEnforcer.addFive(num2),6.5,0.01);
        let num3 = 5;
       assert.equal(mathEnforcer.addFive(num3),10);
   
    })

    it('test  subtractTen',() =>{
        let num = 'not a number';
       assert.equal(mathEnforcer.subtractTen(num),undefined);
       let num1 = -1;
       assert.equal(mathEnforcer.subtractTen(num1),-11);
         let num2 = 1.5;
       assert.closeTo(mathEnforcer.subtractTen(num2),-8.5,0.01);
        let num3 = 15;
       assert.equal(mathEnforcer.subtractTen(num3),5);
   
    })
    it('test sum', () =>{
        let a = '1';
        let b = 1;
        assert.equal(mathEnforcer.sum(a,b),undefined);
        let c = 1;
        let d = '1';
        assert.equal(mathEnforcer.sum(c,d),undefined);
        let e = 1.134;
        let f = 1.123;
        assert.closeTo(mathEnforcer.sum(e,f),2.26,0.01);
        let g = 123;
        let i = 456;
        assert.equal(mathEnforcer.sum(g,i),579);
    })

})