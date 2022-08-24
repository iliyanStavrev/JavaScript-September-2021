function solve(arr,first,second){
    let startIndex = 0;
    let endIdex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == first) {
          startIndex = i;  
        }
        if (arr[i] == second) {
            endIdex = i;
        }
    }
    arr = arr.splice(startIndex,(endIdex - startIndex) + 1);
    return arr;
}
console.log(solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'));