let library = require('../library');
let {assert} = require('chai');

describe('test', () =>{
    it ('calcPriceOfBook',() =>{
        assert.throw(() =>{library.calcPriceOfBook(12,12)},Error);
        assert.throw(() =>{library.calcPriceOfBook(12,'12')},Error);
        assert.throw(() =>{library.calcPriceOfBook("asd",'asd')},Error);
        assert.throw(() =>{library.calcPriceOfBook(0,12)},Error);
        assert.throw(() =>{library.calcPriceOfBook(12,'123')},Error);
    });
    it ('calcPriceOfBook year under 1980',() =>{
        assert.equal(library.calcPriceOfBook('asdf',1980),`Price of asdf is 10.00`);
        assert.equal(library.calcPriceOfBook('asdf',1970),`Price of asdf is 10.00`);
        assert.equal(library.calcPriceOfBook('asdf',1960),`Price of asdf is 10.00`);
        assert.equal(library.calcPriceOfBook('asdf',1979),`Price of asdf is 10.00`);
    });
    it ('calcPriceOfBook year above 1980',() =>{
        assert.equal(library.calcPriceOfBook('asdf',1981),`Price of asdf is 20.00`);
        assert.equal(library.calcPriceOfBook('asdf',1990),`Price of asdf is 20.00`);
        assert.equal(library.calcPriceOfBook('asdf',1999),`Price of asdf is 20.00`);
        assert.equal(library.calcPriceOfBook('asdf',2020),`Price of asdf is 20.00`);
    });
    it ('findBook',() =>{
        assert.throw(() =>{library.findBook([],'troyp')},Error);
    
    });
    it ('findBook',() =>{
assert.equal(library.findBook(["Troy", "Life Style", "Torronto"],'troyp'),"The book you are looking for is not here!");
assert.equal(library.findBook(["Troy", "Life Style", "Torronto"],'twer'),"The book you are looking for is not here!");
assert.equal(library.findBook(["Troy", "Life Style", "Torronto"],'asd'),"The book you are looking for is not here!");
    
    });
    it ('findBook',() =>{
 assert.equal(library.findBook(["Troy", "Life Style", "Torronto"],'Troy'),"We found the book you want.");
 assert.equal(library.findBook(["Troy", "Life Style", "Torronto"],'Torronto'),"We found the book you want.");
 assert.equal(library.findBook(["Troy", "Life Style", "Torronto"],'Life Style'),"We found the book you want.");
            
            });

 it ('findBook',() =>{
        assert.throw(() =>{library.arrangeTheBooks(-1)},Error);
        assert.throw(() =>{library.arrangeTheBooks('asd')},Error);
        assert.throw(() =>{library.arrangeTheBooks('12')},Error);
        assert.throw(() =>{library.arrangeTheBooks(1.2)},Error);
        assert.throw(() =>{library.arrangeTheBooks(-123)},Error);
        
    });  
    it ('arrangeTheBooks',() =>{
        assert.equal(library.arrangeTheBooks(40),`Great job, the books are arranged.`);
        assert.equal(library.arrangeTheBooks(39),`Great job, the books are arranged.`);
        assert.equal(library.arrangeTheBooks(38),`Great job, the books are arranged.`);
        assert.equal(library.arrangeTheBooks(32),`Great job, the books are arranged.`);
    });

    it ('arrangeTheBooks',() =>{
        assert.equal(library.arrangeTheBooks(41),`Insufficient space, more shelves need to be purchased.`);
        assert.equal(library.arrangeTheBooks(49),`Insufficient space, more shelves need to be purchased.`);
        assert.equal(library.arrangeTheBooks(58),`Insufficient space, more shelves need to be purchased.`);
        assert.equal(library.arrangeTheBooks(45),`Insufficient space, more shelves need to be purchased.`);
    });
})