function solve(arr){
let oddArr = [];
for (let i = 0; i < arr.length; i++) {
   if (i % 2 != 0) {
       oddArr.unshift(arr[i] * 2);
   }
}
return oddArr;
}
console.log(solve([3, 0, 10, 4, 7, 3]));