function solve(arr,string){
  class Ticket{
      constructor(destination,price,status){
          this.destination = destination;
          this.price = price;
          this.status = status;
      }
 
  }
  let arrayTickets = [];
  for (const i of arr) {
     let [destination,price,status] = i.split('|');
     price = Number(price);
     let ticket = new Ticket(destination,price,status);
     arrayTickets.push(ticket);
  }
  switch (string) {
      case 'destination':
          arrayTickets.sort((a,b) => a.destination.localeCompare(b.destination));
          break;
      case 'price':
          arrayTickets.sort((a,b) => a.price - b.price);
          break;
      case 'status':
        arrayTickets.sort((a,b) => a.status.localeCompare(b.status));
          break;    
  }
  return arrayTickets;
}
console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'));