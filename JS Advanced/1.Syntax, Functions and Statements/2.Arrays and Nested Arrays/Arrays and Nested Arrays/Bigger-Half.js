function solve(arr){
arr = arr.sort(function(a, b){return a - b});
let index = arr.length / 2;
    arr.splice(0,index);

return arr;
}
console.log(solve([3, 19, 14, 7, 2, 19, 6]));
