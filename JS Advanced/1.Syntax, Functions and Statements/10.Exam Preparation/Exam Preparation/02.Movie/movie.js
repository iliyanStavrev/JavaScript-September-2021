class Movie{
    constructor(movieName, ticketPrice){
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.totalProfit = 0;
        this.soldTicketsTotal = 0;
    }

    newScreening(date, hall, description){
     
        for (const scr of this.screenings) {
            if (scr.date == date && scr.hall == hall) {
                throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
            }
        }
        let screening = {
            date,hall,description
        };
        this.screenings.push(screening);
        return `New screening of ${this.movieName} is added.`;
    }

    endScreening(date, hall, soldTickets) {
        for (const scr of this.screenings) {
            if (scr.date === date && scr.hall === hall) {
                let index = this.screenings.indexOf(scr);
                this.soldTicketsTotal += soldTickets;
                let profit = this.ticketPrice * soldTickets;
                this.totalProfit += profit;
                this.screenings.splice(index,1);
    return `${this.movieName} movie screening on ${scr.date} in ${scr.hall} hall has ended. Screening profit: ${profit}`;
            }
        }
        throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
    }

    toString(){
let output = `${this.movieName} full information:\nTotal profit: ${this.totalProfit.toFixed(0)}$\nSold Tickets: ${this.soldTicketsTotal}\n`;
       if (this.screenings.length > 0) {
           output += `Remaining film screenings:\n`;
           this.screenings.sort((a,b) => a.hall.localeCompare(b.hall))
                        .forEach(s =>{
                            output += `${s.hall} - ${s.date} - ${s.description}\n`;
                        });
                        return output.trim();
       }
       output += `No more screenings!`;
     return output.trim();
    }


}
let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
