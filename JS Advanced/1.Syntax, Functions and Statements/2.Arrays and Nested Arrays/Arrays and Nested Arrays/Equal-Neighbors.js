function solve(arr){
    let counter = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          if (arr[i][j] == arr[i][j + 1]) {
              counter ++;
          }
          if (arr[i][j] == arr[i + 1][j]) {
              counter++;
          }
       
           } 
        }
        for (let j = 0; j < arr.length; j++) {
            if (arr[arr.length - 1][j] == arr[arr.length - 1][j + 1]) {
                counter++;
        }
    } 
    return counter;
}  
console.log(solve([[2, 2, 5, 7, 4],
                   [4, 0, 5, 3, 4],
                   [2, 5, 5, 4, 2]]));