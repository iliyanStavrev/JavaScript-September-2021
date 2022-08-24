function solve(arr,number){
    for (let i = 0; i < number % arr.length; i++) {
      
        arr.unshift(arr.pop())
    }
    console.log(arr.join(' '));
}
solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15);