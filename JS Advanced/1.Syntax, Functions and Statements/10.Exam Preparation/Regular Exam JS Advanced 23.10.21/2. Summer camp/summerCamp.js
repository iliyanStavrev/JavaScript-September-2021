class SummerCamp{
    constructor(organizer,location){
         this.organizer = organizer;
         this.location = location;
         this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
         this.listOfParticipants = [];
    }

    registerParticipant (name, condition, money){
       if (!this.priceForTheCamp[condition]) {
           throw new Error('Unsuccessful registration at the camp.');
       }
       let findName = this.listOfParticipants.find(e => e.name === name);
       if (findName !== undefined) {
           return `The ${name} is already registered at the camp.`;
       }
       if (money < this.priceForTheCamp[condition]) {
           return `The money is not enough to pay the stay at the camp.`;
       }
       this.listOfParticipants.push({
           name,condition,
           power: 100,
           wins: 0
       });
       return `The ${name} was successfully registered.`;
    }

    unregisterParticipant (name){
        let findName = this.listOfParticipants.find(p => p.name === name);
        if (findName === undefined) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        let index = this.listOfParticipants.indexOf(findName);
        this.listOfParticipants.splice(index,1);
        return `The ${name} removed successfully.`;
    }

    timeToPlay (typeOfGame, ...participants){

       let playerName1 = '';
       let playerName2 = '';
      if (typeOfGame === 'WaterBalloonFights') {
           playerName1 = participants[0];
          playerName2 = participants[1];
          let player1 = this.listOfParticipants.find(p1 => p1.name == playerName1);
          let player2 = this.listOfParticipants.find(p2 => p2.name == playerName2);
          if (player1 == undefined || player2 == undefined) {
              throw new Error('Invalid entered name/s.');
          }
          if (player1.condition !== player2.condition) {
              throw new Error('Choose players with equal condition.');
          }
          if (player1.power > player2.power) {
              player1.wins += 1;
              return  `The ${player1.name} is winner in the game ${typeOfGame}.`;
          }
         else if (player1.power < player2.power) {
            player2.wins += 1;
            return  `The ${player2.name} is winner in the game ${typeOfGame}.`;
        }
        else{
            return  `There is no winner.`;
        }


      }
      else if (typeOfGame === 'Battleship')  {

         playerName1 = participants[0];
         let player1 = this.listOfParticipants.find(p1 => p1.name == playerName1);
      
         if (player1 == undefined) {
             throw new Error('Invalid entered name/s.');
         }
         player1.power += 20;
         return `The ${playerName1} successfully completed the game ${typeOfGame}.`;
      }

 
    }
    toString () {
        let output = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;
         this.listOfParticipants.sort((a,b) => b.wins - a.wins);
        for (const p of this.listOfParticipants) {
            output += `${p.name} - ${p.condition} - ${p.power} - ${p.wins}\n`;
        }
        return output.trim();
    }
    
}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));

console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));

console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
console.log(summerCamp.timeToPlay("Battleship", "Dimitur Kostov"));
console.log(summerCamp.timeToPlay("Battleship", "Dimitur Kostov"));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));


console.log(summerCamp.timeToPlay("Battleship", "Sara Dickinson"));
console.log(summerCamp.timeToPlay("Battleship", "Sara Dickinson"));
console.log(summerCamp.toString());