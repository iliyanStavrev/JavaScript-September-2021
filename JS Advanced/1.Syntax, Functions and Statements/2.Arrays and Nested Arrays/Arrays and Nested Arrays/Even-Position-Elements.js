function solve (arr){
    let string = '';
    for (let index = 0; index < arr.length; index++) {
       if (index % 2 == 0) {
           string += arr[index] + ' ';
       }
    }
    console.log(string);
}
solve(['5', '10']);