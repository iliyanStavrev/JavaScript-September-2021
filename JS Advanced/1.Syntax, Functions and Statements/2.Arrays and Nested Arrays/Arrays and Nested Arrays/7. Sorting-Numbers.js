function solve(arr){

   arr.sort(function(a,b){return a - b});
 
   let newArr = [];
   for (let i = 0; i < arr.length/2; i++) {
       newArr.push(arr[i]);
       if (newArr.length === arr.length) {
           break;
       }
       newArr.push(arr[arr.length - 1 - i]);
   }
   return newArr;
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18]));