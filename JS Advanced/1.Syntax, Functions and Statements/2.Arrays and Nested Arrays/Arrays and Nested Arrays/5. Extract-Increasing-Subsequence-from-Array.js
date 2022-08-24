function solve (arr){
    let newArr = [];
    let current = arr[0];
    for (let i = 0; i < arr.length; i++) {
         if (arr[i] >= current ) {
             newArr.push(arr[i]);
             current = arr[i];
         } 
    }
    return newArr;
}
console.log(solve([20, 
    3, 
    2, 
    15,
    6, 
    1]));