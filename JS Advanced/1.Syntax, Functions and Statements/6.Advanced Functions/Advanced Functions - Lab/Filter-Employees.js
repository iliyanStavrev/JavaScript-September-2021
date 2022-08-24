function solve(data,criteria){
   let input = JSON.parse(data);

   if (criteria === 'all') {
    
    let output = '';
    let num = 0;
       for (const obj of input) {
          output += num++ + '. ' + obj.first_name +' '+
           obj.last_name + ' - ' + obj.email + '\n';
       }
        console.log(output);
   }
   else
   {
        let arr = criteria.split('-');
   let key = arr[0];
   let value = arr[1];

 let result = input.filter(obj => obj[key] === value);
 let output = '';
 let num = 0;
    for (const obj of result) {
       output += num++ + '. ' + obj.first_name +' '+
        obj.last_name + ' - ' + obj.email + '\n';
    }
     console.log(output);
   }
} 
solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'all')
