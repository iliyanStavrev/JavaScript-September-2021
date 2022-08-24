
function towns(input){
     const result = {};
    for (let i in input) {
      const parse = input[i].split(' <-> ');
      if(result[parse[0]]){
          result[parse[0]] += Number(parse[1]);
      }
      else{
          result[parse[0]] = Number(parse[1]);
      }
 }
for (const key in result) {
  console.log(key + ' : ' + result[key]);
 } 
}
   
towns(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);