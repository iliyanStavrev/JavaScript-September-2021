let cinema = require('../cinema');
let{assert} = require('chai');

describe('test cinema',() =>{
    it('test showMovie() when arr.length is zero',() =>{
        let arr = [];
        assert.equal(cinema.showMovies(arr),'There are currently no movies to show.');
    })
 
    it('test showMovie() when arr is correct',() =>{
        let arr = ['King Kong', 'The Tomorrow War', 'Joker'];
        assert.equal(cinema.showMovies(arr),'King Kong, The Tomorrow War, Joker');
    })
    it('test showMovie() when arr is correct',() =>{
        let arr = ['King Kong'];
        assert.equal(cinema.showMovies(arr),'King Kong');
    })
    it('test ticketPrice() when is invalid',() =>{
        assert.throw(() =>{cinema.ticketPrice('super')}, Error);
        assert.throw(() =>{cinema.ticketPrice('Pre-Premiere')}, Error);
        assert.throw(() =>{cinema.ticketPrice(22)}, Error);
    })
    it('test ticketPrice() when is valid',() =>{
        assert.equal(cinema.ticketPrice('Premiere'),12.00);
        assert.equal(cinema.ticketPrice('Normal'),7.50);
        assert.equal(cinema.ticketPrice('Discount'),5.50);

    })
    it('test ticketPrice() when is invalid',() =>{
        assert.throw(() =>{cinema.ticketPrice('super')}, Error);
        assert.throw(() =>{cinema.ticketPrice('')}, Error);
        assert.throw(() =>{cinema.ticketPrice(23)}, Error);
        assert.throw(() =>{cinema.ticketPrice('23')}, Error);
    })

    it('test swapSeatsInHall() when number is invalid',() =>{
        assert.equal(cinema.swapSeatsInHall(1.5,2),"Unsuccessful change of seats in the hall.")

    })
    it('test swapSeatsInHall() when number is invalid',() =>{
        assert.equal(cinema.swapSeatsInHall(1,2.5),"Unsuccessful change of seats in the hall.")

    })
    it('test swapSeatsInHall() when number is invalid',() =>{
        assert.equal(cinema.swapSeatsInHall(-1,2),"Unsuccessful change of seats in the hall.")

    })
    it('test swapSeatsInHall() when number is invalid',() =>{
        assert.equal(cinema.swapSeatsInHall(1,-2),"Unsuccessful change of seats in the hall.")

    })
    it('test swapSeatsInHall() when number is invalid',() =>{
        assert.equal(cinema.swapSeatsInHall(-1,-2),"Unsuccessful change of seats in the hall.")

    })
    it('test swapSeatsInHall() when number is invalid',() =>{
        assert.equal(cinema.swapSeatsInHall(21,2),"Unsuccessful change of seats in the hall.")

    })
    it('test swapSeatsInHall() when number is invalid',() =>{
        assert.equal(cinema.swapSeatsInHall(19,21),"Unsuccessful change of seats in the hall.")

    })
    it('test swapSeatsInHall() when number is invalid',() =>{
        assert.equal(cinema.swapSeatsInHall(21,22),"Unsuccessful change of seats in the hall.")

    })
    it('test swapSeatsInHall() when number is invalid',() =>{
        assert.equal(cinema.swapSeatsInHall(1,1),"Unsuccessful change of seats in the hall.")

    })
    it('test swapSeatsInHall() when number is invalid',() =>{
        assert.equal(cinema.swapSeatsInHall(0,2),"Unsuccessful change of seats in the hall.")

    })
    it('test swapSeatsInHall() when number is invalid',() =>{
        assert.equal(cinema.swapSeatsInHall(2,0),"Unsuccessful change of seats in the hall.")

    })
    it('test swapSeatsInHall() when number is valid',() =>{
        assert.equal(cinema.swapSeatsInHall(1,2),"Successful change of seats in the hall.")

    })
    it('test swapSeatsInHall() when number is invalid',() =>{
        assert.equal(cinema.swapSeatsInHall('1',2),"Unsuccessful change of seats in the hall.")

    })
    it('test swapSeatsInHall() when number is invalid',() =>{
        assert.equal(cinema.swapSeatsInHall(1,'2'),"Unsuccessful change of seats in the hall.")

    })
    it('test swapSeatsInHall() when number is valid',() =>{
        assert.equal(cinema.swapSeatsInHall(1,2),"Successful change of seats in the hall.");
        assert.equal(cinema.swapSeatsInHall(11,12),"Successful change of seats in the hall.");
        assert.equal(cinema.swapSeatsInHall(15,16),"Successful change of seats in the hall.")
    })
    it('test swapSeatsInHall() when number is invalid',() =>{
        assert.equal(cinema.swapSeatsInHall(1),"Unsuccessful change of seats in the hall.")

    })
    it('test swapSeatsInHall() when number is invalid',() =>{
        assert.equal(cinema.swapSeatsInHall(),"Unsuccessful change of seats in the hall.")

    })
})