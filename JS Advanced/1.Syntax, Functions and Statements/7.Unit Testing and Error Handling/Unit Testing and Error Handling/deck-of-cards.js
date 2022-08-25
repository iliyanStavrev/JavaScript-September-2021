function printDeckOfCards(cards) {
    function createCard (face,suit){
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suitToString = {
      'S':'\u2660', 
      'H':'\u2665 ',
      'D':'\u2666 ',
      'C':'\u2663 '
    };
    if (validFaces.includes(face) === false) {
        throw new Error('Invalid face');
    }
    else if (Object.keys(suitToString).includes(suit) === false) {
        throw new Error(`Invalid suit`);
    }
    let card =  {
        face,
        suit,
        toString(){
            return `${face}${suitToString[suit]}`
        }
    }
      return card.toString();
  }
  let deck = [];
  for (const card of cards) {
      let face = card.substring(0,card.length - 1);
      let suit = card[card.length - 1];
      
try{
   deck.push(createCard(face,suit));
}
catch (error){
    console.log("Invalid card: " + card);
    return;
}
     
  }
   console.log(deck.join(' '));
}
printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
