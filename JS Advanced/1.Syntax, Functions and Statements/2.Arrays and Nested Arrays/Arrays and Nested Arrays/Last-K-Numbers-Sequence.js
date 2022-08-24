function solve (n,k){
    let arr = [];
    arr[0] = 1;
    for (let i = 1; i < n; i++){
       
   arr[i] = sumLastK(arr,k);
 }
 function sumLastK(arr,k){
     k = k < arr.length ? k : arr.length;
     let sum = 0;
     for (let i = 1; i <= k; i++) {
        sum += arr[arr.length - i];
     }
     return sum;
 }
 return arr;
}

console.log(solve(8,2));
