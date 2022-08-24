function solve(arr){
    arr.sort();
    let num = 1;
   for (let i = 0; i < arr.length; i++) {
      
    console.log(num++ + '.' + arr[i]);
       
   }
}
solve(["John", "Bob", "Christina", "Ema"]);