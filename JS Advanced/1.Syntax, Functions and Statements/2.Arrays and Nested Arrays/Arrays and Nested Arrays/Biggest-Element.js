function solve(arr){
    let max = Number.MIN_VALUE;
    for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < arr[i].length; j++) {

           if (arr[i][j] > max) {
               max = arr[i][j];
           }
       }
        
    }
    return max;
}
console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));