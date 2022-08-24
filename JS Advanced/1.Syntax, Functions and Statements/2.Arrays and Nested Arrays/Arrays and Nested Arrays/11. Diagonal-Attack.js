function solve(matrix){
  
   let arr  = matrix.map(i => i.split(' ').map(Number))
     let main = 0;
     

    for (let i = 0; i < arr.length; i++) {
        
           main += arr[i][i];   
    }
      let secondary = 0;
      for (let j = 0; j < arr.length; j++) {
        
          secondary = secondary + arr[arr.length - 1 - j][j];
      }
      if (main == secondary) {
          for (let i = 0; i < arr.length; i++) {
             for (let j = 0; j < arr.length; j++) {
                if (i != j && i != arr.length - 1 -j) {
                    arr[i][j] = main;
                }   
             }   
          }
          printMatrix(arr);
      }
      else{
          printMatrix(arr);
      }

 function printMatrix(arr){
     for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].join(' ')); 
     }
 }
}
solve(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);