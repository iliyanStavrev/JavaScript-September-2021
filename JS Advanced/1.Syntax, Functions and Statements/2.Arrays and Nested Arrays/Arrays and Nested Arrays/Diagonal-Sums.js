function solve(arr){
    let main = 0;
    let secondary = 0;

    for (let i = 0; i < arr.length; i++) {
     main += arr[i][i];
     secondary += arr[i][arr.length - 1 - i];   
    }
    console.log(main + ' ' + secondary);
}
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);