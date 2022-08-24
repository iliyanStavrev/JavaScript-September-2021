function solve(arr){
    let positive = [];
    let negative = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            positive.push(arr[i]);
        }
        else{
            negative.push(arr[i]);
        }
    }
    negative = negative.sort();
    for (let i = 0; i < negative.length; i++) {
      console.log(negative[i]);
    }
    for (let i = 0; i < positive.length; i++) {
        console.log(positive[i]);
      }
}
solve([3, -2, 0, -1]);