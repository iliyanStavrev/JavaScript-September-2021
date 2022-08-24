function solve(array){
         let catalog = {};
    for (const iterator of array) {
        let[productName,price] = iterator.split(' : ');
        price = Number(price);
        let symbol = productName[0];
       if (catalog[symbol] === undefined) {
           catalog[symbol] = {};
       }
       catalog[symbol][productName] = price;
    
       }
       let result = [];
        let sorted = Object.keys(catalog).sort((a,b) => a.localeCompare(b));
    
         for (const key of sorted) {
           let products = Object.entries(catalog[key]).sort((a,b) => a[0].localeCompare(b[0]));
            result.push(key);
           
           let asString = products.map(x => `  ${x[0]}: ${x[1]}`).join(`\n`);
           result.push(asString);
         }
         for (const iterator of result) {
              console.log(iterator);
         }
         
    }
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);