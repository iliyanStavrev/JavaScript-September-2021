function solve(...input){
   
    let typeCounts = {}

 for (const i of input) {
   console.log(`${typeof(i)}: ${i}`);
   if(! typeCounts[typeof(i)]){
    typeCounts[typeof(i)] = 1;
} else {
    typeCounts[typeof(i)]++;
}
 
 }
                   Object.keys(typeCounts)
                  .sort((a,b) => typeCounts[b] - typeCounts[a])
                  .forEach(el => console.log(`${el} = ${typeCounts[el]}`));

}
solve('cat', 42, function () { console.log('Hello world!'); });