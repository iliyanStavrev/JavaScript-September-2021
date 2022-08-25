function solve(arr){
    let juiceAmount = new Map;
    let bottles = new Map;

    for (const i of arr) {
        let [juiceName,amount] = i.split(' => ');
        amount = Number(amount);
        if (!juiceAmount.has(juiceName)) {
            juiceAmount.set(juiceName,0)
        }
        let totalAmount = juiceAmount.get(juiceName) + amount;

        if (totalAmount >= 1000) {
            if (!bottles.has(juiceName)) {
            bottles.set(juiceName,0);
        }
          let currentBotles = bottles.get(juiceName) + Math.trunc(totalAmount /1000);
        bottles.set(juiceName,currentBotles);
        
        } 
        juiceAmount.set(juiceName,totalAmount % 1000);
    }
    for (let [key,value]  of bottles) {
        console.log(`${key} => ${value}`);
    }
}
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);