function solve(arr){
let number = 1;
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'add') {
        newArr.push(number++);
    }
    else if (arr[i] == 'remove') {
        newArr.pop(newArr[i])
        number++;
    }
}
if (newArr.length == 0) {
    console.log('Empty');
}
else{
  console.log(newArr.join('\n'));  
  }
}
solve(['add', 
'add', 
'remove', 
'add', 
'add']);