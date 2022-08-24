function solve(arr){
    let min1 = Number.MAX_VALUE;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
      
        if (arr[i] < min1) {
            min1 = arr[i];
            index = i;
        }
    }
 arr.splice(index,1);
 let min2 = Number.MAX_VALUE;
 for (let i = 0; i < arr.length; i++) {

   if (arr[i] < min2) {
       min2 = arr[i];
   }  
 }

    console.log(min1 + ' ' + min2);
}
solve([-1,-1,2,3,5,-2]);