function solve(arr){
    let carInfo = new Map;
     
    for (const i of arr) {
        let [carBrand,model,produced] = i.split(' | ');
        produced = Number(produced);
        if (!carInfo.has(carBrand)) {
            carInfo.set(carBrand,new Map);
        }
        if (!carInfo.get(carBrand).has(model)) {
            carInfo.get(carBrand).set(model,0);
        }
        carInfo.set(carBrand,carInfo.get(carBrand)
            .set(model,carInfo.get(carBrand).get(model) +  produced));
    }
   for (const [key,value] of carInfo) {
       console.log(key);
      for (const [k,v] of value) {
          console.log(`###${k} -> ${v}`);
      }
   }
}
solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);