function solve(arr,index1,index2){
    if (Array.isArray(arr) === false) {
        return NaN;
    }
    if (index1 < 0 ) {
        index1 = 0;
    }
    else if (index2 > arr.length - 1) {
        index2 = arr.length - 1;
    }
   let array =  arr.slice(index1,index2 + 1);
    let sum = 0;
    for (const i of array) {
       sum += Number(i); 
    }
    return sum;
}
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(solve('text', 0, 2));